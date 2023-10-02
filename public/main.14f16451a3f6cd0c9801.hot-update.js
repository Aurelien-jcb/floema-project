"use strict";
self["webpackHotUpdatefloema_project"]("main",{

/***/ "./app/animations/Paragraph.js":
/*!*************************************!*\
  !*** ./app/animations/Paragraph.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Paragraph)
/* harmony export */ });
/* harmony import */ var _classes_Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Animation */ "./app/classes/Animation.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _utils_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/text */ "./app/utils/text.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");




class Paragraph extends _classes_Animation__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    element,
    elements
  }) {
    super({
      element,
      elements
    });
    this.elementLinesSpans = (0,_utils_text__WEBPACK_IMPORTED_MODULE_1__.split)({
      append: true,
      element: this.element
    });
  }
  animateIn() {
    this.timelineIn = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
      delay: 0.5
    });
    this.timelineIn.set(this.element, {
      autoAlpha: 1
    });
    lodash_each__WEBPACK_IMPORTED_MODULE_2__(this.elementsLines, (line, index) => {
      this.timelineIn.fromTo(line, {
        autoAlpha: 0,
        y: "100%"
      }, {
        autoAlpha: 1,
        delay: index * 0.1,
        duration: 1.5,
        ease: "expo.out",
        y: "0%"
      });
    });
  }
  animateOut() {
    gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(this.element, {
      autoAlpha: 0
    });
  }
  onResize() {
    this.elementsLines = (0,_utils_text__WEBPACK_IMPORTED_MODULE_1__.calculate)(this.elementLinesSpans);
  }
}

/***/ }),

/***/ "./app/classes/Page.js":
/*!*****************************!*\
  !*** ./app/classes/Page.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prefix */ "./node_modules/prefix/index.js");
/* harmony import */ var normalize_wheel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! normalize-wheel */ "./node_modules/normalize-wheel/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../animations/Label'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _animations_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../animations/Title */ "./app/animations/Title.js");
/* harmony import */ var _animations_Paragraph__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../animations/Paragraph */ "./app/animations/Paragraph.js");








