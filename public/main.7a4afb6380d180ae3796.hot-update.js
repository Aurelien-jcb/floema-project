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


class Preloader extends _classes_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super({
      element: ".preloader",
      elements: {
        title: ".preloader__text",
        number: ".preloader__number",
        images: document.querySelectorAll("img")
      }
    });
    this.createLoader();
  }
  createLoader() {
    lodash_each__WEBPACK_IMPORTED_MODULE_1__(this.elements.images, element => {
      const image = new Image();
      image.onload = _ => this.onAssetLoaded(image);
      image.src = element.getAttribute("data-src");
      console.log(image);
    });
  }
  onAssetLoaded(image) {
    this.length += 1;
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8db8176b13fe974d6797")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43YTRhZmI2MzgwZDE4MGFlMzc5Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNkO0FBRWhCLE1BQU1FLFNBQVMsU0FBU0YsMERBQVMsQ0FBQztFQUMvQ0csV0FBV0EsQ0FBQSxFQUFHO0lBQ1osS0FBSyxDQUFDO01BQ0pDLE9BQU8sRUFBRSxZQUFZO01BQ3JCQyxRQUFRLEVBQUU7UUFDUkMsS0FBSyxFQUFFLGtCQUFrQjtRQUN6QkMsTUFBTSxFQUFFLG9CQUFvQjtRQUM1QkMsTUFBTSxFQUFFQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLEtBQUs7TUFDekM7SUFDRixDQUFDLENBQUM7SUFDRixJQUFJLENBQUNDLFlBQVksQ0FBQyxDQUFDO0VBQ3JCO0VBQ0FBLFlBQVlBLENBQUEsRUFBRztJQUNiVix3Q0FBSSxDQUFDLElBQUksQ0FBQ0ksUUFBUSxDQUFDRyxNQUFNLEVBQUdKLE9BQU8sSUFBSztNQUN0QyxNQUFNUSxLQUFLLEdBQUcsSUFBSUMsS0FBSyxDQUFDLENBQUM7TUFFekJELEtBQUssQ0FBQ0UsTUFBTSxHQUFJQyxDQUFDLElBQUssSUFBSSxDQUFDQyxhQUFhLENBQUNKLEtBQUssQ0FBQztNQUMvQ0EsS0FBSyxDQUFDSyxHQUFHLEdBQUdiLE9BQU8sQ0FBQ2MsWUFBWSxDQUFDLFVBQVUsQ0FBQztNQUM1Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNSLEtBQUssQ0FBQztJQUNwQixDQUFDLENBQUM7RUFDSjtFQUVBSSxhQUFhQSxDQUFDSixLQUFLLEVBQUU7SUFDbkIsSUFBSSxDQUFDUyxNQUFNLElBQUksQ0FBQztFQUNsQjtBQUNGOzs7Ozs7OztVQzVCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS1wcm9qZWN0Ly4vYXBwL2NvbXBvbmVudHMvUHJlbG9hZGVyLmpzIiwid2VicGFjazovL2Zsb2VtYS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9jbGFzc2VzL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcih7XHJcbiAgICAgIGVsZW1lbnQ6IFwiLnByZWxvYWRlclwiLFxyXG4gICAgICBlbGVtZW50czoge1xyXG4gICAgICAgIHRpdGxlOiBcIi5wcmVsb2FkZXJfX3RleHRcIixcclxuICAgICAgICBudW1iZXI6IFwiLnByZWxvYWRlcl9fbnVtYmVyXCIsXHJcbiAgICAgICAgaW1hZ2VzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nXCIpLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNyZWF0ZUxvYWRlcigpO1xyXG4gIH1cclxuICBjcmVhdGVMb2FkZXIoKSB7XHJcbiAgICBlYWNoKHRoaXMuZWxlbWVudHMuaW1hZ2VzLCAoZWxlbWVudCkgPT4ge1xyXG4gICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cclxuICAgICAgaW1hZ2Uub25sb2FkID0gKF8pID0+IHRoaXMub25Bc3NldExvYWRlZChpbWFnZSk7XHJcbiAgICAgIGltYWdlLnNyYyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zcmNcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKGltYWdlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25Bc3NldExvYWRlZChpbWFnZSkge1xyXG4gICAgdGhpcy5sZW5ndGggKz0gMTtcclxuICB9XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOGRiODE3NmIxM2ZlOTc0ZDY3OTdcIikiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiZWFjaCIsIlByZWxvYWRlciIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwidGl0bGUiLCJudW1iZXIiLCJpbWFnZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjcmVhdGVMb2FkZXIiLCJpbWFnZSIsIkltYWdlIiwib25sb2FkIiwiXyIsIm9uQXNzZXRMb2FkZWQiLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==