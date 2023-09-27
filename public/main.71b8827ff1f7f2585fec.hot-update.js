"use strict";
self["webpackHotUpdatefloema_project"]("main",{

/***/ "./app/classes/Component.js":
/*!**********************************!*\
  !*** ./app/classes/Component.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");


class Component {
  constructor({
    element,
    elements,
    id
  }) {
    this.selector = element;
    this.selectorChildren = {
      ...elements
    };
    this.create();
    this.addEventListeners();
  }
  create() {
    this.element = document.querySelector(this.selector);
    this.elements = {};
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
  }
  addEventListeners() {}
  removeEventListeners() {}
}

/***/ }),

/***/ "./app/components/Preloader.js":
/*!*************************************!*\
  !*** ./app/components/Preloader.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Preloader: () => (/* binding */ Preloader)
/* harmony export */ });
/* harmony import */ var _classes_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Component */ "./app/classes/Component.js");

class Preloader extends (0,_classes_Component__WEBPACK_IMPORTED_MODULE_0__["default"])() {
  constructor() {
    super({
      element: ".preloader",
      elements: {
        title: ".preloader__text",
        number: ".preloader__number"
      }
    });
  }
}

/***/ }),

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






class App {
  constructor() {
    this.createContent();
    this.createPages();
    this.addLinkListeners();
  }
  createPreloader() {
    this.preloader = new _components_Preloader__WEBPACK_IMPORTED_MODULE_5__["default"]();
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
    this.page.show();
  }
  async onChange({
    url
  }) {
    await this.page.hide();
    const request = await window.fetch(url);
    if (request.status === 200) {
      const html = await request.text();
      const div = document.createElement("div");
      div.innerHTML = html;
      const divContent = div.querySelector(".content");
      this.template = divContent.getAttribute("data-template");
      this.content.setAttribute("data-template", this.template);
      this.content.innerHTML = divContent.innerHTML;
      this.page = this.pages[this.template];
      this.page.create();
      this.page.show();
      this.addLinkListeners();
    } else {
      console.log("Error");
    }
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
/******/ 	__webpack_require__.h = () => ("8a06cbb923c34f3e4b14")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43MWI4ODI3ZmYxZjdmMjU4NWZlYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdCO0FBQ087QUFFaEIsTUFBTUUsU0FBUyxDQUFDO0VBQzdCQyxXQUFXQSxDQUFDO0lBQUVDLE9BQU87SUFBRUMsUUFBUTtJQUFFQztFQUFHLENBQUMsRUFBRTtJQUNyQyxJQUFJLENBQUNDLFFBQVEsR0FBR0gsT0FBTztJQUN2QixJQUFJLENBQUNJLGdCQUFnQixHQUFHO01BQUUsR0FBR0g7SUFBUyxDQUFDO0lBRXZDLElBQUksQ0FBQ0ksTUFBTSxDQUFDLENBQUM7SUFDYixJQUFJLENBQUNDLGlCQUFpQixDQUFDLENBQUM7RUFDMUI7RUFFQUQsTUFBTUEsQ0FBQSxFQUFHO0lBQ1AsSUFBSSxDQUFDTCxPQUFPLEdBQUdPLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQ0wsUUFBUSxDQUFDO0lBQ3BELElBQUksQ0FBQ0YsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUVsQkosd0NBQUksQ0FBQyxJQUFJLENBQUNPLGdCQUFnQixFQUFFLENBQUNLLEtBQUssRUFBRUMsR0FBRyxLQUFLO01BQzFDLElBQ0VELEtBQUssWUFBWUUsTUFBTSxDQUFDQyxXQUFXLElBQ25DSCxLQUFLLFlBQVlFLE1BQU0sQ0FBQ0UsUUFBUSxJQUNoQ0MsS0FBSyxDQUFDQyxPQUFPLENBQUNOLEtBQUssQ0FBQyxFQUNwQjtRQUNBLElBQUksQ0FBQ1IsUUFBUSxDQUFDUyxHQUFHLENBQUMsR0FBR0QsS0FBSztNQUM1QixDQUFDLE1BQU07UUFDTCxJQUFJLENBQUNSLFFBQVEsQ0FBQ1MsR0FBRyxDQUFDLEdBQUdILFFBQVEsQ0FBQ1MsZ0JBQWdCLENBQUNQLEtBQUssQ0FBQztRQUNyRCxJQUFJLElBQUksQ0FBQ1IsUUFBUSxDQUFDUyxHQUFHLENBQUMsQ0FBQ08sTUFBTSxLQUFLLENBQUMsRUFBRTtVQUNuQyxJQUFJLENBQUNoQixRQUFRLENBQUNTLEdBQUcsQ0FBQyxHQUFHLElBQUk7UUFDM0IsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDVCxRQUFRLENBQUNTLEdBQUcsQ0FBQyxDQUFDTyxNQUFNLEtBQUssQ0FBQyxFQUFFO1VBQzFDLElBQUksQ0FBQ2hCLFFBQVEsQ0FBQ1MsR0FBRyxDQUFDLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDQyxLQUFLLENBQUM7UUFDcEQ7TUFDRjtJQUNGLENBQUMsQ0FBQztFQUNKO0VBQ0FILGlCQUFpQkEsQ0FBQSxFQUFHLENBQUM7RUFFckJZLG9CQUFvQkEsQ0FBQSxFQUFHLENBQUM7QUFDMUI7Ozs7Ozs7Ozs7Ozs7OztBQ3BDNkM7QUFFdEMsTUFBTUMsU0FBUyxTQUFTckIsOERBQVMsQ0FBQyxDQUFDLENBQUM7RUFDekNDLFdBQVdBLENBQUEsRUFBRztJQUNaLEtBQUssQ0FBQztNQUNKQyxPQUFPLEVBQUUsWUFBWTtNQUNyQkMsUUFBUSxFQUFFO1FBQ1JtQixLQUFLLEVBQUUsa0JBQWtCO1FBQ3pCQyxNQUFNLEVBQUU7TUFDVjtJQUNGLENBQUMsQ0FBQztFQUNKO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWjhCO0FBQ2M7QUFDUjtBQUNKO0FBQ0Q7QUFDZ0I7QUFFL0MsTUFBTUssR0FBRyxDQUFDO0VBQ1IzQixXQUFXQSxDQUFBLEVBQUc7SUFDWixJQUFJLENBQUM0QixhQUFhLENBQUMsQ0FBQztJQUNwQixJQUFJLENBQUNDLFdBQVcsQ0FBQyxDQUFDO0lBRWxCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsQ0FBQztFQUN6QjtFQUVBQyxlQUFlQSxDQUFBLEVBQUc7SUFDaEIsSUFBSSxDQUFDQyxTQUFTLEdBQUcsSUFBSVosNkRBQVMsQ0FBQyxDQUFDO0VBQ2xDO0VBRUFRLGFBQWFBLENBQUEsRUFBRztJQUNkLElBQUksQ0FBQ0ssT0FBTyxHQUFHekIsUUFBUSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSTtJQUN6RCxJQUFJLENBQUN5QixRQUFRLEdBQUcsSUFBSSxDQUFDRCxPQUFPLENBQUNFLFlBQVksQ0FBQyxlQUFlLENBQUM7RUFDNUQ7RUFFQU4sV0FBV0EsQ0FBQSxFQUFHO0lBQ1osSUFBSSxDQUFDTyxLQUFLLEdBQUc7TUFDWEMsSUFBSSxFQUFFLElBQUlkLGtEQUFJLENBQUMsQ0FBQztNQUNoQmUsS0FBSyxFQUFFLElBQUlaLG1EQUFLLENBQUMsQ0FBQztNQUNsQmEsV0FBVyxFQUFFLElBQUlmLHlEQUFXLENBQUMsQ0FBQztNQUM5QmdCLE1BQU0sRUFBRSxJQUFJZixxREFBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFJLENBQUNnQixJQUFJLEdBQUcsSUFBSSxDQUFDTCxLQUFLLENBQUMsSUFBSSxDQUFDRixRQUFRLENBQUM7SUFDckMsSUFBSSxDQUFDTyxJQUFJLENBQUNuQyxNQUFNLENBQUMsQ0FBQztJQUNsQixJQUFJLENBQUNtQyxJQUFJLENBQUNDLElBQUksQ0FBQyxDQUFDO0VBQ2xCO0VBRUEsTUFBTUMsUUFBUUEsQ0FBQztJQUFFQztFQUFJLENBQUMsRUFBRTtJQUN0QixNQUFNLElBQUksQ0FBQ0gsSUFBSSxDQUFDSSxJQUFJLENBQUMsQ0FBQztJQUV0QixNQUFNQyxPQUFPLEdBQUcsTUFBTWxDLE1BQU0sQ0FBQ21DLEtBQUssQ0FBQ0gsR0FBRyxDQUFDO0lBRXZDLElBQUlFLE9BQU8sQ0FBQ0UsTUFBTSxLQUFLLEdBQUcsRUFBRTtNQUMxQixNQUFNQyxJQUFJLEdBQUcsTUFBTUgsT0FBTyxDQUFDSSxJQUFJLENBQUMsQ0FBQztNQUNqQyxNQUFNQyxHQUFHLEdBQUczQyxRQUFRLENBQUM0QyxhQUFhLENBQUMsS0FBSyxDQUFDO01BRXpDRCxHQUFHLENBQUNFLFNBQVMsR0FBR0osSUFBSTtNQUVwQixNQUFNSyxVQUFVLEdBQUdILEdBQUcsQ0FBQzFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7TUFFaEQsSUFBSSxDQUFDeUIsUUFBUSxHQUFHb0IsVUFBVSxDQUFDbkIsWUFBWSxDQUFDLGVBQWUsQ0FBQztNQUV4RCxJQUFJLENBQUNGLE9BQU8sQ0FBQ3NCLFlBQVksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDckIsUUFBUSxDQUFDO01BRXpELElBQUksQ0FBQ0QsT0FBTyxDQUFDb0IsU0FBUyxHQUFHQyxVQUFVLENBQUNELFNBQVM7TUFFN0MsSUFBSSxDQUFDWixJQUFJLEdBQUcsSUFBSSxDQUFDTCxLQUFLLENBQUMsSUFBSSxDQUFDRixRQUFRLENBQUM7TUFFckMsSUFBSSxDQUFDTyxJQUFJLENBQUNuQyxNQUFNLENBQUMsQ0FBQztNQUNsQixJQUFJLENBQUNtQyxJQUFJLENBQUNDLElBQUksQ0FBQyxDQUFDO01BRWhCLElBQUksQ0FBQ1osZ0JBQWdCLENBQUMsQ0FBQztJQUN6QixDQUFDLE1BQU07TUFDTDBCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUN0QjtFQUNGO0VBRUEzQixnQkFBZ0JBLENBQUEsRUFBRztJQUNqQixNQUFNNEIsS0FBSyxHQUFHbEQsUUFBUSxDQUFDUyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7SUFDNUNuQix3Q0FBSSxDQUFDNEQsS0FBSyxFQUFHQyxJQUFJLElBQUs7TUFDcEJBLElBQUksQ0FBQ0MsT0FBTyxHQUFJQyxLQUFLLElBQUs7UUFDeEJBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7UUFDdEIsTUFBTTtVQUFFQztRQUFLLENBQUMsR0FBR0osSUFBSTtRQUNyQixJQUFJLENBQUNoQixRQUFRLENBQUM7VUFBRUMsR0FBRyxFQUFFbUI7UUFBSyxDQUFDLENBQUM7TUFDOUIsQ0FBQztJQUNILENBQUMsQ0FBQztFQUNKO0FBQ0Y7QUFFQSxJQUFJcEMsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7O1VDL0VUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLXByb2plY3QvLi9hcHAvY2xhc3Nlcy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLXByb2plY3QvLi9hcHAvY29tcG9uZW50cy9QcmVsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLXByb2plY3QvLi9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gXCJnc2FwXCI7XHJcbmltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGVsZW1lbnRzLCBpZCB9KSB7XHJcbiAgICB0aGlzLnNlbGVjdG9yID0gZWxlbWVudDtcclxuICAgIHRoaXMuc2VsZWN0b3JDaGlsZHJlbiA9IHsgLi4uZWxlbWVudHMgfTtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZSgpO1xyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKTtcclxuICAgIHRoaXMuZWxlbWVudHMgPSB7fTtcclxuXHJcbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbiwgKGVudHJ5LCBrZXkpID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGVudHJ5IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50IHx8XHJcbiAgICAgICAgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3QgfHxcclxuICAgICAgICBBcnJheS5pc0FycmF5KGVudHJ5KVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBlbnRyeTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVudHJ5KTtcclxuICAgICAgICBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gbnVsbDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZW50cnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge31cclxuXHJcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7fVxyXG59XHJcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4uL2NsYXNzZXMvQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJlbG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50KCkge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoe1xyXG4gICAgICBlbGVtZW50OiBcIi5wcmVsb2FkZXJcIixcclxuICAgICAgZWxlbWVudHM6IHtcclxuICAgICAgICB0aXRsZTogXCIucHJlbG9hZGVyX190ZXh0XCIsXHJcbiAgICAgICAgbnVtYmVyOiBcIi5wcmVsb2FkZXJfX251bWJlclwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBIb21lIGZyb20gXCJwYWdlcy9Ib21lXCI7XHJcbmltcG9ydCBDb2xsZWN0aW9ucyBmcm9tIFwicGFnZXMvQ29sbGVjdGlvbnNcIjtcclxuaW1wb3J0IERldGFpbHMgZnJvbSBcInBhZ2VzL0RldGFpbHNcIjtcclxuaW1wb3J0IEFib3V0IGZyb20gXCJwYWdlcy9BYm91dFwiO1xyXG5pbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIjtcclxuaW1wb3J0IFByZWxvYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL1ByZWxvYWRlclwiO1xyXG5cclxuY2xhc3MgQXBwIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuY3JlYXRlQ29udGVudCgpO1xyXG4gICAgdGhpcy5jcmVhdGVQYWdlcygpO1xyXG5cclxuICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlUHJlbG9hZGVyKCkge1xyXG4gICAgdGhpcy5wcmVsb2FkZXIgPSBuZXcgUHJlbG9hZGVyKCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVDb250ZW50KCkge1xyXG4gICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpIHx8IG51bGw7XHJcbiAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5jb250ZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGVtcGxhdGVcIik7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVQYWdlcygpIHtcclxuICAgIHRoaXMucGFnZXMgPSB7XHJcbiAgICAgIGhvbWU6IG5ldyBIb21lKCksXHJcbiAgICAgIGFib3V0OiBuZXcgQWJvdXQoKSxcclxuICAgICAgY29sbGVjdGlvbnM6IG5ldyBDb2xsZWN0aW9ucygpLFxyXG4gICAgICBkZXRhaWw6IG5ldyBEZXRhaWxzKCksXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV07XHJcbiAgICB0aGlzLnBhZ2UuY3JlYXRlKCk7XHJcbiAgICB0aGlzLnBhZ2Uuc2hvdygpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgb25DaGFuZ2UoeyB1cmwgfSkge1xyXG4gICAgYXdhaXQgdGhpcy5wYWdlLmhpZGUoKTtcclxuXHJcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgd2luZG93LmZldGNoKHVybCk7XHJcblxyXG4gICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgY29uc3QgaHRtbCA9IGF3YWl0IHJlcXVlc3QudGV4dCgpO1xyXG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgICAgZGl2LmlubmVySFRNTCA9IGh0bWw7XHJcblxyXG4gICAgICBjb25zdCBkaXZDb250ZW50ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcclxuXHJcbiAgICAgIHRoaXMudGVtcGxhdGUgPSBkaXZDb250ZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGVtcGxhdGVcIik7XHJcblxyXG4gICAgICB0aGlzLmNvbnRlbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10ZW1wbGF0ZVwiLCB0aGlzLnRlbXBsYXRlKTtcclxuXHJcbiAgICAgIHRoaXMuY29udGVudC5pbm5lckhUTUwgPSBkaXZDb250ZW50LmlubmVySFRNTDtcclxuXHJcbiAgICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV07XHJcblxyXG4gICAgICB0aGlzLnBhZ2UuY3JlYXRlKCk7XHJcbiAgICAgIHRoaXMucGFnZS5zaG93KCk7XHJcblxyXG4gICAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3JcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRMaW5rTGlzdGVuZXJzKCkge1xyXG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKTtcclxuICAgIGVhY2gobGlua3MsIChsaW5rKSA9PiB7XHJcbiAgICAgIGxpbmsub25jbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgeyBocmVmIH0gPSBsaW5rO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UoeyB1cmw6IGhyZWYgfSk7XHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbm5ldyBBcHAoKTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOGEwNmNiYjkyM2MzNGYzZTRiMTRcIikiXSwibmFtZXMiOlsiR1NBUCIsImVhY2giLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsImlkIiwic2VsZWN0b3IiLCJzZWxlY3RvckNoaWxkcmVuIiwiY3JlYXRlIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJlbnRyeSIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwicmVtb3ZlRXZlbnRMaXN0ZW5lcnMiLCJQcmVsb2FkZXIiLCJ0aXRsZSIsIm51bWJlciIsIkhvbWUiLCJDb2xsZWN0aW9ucyIsIkRldGFpbHMiLCJBYm91dCIsIkFwcCIsImNyZWF0ZUNvbnRlbnQiLCJjcmVhdGVQYWdlcyIsImFkZExpbmtMaXN0ZW5lcnMiLCJjcmVhdGVQcmVsb2FkZXIiLCJwcmVsb2FkZXIiLCJjb250ZW50IiwidGVtcGxhdGUiLCJnZXRBdHRyaWJ1dGUiLCJwYWdlcyIsImhvbWUiLCJhYm91dCIsImNvbGxlY3Rpb25zIiwiZGV0YWlsIiwicGFnZSIsInNob3ciLCJvbkNoYW5nZSIsInVybCIsImhpZGUiLCJyZXF1ZXN0IiwiZmV0Y2giLCJzdGF0dXMiLCJodG1sIiwidGV4dCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJkaXZDb250ZW50Iiwic2V0QXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsImxpbmtzIiwibGluayIsIm9uY2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=