class Page {
  constructor({
    element,
    elements,
    id
  }) {
    this.selector = element;
    this.selectorChildren = {
      ...elements,
      animationsTitles: "[data-animation='title']",
      animationLabels: "[data-animation='label']",
      animationsParagraphs: "[data-animation='paragraph']"
    };
    this.id = id;
    this.transformPrefix = prefix__WEBPACK_IMPORTED_MODULE_2__("transform");
    this.onMouseWheelEvent = this.onMouseWheel.bind(this);
  }
  create() {
    this.element = document.querySelector(this.selector);
    this.elements = {};
    this.scroll = {
      current: 0,
      target: 0,
      last: 0,
      limit: 1000
    };
    lodash_each__WEBPACK_IMPORTED_MODULE_0__(this.selectorChildren, (entry, key) => {
      if (entry instanceof window.HTMLElement || entry instanceof window.NodeList || Array.isArray(entry)) {
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
    this.animationsParagraphs = lodash_map__WEBPACK_IMPORTED_MODULE_1__(this.elements.animationsParagraphs, element => {
      return new _animations_Title__WEBPACK_IMPORTED_MODULE_5__["default"]({
        element
      });
    });
    this.animations.push(...this.animationsParagraphs);
    this.animationLabels = lodash_map__WEBPACK_IMPORTED_MODULE_1__(this.elements.animationLabels, element => {
      return new _animations_Title__WEBPACK_IMPORTED_MODULE_5__["default"]({
        element
      });
    });
    this.animations.push(...this.animationLabels);
    this.animationsTitles = lodash_map__WEBPACK_IMPORTED_MODULE_1__(this.elements.animationsTitles, element => {
      return new _animations_Title__WEBPACK_IMPORTED_MODULE_5__["default"]({
        element
      });
    });
    this.animations.push(...this.animationsTitles);
  }
  show() {
    return new Promise(resolve => {
      this.animationIn = gsap__WEBPACK_IMPORTED_MODULE_7__["default"].timeline();
      this.animationIn.fromTo(this.element, {
        autoAlpha: 0
      }, {
        autoAlpha: 1,
        onComplete: resolve
      });
      this.animationIn.call(_ => {
        this.addEventListeners();
        resolve();
      });
    });
  }
  hide() {
    return new Promise(resolve => {
      this.removeEventListeners();
      this.animationOut = gsap__WEBPACK_IMPORTED_MODULE_7__["default"].timeline();
      this.animationOut.to(this.element, {
        autoAlpha: 0,
        onComplete: resolve
      });
    });
  }
  onMouseWheel(event) {
    const {
      pixelY
    } = normalize_wheel__WEBPACK_IMPORTED_MODULE_3__(event);
    this.scroll.target += pixelY;
  }
  onResize() {
    if (this.elements.wrapper) this.scroll.limit = this.elements.wrapper.clientHeight - window.innerHeight;
    lodash_each__WEBPACK_IMPORTED_MODULE_0__(this.animationsTitles, animation => animation.onResize());
  }
  update() {
    this.scroll.target = gsap__WEBPACK_IMPORTED_MODULE_7__["default"].utils.clamp(0, this.scroll.limit, this.scroll.target);
    this.scroll.current = gsap__WEBPACK_IMPORTED_MODULE_7__["default"].utils.interpolate(this.scroll.current, this.scroll.target, 0.1);
    if (this.scroll.current < 0.01) this.scroll.current = 0;
    if (this.elements.wrapper) this.elements.wrapper.style[this.transformPrefix] = `translateY(-${this.scroll.current}px)`;
  }
  addEventListeners() {
    window.addEventListener("mousewheel", this.onMouseWheelEvent);
  }
  removeEventListeners() {
    window.removeEventListener("mousewheel", this.onMouseWheelEvent);
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("dc1064fadea277f0a3d6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxDQUFDRSxXQUFXLENBQzFDLElBQUksQ0FBQ3RDLE1BQU0sQ0FBQ0MsT0FBTyxFQUNuQixJQUFJLENBQUNELE1BQU0sQ0FBQ0UsTUFBTSxFQUNsQixHQUNGLENBQUM7SUFFRCxJQUFJLElBQUksQ0FBQ0YsTUFBTSxDQUFDQyxPQUFPLEdBQUcsSUFBSSxFQUFFLElBQUksQ0FBQ0QsTUFBTSxDQUFDQyxPQUFPLEdBQUcsQ0FBQztJQUV2RCxJQUFJLElBQUksQ0FBQ3RDLFFBQVEsQ0FBQ29FLE9BQU8sRUFDdkIsSUFBSSxDQUFDcEUsUUFBUSxDQUFDb0UsT0FBTyxDQUFDUSxLQUFLLENBQ3pCLElBQUksQ0FBQzlDLGVBQWUsQ0FDckIsR0FBSSxlQUFjLElBQUksQ0FBQ08sTUFBTSxDQUFDQyxPQUFRLEtBQUk7RUFDL0M7RUFFQXVCLGlCQUFpQkEsQ0FBQSxFQUFHO0lBQ2xCakIsTUFBTSxDQUFDaUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQzlDLGlCQUFpQixDQUFDO0VBQy9EO0VBQ0FnQyxvQkFBb0JBLENBQUEsRUFBRztJQUNyQm5CLE1BQU0sQ0FBQ2tDLG1CQUFtQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMvQyxpQkFBaUIsQ0FBQztFQUNsRTtBQUNGOzs7Ozs7OztVQzNKQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS1wcm9qZWN0Ly4vYXBwL2FuaW1hdGlvbnMvUGFyYWdyYXBoLmpzIiwid2VicGFjazovL2Zsb2VtYS1wcm9qZWN0Ly4vYXBwL2NsYXNzZXMvUGFnZS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vY2xhc3Nlcy9BbmltYXRpb25cIjtcclxuaW1wb3J0IEdTQVAgZnJvbSBcImdzYXBcIjtcclxuaW1wb3J0IHsgY2FsY3VsYXRlLCBzcGxpdCB9IGZyb20gXCIuLi91dGlscy90ZXh0XCI7XHJcbmltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyYWdyYXBoIGV4dGVuZHMgQW5pbWF0aW9uIHtcclxuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGVsZW1lbnRzIH0pIHtcclxuICAgIHN1cGVyKHsgZWxlbWVudCwgZWxlbWVudHMgfSk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50TGluZXNTcGFucyA9IHNwbGl0KHtcclxuICAgICAgYXBwZW5kOiB0cnVlLFxyXG4gICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgYW5pbWF0ZUluKCkge1xyXG4gICAgdGhpcy50aW1lbGluZUluID0gR1NBUC50aW1lbGluZSh7XHJcbiAgICAgIGRlbGF5OiAwLjUsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnRpbWVsaW5lSW4uc2V0KHRoaXMuZWxlbWVudCwge1xyXG4gICAgICBhdXRvQWxwaGE6IDEsXHJcbiAgICB9KTtcclxuXHJcbiAgICBlYWNoKHRoaXMuZWxlbWVudHNMaW5lcywgKGxpbmUsIGluZGV4KSA9PiB7XHJcbiAgICAgIHRoaXMudGltZWxpbmVJbi5mcm9tVG8oXHJcbiAgICAgICAgbGluZSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBhdXRvQWxwaGE6IDAsXHJcbiAgICAgICAgICB5OiBcIjEwMCVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGF1dG9BbHBoYTogMSxcclxuICAgICAgICAgIGRlbGF5OiBpbmRleCAqIDAuMSxcclxuICAgICAgICAgIGR1cmF0aW9uOiAxLjUsXHJcbiAgICAgICAgICBlYXNlOiBcImV4cG8ub3V0XCIsXHJcbiAgICAgICAgICB5OiBcIjAlXCIsXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhbmltYXRlT3V0KCkge1xyXG4gICAgR1NBUC5zZXQodGhpcy5lbGVtZW50LCB7XHJcbiAgICAgIGF1dG9BbHBoYTogMCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25SZXNpemUoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnRzTGluZXMgPSBjYWxjdWxhdGUodGhpcy5lbGVtZW50TGluZXNTcGFucyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBHU0FQIGZyb20gXCJnc2FwXCI7XHJcbmltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiO1xyXG5pbXBvcnQgbWFwIGZyb20gXCJsb2Rhc2gvbWFwXCI7XHJcbmltcG9ydCBQcmVmaXggZnJvbSBcInByZWZpeFwiO1xyXG5pbXBvcnQgTm9ybWFsaXplV2hlZWwgZnJvbSBcIm5vcm1hbGl6ZS13aGVlbFwiO1xyXG5cclxuaW1wb3J0IExhYmVsIGZyb20gXCIuLi9hbmltYXRpb25zL0xhYmVsXCI7XHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi4vYW5pbWF0aW9ucy9UaXRsZVwiO1xyXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gXCIuLi9hbmltYXRpb25zL1BhcmFncmFwaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XHJcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBlbGVtZW50cywgaWQgfSkge1xyXG4gICAgdGhpcy5zZWxlY3RvciA9IGVsZW1lbnQ7XHJcbiAgICB0aGlzLnNlbGVjdG9yQ2hpbGRyZW4gPSB7XHJcbiAgICAgIC4uLmVsZW1lbnRzLFxyXG4gICAgICBhbmltYXRpb25zVGl0bGVzOiBcIltkYXRhLWFuaW1hdGlvbj0ndGl0bGUnXVwiLFxyXG4gICAgICBhbmltYXRpb25MYWJlbHM6IFwiW2RhdGEtYW5pbWF0aW9uPSdsYWJlbCddXCIsXHJcbiAgICAgIGFuaW1hdGlvbnNQYXJhZ3JhcGhzOiBcIltkYXRhLWFuaW1hdGlvbj0ncGFyYWdyYXBoJ11cIixcclxuICAgIH07XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeChcInRyYW5zZm9ybVwiKTtcclxuICAgIHRoaXMub25Nb3VzZVdoZWVsRXZlbnQgPSB0aGlzLm9uTW91c2VXaGVlbC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKTtcclxuICAgIHRoaXMuZWxlbWVudHMgPSB7fTtcclxuXHJcbiAgICB0aGlzLnNjcm9sbCA9IHtcclxuICAgICAgY3VycmVudDogMCxcclxuICAgICAgdGFyZ2V0OiAwLFxyXG4gICAgICBsYXN0OiAwLFxyXG4gICAgICBsaW1pdDogMTAwMCxcclxuICAgIH07XHJcblxyXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4sIChlbnRyeSwga2V5KSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCB8fFxyXG4gICAgICAgIGVudHJ5IGluc3RhbmNlb2Ygd2luZG93Lk5vZGVMaXN0IHx8XHJcbiAgICAgICAgQXJyYXkuaXNBcnJheShlbnRyeSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZW50cnk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbnRyeSk7XHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVudHJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlQW5pbWF0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQW5pbWF0aW9ucygpIHtcclxuICAgIHRoaXMuYW5pbWF0aW9ucyA9IFtdO1xyXG5cclxuICAgIHRoaXMuYW5pbWF0aW9uc1BhcmFncmFwaHMgPSBtYXAoXHJcbiAgICAgIHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc1BhcmFncmFwaHMsXHJcbiAgICAgIChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUaXRsZSh7XHJcbiAgICAgICAgICBlbGVtZW50LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgdGhpcy5hbmltYXRpb25zLnB1c2goLi4udGhpcy5hbmltYXRpb25zUGFyYWdyYXBocyk7XHJcblxyXG4gICAgdGhpcy5hbmltYXRpb25MYWJlbHMgPSBtYXAodGhpcy5lbGVtZW50cy5hbmltYXRpb25MYWJlbHMsIChlbGVtZW50KSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgVGl0bGUoe1xyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmFuaW1hdGlvbnMucHVzaCguLi50aGlzLmFuaW1hdGlvbkxhYmVscyk7XHJcblxyXG4gICAgdGhpcy5hbmltYXRpb25zVGl0bGVzID0gbWFwKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc1RpdGxlcywgKGVsZW1lbnQpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBUaXRsZSh7XHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMuYW5pbWF0aW9uc1RpdGxlcyk7XHJcbiAgfVxyXG5cclxuICBzaG93KCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uSW4gPSBHU0FQLnRpbWVsaW5lKCk7XHJcblxyXG4gICAgICB0aGlzLmFuaW1hdGlvbkluLmZyb21UbyhcclxuICAgICAgICB0aGlzLmVsZW1lbnQsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYXV0b0FscGhhOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBhdXRvQWxwaGE6IDEsIG9uQ29tcGxldGU6IHJlc29sdmUgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhpcy5hbmltYXRpb25Jbi5jYWxsKChfKSA9PiB7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoaWRlKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgICAgdGhpcy5hbmltYXRpb25PdXQgPSBHU0FQLnRpbWVsaW5lKCk7XHJcblxyXG4gICAgICB0aGlzLmFuaW1hdGlvbk91dC50byh0aGlzLmVsZW1lbnQsIHtcclxuICAgICAgICBhdXRvQWxwaGE6IDAsXHJcbiAgICAgICAgb25Db21wbGV0ZTogcmVzb2x2ZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uTW91c2VXaGVlbChldmVudCkge1xyXG4gICAgY29uc3QgeyBwaXhlbFkgfSA9IE5vcm1hbGl6ZVdoZWVsKGV2ZW50KTtcclxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCArPSBwaXhlbFk7XHJcbiAgfVxyXG5cclxuICBvblJlc2l6ZSgpIHtcclxuICAgIGlmICh0aGlzLmVsZW1lbnRzLndyYXBwZXIpXHJcbiAgICAgIHRoaXMuc2Nyb2xsLmxpbWl0ID1cclxuICAgICAgICB0aGlzLmVsZW1lbnRzLndyYXBwZXIuY2xpZW50SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICAgIGVhY2godGhpcy5hbmltYXRpb25zVGl0bGVzLCAoYW5pbWF0aW9uKSA9PiBhbmltYXRpb24ub25SZXNpemUoKSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSBHU0FQLnV0aWxzLmNsYW1wKFxyXG4gICAgICAwLFxyXG4gICAgICB0aGlzLnNjcm9sbC5saW1pdCxcclxuICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0XHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKFxyXG4gICAgICB0aGlzLnNjcm9sbC5jdXJyZW50LFxyXG4gICAgICB0aGlzLnNjcm9sbC50YXJnZXQsXHJcbiAgICAgIDAuMVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA8IDAuMDEpIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSAwO1xyXG5cclxuICAgIGlmICh0aGlzLmVsZW1lbnRzLndyYXBwZXIpXHJcbiAgICAgIHRoaXMuZWxlbWVudHMud3JhcHBlci5zdHlsZVtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybVByZWZpeFxyXG4gICAgICBdID0gYHRyYW5zbGF0ZVkoLSR7dGhpcy5zY3JvbGwuY3VycmVudH1weClgO1xyXG4gIH1cclxuXHJcbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgdGhpcy5vbk1vdXNlV2hlZWxFdmVudCk7XHJcbiAgfVxyXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsIHRoaXMub25Nb3VzZVdoZWVsRXZlbnQpO1xyXG4gIH1cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkYzEwNjRmYWRlYTI3N2YwYTNkNlwiKSJdLCJuYW1lcyI6WyJBbmltYXRpb24iLCJHU0FQIiwiY2FsY3VsYXRlIiwic3BsaXQiLCJlYWNoIiwiUGFyYWdyYXBoIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJlbGVtZW50TGluZXNTcGFucyIsImFwcGVuZCIsImFuaW1hdGVJbiIsInRpbWVsaW5lSW4iLCJ0aW1lbGluZSIsImRlbGF5Iiwic2V0IiwiYXV0b0FscGhhIiwiZWxlbWVudHNMaW5lcyIsImxpbmUiLCJpbmRleCIsImZyb21UbyIsInkiLCJkdXJhdGlvbiIsImVhc2UiLCJhbmltYXRlT3V0Iiwib25SZXNpemUiLCJtYXAiLCJQcmVmaXgiLCJOb3JtYWxpemVXaGVlbCIsIkxhYmVsIiwiVGl0bGUiLCJQYWdlIiwiaWQiLCJzZWxlY3RvciIsInNlbGVjdG9yQ2hpbGRyZW4iLCJhbmltYXRpb25zVGl0bGVzIiwiYW5pbWF0aW9uTGFiZWxzIiwiYW5pbWF0aW9uc1BhcmFncmFwaHMiLCJ0cmFuc2Zvcm1QcmVmaXgiLCJvbk1vdXNlV2hlZWxFdmVudCIsIm9uTW91c2VXaGVlbCIsImJpbmQiLCJjcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0IiwibGFzdCIsImxpbWl0IiwiZW50cnkiLCJrZXkiLCJ3aW5kb3ciLCJIVE1MRWxlbWVudCIsIk5vZGVMaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImNyZWF0ZUFuaW1hdGlvbnMiLCJhbmltYXRpb25zIiwicHVzaCIsInNob3ciLCJQcm9taXNlIiwicmVzb2x2ZSIsImFuaW1hdGlvbkluIiwib25Db21wbGV0ZSIsImNhbGwiLCJfIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJoaWRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lcnMiLCJhbmltYXRpb25PdXQiLCJ0byIsImV2ZW50IiwicGl4ZWxZIiwid3JhcHBlciIsImNsaWVudEhlaWdodCIsImlubmVySGVpZ2h0IiwiYW5pbWF0aW9uIiwidXBkYXRlIiwidXRpbHMiLCJjbGFtcCIsImludGVycG9sYXRlIiwic3R5bGUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=