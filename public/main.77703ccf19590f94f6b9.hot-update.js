"use strict";
self["webpackHotUpdatefloema_project"]("main",{

/***/ "./app/classes/Animation.js":
/*!**********************************!*\
  !*** ./app/classes/Animation.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Animation)
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./app/classes/Component.js");

class Animation extends _Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    element,
    elements
  }) {
    super({
      element,
      elements
    });
    this.createObserver();
    this.animateOut();
  }
  createObserver() {
    this.observer = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateIn();
        } else {
          this.animateOut();
        }
      });
    });
    this.observer.observe(this.element);
  }
  animateIn() {}
  animateOut() {}
  onResize() {}
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3413ab6b8822ee70201c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43NzcwM2NjZjE5NTkwZjk0ZjZiOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW9DO0FBRXJCLE1BQU1DLFNBQVMsU0FBU0Qsa0RBQVMsQ0FBQztFQUMvQ0UsV0FBV0EsQ0FBQztJQUFFQyxPQUFPO0lBQUVDO0VBQVMsQ0FBQyxFQUFFO0lBQ2pDLEtBQUssQ0FBQztNQUFFRCxPQUFPO01BQUVDO0lBQVMsQ0FBQyxDQUFDO0lBRTVCLElBQUksQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFFckIsSUFBSSxDQUFDQyxVQUFVLENBQUMsQ0FBQztFQUNuQjtFQUVBRCxjQUFjQSxDQUFBLEVBQUc7SUFDZixJQUFJLENBQUNFLFFBQVEsR0FBRyxJQUFJQyxNQUFNLENBQUNDLG9CQUFvQixDQUFFQyxPQUFPLElBQUs7TUFDM0RBLE9BQU8sQ0FBQ0MsT0FBTyxDQUFFQyxLQUFLLElBQUs7UUFDekIsSUFBSUEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7VUFDeEIsSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQztRQUNsQixDQUFDLE1BQU07VUFDTCxJQUFJLENBQUNSLFVBQVUsQ0FBQyxDQUFDO1FBQ25CO01BQ0YsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBQ0YsSUFBSSxDQUFDQyxRQUFRLENBQUNRLE9BQU8sQ0FBQyxJQUFJLENBQUNaLE9BQU8sQ0FBQztFQUNyQztFQUNBVyxTQUFTQSxDQUFBLEVBQUcsQ0FBQztFQUViUixVQUFVQSxDQUFBLEVBQUcsQ0FBQztFQUVkVSxRQUFRQSxDQUFBLEVBQUcsQ0FBQztBQUNkOzs7Ozs7OztVQzVCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS1wcm9qZWN0Ly4vYXBwL2NsYXNzZXMvQW5pbWF0aW9uLmpzIiwid2VicGFjazovL2Zsb2VtYS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5pbWF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGVsZW1lbnRzIH0pIHtcclxuICAgIHN1cGVyKHsgZWxlbWVudCwgZWxlbWVudHMgfSk7XHJcblxyXG4gICAgdGhpcy5jcmVhdGVPYnNlcnZlcigpO1xyXG5cclxuICAgIHRoaXMuYW5pbWF0ZU91dCgpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlT2JzZXJ2ZXIoKSB7XHJcbiAgICB0aGlzLm9ic2VydmVyID0gbmV3IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgICB0aGlzLmFuaW1hdGVJbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmFuaW1hdGVPdXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUodGhpcy5lbGVtZW50KTtcclxuICB9XHJcbiAgYW5pbWF0ZUluKCkge31cclxuXHJcbiAgYW5pbWF0ZU91dCgpIHt9XHJcblxyXG4gIG9uUmVzaXplKCkge31cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzNDEzYWI2Yjg4MjJlZTcwMjAxY1wiKSJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJBbmltYXRpb24iLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiYW5pbWF0ZU91dCIsIm9ic2VydmVyIiwid2luZG93IiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJhbmltYXRlSW4iLCJvYnNlcnZlIiwib25SZXNpemUiXSwic291cmNlUm9vdCI6IiJ9