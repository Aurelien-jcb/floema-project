"use strict";
self["webpackHotUpdatefloema_project"]("main",{

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pages_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pages/Home */ "./app/pages/Home/index.js");
/* harmony import */ var pages_Collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pages/Collections */ "./app/pages/Collections/index.js");
/* harmony import */ var pages_Details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pages/Details */ "./app/pages/Details/index.js");
/* harmony import */ var pages_About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pages/About */ "./app/pages/About/index.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var _components_Preloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Preloader */ "./app/components/Preloader.js");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Navigation */ "./app/components/Navigation.js");







class App {
  constructor() {
    this.createContent();
    this.createPreloader();
    this.createNavigation();
    this.createPages();
    this.addLinkListeners();
    this.addEventListeners();
    this.update();
  }
  createNavigation() {
    this.navigation = new _components_Navigation__WEBPACK_IMPORTED_MODULE_6__["default"]({
      template: this.template
    });
  }
  createPreloader() {
    this.preloader = new _components_Preloader__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this.preloader.once("completed", this.onPreloaded.bind(this));
  }
  createContent() {
    this.content = document.querySelector(".content") || null;
    this.template = this.content.getAttribute("data-template");
  }
  createPages() {
    this.pages = {
      home: new pages_Home__WEBPACK_IMPORTED_MODULE_0__["default"](),
      about: new pages_About__WEBPACK_IMPORTED_MODULE_3__["default"](),
      collections: new pages_Collections__WEBPACK_IMPORTED_MODULE_1__["default"](),
      detail: new pages_Details__WEBPACK_IMPORTED_MODULE_2__["default"]()
    };
    this.page = this.pages[this.template];
    this.page.create();
  }
  async onPreloaded() {
    this.onResize();
    this.preloader.destroy();
    this.page.show();
  }
  onPopState() {
    this.onChange({
      url: window.location.pathname,
      push: false
    });
  }
  async onChange({
    url,
    push = true
  }) {
    await this.page.hide();
    const request = await window.fetch(url);
    if (request.status === 200) {
      const html = await request.text();
      const div = document.createElement("div");
      if (push) window.history.pushState({}, "", url);
      div.innerHTML = html;
      const divContent = div.querySelector(".content");
      this.template = divContent.getAttribute("data-template");
      this.navigation.onChange(this.template);
      this.content.setAttribute("data-template", this.template);
      this.content.innerHTML = divContent.innerHTML;
      this.page = this.pages[this.template];
      this.page.create();
      this.onResize();
      this.page.show();
      this.addLinkListeners();
    } else {
      console.log("Error");
    }
  }
  onResize() {
    if (this.page && this.page.onResize) this.page.onResize();
  }
  update() {
    if (this.page && this.page.update) {
      this.page.update();
    }
    this.frame = window.requestAnimationFrame(this.update.bind(this));
  }
  addEventListeners() {
    window.addEventListener("popstate", this.onPopState.bind(this));
    window.addEventListener("resize", this.onResize.bind(this));
  }
  addLinkListeners() {
    const links = document.querySelectorAll("a");
    lodash_each__WEBPACK_IMPORTED_MODULE_4__(links, link => {
      link.onclick = event => {
        event.preventDefault();
        const {
          href
        } = link;
        this.onChange({
          url: href
        });
      };
    });
  }
}
new App();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f9ae825abfae2e0509fd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41NjBmMDA2YjBmZjczMWMzNWYyNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ2M7QUFDUjtBQUNKO0FBQ0Q7QUFFZ0I7QUFDRTtBQUVqRCxNQUFNTyxHQUFHLENBQUM7RUFDUkMsV0FBV0EsQ0FBQSxFQUFHO0lBQ1osSUFBSSxDQUFDQyxhQUFhLENBQUMsQ0FBQztJQUVwQixJQUFJLENBQUNDLGVBQWUsQ0FBQyxDQUFDO0lBQ3RCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsQ0FBQztJQUN2QixJQUFJLENBQUNDLFdBQVcsQ0FBQyxDQUFDO0lBRWxCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsQ0FBQztJQUN2QixJQUFJLENBQUNDLGlCQUFpQixDQUFDLENBQUM7SUFFeEIsSUFBSSxDQUFDQyxNQUFNLENBQUMsQ0FBQztFQUNmO0VBRUFKLGdCQUFnQkEsQ0FBQSxFQUFHO0lBQ2pCLElBQUksQ0FBQ0ssVUFBVSxHQUFHLElBQUlWLDhEQUFVLENBQUM7TUFDL0JXLFFBQVEsRUFBRSxJQUFJLENBQUNBO0lBQ2pCLENBQUMsQ0FBQztFQUNKO0VBRUFQLGVBQWVBLENBQUEsRUFBRztJQUNoQixJQUFJLENBQUNRLFNBQVMsR0FBRyxJQUFJYiw2REFBUyxDQUFDLENBQUM7SUFDaEMsSUFBSSxDQUFDYSxTQUFTLENBQUNDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDQyxXQUFXLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUMvRDtFQUVBWixhQUFhQSxDQUFBLEVBQUc7SUFDZCxJQUFJLENBQUNhLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSTtJQUN6RCxJQUFJLENBQUNQLFFBQVEsR0FBRyxJQUFJLENBQUNLLE9BQU8sQ0FBQ0csWUFBWSxDQUFDLGVBQWUsQ0FBQztFQUM1RDtFQUVBYixXQUFXQSxDQUFBLEVBQUc7SUFDWixJQUFJLENBQUNjLEtB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QUFJLENBQUNBLElBQUksQ0FBQ2hCLE1BQU0sRUFBRTtNQUNqQyxJQUFJLENBQUNnQixJQUFJLENBQUNoQixNQUFNLENBQUMsQ0FBQztJQUNwQjtJQUNBLElBQUksQ0FBQzJDLEtBQUssR0FBR25CLE1BQU0sQ0FBQ29CLHFCQUFxQixDQUFDLElBQUksQ0FBQzVDLE1BQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ25FO0VBRUFQLGlCQUFpQkEsQ0FBQSxFQUFHO0lBQ2xCeUIsTUFBTSxDQUFDcUIsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQ3hCLFVBQVUsQ0FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9Ea0IsTUFBTSxDQUFDcUIsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQzNCLFFBQVEsQ0FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQzdEO0VBRUFSLGdCQUFnQkEsQ0FBQSxFQUFHO0lBQ2pCLE1BQU1nRCxLQUFLLEdBQUd0QyxRQUFRLENBQUN1QyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7SUFDNUMxRCx3Q0FBSSxDQUFDeUQsS0FBSyxFQUFHRSxJQUFJLElBQUs7TUFDcEJBLElBQUksQ0FBQ0MsT0FBTyxHQUFJQyxLQUFLLElBQUs7UUFDeEJBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7UUFDdEIsTUFBTTtVQUFFQztRQUFLLENBQUMsR0FBR0osSUFBSTtRQUNyQixJQUFJLENBQUMxQixRQUFRLENBQUM7VUFBRUMsR0FBRyxFQUFFNkI7UUFBSyxDQUFDLENBQUM7TUFDOUIsQ0FBQztJQUNILENBQUMsQ0FBQztFQUNKO0FBQ0Y7QUFFQSxJQUFJNUQsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7O1VDaklUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLXByb2plY3QvLi9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIb21lIGZyb20gXCJwYWdlcy9Ib21lXCI7XHJcbmltcG9ydCBDb2xsZWN0aW9ucyBmcm9tIFwicGFnZXMvQ29sbGVjdGlvbnNcIjtcclxuaW1wb3J0IERldGFpbHMgZnJvbSBcInBhZ2VzL0RldGFpbHNcIjtcclxuaW1wb3J0IEFib3V0IGZyb20gXCJwYWdlcy9BYm91dFwiO1xyXG5pbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIjtcclxuXHJcbmltcG9ydCBQcmVsb2FkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9QcmVsb2FkZXJcIjtcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uXCI7XHJcblxyXG5jbGFzcyBBcHAge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5jcmVhdGVDb250ZW50KCk7XHJcblxyXG4gICAgdGhpcy5jcmVhdGVQcmVsb2FkZXIoKTtcclxuICAgIHRoaXMuY3JlYXRlTmF2aWdhdGlvbigpO1xyXG4gICAgdGhpcy5jcmVhdGVQYWdlcygpO1xyXG5cclxuICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpO1xyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVOYXZpZ2F0aW9uKCkge1xyXG4gICAgdGhpcy5uYXZpZ2F0aW9uID0gbmV3IE5hdmlnYXRpb24oe1xyXG4gICAgICB0ZW1wbGF0ZTogdGhpcy50ZW1wbGF0ZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlUHJlbG9hZGVyKCkge1xyXG4gICAgdGhpcy5wcmVsb2FkZXIgPSBuZXcgUHJlbG9hZGVyKCk7XHJcbiAgICB0aGlzLnByZWxvYWRlci5vbmNlKFwiY29tcGxldGVkXCIsIHRoaXMub25QcmVsb2FkZWQuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVDb250ZW50KCkge1xyXG4gICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpIHx8IG51bGw7XHJcbiAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5jb250ZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGVtcGxhdGVcIik7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVQYWdlcygpIHtcclxuICAgIHRoaXMucGFnZXMgPSB7XHJcbiAgICAgIGhvbWU6IG5ldyBIb21lKCksXHJcbiAgICAgIGFib3V0OiBuZXcgQWJvdXQoKSxcclxuICAgICAgY29sbGVjdGlvbnM6IG5ldyBDb2xsZWN0aW9ucygpLFxyXG4gICAgICBkZXRhaWw6IG5ldyBEZXRhaWxzKCksXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV07XHJcbiAgICB0aGlzLnBhZ2UuY3JlYXRlKCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBvblByZWxvYWRlZCgpIHtcclxuICAgIHRoaXMub25SZXNpemUoKTtcclxuICAgIHRoaXMucHJlbG9hZGVyLmRlc3Ryb3koKTtcclxuICAgIHRoaXMucGFnZS5zaG93KCk7XHJcbiAgfVxyXG5cclxuICBvblBvcFN0YXRlKCkge1xyXG4gICAgdGhpcy5vbkNoYW5nZSh7XHJcbiAgICAgIHVybDogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLFxyXG4gICAgICBwdXNoOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgb25DaGFuZ2UoeyB1cmwsIHB1c2ggPSB0cnVlIH0pIHtcclxuICAgIGF3YWl0IHRoaXMucGFnZS5oaWRlKCk7XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IHdpbmRvdy5mZXRjaCh1cmwpO1xyXG5cclxuICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgIGNvbnN0IGh0bWwgPSBhd2FpdCByZXF1ZXN0LnRleHQoKTtcclxuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICAgIGlmIChwdXNoKSB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sIFwiXCIsIHVybCk7XHJcblxyXG4gICAgICBkaXYuaW5uZXJIVE1MID0gaHRtbDtcclxuXHJcbiAgICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkaXYucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xyXG5cclxuICAgICAgdGhpcy50ZW1wbGF0ZSA9IGRpdkNvbnRlbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS10ZW1wbGF0ZVwiKTtcclxuXHJcbiAgICAgIHRoaXMubmF2aWdhdGlvbi5vbkNoYW5nZSh0aGlzLnRlbXBsYXRlKTtcclxuXHJcbiAgICAgIHRoaXMuY29udGVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRlbXBsYXRlXCIsIHRoaXMudGVtcGxhdGUpO1xyXG5cclxuICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTCA9IGRpdkNvbnRlbnQuaW5uZXJIVE1MO1xyXG5cclxuICAgICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXTtcclxuXHJcbiAgICAgIHRoaXMucGFnZS5jcmVhdGUoKTtcclxuXHJcbiAgICAgIHRoaXMub25SZXNpemUoKTtcclxuXHJcbiAgICAgIHRoaXMucGFnZS5zaG93KCk7XHJcblxyXG4gICAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3JcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblJlc2l6ZSgpIHtcclxuICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLm9uUmVzaXplKSB0aGlzLnBhZ2Uub25SZXNpemUoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLnVwZGF0ZSkge1xyXG4gICAgICB0aGlzLnBhZ2UudXBkYXRlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCB0aGlzLm9uUG9wU3RhdGUuYmluZCh0aGlzKSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgYWRkTGlua0xpc3RlbmVycygpIHtcclxuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFcIik7XHJcbiAgICBlYWNoKGxpbmtzLCAobGluaykgPT4ge1xyXG4gICAgICBsaW5rLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHsgaHJlZiB9ID0gbGluaztcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlKHsgdXJsOiBocmVmIH0pO1xyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5uZXcgQXBwKCk7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImY5YWU4MjVhYmZhZTJlMDUwOWZkXCIpIl0sIm5hbWVzIjpbIkhvbWUiLCJDb2xsZWN0aW9ucyIsIkRldGFpbHMiLCJBYm91dCIsImVhY2giLCJQcmVsb2FkZXIiLCJOYXZpZ2F0aW9uIiwiQXBwIiwiY29uc3RydWN0b3IiLCJjcmVhdGVDb250ZW50IiwiY3JlYXRlUHJlbG9hZGVyIiwiY3JlYXRlTmF2aWdhdGlvbiIsImNyZWF0ZVBhZ2VzIiwiYWRkTGlua0xpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXJzIiwidXBkYXRlIiwibmF2aWdhdGlvbiIsInRlbXBsYXRlIiwicHJlbG9hZGVyIiwib25jZSIsIm9uUHJlbG9hZGVkIiwiYmluZCIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJwYWdlcyIsImhvbWUiLCJhYm91dCIsImNvbGxlY3Rpb25zIiwiZGV0YWlsIiwicGFnZSIsImNyZWF0ZSIsIm9uUmVzaXplIiwiZGVzdHJveSIsInNob3ciLCJvblBvcFN0YXRlIiwib25DaGFuZ2UiLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicHVzaCIsImhpZGUiLCJyZXF1ZXN0IiwiZmV0Y2giLCJzdGF0dXMiLCJodG1sIiwidGV4dCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiaW5uZXJIVE1MIiwiZGl2Q29udGVudCIsInNldEF0dHJpYnV0ZSIsImNvbnNvbGUiLCJsb2ciLCJmcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsaW5rIiwib25jbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==