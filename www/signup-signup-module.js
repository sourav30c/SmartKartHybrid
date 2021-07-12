(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_5__["SignupPage"]
    }
];
var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_5__["SignupPage"]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.page.html":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Sign Up</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- <ion-grid class=\"bg1\"> -->\n  <!-- <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class=\"loginPg\">-->\n  <!-- <div class=\"loginBx\"> -->\n    <!-- <div class=\"logologin\"> -->\n    <div class=\"logologin\">\n      <ion-img src=\"/assets/images/logo1.png\"></ion-img>\n      <h6>Register</h6>\n    </div>\n    \n    <!-- <form> -->\n    <!-- <div class=\"form-group\">\n                <ion-input type=\"text\" class=\"form-control\" placeholder=\"User Name\" [(ngModel)]=\"name\"></ion-input>\n              </div> -->\n    <ion-list class=\"ion-margin-top\">\n\n      <ion-item>\n        <ion-label>\n          <ion-icon name=\"contact\" style=\"color: #FFCC23\"></ion-icon>\n        </ion-label>\n        <ion-input placeholder=\"Name\" type=\"text\" [(ngModel)]=\"name\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          <ion-icon name=\"mail\" style=\"color: #FFCC23\"></ion-icon>\n        </ion-label>\n        <ion-input placeholder=\"Email\" type=\"email\" [(ngModel)]=\"email\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          <ion-icon name=\"call\" style=\"color: #FFCC23\"></ion-icon>\n        </ion-label>\n        <ion-input placeholder=\"Mobile No\" type=\"phoneno\" [(ngModel)]=\"phoneno\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          <ion-icon name=\"lock\" style=\"color: #FFCC23\"></ion-icon>\n        </ion-label>\n        <ion-input placeholder=\"Password\" [type]=\"showPasswordId\" [(ngModel)]=\"password\"></ion-input>\n\n        <label (click)=\"showPassword()\">\n          <ion-icon *ngIf=\"showPasswordId=='password'\" name=\"eye-off\" style=\"color: #FFCC23;font-size: 20px;\"></ion-icon>\n        </label>\n\n        <label (click)=\"hidePassword()\">\n          <ion-icon *ngIf=\"showPasswordId=='text'\" name=\"eye\" style=\"color: #FFCC23;font-size: 20px;\"></ion-icon>\n        </label>\n\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          <ion-icon name=\"lock\" style=\"color: #FFCC23\"></ion-icon>\n        </ion-label>\n        <ion-input placeholder=\"Confirm Password\" [type]=\"showPasswordId\" [(ngModel)]=\"cpassword\"></ion-input>\n\n        <label (click)=\"showPassword()\">\n          <ion-icon *ngIf=\"showPasswordId=='password'\" name=\"eye-off\" style=\"color: #FFCC23;font-size: 20px;\"></ion-icon>\n        </label>\n\n        <label (click)=\"hidePassword()\">\n          <ion-icon *ngIf=\"showPasswordId=='text'\" name=\"eye\" style=\"color: #FFCC23;font-size: 20px;\"></ion-icon>\n        </label>\n\n      </ion-item>\n\n      <ion-col>\n        <ion-checkbox [checked]=\"isAcceptCheck\" (ionChange)=\"acceptCheck($event)\"></ion-checkbox>\n        <ion-label>Accept Terms & Agreement</ion-label>\n      </ion-col>\n      \n    </ion-list>\n    <!-- <div class=\"form-group\">\n                <ion-input type=\"email\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"email\"></ion-input>\n              </div> -->\n    <!-- <div class=\"form-group\">\n                <ion-input type=\"tel\" class=\"form-control\" placeholder=\"Mobile No\" [(ngModel)]=\"phoneno\"></ion-input>\n              </div> -->\n    <!-- <div class=\"form-group\">\n                <ion-input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"password\"></ion-input>\n              </div> -->\n    <!-- <div class=\"form-group\">\n                <ion-input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" [(ngModel)]=\"cpassword\"></ion-input>\n              </div> -->\n    <div class=\"col text-right\" *ngIf=\"isAcceptCheck==true\">\n      <ion-button (click)=\"signup()\" color=\"primary\" shape=\"round\" expand=\"block\">Register</ion-button>\n    </div>\n\n    <div class=\"frmaxon\">\n      <div class=\"col\">\n        <label style=\"color: #FFCC23\">Allready have an account?</label>\n      </div>\n      <div class=\"col text-right\">\n        <ion-button routerLink=\"/login\" color=\"primary\" shape=\"round\" expand=\"block\">Login</ion-button>\n      </div>\n    </div>\n    <!-- <h1 style=\"margin:70px 0 20px;\">Existing Customer?</h1>\n    <ion-button routerLink=\"/login\" color=\"primary\" shape=\"round\" expand=\"block\" fill=\"outline\">Login Now</ion-button> -->\n\n  <!-- </div> -->\n  <!-- </div>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n</ion-content>"

