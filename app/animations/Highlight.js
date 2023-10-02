import Animation from "../classes/Animation";
import GSAP from "gsap";

export default class Highlight extends Animation {
  constructor({ element, elements }) {
    super({ element, elements });
  }
  animateIn() {
    this.timelineIn = GSAP.timeline({
      delay: 0.5,
    });

    this.timelineIn.set(this.element, {
      autoAlpha: 1,
    });

    this.timelineIn.fromTo(
      this.element,
      {
        scale: 1.2,
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 1.5,
        ease: "expo.out",
        scale: 1,
      }
    );
  }

  animateOut() {
    GSAP.set(this.element, {
      autoAlpha: 0,
    });
  }
}
