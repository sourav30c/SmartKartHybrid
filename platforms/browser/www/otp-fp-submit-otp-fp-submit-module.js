(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["otp-fp-submit-otp-fp-submit-module"],{

/***/ "./src/app/otp-fp-submit/otp-fp-submit.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/otp-fp-submit/otp-fp-submit.module.ts ***!
  \*******************************************************/
/*! exports provided: OtpFpSubmitPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpFpSubmitPageModule", function() { return OtpFpSubmitPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _otp_fp_submit_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./otp-fp-submit.page */ "./src/app/otp-fp-submit/otp-fp-submit.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _otp_fp_submit_page__WEBPACK_IMPORTED_MODULE_5__["OtpFpSubmitPage"]
    }
];
var OtpFpSubmitPageModule = /** @class */ (function () {
    function OtpFpSubmitPageModule() {
    }
    OtpFpSubmitPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_otp_fp_submit_page__WEBPACK_IMPORTED_MODULE_5__["OtpFpSubmitPage"]]
        })
    ], OtpFpSubmitPageModule);
    return OtpFpSubmitPageModule;
}());



/***/ }),

/***/ "./src/app/otp-fp-submit/otp-fp-submit.page.html":
/*!*******************************************************!*\
  !*** ./src/app/otp-fp-submit/otp-fp-submit.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button style=\"color: #FFCC23\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>OTP</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"logologin\">\n    <ion-img src=\"/assets/images/logo1.png\"></ion-img>\n  </div>\n  <div class=\"logologinInstruction\">\n    <h6>Verification</h6>\n    <label>Enter the OTP you received on your Email</label>\n  </div>\n\n  <ion-list class=\"ion-margin-top\">\n    <ion-item lines=\"none\">\n      <ion-label>\n        <ion-icon name=\"mail\" style=\"color: #FFCC23\"></ion-icon>\n      </ion-label>\n      <ion-col size=\"3\">\n        <ion-item>\n          <ion-input placeholder=\"*\" type=\"text\" [(ngModel)]=\"otp1\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"3\">\n        <ion-item>\n          <ion-input placeholder=\"*\" type=\"text\" [(ngModel)]=\"otp2\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"3\">\n        <ion-item>\n          <ion-input placeholder=\"*\" type=\"text\" [(ngModel)]=\"otp3\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"3\">\n        <ion-item>\n          <ion-input placeholder=\"*\" type=\"text\" [(ngModel)]=\"otp4\"></ion-input>\n        </ion-item>\n      </ion-col>\n\n    </ion-item>\n  </ion-list>\n\n  <label>Time Left : 00:40</label>\n  <div class=\"frmaxon\">\n    <ion-button (click)=\"submit()\" color=\"primary\" shape=\"round\" expand=\"block\">Verify</ion-button>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/otp-fp-submit/otp-fp-submit.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/otp-fp-submit/otp-fp-submit.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg {\n  background-image: url(\"/assets/images/bg.jpg\");\n  height: auto;\n  background-size: cover;\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center; }\n\n.logologin {\n  max-width: 135px;\n  padding: 15px;\n  margin: auto; }\n\nform label {\n  font-weight: 700;\n  font-size: .9rem; }\n\n.form-control {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  border: 1px solid rgba(0, 0, 0, 0.35); }\n\n.loginBx form input {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  border: 1px solid rgba(0, 0, 0, 0.35); }\n\n.frmaxon {\n  margin-top: 20px;\n  overflow: hidden; }\n\n.frmaxon .col {\n  float: left;\n  width: 50%; }\n\n.secondary-link {\n  font-weight: 700;\n  color: #000;\n  opacity: .4;\n  display: inline-block;\n  margin-top: 13px;\n  font-size: .9em; }\n\n.secondary-link:hover {\n  color: #000;\n  opacity: 1; }\n\n.loginBtn {\n  padding: 8px 20px;\n  width: 100%;\n  text-align: center;\n  border-radius: 30px;\n  font-size: 18px;\n  color: #fff;\n  background-color: #5E8F0F; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YXAvRGVza3RvcC9pb25pYyBQcm9qZWN0L3BwL1NtYXJ0LUNhcnQgMi9zcmMvYXBwL290cC1mcC1zdWJtaXQvb3RwLWZwLXN1Ym1pdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4Q0FBOEM7RUFDOUMsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixrQ0FBa0MsRUFBQTs7QUFHdEM7RUFDSSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWUsRUFBQTs7QUFFbkI7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIscUNBQWlDLEVBQUE7O0FBRXJDO0VBQ0ksa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHFDQUFpQyxFQUFBOztBQUVyQztFQUFTLGdCQUFnQjtFQUFFLGdCQUFnQixFQUFBOztBQUMzQztFQUFjLFdBQVc7RUFBRSxVQUFVLEVBQUE7O0FBQ3JDO0VBQ0ksZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGdCQUFlO0VBQ2YsZUFBYyxFQUFBOztBQUVsQjtFQUNJLFdBQVc7RUFDWCxVQUFTLEVBQUE7O0FBRWI7RUFDSSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFdBQVc7RUFDWCx5QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL290cC1mcC1zdWJtaXQvb3RwLWZwLXN1Ym1pdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmd7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9iZy5qcGcnKTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG5cbi5sb2dvbG9naW57XG4gICAgbWF4LXdpZHRoOiAxMzVweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuZm9ybSBsYWJlbHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTouOXJlbTtcbn1cbi5mb3JtLWNvbnRyb2x7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4zNSk7XG59XG4ubG9naW5CeCBmb3JtIGlucHV0e1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMzUpO1xufVxuLmZybWF4b257bWFyZ2luLXRvcDogMjBweDsgb3ZlcmZsb3c6IGhpZGRlbjt9XG4uZnJtYXhvbiAuY29se2Zsb2F0OiBsZWZ0OyB3aWR0aDogNTAlO31cbi5zZWNvbmRhcnktbGlua3tcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIG9wYWNpdHk6IC40O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tdG9wOjEzcHg7XG4gICAgZm9udC1zaXplOi45ZW07XG59XG4uc2Vjb25kYXJ5LWxpbms6aG92ZXJ7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgb3BhY2l0eToxO1xufVxuLmxvZ2luQnRuIHtcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojNUU4RjBGO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/otp-fp-submit/otp-fp-submit.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/otp-fp-submit/otp-fp-submit.page.ts ***!
  \*****************************************************/
/*! exports provided: OtpFpSubmitPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpFpSubmitPage", function() { return OtpFpSubmitPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/utility.service */ "./src/app/api/utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OtpFpSubmitPage = /** @class */ (function () {
    function OtpFpSubmitPage(menuCtrl, navCtrl, util, events, route) {
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.util = util;
        this.events = events;
        this.route = route;
    }
    OtpFpSubmitPage.prototype.ngOnInit = function () {
    };
    OtpFpSubmitPage.prototype.submit = function () {
        this.navCtrl.navigateForward(['/change-password', { pushedFrom: "FP" }]);
    };
    OtpFpSubmitPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-otp-fp-submit',
            template: __webpack_require__(/*! ./otp-fp-submit.page.html */ "./src/app/otp-fp-submit/otp-fp-submit.page.html"),
            styles: [__webpack_require__(/*! ./otp-fp-submit.page.scss */ "./src/app/otp-fp-submit/otp-fp-submit.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _api_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], OtpFpSubmitPage);
    return OtpFpSubmitPage;
}());



/***/ })

}]);
//# sourceMappingURL=otp-fp-submit-otp-fp-submit-module.js.map