/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg1 {\n  background-image: url(\"/assets/images/bg1.jpg\");\n  height: auto;\n  background-size: cover;\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center; }\n\n.loginBx {\n  margin: auto;\n  max-width: 374px;\n  padding: 25px;\n  background: rgba(252, 250, 250, 0.5);\n  border-radius: 10px;\n  text-align: center; }\n\n.logologin {\n  padding: 25px;\n  max-width: 125px;\n  margin: auto; }\n\n.loginBx > h1 {\n  margin: 40px 0 40px;\n  font-size: 1.3rem; }\n\n.loginBx form {\n  text-align: left; }\n\nform label {\n  font-weight: 700;\n  font-size: .9rem; }\n\n.form-control {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  border: 1px solid #FFCC23; }\n\n.loginBx form input {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  border: 1px solid rgba(0, 0, 0, 0.35); }\n\n.frmaxon {\n  margin-top: 20px;\n  overflow: hidden; }\n\n.frmaxon .col {\n  float: left;\n  width: 50%; }\n\n.secondary-link {\n  font-weight: 700;\n  color: #000;\n  opacity: .4;\n  display: inline-block;\n  margin-top: 13px;\n  font-size: .9em; }\n\n.secondary-link:hover {\n  color: #000;\n  opacity: 1; }\n\n.loginBtn {\n  padding: 8px 20px;\n  width: 100%;\n  text-align: center;\n  border-radius: 30px;\n  font-size: 18px;\n  color: #fff;\n  background-color: #5E8F0F; }\n\nion-list {\n  margin-bottom: 20px; }\n\nion-list ion-item {\n    border-radius: 25px;\n    margin-bottom: 18px; }\n\nion-list ion-item ion-label {\n      margin: 5px 8px 0 0; }\n\nion-list ion-item ion-label ion-icon {\n        font-size: 25px; }\n\nion-list ion-checkbox {\n    --border-radius: 0;\n    width: 15px;\n    height: 15px;\n    margin-right: 6px; }\n\nion-list ion-label {\n    font-size: 15px;\n    color: #FFCC23;\n    font-weight: 400; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWF2ZXJzd2ViL0Rlc2t0b3AvU21hcnRLYXJ0SHlicmlkL3NyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQ0FBK0M7RUFDL0MsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixrQ0FBa0MsRUFBQTs7QUFFdEM7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixvQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUVoQjtFQUNJLG1CQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWUsRUFBQTs7QUFFbkI7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0ksa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHFDQUFpQyxFQUFBOztBQUVyQztFQUFTLGdCQUFnQjtFQUFFLGdCQUFnQixFQUFBOztBQUMzQztFQUFjLFdBQVc7RUFBRSxVQUFVLEVBQUE7O0FBQ3JDO0VBQ0ksZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGdCQUFlO0VBQ2YsZUFBYyxFQUFBOztBQUVsQjtFQUNJLFdBQVc7RUFDWCxVQUFTLEVBQUE7O0FBRWI7RUFDSSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFdBQVc7RUFDWCx5QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSxtQkFBbUIsRUFBQTs7QUFEdkI7SUFLUSxtQkFBbUI7SUFDbkIsbUJBQW1CLEVBQUE7O0FBTjNCO01BUVksbUJBQW1CLEVBQUE7O0FBUi9CO1FBVWdCLGVBQWUsRUFBQTs7QUFWL0I7SUFlUSxrQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBZ0IsRUFBQTs7QUFsQnhCO0lBcUJRLGVBQWM7SUFDZCxjQUFjO0lBQ2QsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZzF7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JnMS5qcGcnKTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG59XHJcbi5sb2dpbkJ4e1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAzNzRweDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMjUyLCAyNTAsIDI1MCwgMC41KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxvZ29sb2dpbntcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDEyNXB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5sb2dpbkJ4ID4gaDF7XHJcbiAgICBtYXJnaW46NDBweCAwIDQwcHg7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG5cclxuLmxvZ2luQnggZm9ybXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuZm9ybSBsYWJlbHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6LjlyZW07XHJcbn1cclxuLmZvcm0tY29udHJvbHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgcGFkZGluZzogOHB4IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRkZDQzIzO1xyXG59XHJcbi5sb2dpbkJ4IGZvcm0gaW5wdXR7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmYwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMzUpO1xyXG59XHJcbi5mcm1heG9ue21hcmdpbi10b3A6IDIwcHg7IG92ZXJmbG93OiBoaWRkZW47fVxyXG4uZnJtYXhvbiAuY29se2Zsb2F0OiBsZWZ0OyB3aWR0aDogNTAlO31cclxuLnNlY29uZGFyeS1saW5re1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgb3BhY2l0eTogLjQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOjEzcHg7XHJcbiAgICBmb250LXNpemU6LjllbTtcclxufVxyXG4uc2Vjb25kYXJ5LWxpbms6aG92ZXJ7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG9wYWNpdHk6MTtcclxufVxyXG4ubG9naW5CdG4ge1xyXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzVFOEYwRjtcclxufVxyXG5cclxuaW9uLWxpc3R7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgaW9uLWl0ZW17XHJcbiAgICAgICAgLy9ib3JkZXI6IDFweCBzb2xpZCAjQzJDMkMyO1xyXG4gICAgICAgIC8vYm9yZGVyOiAxcHggc29saWQgI0ZGQ0MyMztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgICAgICAgaW9uLWxhYmVse1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweCA4cHggMCAwO1xyXG4gICAgICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi1jaGVja2JveHtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDo2cHg7XHJcbiAgICB9XHJcbiAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgZm9udC1zaXplOjE1cHg7XHJcbiAgICAgICAgY29sb3I6ICNGRkNDMjM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/utility.service */ "./src/app/api/utility.service.ts");
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




//import { FileTransfer, FileUploadOptions, FileTransferObject, FileUploadResult } from '@ionic-native/file-transfer/ngx';
var SignupPage = /** @class */ (function () {
    function SignupPage(menuCtrl, navCtrl, util, events, route, activeroute) {
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.util = util;
        this.events = events;
        this.route = route;
        this.activeroute = activeroute;
        this.name = '';
        this.email = '';
        this.phoneno = '';
        this.password = '';
        this.cpassword = '';
        this.fileUrl = '';
        this.pushedFrom = "";
        this.isAcceptCheck = true;
        this.showPasswordId = "password";
        this.pushedFrom = this.activeroute.snapshot.paramMap.get("pushedFrom");
    }
    SignupPage.prototype.ngOnInit = function () {
    };
    SignupPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true);
        //this.pageDetails = { 'showMenu': false, 'showBack': false, 'showButtons': false, 'title': 'Register', 'prevPage': '/login' };
        //this.showMenu(this.pageDetails);
    };
    SignupPage.prototype.showMenu = function (pageDetails) {
        console.log('User created!');
        this.events.publish('showMenu', pageDetails, Date.now());
    };
    SignupPage.prototype.signup = function () {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.name == '') {
            this.util.showToast('Please provide name');
        }
        else if (this.email == '') {
            this.util.showToast('Please provide email');
        }
        else if (!re.test(this.email)) {
            this.util.showAlert('Sorry', 'Please provide valid email address!');
        }
        else if (this.phoneno == '') {
            this.util.showToast('Please provide phone no');
        }
        else if (String(this.phoneno).length < 10) {
            this.util.showAlert('Sorry', 'Please provide valid contact number');
        }
        else if (this.password == '') {
            this.util.showToast('Please provide password');
        }
        else if (this.cpassword == '') {
            this.util.showToast('Please provide confirm password');
        }
        else if (this.password != this.cpassword) {
            this.util.showToast('Password mismatch');
        }
        else {
            this.postData();
        }
    };
    SignupPage.prototype.acceptCheck = function (e) {
        //console.log("remember me check", e.detail.checked)
        this.isAcceptCheck = e.detail.checked;
    };
    SignupPage.prototype.showPassword = function () {
        //console.log("show")
        this.showPasswordId = "text";
    };
    SignupPage.prototype.hidePassword = function () {
        //console.log("hide")
        this.showPasswordId = "password";
    };
    SignupPage.prototype.postData = function () {
        var _this = this;
        //first_name,last_name,email,phone,password
        var myData = {
            first_name: this.name,
            last_name: this.name,
            email: this.email,
            mobile: this.phoneno,
            password: this.password,
        };
        //console.log("Your myData: ", myData);
        this.util.presentLoading();
        this.util.getTypeDetails('users/add.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            //console.log("Your data: ", result);
            _this.data = result;
            if (_this.data.success) {
                //console.log("Your success data: ", this.data.data);
                //localStorage.setItem('loginDataKKartTemp', JSON.stringify(this.data.data.userdetails));
                //localStorage.setItem('userTokenTemp', JSON.stringify(this.data.data.token));
                localStorage.setItem('userToken', JSON.stringify(_this.data.data.token));
                //localStorage.setItem('otp', JSON.stringify(this.data.data.otp));
                _this.util.showToast("Registration is successful");
                _this.navCtrl.navigateRoot('/login');
                //this.navCtrl.navigateForward(['/otp-registration', { pushedFrom: this.pushedFrom }])
            }
            else {
                _this.util.showToast("The email id is already in use");
            }
        }, function (error) {
            _this.util.dismissLoader();
            //this.util.showToast('Server error occured. Try again.');
            _this.util.showToast("The email id is already in use");
        });
    };
    SignupPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.page.html */ "./src/app/signup/signup.page.html"),
            styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SignupPage);
    return SignupPage;
}());



/***/ })

}]);
//# sourceMappingURL=signup-signup-module.js.map