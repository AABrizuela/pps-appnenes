(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"container-idiomas\">\r\n        <div class=\"botones-idiomas espaniol\" (click)=\"seleccionarEspaniol()\"></div>\r\n        <div class=\"botones-idiomas portugues\" (click)=\"seleccionarPortugues()\"></div>\r\n        <div class=\"botones-idiomas ingles\" (click)=\"seleccionarIngles()\"></div>\r\n    </div>\r\n    <div class=\"container-categorias\">\r\n        <div class=\"botones-categorias numeros\" (click)=\"seleccionarNumeros()\"></div>\r\n        <div class=\"botones-categorias animales\" (click)=\"seleccionarAnimales()\"></div>\r\n        <div class=\"botones-categorias colores\" (click)=\"seleccionarColores()\"></div>\r\n    </div>\r\n    <div class=\"container-objetos\">\r\n        <div class=\"botones-objetos btnUno\" (click)=\"reproducirAudio('uno')\"></div>\r\n        <div class=\"botones-objetos btnDos\" (click)=\"reproducirAudio('dos')\"></div>\r\n        <div class=\"botones-objetos btnTres\" (click)=\"reproducirAudio('tres')\"></div>\r\n        <div class=\"botones-objetos btnCuatro\" (click)=\"reproducirAudio('cuatro')\"></div>\r\n        <div class=\"botones-objetos btnCinco\" (click)=\"reproducirAudio('cinco')\"></div>\r\n    </div>\r\n\r\n    <div class=\"cambiar-idioma\">\r\n        <button class=\"drop-idioma\" (click)=\"dropear('lenguajeNum')\"><img class=\"idioma-activo\" src=\"../../assets/img/{{idiomaSeleccionado}}.png\"><ion-icon class=\"flechi\" name=\"caret-down-outline\"></ion-icon></button>\r\n      <ul class=\"lengu\" id=\"lenguajeNum\">\r\n        <li><img  (click)=\"selectEspaniol()\" src=\"../../assets/img/espaniol.png\"></li>\r\n        <li><img (click)=\"selectPortugues()\" src=\"../../assets/img/portugues.png\"></li>\r\n        <li><img (click)=\"selectIngles()\" src=\"../../assets/img/ingles.png\"></li>\r\n      </ul>\r\n    </div>\r\n\r\n    <div class=\"cambiar-categoria\">\r\n        <button class=\"drop-categoria\" (click)=\"dropear('categoriaNum')\"><img class=\"categoria-activa\" src=\"../../assets/img/icon-{{categoriaSeleccionada}}.png\"><ion-icon class=\"flechi\" name=\"caret-down-outline\"></ion-icon></button>\r\n      <ul class=\"categoria\" id=\"categoriaNum\">\r\n        <li><img  (click)=\"selectNumeros()\" src=\"../../assets/img/icon-numeros.png\"></li>\r\n        <li><img (click)=\"selectAnimales()\" src=\"../../assets/img/icon-animales.png\"></li>\r\n        <li><img (click)=\"selectColores()\" src=\"../../assets/img/icon-colores.png\"></li>\r\n      </ul>\r\n    </div>\r\n\r\n    \r\n    <div class=\"cambiar-categoria\"></div>\r\n    <ion-icon name=\"arrow-forward-outline\" class=\"siguiente-uno\" size=\"large\"  (click)=\"siguienteUno()\"></ion-icon>\r\n    <ion-icon name=\"arrow-forward-outline\" class=\"siguiente-dos\" size=\"large\" (click)=\"siguienteDos()\"></ion-icon>\r\n    <ion-icon name=\"arrow-back-outline\" class=\"regresar-uno\" size=\"large\" (click)=\"regresarUno()\"></ion-icon>\r\n    <ion-icon name=\"arrow-back-outline\" class=\"regresar-dos\" size=\"large\" (click)=\"regresarDos()\"></ion-icon>\r\n</div>");

/***/ }),

/***/ "./src/app/main/main-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MainPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageRoutingModule", function() { return MainPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.page */ "./src/app/main/main.page.ts");




const routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_3__["MainPage"]
    }
];
let MainPageRoutingModule = class MainPageRoutingModule {
};
MainPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MainPageRoutingModule);



/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/main/main-routing.module.ts");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.page */ "./src/app/main/main.page.ts");







let MainPageModule = class MainPageModule {
};
MainPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _main_routing_module__WEBPACK_IMPORTED_MODULE_5__["MainPageRoutingModule"]
        ],
        declarations: [_main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"]]
    })
], MainPageModule);



/***/ }),

