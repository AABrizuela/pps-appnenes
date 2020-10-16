function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\"></div>\n<ion-backdrop class=\"backdrop\"></ion-backdrop>\n<ion-spinner name=\"bubbles\" duration=500 class=\"spinner\"></ion-spinner>\n\n<div class=\"container-titulo\">\n  <h1 class=\"titulo\">Granja</h1>\n</div>\n<ion-icon name=\"person-sharp\" size=\"large\" class=\"users\" (click)=\"Users()\"></ion-icon>\n<div class=\"container-form\">\n  \n  <form (ngSubmit) = \"Login()\" class=\"form\">\n      <ion-input class=\"input user-input\" type=\"text\" clear-input id=\"correo\" maxlength=\"35\" name=\"mail\" [(ngModel)]='mail' placeholder=\"Correo electronico\"></ion-input>\n      <ion-input class=\"input pass-input\" type=\"password\" clear-input id=\"pass\" maxlength=\"20\" name=\"password\" [(ngModel)]='password' placeholder=\"Contraseña\" (keyup.enter)=\"Login()\"></ion-input>\n\n      <div class=\"container-btn\">\n        <ion-button class=\"btn-login\" id=\"loginButton\" color=\"light\" type=\"submit\" [disabled]=\"mail === '' || password.length < 4 \" >Entrar</ion-button>\n      </div>\n  </form>\n</div>\n\n<div class=\"lista-usuarios\" *ngIf=\"(mail == '' || password == '') && showUser; then select\">\n\n\n</div>\n\n<ng-template #select>\n  <select (change)=\"completar()\" id=\"select\" class=\"lista-usuarios\">\n    <option selected hidden>Seleccione un usuario</option>\n    <option *ngFor=\"let usuario of usuarios | async\" [value]=\"usuario.correo\">\n      {{usuario.correo}}\n    </option>\n  </select>\n</ng-template>";
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
      }])],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  margin: 0px;\n  padding: 0px;\n}\n\n.container {\n  width: 100vw;\n  height: 100vh;\n  background: url('fondo.jpg');\n  background-size: cover;\n  transition: all 1s ease;\n}\n\n.container-titulo {\n  height: 7%;\n  width: 70%;\n  text-align: center;\n  position: absolute;\n  left: 15%;\n  top: 7.5%;\n}\n\n.titulo {\n  font-size: 4em;\n  font-family: Sketch;\n  font-weight: 900;\n  color: black;\n}\n\n.container-form {\n  position: absolute;\n  top: 35%;\n  left: 15%;\n  width: 70%;\n  height: 60%;\n}\n\n.container-form .form {\n  width: 100%;\n  height: 40%;\n  background: url('form.jpg');\n  background-size: cover;\n  border-radius: 20px;\n  border: #2f1f13 6px solid;\n  overflow: hidden;\n  box-sizing: border-box;\n  opacity: 0.9;\n  box-shadow: 1px 13px 24px 9px rgba(0, 0, 0, 0.75);\n}\n\nion-icon {\n  color: white;\n  margin-bottom: 5%;\n  transition: ease 0.2s;\n}\n\nion-icon:active {\n  color: black;\n}\n\n.users {\n  position: absolute;\n  left: 85%;\n  top: 5%;\n}\n\n.input {\n  background-color: #c0682d8e;\n  width: 85%;\n  height: 20%;\n  border-radius: 25px;\n  border: #2f1f13 2px solid;\n  position: relative;\n  top: 20%;\n  left: 7.5%;\n  --placeholder-color: black;\n  --placeholder-opacity: 0.8;\n}\n\n.input.pass-input {\n  top: 40%;\n}\n\n.btn-login {\n  width: 100% !important;\n  --ion-color-base: #79482d !important;\n  border: #2f1f13 4px solid;\n  border-radius: 10px;\n}\n\n.container-btn {\n  width: 100%;\n  position: absolute;\n  top: 80%;\n}\n\n.lista-usuarios {\n  position: absolute;\n  top: 70%;\n  left: 10%;\n  width: 80%;\n  border-radius: 5px;\n}\n\n.loading {\n  opacity: 0.5;\n  z-index: 8000;\n}\n\n.spinner {\n  --color: rgb(0, 0, 0);\n  z-index: 9000;\n  position: absolute;\n  top: 46%;\n  left: 46%;\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFBlcHNcXGdyYW5qYS1pbnRlcmFjdGl2YS9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREdBO0VBRUUsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNERjs7QURLQTtFQUVFLFVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FDSEY7O0FES0E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNGRjs7QURRQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0xGOztBRE9FO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaURBQUE7QUNMSjs7QURTQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDTkY7O0FEUUU7RUFDRSxZQUFBO0FDTko7O0FEVUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0FDUEY7O0FEVUE7RUFDRSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0FDUEY7O0FEV0U7RUFDRSxRQUFBO0FDVEo7O0FEYUE7RUFDRSxzQkFBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ1ZGOztBRGNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ1hGOztBRGVBO0VBRUUsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ2JGOztBRGdCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDYkY7O0FEZ0JBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUNiRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4vL2ZvbmRvXG4uY29udGFpbmVyXG57XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvZm9uZG8uanBnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XG59XG5cbi8vdGl0dWxvXG4uY29udGFpbmVyLXRpdHVsb1xue1xuICBoZWlnaHQ6IDclO1xuICB3aWR0aDogNzAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTUlO1xuICB0b3A6IDcuNSU7XG59XG4udGl0dWxvIHtcbiAgZm9udC1zaXplOiA0ZW07XG4gIGZvbnQtZmFtaWx5OiBTa2V0Y2g7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gIFxufVxuXG4vL2Zvcm1cblxuLmNvbnRhaW5lci1mb3JtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM1JTtcbiAgbGVmdDogMTUlO1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDYwJTtcblxuICAuZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvZm9ybS5qcGcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3JkZXI6ICMyZjFmMTMgNnB4IHNvbGlkO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgYm94LXNoYWRvdzogMXB4IDEzcHggMjRweCA5cHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgfSAgXG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgdHJhbnNpdGlvbjogZWFzZSAwLjJzO1xuXG4gICY6YWN0aXZlIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbn1cblxuLnVzZXJzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA4NSU7XG4gIHRvcDogNSU7XG59XG5cbi5pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMDY4MmQ4ZTtcbiAgd2lkdGg6IDg1JTtcbiAgaGVpZ2h0OiAyMCU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlcjogIzJmMWYxMyAycHggc29saWQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyMCU7XG4gIGxlZnQ6IDcuNSU7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrO1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuODtcbiAgXG4gIFxuXG4gICYucGFzcy1pbnB1dCB7XG4gICAgdG9wOiA0MCU7XG4gIH1cbn1cblxuLmJ0bi1sb2dpbiB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICM3OTQ4MmQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAjMmYxZjEzIDRweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcblxufVxuXG4uY29udGFpbmVyLWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogODAlO1xufVxuXG5cbi5saXN0YS11c3VhcmlvcyB7XG4gIC8vZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDcwJTtcbiAgbGVmdDogMTAlO1xuICB3aWR0aDogODAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5sb2FkaW5ne1xuICBvcGFjaXR5OiAwLjU7XG4gIHotaW5kZXg6IDgwMDA7XG59XG5cbi5zcGlubmVyIHtcbiAgLS1jb2xvcjogcmdiKDAsIDAsIDApO1xuICB6LWluZGV4OjkwMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NiU7XG4gIGxlZnQ6IDQ2JTtcbiAgZGlzcGxheTogbm9uZTtcbn0iLCIqIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvZm9uZG8uanBnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XG59XG5cbi5jb250YWluZXItdGl0dWxvIHtcbiAgaGVpZ2h0OiA3JTtcbiAgd2lkdGg6IDcwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDE1JTtcbiAgdG9wOiA3LjUlO1xufVxuXG4udGl0dWxvIHtcbiAgZm9udC1zaXplOiA0ZW07XG4gIGZvbnQtZmFtaWx5OiBTa2V0Y2g7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmNvbnRhaW5lci1mb3JtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM1JTtcbiAgbGVmdDogMTUlO1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDYwJTtcbn1cbi5jb250YWluZXItZm9ybSAuZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwJTtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvZm9ybS5qcGcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXI6ICMyZjFmMTMgNnB4IHNvbGlkO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvcGFjaXR5OiAwLjk7XG4gIGJveC1zaGFkb3c6IDFweCAxM3B4IDI0cHggOXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgdHJhbnNpdGlvbjogZWFzZSAwLjJzO1xufVxuaW9uLWljb246YWN0aXZlIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udXNlcnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDg1JTtcbiAgdG9wOiA1JTtcbn1cblxuLmlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwNjgyZDhlO1xuICB3aWR0aDogODUlO1xuICBoZWlnaHQ6IDIwJTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm9yZGVyOiAjMmYxZjEzIDJweCBzb2xpZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDIwJTtcbiAgbGVmdDogNy41JTtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogYmxhY2s7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC44O1xufVxuLmlucHV0LnBhc3MtaW5wdXQge1xuICB0b3A6IDQwJTtcbn1cblxuLmJ0bi1sb2dpbiB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICM3OTQ4MmQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAjMmYxZjEzIDRweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmNvbnRhaW5lci1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDgwJTtcbn1cblxuLmxpc3RhLXVzdWFyaW9zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDcwJTtcbiAgbGVmdDogMTAlO1xuICB3aWR0aDogODAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5sb2FkaW5nIHtcbiAgb3BhY2l0eTogMC41O1xuICB6LWluZGV4OiA4MDAwO1xufVxuXG4uc3Bpbm5lciB7XG4gIC0tY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgei1pbmRleDogOTAwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ2JTtcbiAgbGVmdDogNDYlO1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angularfire2/firestore */
    "./node_modules/angularfire2/firestore/index.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/vibration/ngx */
    "./node_modules/@ionic-native/vibration/ngx/index.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);

    var HomePage = /*#__PURE__*/function () {
      function HomePage(vibration, statusBar, db, router, loadingCtrl) {
        var _this = this;

        _classCallCheck(this, HomePage);

        this.vibration = vibration;
        this.statusBar = statusBar;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.mail = "";
        this.password = "";
        this.showUser = false;
        this.usuarios = db.collection('usuarios').valueChanges();
        this.usuarios.subscribe(function (usuarios) {
          return _this.lista = usuarios;
        }, function (error) {
          return console.log(error);
        });
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.statusBar.overlaysWebView(true);
          this.statusBar.isVisible = true;
          this.Spinner();
          this.clean();
        }
      }, {
        key: "Login",
        value: function Login() {
          var _this2 = this;

          this.mail = jquery__WEBPACK_IMPORTED_MODULE_7__("#correo").val();
          this.password = jquery__WEBPACK_IMPORTED_MODULE_7__("#pass").val();

          if (this.ValidarEmail(this.mail)) {
            if (this.ValidarPass(this.password)) {
              var flag = false;

              var _iterator = _createForOfIteratorHelper(this.lista),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var usuario = _step.value;

                  if (usuario.correo == this.mail && usuario.clave == this.password) {
                    flag = true;
                    this.Spinner();
                    setTimeout(function () {
                      _this2.router.navigate(['main']);
                    }, 2000);
                    break;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              if (!flag) {
                this.OverlayUser();
              }
            } else {
              this.OverlayUser();
            }
          } else {
            this.OverlayMail();
          }

          this.clean();
        }
      }, {
        key: "clean",
        value: function clean() {
          this.mail = "";
          this.password = "";
        }
      }, {
        key: "completar",
        value: function completar() {
          var correo = jquery__WEBPACK_IMPORTED_MODULE_7__('#select option:selected').val();

          var _iterator2 = _createForOfIteratorHelper(this.lista),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var usuario = _step2.value;

              if (usuario.correo == correo) {
                jquery__WEBPACK_IMPORTED_MODULE_7__("#correo").val(usuario.correo);
                jquery__WEBPACK_IMPORTED_MODULE_7__("#pass").val(usuario.clave);
                break;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        } //#region errores

      }, {
        key: "OverlayMail",
        value: function OverlayMail() {
          var _this3 = this;

          this.vibration.vibrate(1000);
          this.loadingCtrl.create({
            spinner: null,
            message: 'Correo electronico no valido',
            //showBackdrop: false,
            backdropDismiss: true
          }).then(function (overlay) {
            _this3.loading = overlay;

            _this3.loading.present();
          });
          setTimeout(function () {
            _this3.loading.dismiss();
          }, 3000);
        }
      }, {
        key: "OverlayUser",
        value: function OverlayUser() {
          var _this4 = this;

          this.vibration.vibrate(1000);
          this.loadingCtrl.create({
            spinner: null,
            message: 'Usuario o contraseña invalidos',
            //showBackdrop: false,
            backdropDismiss: true
          }).then(function (overlay) {
            _this4.loading = overlay;

            _this4.loading.present();
          });
          setTimeout(function () {
            _this4.loading.dismiss();
          }, 3000);
        } //#endregion
        //#region JQuery

      }, {
        key: "Users",
        value: function Users() {
          this.showUser = !this.showUser; //$(".lista-usuarios").fadeIn();
        }
      }, {
        key: "Spinner",
        value: function Spinner() {
          jquery__WEBPACK_IMPORTED_MODULE_7__(".container").addClass("loading");
          jquery__WEBPACK_IMPORTED_MODULE_7__(".spinner").css("display", "block");
          setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_7__(".container").removeClass("loading");
            jquery__WEBPACK_IMPORTED_MODULE_7__(".spinner").css("display", "none");
            jquery__WEBPACK_IMPORTED_MODULE_7__(".backdrop").attr("hidden", "true");
          }, 2000);
        } // #region validaciones

      }, {
        key: "ValidarEmail",
        value: function ValidarEmail(mail) {
          var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/i;
          var retorno = false;

          if (regex.test(mail)) {
            retorno = true;
          }

          return retorno;
        }
      }, {
        key: "ValidarPass",
        value: function ValidarPass(password) {
          var retorno = false;

          if (password.length >= 4) {
            retorno = true;
          }

          return retorno;
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_6__["Vibration"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]
      }, {
        type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }];
    };

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_6__["Vibration"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map