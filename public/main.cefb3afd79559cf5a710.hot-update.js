"use strict";
self["webpackHotUpdatefloema_project"]("main",{

/***/ "./app/classes/AsyncLoad.js":
/*!**********************************!*\
  !*** ./app/classes/AsyncLoad.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AsyncLoad)
/* harmony export */ });
/* harmony import */ var classes_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Component */ "./app/classes/Component.js");

class AsyncLoad extends classes_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    element
  }) {
    super({
      element
    });
    this.createObserver();
  }
  createObserver() {
    this.observer = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!this.element.src) {
            this.element.src = this.element.getAttribute("data-src");
            this.element.onload = _ => {
              this.element.classList.add("loaded");
            };
          }
        }
      });
    });
    this.observer.observe(this.element);
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c740989bee5e14f325d9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jZWZiM2FmZDc5NTU5Y2Y1YTcxMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBRTNCLE1BQU1DLFNBQVMsU0FBU0QseURBQVMsQ0FBQztFQUMvQ0UsV0FBV0EsQ0FBQztJQUFFQztFQUFRLENBQUMsRUFBRTtJQUN2QixLQUFLLENBQUM7TUFBRUE7SUFBUSxDQUFDLENBQUM7SUFDbEIsSUFBSSxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUN2QjtFQUVBQSxjQUFjQSxDQUFBLEVBQUc7SUFDZixJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJQyxNQUFNLENBQUNDLG9CQUFvQixDQUFFQyxPQUFPLElBQUs7TUFDM0RBLE9BQU8sQ0FBQ0MsT0FBTyxDQUFFQyxLQUFLLElBQUs7UUFDekIsSUFBSUEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7VUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQ1IsT0FBTyxDQUFDUyxHQUFHLEVBQUU7WUFDckIsSUFBSSxDQUFDVCxPQUFPLENBQUNTLEdBQUcsR0FBRyxJQUFJLENBQUNULE9BQU8sQ0FBQ1UsWUFBWSxDQUFDLFVBQVUsQ0FBQztZQUN4RCxJQUFJLENBQUNWLE9BQU8sQ0FBQ1csTUFBTSxHQUFJQyxDQUFDLElBQUs7Y0FDM0IsSUFBSSxDQUFDWixPQUFPLENBQUNhLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUN0QyxDQUFDO1VBQ0g7UUFDRjtNQUNGLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ1osUUFBUSxDQUFDYSxPQUFPLENBQUMsSUFBSSxDQUFDZixPQUFPLENBQUM7RUFDckM7QUFDRjs7Ozs7Ozs7VUN4QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEtcHJvamVjdC8uL2FwcC9jbGFzc2VzL0FzeW5jTG9hZC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiY2xhc3Nlcy9Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzeW5jTG9hZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50IH0pIHtcclxuICAgIHN1cGVyKHsgZWxlbWVudCB9KTtcclxuICAgIHRoaXMuY3JlYXRlT2JzZXJ2ZXIoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZU9ic2VydmVyKCkge1xyXG4gICAgdGhpcy5vYnNlcnZlciA9IG5ldyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQuc3JjKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zcmMgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zcmNcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5vbmxvYWQgPSAoXykgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibG9hZGVkXCIpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUodGhpcy5lbGVtZW50KTtcclxuICB9XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzc0MDk4OWJlZTVlMTRmMzI1ZDlcIikiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiQXN5bmNMb2FkIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiY3JlYXRlT2JzZXJ2ZXIiLCJvYnNlcnZlciIsIndpbmRvdyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwib25sb2FkIiwiXyIsImNsYXNzTGlzdCIsImFkZCIsIm9ic2VydmUiXSwic291cmNlUm9vdCI6IiJ9