import GSAP from "gsap";
import each from "lodash/each";
import map from "lodash/map";
import Prefix from "prefix";
import NormalizeWheel from "normalize-wheel";

import Label from "../animations/Label";
import Title from "../animations/Title";
import Paragraph from "../animations/Paragraph";
import Highlight from "../animations/Highlight";

export default class Page {
  constructor({ element, elements, id }) {
    this.selector = element;
    this.selectorChildren = {
      ...elements,
      animationsTitles: "[data-animation='title']",
      animationsHighlights: "[data-animation='highlight']",
      animationsLabels: "[data-animation='label']",
      animationsParagraphs: "[data-animation='paragraph']",
    };
    this.id = id;
    this.transformPrefix = Prefix("transform");
    this.onMouseWheelEvent = this.onMouseWheel.bind(this);
  }

  create() {
    this.element = document.querySelector(this.selector);
    this.elements = {};

    this.scroll = {
      current: 0,
      target: 0,
      last: 0,
      limit: 1000,
    };

    each(this.selectorChildren, (entry, key) => {
      if (
        entry instanceof window.HTMLElement ||
        entry instanceof window.NodeList ||
        Array.isArray(entry)
      ) {
        this.elements[key] = entry;
      } else {
        this.elements[key] = document.querySelectorAll(entry);
        if (this.elements[key].length === 0) {
          this.elements[key] = null;
        } else if (this.elements[key].length === 1) {
          this.elements[key] = document.querySelector(entry);
        }
      }
    });

    this.createAnimations();
  }

  createAnimations() {
    this.animations = [];

    this.animationsHighlights = map(
      this.elements.animationsHighlights,
      (element) => {
        return new Highlight({
          element,
        });
      }
    );
    this.animations.push(...this.animationsHighlights);

    this.animationsParagraphs = map(
      this.elements.animationsParagraphs,
      (element) => {
        return new Paragraph({
          element,
        });
      }
    );
    this.animations.push(...this.animationsParagraphs);

    this.animationsLabels = map(this.elements.animationsLabels, (element) => {
      return new Label({
        element,
      });
    });
    this.animations.push(...this.animationsLabels);

    this.animationsTitles = map(this.elements.animationsTitles, (element) => {
      return new Title({
        element,
      });
    });
    this.animations.push(...this.animationsTitles);
  }

  show() {
    return new Promise((resolve) => {
      this.animationIn = GSAP.timeline();

      this.animationIn.fromTo(
        this.element,
        {
          autoAlpha: 0,
        },
        { autoAlpha: 1, onComplete: resolve }
      );

      this.animationIn.call((_) => {
        this.addEventListeners();

        resolve();
      });
    });
  }

  hide() {
    return new Promise((resolve) => {
      this.removeEventListeners();
      this.animationOut = GSAP.timeline();

      this.animationOut.to(this.element, {
        autoAlpha: 0,
        onComplete: resolve,
      });
    });
  }

  onMouseWheel(event) {
    const { pixelY } = NormalizeWheel(event);
    this.scroll.target += pixelY;
  }

  onResize() {
    if (this.elements.wrapper)
      this.scroll.limit =
        this.elements.wrapper.clientHeight - window.innerHeight;

    each(this.animations, (animation) => animation.onResize());
  }

  update() {
    this.scroll.target = GSAP.utils.clamp(
      0,
      this.scroll.limit,
      this.scroll.target
    );

    this.scroll.current = GSAP.utils.interpolate(
      this.scroll.current,
      this.scroll.target,
      0.1
    );

    if (this.scroll.current < 0.01) this.scroll.current = 0;

    if (this.elements.wrapper)
      this.elements.wrapper.style[
        this.transformPrefix
      ] = `translateY(-${this.scroll.current}px)`;
  }

  addEventListeners() {
    window.addEventListener("mousewheel", this.onMouseWheelEvent);
  }
  removeEventListeners() {
    window.removeEventListener("mousewheel", this.onMouseWheelEvent);
  }
}