/***/ "./src/app/main/main.page.scss":
/*!*************************************!*\
  !*** ./src/app/main/main.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0px;\n  padding: 0px;\n}\n\n.container {\n  width: 100vw;\n  height: 100vh;\n  background: url('fondo.jpg');\n  background-position: left;\n  background-size: cover;\n  transition: all 1s ease;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.container-idiomas, .container-categorias {\n  width: 60%;\n  height: 70%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.container-objetos {\n  display: none;\n  width: 60%;\n  height: 90%;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.container-categorias {\n  display: none;\n}\n\n.botones-idiomas, .botones-categorias {\n  width: 100%;\n  height: 30%;\n  box-shadow: 0px 0px 33px 13px rgba(0, 0, 0, 0.75);\n  border: 5px solid #332215;\n  -webkit-filter: saturate(0);\n          filter: saturate(0);\n  transition: ease 0.5s filter;\n}\n\n.botones-idiomas:hover, .botones-categorias:hover {\n  -webkit-filter: saturate(1);\n          filter: saturate(1);\n}\n\n.botones-objetos {\n  width: 100%;\n  height: 15%;\n  box-shadow: 0px 0px 33px 13px rgba(0, 0, 0, 0.75);\n  border: 5px solid #332215;\n  background-color: #333333;\n  background-size: contain;\n}\n\n.espaniol {\n  background: url('espaniol.png') center center;\n  background-size: cover;\n}\n\n.portugues {\n  background: url('portugues.png') center center;\n  background-size: cover;\n}\n\n.ingles {\n  background: url('ingles.png') center center;\n  background-size: cover;\n}\n\n.animales {\n  background: url('animales.jpg') center center;\n  background-size: cover;\n}\n\n.colores {\n  background-color: #fdf8e2;\n  background: url('colores.png') center center;\n  background-size: cover;\n}\n\n.numeros {\n  background: url('numeros.jpg') center center;\n  background-size: cover;\n}\n\n.unoNum {\n  background: url('uno.jpg') center;\n  background-size: contain;\n}\n\n.dosNum {\n  background: url('dos.jpg') center;\n  background-size: contain;\n}\n\n.tresNum {\n  background: url('tres.jpg') center;\n  background-size: contain;\n}\n\n.cuatroNum {\n  background: url('cuatro.jpg') center;\n  background-size: contain;\n}\n\n.cincoNum {\n  background: url('cinco.jpg') center;\n  background-size: contain;\n}\n\n.caballoAni {\n  background: url('caballo.png') center;\n  background-size: contain;\n}\n\n.cerdoAni {\n  background: url('cerdo.png') center;\n  background-size: contain;\n}\n\n.ovejaAni {\n  background: url('oveja.png') center;\n  background-size: contain;\n}\n\n.perroAni {\n  background: url('perro.jpg') center;\n  background-size: contain;\n}\n\n.vacaAni {\n  background: url('vaca.png') center;\n  background-size: contain;\n}\n\n.rojoCol {\n  background: url('rojo.png') center;\n  background-size: contain;\n}\n\n.azulCol {\n  background: url('azul.png') center;\n  background-size: contain;\n}\n\n.verdeCol {\n  background: url('verde.png') center;\n  background-size: contain;\n}\n\n.amarilloCol {\n  background: url('amarillo.png') center;\n  background-size: contain;\n}\n\n.violetaCol {\n  background: url('violeta.png') center;\n  background-size: contain;\n}\n\n.siguiente-uno, .siguiente-dos {\n  position: absolute;\n  top: 50%;\n  right: 5%;\n  transition: ease color 0.2s;\n  color: #333333;\n  display: none;\n}\n\n.siguiente-uno:active, .siguiente-dos:active {\n  color: whitesmoke;\n}\n\n.siguiente-dos {\n  display: none;\n}\n\n.regresar-uno, .regresar-dos {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 5%;\n  transition: ease color 0.2s;\n  color: #333333;\n}\n\n.regresar-uno:active, .regresar-dos:active {\n  color: whitesmoke;\n}\n\n.regresar-dos {\n  display: none;\n}\n\n.cambiar-idioma {\n  position: absolute;\n  top: 5%;\n  right: 2%;\n  display: none;\n}\n\n.cambiar-categoria {\n  position: absolute;\n  top: 5%;\n  left: 2%;\n  display: none;\n}\n\n.mundo {\n  font-size: 20px;\n}\n\n.drop-idioma, .drop-categoria {\n  width: 100%;\n  font-size: 20px;\n  border-radius: 5px;\n  border: none;\n  box-shadow: none;\n  outline: none;\n  color: #fff;\n  transition: All 250ms ease;\n  background-color: #332215;\n  border-radius: 3px;\n  padding: 3px;\n}\n\n.flechi {\n  font-size: 20px;\n}\n\nul {\n  position: absolute;\n  padding: 0;\n  transform-origin: top;\n  transform: perspective(1000px) rotateX(-90deg);\n  transition: 0.5s;\n  border-radius: 5px;\n}\n\nul.lengu, ul.categoria {\n  background: #d6d133;\n}\n\nul.active {\n  transform: perspective(1000px) rotateX(0deg);\n}\n\nul li {\n  list-style: none;\n}\n\nul li img {\n  display: block;\n  padding: 10px;\n  text-align: center;\n  text-decoration: none;\n  color: #fff;\n  border-top: 1px solid rgba(0, 0, 0, 0.2);\n  transition: 0.5s;\n  border-radius: 5px;\n}\n\nul.lengu li img:active, ul.categoria li img:active {\n  background: #7e7b1e;\n}\n\n.idioma-activo, .categoria-activa {\n  width: 30px;\n  height: 22px;\n  padding: 1px;\n}\n\n.idioma-activo.categoria-activa, .categoria-activa.categoria-activa {\n  height: 30px;\n}\n\n@media (orientation: landscape) {\n  .container {\n    width: 100vw;\n    height: 100vh;\n    background: url('fondo.jpg');\n    background-position: left;\n    background-size: cover;\n    transition: all 1s ease;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .container-idiomas, .container-categorias {\n    width: 85%;\n    height: 80%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .container-categorias {\n    display: none;\n  }\n\n  .botones-idiomas, .botones-categorias {\n    width: 25%;\n    height: 40%;\n    box-shadow: 0px 0px 33px 13px rgba(0, 0, 0, 0.75);\n    border: 5px solid #332215;\n    -webkit-filter: saturate(0);\n            filter: saturate(0);\n    transition: ease 0.5s filter;\n  }\n  .botones-idiomas:hover, .botones-categorias:hover {\n    -webkit-filter: saturate(1);\n            filter: saturate(1);\n  }\n\n  .siguiente-uno, .siguiente-dos {\n    position: absolute;\n    top: 50%;\n    right: 1%;\n    transition: ease color 0.2s;\n    color: #333333;\n    display: none;\n  }\n  .siguiente-uno:active, .siguiente-dos:active {\n    color: whitesmoke;\n  }\n\n  .regresar-uno, .regresar-dos {\n    display: none;\n    position: absolute;\n    top: 50%;\n    left: 1%;\n    transition: ease color 0.2s;\n    color: #333333;\n  }\n  .regresar-uno:active, .regresar-dos:active {\n    color: whitesmoke;\n  }\n\n  .container-objetos {\n    display: none;\n    width: 85%;\n    height: 90%;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .botones-objetos {\n    width: 18%;\n    height: 25%;\n    box-shadow: 0px 0px 33px 13px rgba(0, 0, 0, 0.75);\n    border: 5px solid #332215;\n    background-color: #333333;\n    background-size: contain;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9DOlxcVXNlcnNcXFBlcHNcXGdyYW5qYS1pbnRlcmFjdGl2YS9zcmNcXGFwcFxcbWFpblxcbWFpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL21haW4vbWFpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREdBO0VBRUksWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FDREY7O0FES0E7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FDRkY7O0FETUE7RUFDRSxhQUFBO0FDSEY7O0FET0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlEQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsNEJBQUE7QUNKRjs7QURNRTtFQUNFLDJCQUFBO1VBQUEsbUJBQUE7QUNKSjs7QURTQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaURBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUNORjs7QURTQTtFQUNFLDZDQUFBO0VBQ0Esc0JBQUE7QUNORjs7QURTQTtFQUNFLDhDQUFBO0VBQ0Esc0JBQUE7QUNORjs7QURTQTtFQUNFLDJDQUFBO0VBQ0Esc0JBQUE7QUNORjs7QURTQTtFQUNFLDZDQUFBO0VBQ0Esc0JBQUE7QUNORjs7QURTQTtFQUNJLHlCQUFBO0VBQ0YsNENBQUE7RUFDQSxzQkFBQTtBQ05GOztBRFNBO0VBQ0UsNENBQUE7RUFDQSxzQkFBQTtBQ05GOztBRFNBO0VBQ0UsaUNBQUE7RUFDQSx3QkFBQTtBQ05GOztBRFNBO0VBQ0UsaUNBQUE7RUFD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O0lBQ0EsVUFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtJQUNBLDhCQUFBO0lBQ0EsbUJBQUE7RUNmRjs7RURtQkE7SUFDRSxVQUFBO0lBQ0EsV0FBQTtJQUNBLGlEQUFBO0lBQ0EseUJBQUE7SUFDQSx5QkFBQTtJQUNBLHdCQUFBO0VDaEJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG4gIFxyXG4gIC8vZm9uZG9cclxuLmNvbnRhaW5lclxyXG57XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvZm9uZG8uanBnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWlkaW9tYXMsIC5jb250YWluZXItY2F0ZWdvcmlhcyB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBoZWlnaHQ6IDcwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxufVxyXG5cclxuLmNvbnRhaW5lci1vYmpldG9zIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG59XHJcblxyXG4uY29udGFpbmVyLWNhdGVnb3JpYXMge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4uYm90b25lcy1pZGlvbWFzLCAuYm90b25lcy1jYXRlZ29yaWFzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwJTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDMzcHggMTNweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkIHJnYig1MSwgMzQsIDIxKTtcclxuICBmaWx0ZXI6IHNhdHVyYXRlKDApO1xyXG4gIHRyYW5zaXRpb246IGVhc2UgMC41cyBmaWx0ZXI7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgZmlsdGVyOiBzYXR1cmF0ZSgxKTtcclxuICB9XHJcblxyXG59XHJcblxyXG4uYm90b25lcy1vYmpldG9zIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDE1JTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDMzcHggMTNweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkIHJnYig1MSwgMzQsIDIxKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG5cclxuLmVzcGFuaW9sIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9lc3BhbmlvbC5wbmcpIGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnBvcnR1Z3VlcyB7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvcG9ydHVndWVzLnBuZykgY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uaW5nbGVzIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9pbmdsZXMucG5nKSBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5hbmltYWxlcyB7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvYW5pbWFsZXMuanBnKSBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5jb2xvcmVzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTMsIDI0OCwgMjI2KTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9jb2xvcmVzLnBuZykgY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4ubnVtZXJvcyB7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvbnVtZXJvcy5qcGcpIGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnVub051bSB7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvbnVtZXJvcy91bm8uanBnKSBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG59XHJcblxyXG4uZG9zTnVtIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9udW1lcm9zL2Rvcy5qcGcpIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbn1cclxuXHJcbi50cmVzTnVtIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9udW1lcm9zL3RyZXMuanBnKSBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG59XHJcblxyXG4uY3VhdHJvTnVtIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9udW1lcm9zL2N1YXRyby5qcGcpIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbn1cclxuXHJcbi5jaW5jb051bSB7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvbnVtZXJvcy9jaW5jby5qcGcpIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbn1cclxuXHJcbi5jYWJhbGxvQW5pIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9hbmltYWxlcy9jYWJhbGxvLnBuZykgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG5cclxuLmNlcmRvQW5pIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9hbmltYWxlcy9jZXJkby5wbmcpIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbn1cclxuXHJcbi5vdmVqYUFuaSB7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvYW5pbWFsZXMvb3ZlamEucG5nKSBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG59XHJcblxyXG4ucGVycm9Bbmkge1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2FuaW1hbGVzL3BlcnJvLmpwZykgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG5cclxuLnZhY2FBbmkge1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2FuaW1hbGVzL3ZhY2EucG5nKSBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG59XHJcblxyXG4ucm9qb0NvbCB7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvY29sb3Jlcy9yb2pvLnBuZykgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG5cclxuLmF6dWxDb2wge1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2NvbG9yZXMvYXp1bC5wbmcpIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbn1cclxuXHJcbi52ZXJkZUNvbCB7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvY29sb3Jlcy92ZXJkZS5wbmcpIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbn1cclxuXHJcbi5hbWFyaWxsb0NvbCB7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvY29sb3Jlcy9hbWFyaWxsby5wbmcpIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbn1cclxuXHJcbi52aW9sZXRhQ29sIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9jb2xvcmVzL3Zpb2xldGEucG5nKSBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG59XHJcblxyXG5cclxuXHJcbi5zaWd1aWVudGUtdW5vLCAuc2lndWllbnRlLWRvcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHJpZ2h0OiA1JTtcclxuICB0cmFuc2l0aW9uOiBlYXNlIGNvbG9yIDAuMnM7XHJcbiAgY29sb3I6ICMzMzMzMzM7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICAmOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICB9XHJcbn1cclxuXHJcbi5zaWd1aWVudGUtZG9zIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ucmVncmVzYXItdW5vLCAucmVncmVzYXItZG9zIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiAgNSU7XHJcbiAgdHJhbnNpdGlvbjogZWFzZSBjb2xvciAwLjJzO1xyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG4gIFxyXG4gICY6YWN0aXZlIHtcclxuICAgICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgfVxyXG59XHJcblxyXG4ucmVncmVzYXItZG9zIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uY2FtYmlhci1pZGlvbWEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUlO1xyXG4gIHJpZ2h0OiAyJTtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uY2FtYmlhci1jYXRlZ29yaWEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUlO1xyXG4gIGxlZnQ6IDIlO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5tdW5kbyB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uZHJvcC1pZGlvbWEsIC5kcm9wLWNhdGVnb3JpYXtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdHJhbnNpdGlvbjogQWxsIDI1MG1zIGVhc2U7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMjIxNTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgcGFkZGluZzogM3B4O1xyXG59XHJcblxyXG5cclxuLmZsZWNoaXtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBcclxufVxyXG5cclxudWx7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVYKC05MGRlZyk7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbnVsLmxlbmd1LCB1bC5jYXRlZ29yaWF7XHJcbiAgYmFja2dyb3VuZDogI2Q2ZDEzMztcclxufVxyXG5cclxudWwuYWN0aXZle1xyXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVYKDBkZWcpO1xyXG59XHJcblxyXG51bCBsaSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxudWwgbGkgaW1nIHtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLC4yKTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxudWwubGVuZ3UgbGkgaW1nOmFjdGl2ZSwgdWwuY2F0ZWdvcmlhIGxpIGltZzphY3RpdmV7XHJcbiAgYmFja2dyb3VuZDogIzdlN2IxZTtcclxufVxyXG5cclxuLmlkaW9tYS1hY3Rpdm8sIC5jYXRlZ29yaWEtYWN0aXZhIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDIycHg7XHJcbiAgcGFkZGluZzogMXB4O1xyXG4gICYuY2F0ZWdvcmlhLWFjdGl2YSB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAuY29udGFpbmVyXHJcbiAge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2ZvbmRvLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLmNvbnRhaW5lci1pZGlvbWFzLCAuY29udGFpbmVyLWNhdGVnb3JpYXMge1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lci1jYXRlZ29yaWFzIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuYm90b25lcy1pZGlvbWFzLCAuYm90b25lcy1jYXRlZ29yaWFzIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMzNweCAxM3B4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZ2IoNTEsIDM0LCAyMSk7XHJcbiAgICBmaWx0ZXI6IHNhdHVyYXRlKDApO1xyXG4gICAgdHJhbnNpdGlvbjogZWFzZSAwLjVzIGZpbHRlcjtcclxuICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBmaWx0ZXI6IHNhdHVyYXRlKDEpO1xyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuXHJcbiAgLnNpZ3VpZW50ZS11bm8sIC5zaWd1aWVudGUtZG9zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgcmlnaHQ6IDElO1xyXG4gICAgdHJhbnNpdGlvbjogZWFzZSBjb2xvciAwLjJzO1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5yZWdyZXNhci11bm8sIC5yZWdyZXNhci1kb3Mge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogIDElO1xyXG4gICAgdHJhbnNpdGlvbjogZWFzZSBjb2xvciAwLjJzO1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICBcclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250YWluZXItb2JqZXRvcyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbiAgfVxyXG5cclxuICAuYm90b25lcy1vYmpldG9zIHtcclxuICAgIHdpZHRoOiAxOCU7XHJcbiAgICBoZWlnaHQ6IDI1JTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMzNweCAxM3B4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZ2IoNTEsIDM0LCAyMSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIH1cclxufSIsIioge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9mb25kby5qcGcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXItaWRpb21hcywgLmNvbnRhaW5lci1jYXRlZ29yaWFzIHtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiA3MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNvbnRhaW5lci1vYmpldG9zIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNvbnRhaW5lci1jYXRlZ29yaWFzIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmJvdG9uZXMtaWRpb21hcywgLmJvdG9uZXMtY2F0ZWdvcmlhcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwJTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzM3B4IDEzcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm9yZGVyOiA1cHggc29saWQgIzMzMjIxNTtcbiAgZmlsdGVyOiBzYXR1cmF0ZSgwKTtcbiAgdHJhbnNpdGlvbjogZWFzZSAwLjVzIGZpbHRlcjtcbn1cbi5ib3RvbmVzLWlkaW9tYXM6aG92ZXIsIC5ib3RvbmVzLWNhdGVnb3JpYXM6aG92ZXIge1xuICBmaWx0ZXI6IHNhdHVyYXRlKDEpO1xufVxuXG4uYm90b25lcy1vYmpldG9zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUlO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDMzcHggMTNweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3JkZXI6IDVweCBzb2xpZCAjMzMyMjE1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbi5lc3BhbmlvbCB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2VzcGFuaW9sLnBuZykgY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnBvcnR1Z3VlcyB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL3BvcnR1Z3Vlcy5wbmcpIGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5pbmdsZXMge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9pbmdsZXMucG5nKSBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uYW5pbWFsZXMge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9hbmltYWxlcy5qcGcpIGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5jb2xvcmVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZjhlMjtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvY29sb3Jlcy5wbmcpIGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5udW1lcm9zIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvbnVtZXJvcy5qcGcpIGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi51bm9OdW0ge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9udW1lcm9zL3Vuby5qcGcpIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4uZG9zTnVtIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvbnVtZXJvcy9kb3MuanBnKSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuLnRyZXNOdW0ge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9udW1lcm9zL3RyZXMuanBnKSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuLmN1YXRyb051bSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL251bWVyb3MvY3VhdHJvLmpwZykgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbi5jaW5jb051bSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL251bWVyb3MvY2luY28uanBnKSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuLmNhYmFsbG9Bbmkge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9hbmltYWxlcy9jYWJhbGxvLnBuZykgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbi5jZXJkb0FuaSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2FuaW1hbGVzL2NlcmRvLnBuZykgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbi5vdmVqYUFuaSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2FuaW1hbGVzL292ZWphLnBuZykgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbi5wZXJyb0FuaSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2FuaW1hbGVzL3BlcnJvLmpwZykgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbi52YWNhQW5pIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvYW5pbWFsZXMvdmFjYS5wbmcpIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4ucm9qb0NvbCB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2NvbG9yZXMvcm9qby5wbmcpIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4uYXp1bENvbCB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2NvbG9yZXMvYXp1bC5wbmcpIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4udmVyZGVDb2wge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9jb2xvcmVzL3ZlcmRlLnBuZykgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbi5hbWFyaWxsb0NvbCB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2NvbG9yZXMvYW1hcmlsbG8ucG5nKSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuLnZpb2xldGFDb2wge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9jb2xvcmVzL3Zpb2xldGEucG5nKSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuLnNpZ3VpZW50ZS11bm8sIC5zaWd1aWVudGUtZG9zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDUlO1xuICB0cmFuc2l0aW9uOiBlYXNlIGNvbG9yIDAuMnM7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBkaXNwbGF5OiBub25lO1xufVxuLnNpZ3VpZW50ZS11bm86YWN0aXZlLCAuc2lndWllbnRlLWRvczphY3RpdmUge1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLnNpZ3VpZW50ZS1kb3Mge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucmVncmVzYXItdW5vLCAucmVncmVzYXItZG9zIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNSU7XG4gIHRyYW5zaXRpb246IGVhc2UgY29sb3IgMC4ycztcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4ucmVncmVzYXItdW5vOmFjdGl2ZSwgLnJlZ3Jlc2FyLWRvczphY3RpdmUge1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLnJlZ3Jlc2FyLWRvcyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jYW1iaWFyLWlkaW9tYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1JTtcbiAgcmlnaHQ6IDIlO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2FtYmlhci1jYXRlZ29yaWEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNSU7XG4gIGxlZnQ6IDIlO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubXVuZG8ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5kcm9wLWlkaW9tYSwgLmRyb3AtY2F0ZWdvcmlhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBBbGwgMjUwbXMgZWFzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMjIxNTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbi5mbGVjaGkge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbnVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAwO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVYKC05MGRlZyk7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxudWwubGVuZ3UsIHVsLmNhdGVnb3JpYSB7XG4gIGJhY2tncm91bmQ6ICNkNmQxMzM7XG59XG5cbnVsLmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVYKDBkZWcpO1xufVxuXG51bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbnVsIGxpIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxudWwubGVuZ3UgbGkgaW1nOmFjdGl2ZSwgdWwuY2F0ZWdvcmlhIGxpIGltZzphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjN2U3YjFlO1xufVxuXG4uaWRpb21hLWFjdGl2bywgLmNhdGVnb3JpYS1hY3RpdmEge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBwYWRkaW5nOiAxcHg7XG59XG4uaWRpb21hLWFjdGl2by5jYXRlZ29yaWEtYWN0aXZhLCAuY2F0ZWdvcmlhLWFjdGl2YS5jYXRlZ29yaWEtYWN0aXZhIHtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvZm9uZG8uanBnKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmNvbnRhaW5lci1pZGlvbWFzLCAuY29udGFpbmVyLWNhdGVnb3JpYXMge1xuICAgIHdpZHRoOiA4NSU7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmNvbnRhaW5lci1jYXRlZ29yaWFzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmJvdG9uZXMtaWRpb21hcywgLmJvdG9uZXMtY2F0ZWdvcmlhcyB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDMzcHggMTNweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkICMzMzIyMTU7XG4gICAgZmlsdGVyOiBzYXR1cmF0ZSgwKTtcbiAgICB0cmFuc2l0aW9uOiBlYXNlIDAuNXMgZmlsdGVyO1xuICB9XG4gIC5ib3RvbmVzLWlkaW9tYXM6aG92ZXIsIC5ib3RvbmVzLWNhdGVnb3JpYXM6aG92ZXIge1xuICAgIGZpbHRlcjogc2F0dXJhdGUoMSk7XG4gIH1cblxuICAuc2lndWllbnRlLXVubywgLnNpZ3VpZW50ZS1kb3Mge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICByaWdodDogMSU7XG4gICAgdHJhbnNpdGlvbjogZWFzZSBjb2xvciAwLjJzO1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnNpZ3VpZW50ZS11bm86YWN0aXZlLCAuc2lndWllbnRlLWRvczphY3RpdmUge1xuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICB9XG5cbiAgLnJlZ3Jlc2FyLXVubywgLnJlZ3Jlc2FyLWRvcyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogMSU7XG4gICAgdHJhbnNpdGlvbjogZWFzZSBjb2xvciAwLjJzO1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICB9XG4gIC5yZWdyZXNhci11bm86YWN0aXZlLCAucmVncmVzYXItZG9zOmFjdGl2ZSB7XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG4gIH1cblxuICAuY29udGFpbmVyLW9iamV0b3Mge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmJvdG9uZXMtb2JqZXRvcyB7XG4gICAgd2lkdGg6IDE4JTtcbiAgICBoZWlnaHQ6IDI1JTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDMzcHggMTNweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkICMzMzIyMTU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/main/main.page.ts":
/*!***********************************!*\
  !*** ./src/app/main/main.page.ts ***!
  \***********************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




let MainPage = class MainPage {
    constructor(router) {
        this.router = router;
        this.idiomaSeleccionado = "";
        this.categoriaSeleccionada = "";
        this.reproducir = false;
    }
    ngOnInit() {
    }
    seleccionarEspaniol() {
        this.idiomaSeleccionado = "espaniol";
        jquery__WEBPACK_IMPORTED_MODULE_3__(".siguiente-uno").fadeIn();
    }
    seleccionarPortugues() {
        this.idiomaSeleccionado = "portugues";
        jquery__WEBPACK_IMPORTED_MODULE_3__(".siguiente-uno").fadeIn();
    }
    seleccionarIngles() {
        this.idiomaSeleccionado = "ingles";
        jquery__WEBPACK_IMPORTED_MODULE_3__(".siguiente-uno").fadeIn();
    }
    seleccionarNumeros() {
        this.categoriaSeleccionada = "numeros";
        jquery__WEBPACK_IMPORTED_MODULE_3__(".siguiente-dos").fadeIn();
    }
    seleccionarAnimales() {
        this.categoriaSeleccionada = "animales";
        jquery__WEBPACK_IMPORTED_MODULE_3__(".siguiente-dos").fadeIn();
    }
    seleccionarColores() {
        this.categoriaSeleccionada = "colores";
        jquery__WEBPACK_IMPORTED_MODULE_3__(".siguiente-dos").fadeIn();
    }
    siguienteUno() {
        jquery__WEBPACK_IMPORTED_MODULE_3__(".container-idiomas").fadeOut();
        jquery__WEBPACK_IMPORTED_MODULE_3__(".siguiente-uno").fadeOut();
        jquery__WEBPACK_IMPORTED_MODULE_3__(".container").css("background-position", "center");
        setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__(".container-categorias").fadeIn();
            jquery__WEBPACK_IMPORTED_MODULE_3__(".container-categorias").css("display", "flex");
            jquery__WEBPACK_IMPORTED_MODULE_3__(".regresar-uno").fadeIn();
            //$(".siguiente-dos").fadeIn();  
        }, 500);
    }
    removerClases() {
        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnUno").removeClass("caballoAni");
        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnDos").removeClass("cerdoAni");
        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnTres").removeClass("ovejaAni");
        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnCuatro").removeClass("perroAni");
        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnCinco").removeClass("vacaAni");
        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnUno").removeClass("unoNum");
        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnDos").removeClass("dosNum");
        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnTres").removeClass("tresNum");
        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnCuatro").removeClass("cuatroNum");
        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnCinco").removeClass("cincoNum");
        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnUno").removeClass("rojoCol");
        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnDos").removeClass("azulCol");
        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnTres").removeClass("verdeCol");
        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnCuatro").removeClass("amarilloCol");
        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnCinco").removeClass("violetaCol");
    }
    siguienteDos() {
        jquery__WEBPACK_IMPORTED_MODULE_3__(".container-categorias").fadeOut();
        jquery__WEBPACK_IMPORTED_MODULE_3__(".siguiente-dos").fadeOut();
        jquery__WEBPACK_IMPORTED_MODULE_3__(".container").css("background-position", "right");
        jquery__WEBPACK_IMPORTED_MODULE_3__(".cambiar-idioma").fadeIn();
        jquery__WEBPACK_IMPORTED_MODULE_3__(".cambiar-categoria").fadeIn();
        //alert(this.idiomaSeleccionado + "\n" + this.categoriaSeleccionada);
        switch (this.idiomaSeleccionado) {
            case "espaniol":
                switch (this.categoriaSeleccionada) {
                    case "numeros":
                        this.removerClases();
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnUno").addClass("unoNum");
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnDos").addClass("dosNum");
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnTres").addClass("tresNum");
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnCuatro").addClass("cuatroNum");
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnCinco").addClass("cincoNum");
                        break;
                    case "animales":
                        this.removerClases();
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnUno").addClass("caballoAni");
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnDos").addClass("cerdoAni");
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnTres").addClass("ovejaAni");
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnCuatro").addClass("perroAni");
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnCinco").addClass("vacaAni");
                        break;
                    case "colores":
                        this.removerClases();
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnUno").addClass("rojoCol");
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnDos").addClass("azulCol");
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnTres").addClass("verdeCol");
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnCuatro").addClass("amarilloCol");
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnCinco").addClass("violetaCol");
                        break;
                }
                break;
            case "ingles":
                switch (this.categoriaSeleccionada) {
                    case "numeros":
                        this.removerClases();
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnUno").addClass("unoNum");
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnDos").addClass("dosNum");
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnTres").addClass("tresNum");
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnCuatro").addClass("cuatroNum");
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnCinco").addClass("cincoNum");
                        break;
                    case "animales":
                        this.removerClases();
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnUno").addClass("caballoAni");
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnDos").addClass("cerdoAni");
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnTres").addClass("ovejaAni");
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnCuatro").addClass("perroAni");
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnCinco").addClass("vacaAni");
                        break;
                    case "colores":
                        this.removerClases();
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnUno").addClass("rojoCol");
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnDos").addClass("azulCol");
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnTres").addClass("verdeCol");
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnCuatro").addClass("amarilloCol");
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnCinco").addClass("violetaCol");
                        break;
                }
                break;
            case "portugues":
                switch (this.categoriaSeleccionada) {
                    case "numeros":
                        this.removerClases();
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnUno").addClass("unoNum");
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnDos").addClass("dosNum");
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnTres").addClass("tresNum");
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnCuatro").addClass("cuatroNum");
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnCinco").addClass("cincoNum");
                        break;
                    case "animales":
                        this.removerClases();
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnUno").addClass("caballoAni");
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnDos").addClass("cerdoAni");
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnTres").addClass("ovejaAni");
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnCuatro").addClass("perroAni");
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnCinco").addClass("vacaAni");
                        break;
                    case "colores":
                        this.removerClases();
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnUno").addClass("rojoCol");
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnDos").addClass("azulCol");
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnTres").addClass("verdeCol");
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnCuatro").addClass("amarilloCol");
                        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnCinco").addClass("violetaCol");
                        break;
                }
                break;
        }
        setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__(".container-objetos").fadeIn();
            jquery__WEBPACK_IMPORTED_MODULE_3__(".container-objetos").css("display", "flex");
            jquery__WEBPACK_IMPORTED_MODULE_3__(".regresar-dos").fadeIn();
            //$(".siguiente-dos").fadeIn();  
        }, 500);
    }
    regresarUno() {
        jquery__WEBPACK_IMPORTED_MODULE_3__(".container-categorias").fadeOut();
        jquery__WEBPACK_IMPORTED_MODULE_3__(".regresar-uno").fadeOut();
        jquery__WEBPACK_IMPORTED_MODULE_3__(".siguiente-dos").fadeOut();
        setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__(".container-idiomas").fadeIn();
            //$(".siguiente-uno").fadeIn();
            jquery__WEBPACK_IMPORTED_MODULE_3__(".container").css("background-position", "left");
        }, 500);
    }
    regresarDos() {
        jquery__WEBPACK_IMPORTED_MODULE_3__(".container-objetos").fadeOut();
        jquery__WEBPACK_IMPORTED_MODULE_3__(".regresar-dos").fadeOut();
        this.categoriaSeleccionada = "";
        //$(".siguiente-dos").fadeOut();
        setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__(".container-categorias").fadeIn();
            jquery__WEBPACK_IMPORTED_MODULE_3__(".siguiente-dos").fadeIn();
            jquery__WEBPACK_IMPORTED_MODULE_3__(".regresar-uno").fadeIn();
            jquery__WEBPACK_IMPORTED_MODULE_3__(".container").css("background-position", "center");
        }, 500);
    }
    reproducirAudio(ruta) {
        let audio = new Audio("../../assets/audio/" + this.idiomaSeleccionado + "/" + this.categoriaSeleccionada + "/" + ruta + ".mp3");
        audio.play();
        this.reproducir = true;
        setTimeout(() => {
            this.reproducir = false;
        }, 2000);
    }
    dropear(value) {
        jquery__WEBPACK_IMPORTED_MODULE_3__(`#${value}`).toggleClass('active');
    }
    ;
    selectNumeros() {
        this.categoriaSeleccionada = "numeros";
        this.removerClases();
        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnUno").addClass("unoNum");
        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnDos").addClass("dosNum");
        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnTres").addClass("tresNum");
        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnCuatro").addClass("cuatroNum");
        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnCinco").addClass("cincoNum");
    }
    selectAnimales() {
        this.categoriaSeleccionada = "animales";
        this.removerClases();
        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnUno").addClass("caballoAni");
        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnDos").addClass("cerdoAni");
        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnTres").addClass("ovejaAni");
        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnCuatro").addClass("perroAni");
        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnCinco").addClass("vacaAni");
    }
    selectColores() {
        this.categoriaSeleccionada = "colores";
        this.removerClases();
        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnUno").addClass("rojoCol");
        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnDos").addClass("azulCol");
        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnTres").addClass("verdeCol");
        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnCuatro").addClass("amarilloCol");
        jquery__WEBPACK_IMPORTED_MODULE_3__(".btnCinco").addClass("violetaCol");
    }
    selectEspaniol() {
        this.idiomaSeleccionado = "espaniol";
    }
    selectPortugues() {
        this.idiomaSeleccionado = "portugues";
    }
    selectIngles() {
        this.idiomaSeleccionado = "ingles";
    }
};
MainPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MainPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.page.scss */ "./src/app/main/main.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], MainPage);



/***/ })

}]);
//# sourceMappingURL=main-main-module-es2015.js.map