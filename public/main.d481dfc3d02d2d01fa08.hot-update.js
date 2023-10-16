"use strict";
self["webpackHotUpdatefloema_project"]("main",{

/***/ "./app/components/Canvas/index.js":
/*!****************************************!*\
  !*** ./app/components/Canvas/index.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Canvas)
/* harmony export */ });
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Renderer.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Camera.js");

class Canvas {
  constructor() {
    this.createRenderer();
  }
  createRenderer() {
    this.renderer = new ogl__WEBPACK_IMPORTED_MODULE_0__.Renderer();
    this.gl = this.renderer.gl;
    document.body.appendChild(this.gl.canvas);
  }
  createCamera() {
    this.camera = new ogl__WEBPACK_IMPORTED_MODULE_1__.Camera(this.gl);
    this.camera.position.z = 5;
  }
  onResize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera.perspective({
      aspect: window.innerWidth / window.innerHeight
    });
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("336eed40c3f9c01ac796")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kNDgxZGZjM2QwMmQyZDAxZmEwOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF1RDtBQUV4QyxNQUFNSSxNQUFNLENBQUM7RUFDMUJDLFdBQVdBLENBQUEsRUFBRztJQUNaLElBQUksQ0FBQ0MsY0FBYyxDQUFDLENBQUM7RUFDdkI7RUFFQUEsY0FBY0EsQ0FBQSxFQUFHO0lBQ2YsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSU4seUNBQVEsQ0FBQyxDQUFDO0lBRTlCLElBQUksQ0FBQ08sRUFBRSxHQUFHLElBQUksQ0FBQ0QsUUFBUSxDQUFDQyxFQUFFO0lBRTFCQyxRQUFRLENBQUNDLElBQUksQ0FBQ0MsV0FBVyxDQUFDLElBQUksQ0FBQ0gsRUFBRSxDQUFDSSxNQUFNLENBQUM7RUFDM0M7RUFFQUMsWUFBWUEsQ0FBQSxFQUFHO0lBQ2IsSUFBSSxDQUFDQyxNQUFNLEdBQUcsSUFBSWQsdUNBQU0sQ0FBQyxJQUFJLENBQUNRLEVBQUUsQ0FBQztJQUNqQyxJQUFJLENBQUNNLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxDQUFDLEdBQUcsQ0FBQztFQUM1QjtFQUVBQyxRQUFRQSxDQUFBLEVBQUc7SUFDVCxJQUFJLENBQUNWLFFBQVEsQ0FBQ1csT0FBTyxDQUFDQyxNQUFNLENBQUNDLFVBQVUsRUFBRUQsTUFBTSxDQUFDRSxXQUFXLENBQUM7SUFDNUQsSUFBSSxDQUFDUCxNQUFNLENBQUNRLFdBQVcsQ0FBQztNQUN0QkMsTUFBTSxFQUFFSixNQUFNLENBQUNDLFVBQVUsR0FBR0QsTUFBTSxDQUFDRTtJQUNyQyxDQUFDLENBQUM7RUFDSjtBQUNGOzs7Ozs7OztVQzFCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS1wcm9qZWN0Ly4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW1lcmEsIFJlbmRlcmVyLCBUcmFuc2Zvcm0sIEJveCB9IGZyb20gXCJvZ2xcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmNyZWF0ZVJlbmRlcmVyKCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVSZW5kZXJlcigpIHtcclxuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoKTtcclxuXHJcbiAgICB0aGlzLmdsID0gdGhpcy5yZW5kZXJlci5nbDtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZ2wuY2FudmFzKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUNhbWVyYSgpIHtcclxuICAgIHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSh0aGlzLmdsKTtcclxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1O1xyXG4gIH1cclxuXHJcbiAgb25SZXNpemUoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICB0aGlzLmNhbWVyYS5wZXJzcGVjdGl2ZSh7XHJcbiAgICAgIGFzcGVjdDogd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzM2ZWVkNDBjM2Y5YzAxYWM3OTZcIikiXSwibmFtZXMiOlsiQ2FtZXJhIiwiUmVuZGVyZXIiLCJUcmFuc2Zvcm0iLCJCb3giLCJDYW52YXMiLCJjb25zdHJ1Y3RvciIsImNyZWF0ZVJlbmRlcmVyIiwicmVuZGVyZXIiLCJnbCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2FudmFzIiwiY3JlYXRlQ2FtZXJhIiwiY2FtZXJhIiwicG9zaXRpb24iLCJ6Iiwib25SZXNpemUiLCJzZXRTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicGVyc3BlY3RpdmUiLCJhc3BlY3QiXSwic291cmNlUm9vdCI6IiJ9