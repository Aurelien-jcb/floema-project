import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import UAParser from "ua-parser-js";
import logger from "morgan";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride());
app.use(errorHandler());

import * as Prismic from "@prismicio/client";
import * as PrismicH from "@prismicio/helpers";
import errorHandler from "errorhandler";

const initApi = (req) => {
  return Prismic.createClient(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    req,
    fetch,
  });
};

const handleLinkResolver = (doc) => {
  if (doc.type === "product") {
    return `/detail/${doc.slug}`;
  }

  if (doc.type === "collections") {
    return "/collections";
  }

  if (doc.type === "about") {
    return `/about`;
  }
  return "/";
};

app.use((req, res, next) => {
  const ua = UAParser(req.headers["user-agent"]);

  res.locals.isDesktop = ua.device.type === undefined;
  res.locals.isPhone = ua.device.type === "mobile";
  res.locals.isTablet = ua.device.type === "tablet";

  res.locals.Link = handleLinkResolver;

  res.locals.Numbers = (index) => {
    return index == 0
      ? "One"
      : index == 0
      ? "One"
      : index == 1
      ? "Two"
      : index == 2
      ? "Three"
      : index == 3
      ? "Four"
      : "";
  };

  res.locals.PrismicH = PrismicH;

  next();
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.locals.basedir = app.get("views");

const handleRequest = async (api) => {
  try {
    const [
      meta,
      preloader,
      navigation,
      home,
      about,
      collections,
      // document,
    ] = await Promise.all([
      api.getSingle("meta"),
      api.getSingle("preloader"),
      api.getSingle("navigation"),
      api.getSingle("home"),
      api.getSingle("about"),
      api.getAllByType("collection", {
        fetchLinks: "product.image",
      }),
    ]);

    const assets = [];
    home.data.gallery.forEach((item) => {
      assets.push(item.image.url);
    });

    about.data.gallery.forEach((item) => {
      assets.push(item.image.url);
    });

    about.data.body.forEach((section) => {
      if (section.slice_type === "gallery") {
        section.items.forEach((item) => {
          assets.push(item.image.url);
        });
      }
    });
    collections.forEach((collection) => {
      collection.data.products.forEach((item) => {
        assets.push(item.product.data.image.url);
      });
    });

    return {
      assets,
      preloader,
      meta,
      navigation,
      home,
      about,
      collections,
    };
  } catch (error) {
    console.error(
      "Une erreur est survenue lors de la requête Prismic : ",
      error
    );
    throw error;
  }
};

app.get("/", async (req, res) => {
  const api = await initApi(req);
  const defaults = await handleRequest(api);
  res.render("pages/home", { ...defaults });
});

app.get("/about", async (req, res) => {
  const api = await initApi(req);
  const defaults = await handleRequest(api);
  res.render("pages/about", { ...defaults });
});

app.get("/collections", async (req, res) => {
  const api = await initApi(req);
  const defaults = await handleRequest(api);
  res.render("pages/collections", { ...defaults });
});

app.get("/detail/:uid", async (req, res) => {
  const api = await initApi(req);
  const defaults = await handleRequest(api);
  const product = await api.getByUID("product", req.params.uid, {
    fetchLinks: "collection.title",
  });

  if (product) {
    res.render("pages/detail", {
      product,
      ...defaults,
    });
  } else {
    res.status(404).send("Page not found");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
