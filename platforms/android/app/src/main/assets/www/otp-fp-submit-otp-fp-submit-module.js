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

module.exports = ".bg {\n  background-image: url(\"/assets/images/bg.jpg\");\n  height: auto;\n  background-size: cover;\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center; }\n\n.logologin {\n  max-width: 135px;\n  padding: 15px;\n  margin: auto; }\n\nform label {\n  font-weight: 700;\n  font-size: .9rem; }\n\n.form-control {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  border: 1px solid rgba(0, 0, 0, 0.35); }\n\n.loginBx form input {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  border: 1px solid rgba(0, 0, 0, 0.35); }\n\n.frmaxon {\n  margin-top: 20px;\n  overflow: hidden; }\n\n.frmaxon .col {\n  float: left;\n  width: 50%; }\n\n.secondary-link {\n  font-weight: 700;\n  color: #000;\n  opacity: .4;\n  display: inline-block;\n  margin-top: 13px;\n  font-size: .9em; }\n\n.secondary-link:hover {\n  color: #000;\n  opacity: 1; }\n\n.loginBtn {\n  padding: 8px 20px;\n  width: 100%;\n  text-align: center;\n  border-radius: 30px;\n  font-size: 18px;\n  color: #fff;\n  background-color: #5E8F0F; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWF2ZXJzd2ViL0Rlc2t0b3AvU21hcnRLYXJ0SHlicmlkL3NyYy9hcHAvb3RwLWZwLXN1Ym1pdC9vdHAtZnAtc3VibWl0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhDQUE4QztFQUM5QyxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHlCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLGtDQUFrQyxFQUFBOztBQUd0QztFQUNJLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZSxFQUFBOztBQUVuQjtFQUNJLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixxQ0FBaUMsRUFBQTs7QUFFckM7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIscUNBQWlDLEVBQUE7O0FBRXJDO0VBQVMsZ0JBQWdCO0VBQUUsZ0JBQWdCLEVBQUE7O0FBQzNDO0VBQWMsV0FBVztFQUFFLFVBQVUsRUFBQTs7QUFDckM7RUFDSSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZ0JBQWU7RUFDZixlQUFjLEVBQUE7O0FBRWxCO0VBQ0ksV0FBVztFQUNYLFVBQVMsRUFBQTs7QUFFYjtFQUNJLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsV0FBVztFQUNYLHlCQUF3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvb3RwLWZwLXN1Ym1pdC9vdHAtZnAtc3VibWl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JnLmpwZycpO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGZpbHRlcjogYmx1cigwcHgpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cblxuLmxvZ29sb2dpbntcbiAgICBtYXgtd2lkdGg6IDEzNXB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG5mb3JtIGxhYmVse1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOi45cmVtO1xufVxuLmZvcm0tY29udHJvbHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmYwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjM1KTtcbn1cbi5sb2dpbkJ4IGZvcm0gaW5wdXR7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4zNSk7XG59XG4uZnJtYXhvbnttYXJnaW4tdG9wOiAyMHB4OyBvdmVyZmxvdzogaGlkZGVuO31cbi5mcm1heG9uIC5jb2x7ZmxvYXQ6IGxlZnQ7IHdpZHRoOiA1MCU7fVxuLnNlY29uZGFyeS1saW5re1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgb3BhY2l0eTogLjQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi10b3A6MTNweDtcbiAgICBmb250LXNpemU6LjllbTtcbn1cbi5zZWNvbmRhcnktbGluazpob3ZlcntcbiAgICBjb2xvcjogIzAwMDtcbiAgICBvcGFjaXR5OjE7XG59XG4ubG9naW5CdG4ge1xuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM1RThGMEY7XG59Il19 */"

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