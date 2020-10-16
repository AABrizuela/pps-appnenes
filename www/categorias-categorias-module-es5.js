function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categorias-categorias-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/categorias.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/categorias.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCategoriasCategoriasPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"container-botones\">\n      <div class=\"botones-categorias numeros\"></div>\n      <div class=\"botones-categorias animales\"></div>\n      <div class=\"botones-categorias colores\"></div>\n  </div>\n  <ion-icon name=\"arrow-forward-outline\" class=\"siguiente\" size=\"large\"></ion-icon>\n  <ion-icon name=\"arrow-back-outline\" class=\"regresar\" size=\"large\"></ion-icon>\n</div>";
    /***/
  },

  /***/
  "./src/app/categorias/categorias-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/categorias/categorias-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: CategoriasPageRoutingModule */

  /***/
  function srcAppCategoriasCategoriasRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriasPageRoutingModule", function () {
      return CategoriasPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _categorias_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./categorias.page */
    "./src/app/categorias/categorias.page.ts");

    var routes = [{
      path: '',
      component: _categorias_page__WEBPACK_IMPORTED_MODULE_3__["CategoriasPage"]
    }];

    var CategoriasPageRoutingModule = function CategoriasPageRoutingModule() {
      _classCallCheck(this, CategoriasPageRoutingModule);
    };

    CategoriasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CategoriasPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/categorias/categorias.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/categorias/categorias.module.ts ***!
    \*************************************************/

  /*! exports provided: CategoriasPageModule */

  /***/
  function srcAppCategoriasCategoriasModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriasPageModule", function () {
      return CategoriasPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _categorias_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./categorias-routing.module */
    "./src/app/categorias/categorias-routing.module.ts");
    /* harmony import */


    var _categorias_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./categorias.page */
    "./src/app/categorias/categorias.page.ts");

    var CategoriasPageModule = function CategoriasPageModule() {
      _classCallCheck(this, CategoriasPageModule);
    };

    CategoriasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _categorias_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriasPageRoutingModule"]],
      declarations: [_categorias_page__WEBPACK_IMPORTED_MODULE_6__["CategoriasPage"]]
    })], CategoriasPageModule);
    /***/
  },

  /***/
  "./src/app/categorias/categorias.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/categorias/categorias.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCategoriasCategoriasPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  margin: 0px;\n  padding: 0px;\n}\n\n.container {\n  width: 100vw;\n  height: 100vh;\n  background: url('fondo.jpg');\n  background-size: cover;\n  background-position: center;\n  transition: all 1s ease;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.tercero {\n  background-position: right;\n}\n\n.container-botones {\n  width: 60%;\n  height: 70%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.botones-categorias {\n  width: 100%;\n  height: 30%;\n  box-shadow: 0px 0px 33px 13px rgba(0, 0, 0, 0.75);\n  border: 5px solid #332215;\n}\n\n.animales {\n  background: url('animales.jpg') center center;\n  background-size: cover;\n}\n\n.colores {\n  background-color: #fdf8e2;\n  background: url('colores.png') center center;\n  background-size: cover;\n}\n\n.numeros {\n  background: url('numeros.jpg') center center;\n  background-size: cover;\n}\n\n.siguiente {\n  position: absolute;\n  top: 50%;\n  right: 5%;\n  transition: ease color 0.2s;\n}\n\n.siguiente:active {\n  color: #333333;\n}\n\n.regresar {\n  position: absolute;\n  top: 50%;\n  left: 5%;\n  transition: ease color 0.2s;\n}\n\n.regresar:active {\n  color: #333333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmlhcy9DOlxcVXNlcnNcXFBlcHNcXGdyYW5qYS1pbnRlcmFjdGl2YS9zcmNcXGFwcFxcY2F0ZWdvcmlhc1xcY2F0ZWdvcmlhcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2NhdGVnb3JpYXMvY2F0ZWdvcmlhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREdBO0VBRUksWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUE7RUFDSSwwQkFBQTtBQ0RKOztBRElBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQ0RKOztBREtFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxpREFBQTtFQUNBLHlCQUFBO0FDRko7O0FETUU7RUFDRSw2Q0FBQTtFQUNBLHNCQUFBO0FDSEo7O0FETUU7RUFDSSx5QkFBQTtFQUNGLDRDQUFBO0VBQ0Esc0JBQUE7QUNISjs7QURNRTtFQUNFLDRDQUFBO0VBQ0Esc0JBQUE7QUNISjs7QURPRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQ0pKOztBREtJO0VBQ0ksY0FBQTtBQ0hSOztBRE9FO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FDSko7O0FES0k7RUFDSSxjQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yaWFzL2NhdGVnb3JpYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG4gIFxyXG4gIC8vZm9uZG9cclxuLmNvbnRhaW5lclxyXG57XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvZm9uZG8uanBnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZXJjZXJvIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xyXG59XHJcblxyXG4uY29udGFpbmVyLWJvdG9uZXMge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5ib3RvbmVzLWNhdGVnb3JpYXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMzNweCAxM3B4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZ2IoNTEsIDM0LCAyMSk7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5hbmltYWxlcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9hbmltYWxlcy5qcGcpIGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuICBcclxuICAuY29sb3JlcyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTMsIDI0OCwgMjI2KTtcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2NvbG9yZXMucG5nKSBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgXHJcbiAgLm51bWVyb3Mge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvbnVtZXJvcy5qcGcpIGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuICBcclxuICBcclxuICAuc2lndWllbnRlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgcmlnaHQ6IDUlO1xyXG4gICAgdHJhbnNpdGlvbjogZWFzZSBjb2xvciAwLjJzO1xyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnJlZ3Jlc2FyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogIDUlO1xyXG4gICAgdHJhbnNpdGlvbjogZWFzZSBjb2xvciAwLjJzO1xyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgIiwiKiB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2ZvbmRvLmpwZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGVyY2VybyB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xufVxuXG4uY29udGFpbmVyLWJvdG9uZXMge1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDcwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYm90b25lcy1jYXRlZ29yaWFzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAlO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDMzcHggMTNweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3JkZXI6IDVweCBzb2xpZCAjMzMyMjE1O1xufVxuXG4uYW5pbWFsZXMge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9hbmltYWxlcy5qcGcpIGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5jb2xvcmVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZjhlMjtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvY29sb3Jlcy5wbmcpIGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5udW1lcm9zIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvbnVtZXJvcy5qcGcpIGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5zaWd1aWVudGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICByaWdodDogNSU7XG4gIHRyYW5zaXRpb246IGVhc2UgY29sb3IgMC4ycztcbn1cbi5zaWd1aWVudGU6YWN0aXZlIHtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbi5yZWdyZXNhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUlO1xuICB0cmFuc2l0aW9uOiBlYXNlIGNvbG9yIDAuMnM7XG59XG4ucmVncmVzYXI6YWN0aXZlIHtcbiAgY29sb3I6ICMzMzMzMzM7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/categorias/categorias.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/categorias/categorias.page.ts ***!
    \***********************************************/

  /*! exports provided: CategoriasPage */

  /***/
  function srcAppCategoriasCategoriasPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriasPage", function () {
      return CategoriasPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CategoriasPage = /*#__PURE__*/function () {
      function CategoriasPage() {
        _classCallCheck(this, CategoriasPage);
      }

      _createClass(CategoriasPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CategoriasPage;
    }();

    CategoriasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-categorias',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./categorias.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/categorias/categorias.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./categorias.page.scss */
      "./src/app/categorias/categorias.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CategoriasPage);
    /***/
  }
}]);
//# sourceMappingURL=categorias-categorias-module-es5.js.map