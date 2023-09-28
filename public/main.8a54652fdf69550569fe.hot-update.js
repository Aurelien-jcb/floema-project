"use strict";
self["webpackHotUpdatefloema_project"]("main",{

/***/ "./app/components/Preloader.js":
/*!*************************************!*\
  !*** ./app/components/Preloader.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Preloader)
/* harmony export */ });
/* harmony import */ var _classes_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Component */ "./app/classes/Component.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _utils_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/text */ "./app/utils/text.js");




class Preloader extends _classes_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super({
      element: ".preloader",
      elements: {
        title: ".preloader__text",
        number: ".preloader__number",
        numberText: ".preloader__number__text",
        images: document.querySelectorAll("img")
      }
    });
    (0,_utils_text__WEBPACK_IMPORTED_MODULE_2__.split)({
      element: this.elements.title,
      expression: "<br>"
    });
    (0,_utils_text__WEBPACK_IMPORTED_MODULE_2__.split)({
      element: this.elements.title,
      expression: "<br>"
    });
    this.elements.titleSpans = this.elements.title.querySelectorAll("span span");
    this.length = 0;
    this.createLoader();
  }
  createLoader() {
    lodash_each__WEBPACK_IMPORTED_MODULE_1__(this.elements.images, element => {
      element.onload = _ => this.onAssetLoaded(element);
      element.src = element.getAttribute("data-src");
    });
  }
  onAssetLoaded(image) {
    this.length += 1;
    const percent = this.length / this.elements.images.length;
    this.elements.numberText.innerHTML = `${Math.round(percent * 100)}%`;
    if (percent === 1) this.onLoaded();
  }
  onLoaded() {
    return new Promise(resolve => {
      this.animateOut = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
        delay: 2
      });
      this.animateOut.to(this.elements.titleSpans, {
        autoAlpha: 0,
        stagger: 0.1,
        ease: "expo.out",
        duration: 1.5,
        y: "100%"
      });
      this.animateOut.to(this.elements.numberText, {
        autoAlpha: 0,
        stagger: 0.1,
        ease: "expo.out",
        duration: 1.5,
        y: "100%"
      }, "-=1.4");
      this.animateOut.to(this.element, {
        duration: 1.5,
        ease: "expo.out",
        scaleY: 0,
        transformOrigin: "0 0"
      }, "-=1");
      this.animateOut.call(_ => {
        this.emit("completed");
      });
    });
  }
  destroy() {
    this.element.parentNode.removeChild(this.element);
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5e59f70efd517484106b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ0csRUFBRSxDQUNoQixJQUFJLENBQUM1QixPQUFPLEVBQ1o7UUFDRWdDLFFBQVEsRUFBRSxHQUFHO1FBQ2JELElBQUksRUFBRSxVQUFVO1FBQ2hCRyxNQUFNLEVBQUUsQ0FBQztRQUNUQyxlQUFlLEVBQUU7TUFDbkIsQ0FBQyxFQUNELEtBQ0YsQ0FBQztNQUVELElBQUksQ0FBQ1YsVUFBVSxDQUFDVyxJQUFJLENBQUV2QixDQUFDLElBQUs7UUFDMUIsSUFBSSxDQUFDd0IsSUFBSSxDQUFDLFdBQVcsQ0FBQztNQUN4QixDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7RUFDSjtFQUVBQyxPQUFPQSxDQUFBLEVBQUc7SUFDUixJQUFJLENBQUN0QyxPQUFPLENBQUN1QyxVQUFVLENBQUNDLFdBQVcsQ0FBQyxJQUFJLENBQUN4QyxPQUFPLENBQUM7RUFDbkQ7QUFDRjs7Ozs7Ozs7VUMvRkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEtcHJvamVjdC8uL2FwcC9jb21wb25lbnRzL1ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly9mbG9lbWEtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vY2xhc3Nlcy9Db21wb25lbnRcIjtcclxuaW1wb3J0IGVhY2ggZnJvbSBcImxvZGFzaC9lYWNoXCI7XHJcbmltcG9ydCBHU0FQIGZyb20gXCJnc2FwXCI7XHJcbmltcG9ydCB7IHNwbGl0IH0gZnJvbSBcIi4uL3V0aWxzL3RleHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcih7XHJcbiAgICAgIGVsZW1lbnQ6IFwiLnByZWxvYWRlclwiLFxyXG4gICAgICBlbGVtZW50czoge1xyXG4gICAgICAgIHRpdGxlOiBcIi5wcmVsb2FkZXJfX3RleHRcIixcclxuICAgICAgICBudW1iZXI6IFwiLnByZWxvYWRlcl9fbnVtYmVyXCIsXHJcbiAgICAgICAgbnVtYmVyVGV4dDogXCIucHJlbG9hZGVyX19udW1iZXJfX3RleHRcIixcclxuICAgICAgICBpbWFnZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWdcIiksXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBzcGxpdCh7XHJcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMudGl0bGUsXHJcbiAgICAgIGV4cHJlc3Npb246IFwiPGJyPlwiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgc3BsaXQoe1xyXG4gICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnRzLnRpdGxlLFxyXG4gICAgICBleHByZXNzaW9uOiBcIjxicj5cIixcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZWxlbWVudHMudGl0bGVTcGFucyA9XHJcbiAgICAgIHRoaXMuZWxlbWVudHMudGl0bGUucXVlcnlTZWxlY3RvckFsbChcInNwYW4gc3BhblwiKTtcclxuXHJcbiAgICB0aGlzLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgdGhpcy5jcmVhdGVMb2FkZXIoKTtcclxuICB9XHJcbiAgY3JlYXRlTG9hZGVyKCkge1xyXG4gICAgZWFjaCh0aGlzLmVsZW1lbnRzLmltYWdlcywgKGVsZW1lbnQpID0+IHtcclxuICAgICAgZWxlbWVudC5vbmxvYWQgPSAoXykgPT4gdGhpcy5vbkFzc2V0TG9hZGVkKGVsZW1lbnQpO1xyXG4gICAgICBlbGVtZW50LnNyYyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zcmNcIik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uQXNzZXRMb2FkZWQoaW1hZ2UpIHtcclxuICAgIHRoaXMubGVuZ3RoICs9IDE7XHJcblxyXG4gICAgY29uc3QgcGVyY2VudCA9IHRoaXMubGVuZ3RoIC8gdGhpcy5lbGVtZW50cy5pbWFnZXMubGVuZ3RoO1xyXG4gICAgdGhpcy5lbGVtZW50cy5udW1iZXJUZXh0LmlubmVySFRNTCA9IGAke01hdGgucm91bmQocGVyY2VudCAqIDEwMCl9JWA7XHJcbiAgICBpZiAocGVyY2VudCA9PT0gMSkgdGhpcy5vbkxvYWRlZCgpO1xyXG4gIH1cclxuXHJcbiAgb25Mb2FkZWQoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgdGhpcy5hbmltYXRlT3V0ID0gR1NBUC50aW1lbGluZSh7XHJcbiAgICAgICAgZGVsYXk6IDIsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5hbmltYXRlT3V0LnRvKHRoaXMuZWxlbWVudHMudGl0bGVTcGFucywge1xyXG4gICAgICAgIGF1dG9BbHBoYTogMCxcclxuICAgICAgICBzdGFnZ2VyOiAwLjEsXHJcbiAgICAgICAgZWFzZTogXCJleHBvLm91dFwiLFxyXG4gICAgICAgIGR1cmF0aW9uOiAxLjUsXHJcbiAgICAgICAgeTogXCIxMDAlXCIsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5hbmltYXRlT3V0LnRvKFxyXG4gICAgICAgIHRoaXMuZWxlbWVudHMubnVtYmVyVGV4dCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBhdXRvQWxwaGE6IDAsXHJcbiAgICAgICAgICBzdGFnZ2VyOiAwLjEsXHJcbiAgICAgICAgICBlYXNlOiBcImV4cG8ub3V0XCIsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMS41LFxyXG4gICAgICAgICAgeTogXCIxMDAlXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIi09MS40XCJcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMuYW5pbWF0ZU91dC50byhcclxuICAgICAgICB0aGlzLmVsZW1lbnQsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZHVyYXRpb246IDEuNSxcclxuICAgICAgICAgIGVhc2U6IFwiZXhwby5vdXRcIixcclxuICAgICAgICAgIHNjYWxlWTogMCxcclxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogXCIwIDBcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiLT0xXCJcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMuYW5pbWF0ZU91dC5jYWxsKChfKSA9PiB7XHJcbiAgICAgICAgdGhpcy5lbWl0KFwiY29tcGxldGVkXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XHJcbiAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjVlNTlmNzBlZmQ1MTc0ODQxMDZiXCIpIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImVhY2giLCJHU0FQIiwic3BsaXQiLCJQcmVsb2FkZXIiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsInRpdGxlIiwibnVtYmVyIiwibnVtYmVyVGV4dCIsImltYWdlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImV4cHJlc3Npb24iLCJ0aXRsZVNwYW5zIiwibGVuZ3RoIiwiY3JlYXRlTG9hZGVyIiwib25sb2FkIiwiXyIsIm9uQXNzZXRMb2FkZWQiLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJpbWFnZSIsInBlcmNlbnQiLCJpbm5lckhUTUwiLCJNYXRoIiwicm91bmQiLCJvbkxvYWRlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwiYW5pbWF0ZU91dCIsInRpbWVsaW5lIiwiZGVsYXkiLCJ0byIsImF1dG9BbHBoYSIsInN0YWdnZXIiLCJlYXNlIiwiZHVyYXRpb24iLCJ5Iiwic2NhbGVZIiwidHJhbnNmb3JtT3JpZ2luIiwiY2FsbCIsImVtaXQiLCJkZXN0cm95IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==