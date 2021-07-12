(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["thank-you-thank-you-module"],{

/***/ "./src/app/thank-you/thank-you.module.ts":
/*!***********************************************!*\
  !*** ./src/app/thank-you/thank-you.module.ts ***!
  \***********************************************/
/*! exports provided: ThankYouPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouPageModule", function() { return ThankYouPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _thank_you_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thank-you.page */ "./src/app/thank-you/thank-you.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _thank_you_page__WEBPACK_IMPORTED_MODULE_5__["ThankYouPage"]
    }
];
var ThankYouPageModule = /** @class */ (function () {
    function ThankYouPageModule() {
    }
    ThankYouPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_thank_you_page__WEBPACK_IMPORTED_MODULE_5__["ThankYouPage"]]
        })
    ], ThankYouPageModule);
    return ThankYouPageModule;
}());



/***/ }),

/***/ "./src/app/thank-you/thank-you.page.html":
/*!***********************************************!*\
  !*** ./src/app/thank-you/thank-you.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Thank You</ion-title>\n    <!-- <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n          <div class=\"thankyou\">\n            <h4>\n              <!-- Thank you for the payment ! -->\n              Thank you for your order\n            </h4>\n          </div>\n        </ion-col>\n      </ion-row>\n  </ion-grid>\n  \n<ion-button color=\"success\" expand=\"full\" (click)=\"toHomePage()\">Continue Shopping</ion-button>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/thank-you/thank-you.page.scss":
/*!***********************************************!*\
  !*** ./src/app/thank-you/thank-you.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".thankyou {\n  text-align: center;\n  color: #155724;\n  background-color: #d4edda;\n  border-color: #c3e6cb;\n  padding: 22px 30px;\n  border: 1px solid #155724;\n  border-radius: 10px; }\n  .thankyou h4 {\n    margin: 0;\n    padding: 0;\n    font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWF2ZXJzd2ViL0Rlc2t0b3AvU21hcnRLYXJ0SHlicmlkL3NyYy9hcHAvdGhhbmsteW91L3RoYW5rLXlvdS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUIsRUFBQTtFQVB2QjtJQVNRLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGhhbmsteW91L3RoYW5rLXlvdS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGhhbmt5b3V7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMTU1NzI0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGVkZGE7XG4gICAgYm9yZGVyLWNvbG9yOiAjYzNlNmNiO1xuICAgIHBhZGRpbmc6IDIycHggMzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTU1NzI0O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaDR7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/thank-you/thank-you.page.ts":
/*!*********************************************!*\
  !*** ./src/app/thank-you/thank-you.page.ts ***!
  \*********************************************/
/*! exports provided: ThankYouPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouPage", function() { return ThankYouPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/utility.service */ "./src/app/api/utility.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ThankYouPage = /** @class */ (function () {
    function ThankYouPage(util, alertController, events, navCtrl, route, modalController, activeroute, menuCtrl) {
        this.util = util;
        this.alertController = alertController;
        this.events = events;
        this.navCtrl = navCtrl;
        this.route = route;
        this.modalController = modalController;
        this.activeroute = activeroute;
        this.menuCtrl = menuCtrl;
    }
    ThankYouPage.prototype.ngOnInit = function () {
    };
    ThankYouPage.prototype.toHomePage = function () {
        this.navCtrl.navigateRoot('/home');
    };
    ThankYouPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thank-you',
            template: __webpack_require__(/*! ./thank-you.page.html */ "./src/app/thank-you/thank-you.page.html"),
            styles: [__webpack_require__(/*! ./thank-you.page.scss */ "./src/app/thank-you/thank-you.page.scss")]
        }),
        __metadata("design:paramtypes", [_api_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], ThankYouPage);
    return ThankYouPage;
}());



/***/ })

}]);
//# sourceMappingURL=thank-you-thank-you-module.js.map