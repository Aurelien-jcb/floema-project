import Button from "classes/Button";
import Page from "classes/Page";

export default class Details extends Page {
  constructor() {
    super({
      id: "details",
      element: ".details",
      elements: {
        button: ".detail__button",
      },
    });
  }

  create() {
    super.create();

    this.link = new Button({
      element: this.elements.button,
    });
  }

  destroy() {
    super.destroy();

    this.link.removeEVentListeners();
  }
}
