(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["privacy-policy-privacy-policy-module"],{

/***/ "./src/app/privacy-policy/privacy-policy.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.module.ts ***!
  \*********************************************************/
/*! exports provided: PrivacyPolicyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPageModule", function() { return PrivacyPolicyPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _privacy_policy_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./privacy-policy.page */ "./src/app/privacy-policy/privacy-policy.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _privacy_policy_page__WEBPACK_IMPORTED_MODULE_5__["PrivacyPolicyPage"]
    }
];
var PrivacyPolicyPageModule = /** @class */ (function () {
    function PrivacyPolicyPageModule() {
    }
    PrivacyPolicyPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_privacy_policy_page__WEBPACK_IMPORTED_MODULE_5__["PrivacyPolicyPage"]]
        })
    ], PrivacyPolicyPageModule);
    return PrivacyPolicyPageModule;
}());



/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.page.html":
/*!*********************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: #FFCC23\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Policy\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-grid>\n  <ion-row class=\"loginBx\">\n    <ion-col>\n    <ion-text>  \n      <div>\n      <!-- <h1>What is Lorem Ipsum?</h1> -->\n      <div [innerHTML]=\"description\"></div>\n  </div>  \n    </ion-text>  \n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg {\n  background-image: url(\"/assets/images/bg1.jpg\");\n  height: auto;\n  background-size: cover;\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center; }\n\n.loginBx {\n  margin: auto;\n  max-width: 374px;\n  padding: 25px;\n  background: rgba(252, 250, 250, 0.5);\n  border-radius: 10px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YXAvRGVza3RvcC9pb25pYyBQcm9qZWN0L3BwL1NtYXJ0LUNhcnQgMi9zcmMvYXBwL3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtDQUErQztFQUMvQyxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHlCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLGtDQUFrQyxFQUFBOztBQUV0QztFQUNJLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG9DQUFtQztFQUNuQyxtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmd7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9iZzEuanBnJyk7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgZmlsdGVyOiBibHVyKDBweCk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuLmxvZ2luQngge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXgtd2lkdGg6IDM3NHB4O1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgYmFja2dyb3VuZDpyZ2JhKDI1MiwgMjUwLCAyNTAsIDAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.page.ts ***!
  \*******************************************************/
/*! exports provided: PrivacyPolicyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPage", function() { return PrivacyPolicyPage; });
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




var PrivacyPolicyPage = /** @class */ (function () {
    function PrivacyPolicyPage(util, alertController, events, navCtrl, route, modalController, activeroute, menuCtrl) {
        this.util = util;
        this.alertController = alertController;
        this.events = events;
        this.navCtrl = navCtrl;
        this.route = route;
        this.modalController = modalController;
        this.activeroute = activeroute;
        this.menuCtrl = menuCtrl;
        this.description = "";
        this.myTermsService();
    }
    PrivacyPolicyPage.prototype.ngOnInit = function () {
    };
    PrivacyPolicyPage.prototype.myTermsService = function () {
        var _this = this;
        var myData = JSON.stringify({});
        console.log("Your myData: ", myData);
        this.util.presentLoading();
        this.util.getTypeDetailsWithAuth('sliders/pages.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            //console.log("Your data: ", result);
            _this.data = result;
            if (_this.data.success) {
                _this.termsService = _this.data.data.pages;
                _this.description = _this.termsService[2].description;
                //console.log("this.termsService", this.termsService)
                //console.log("this.description", this.description)
            }
            else {
                _this.util.showToast(_this.data.message);
            }
        }, function (error) {
            _this.util.dismissLoader();
            _this.util.showToast('Server error occured. Try again.');
        });
    };
    PrivacyPolicyPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-privacy-policy',
            template: __webpack_require__(/*! ./privacy-policy.page.html */ "./src/app/privacy-policy/privacy-policy.page.html"),
            styles: [__webpack_require__(/*! ./privacy-policy.page.scss */ "./src/app/privacy-policy/privacy-policy.page.scss")]
        }),
        __metadata("design:paramtypes", [_api_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], PrivacyPolicyPage);
    return PrivacyPolicyPage;
}());



/***/ })

}]);
//# sourceMappingURL=privacy-policy-privacy-policy-module.js.map