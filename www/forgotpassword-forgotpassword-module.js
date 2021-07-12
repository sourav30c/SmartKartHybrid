(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgotpassword-forgotpassword-module"],{

/***/ "./src/app/forgotpassword/forgotpassword.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.module.ts ***!
  \*********************************************************/
/*! exports provided: ForgotpasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageModule", function() { return ForgotpasswordPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgotpassword.page */ "./src/app/forgotpassword/forgotpassword.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _forgotpassword_page__WEBPACK_IMPORTED_MODULE_5__["ForgotpasswordPage"]
    }
];
var ForgotpasswordPageModule = /** @class */ (function () {
    function ForgotpasswordPageModule() {
    }
    ForgotpasswordPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgotpassword_page__WEBPACK_IMPORTED_MODULE_5__["ForgotpasswordPage"]]
        })
    ], ForgotpasswordPageModule);
    return ForgotpasswordPageModule;
}());



/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.page.html":
/*!*********************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button style=\"color: #FFCC23\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Forgot Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- <ion-grid class=\"bg\">\n    <ion-row>\n      <ion-col>\n        <div class=\"loginPg\">\n          <div class=\"loginBx\"> -->\n            <div class=\"logologin\">\n              <ion-img src=\"/assets/images/logo1.png\"></ion-img>\n            </div>\n            <div class=\"logologinInstruction\">\n              <h6>Forgot Password?</h6>\n            <label>To Reset Your Password an OTP send to Your Email ID</label>\n            </div>\n            \n            <!-- <form> -->\n              <ion-list class=\"ion-margin-top\">\n                <ion-item>\n                  <ion-label>\n                    <ion-icon name=\"mail\" style=\"color: #FFCC23\"></ion-icon>\n                  </ion-label>\n                  <ion-input placeholder=\"Email\" type=\"text\" [(ngModel)]=\"email_id\"></ion-input>\n                </ion-item>\n              </ion-list>\n              \n              \n              <div class=\"frmaxon\">\n                <ion-button (click)=\"submit()\" color=\"primary\" shape=\"round\" expand=\"block\">Submit</ion-button>\n              </div>\n            <!-- </form> -->\n            <!-- <h1 style=\"margin:70px 0 20px;\">Remember Password?</h1>\n            <ion-button routerLink=\"/login\" color=\"primary\" shape=\"round\" expand=\"block\" fill=\"outline\">Login</ion-button> -->\n          <!-- </div>\n        </div>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg {\n  background-image: url(\"/assets/images/bg.jpg\");\n  height: auto;\n  background-size: cover;\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center; }\n\n.logologin {\n  max-width: 135px;\n  padding: 15px;\n  margin: auto; }\n\nform label {\n  font-weight: 700;\n  font-size: .9rem; }\n\n.form-control {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  border: 1px solid rgba(0, 0, 0, 0.35); }\n\n.loginBx form input {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  border: 1px solid rgba(0, 0, 0, 0.35); }\n\n.frmaxon {\n  margin-top: 20px;\n  overflow: hidden; }\n\n.frmaxon .col {\n  float: left;\n  width: 50%; }\n\n.secondary-link {\n  font-weight: 700;\n  color: #000;\n  opacity: .4;\n  display: inline-block;\n  margin-top: 13px;\n  font-size: .9em; }\n\n.secondary-link:hover {\n  color: #000;\n  opacity: 1; }\n\n.loginBtn {\n  padding: 8px 20px;\n  width: 100%;\n  text-align: center;\n  border-radius: 30px;\n  font-size: 18px;\n  color: #fff;\n  background-color: #5E8F0F; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWF2ZXJzd2ViL0Rlc2t0b3AvU21hcnRLYXJ0SHlicmlkL3NyYy9hcHAvZm9yZ290cGFzc3dvcmQvZm9yZ290cGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOENBQThDO0VBQzlDLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIseUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIsa0NBQWtDLEVBQUE7O0FBR3RDO0VBQ0ksZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGdCQUFlLEVBQUE7O0FBRW5CO0VBQ0ksa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHFDQUFpQyxFQUFBOztBQUVyQztFQUNJLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixxQ0FBaUMsRUFBQTs7QUFFckM7RUFBUyxnQkFBZ0I7RUFBRSxnQkFBZ0IsRUFBQTs7QUFDM0M7RUFBYyxXQUFXO0VBQUUsVUFBVSxFQUFBOztBQUNyQztFQUNJLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixnQkFBZTtFQUNmLGVBQWMsRUFBQTs7QUFFbEI7RUFDSSxXQUFXO0VBQ1gsVUFBUyxFQUFBOztBQUViO0VBQ0ksaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixXQUFXO0VBQ1gseUJBQXdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mb3Jnb3RwYXNzd29yZC9mb3Jnb3RwYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmd7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9iZy5qcGcnKTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG5cbi5sb2dvbG9naW57XG4gICAgbWF4LXdpZHRoOiAxMzVweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuZm9ybSBsYWJlbHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTouOXJlbTtcbn1cbi5mb3JtLWNvbnRyb2x7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4zNSk7XG59XG4ubG9naW5CeCBmb3JtIGlucHV0e1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMzUpO1xufVxuLmZybWF4b257bWFyZ2luLXRvcDogMjBweDsgb3ZlcmZsb3c6IGhpZGRlbjt9XG4uZnJtYXhvbiAuY29se2Zsb2F0OiBsZWZ0OyB3aWR0aDogNTAlO31cbi5zZWNvbmRhcnktbGlua3tcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIG9wYWNpdHk6IC40O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tdG9wOjEzcHg7XG4gICAgZm9udC1zaXplOi45ZW07XG59XG4uc2Vjb25kYXJ5LWxpbms6aG92ZXJ7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgb3BhY2l0eToxO1xufVxuLmxvZ2luQnRuIHtcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojNUU4RjBGO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.ts ***!
  \*******************************************************/
/*! exports provided: ForgotpasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPage", function() { return ForgotpasswordPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/utility.service */ "./src/app/api/utility.service.ts");
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




var ForgotpasswordPage = /** @class */ (function () {
    function ForgotpasswordPage(menuCtrl, navCtrl, util, events, route) {
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.util = util;
        this.events = events;
        this.route = route;
        this.email_id = '';
    }
    ForgotpasswordPage.prototype.ngOnInit = function () {
    };
    ForgotpasswordPage.prototype.submit = function () {
        var _this = this;
        if (this.email_id == '') {
            this.util.showAlert('Sorry', 'Please provide your email id');
        }
        else {
            var myData = JSON.stringify({
                email: this.email_id
            });
            console.log("Your myData: ", myData);
            this.util.presentLoading();
            this.util.getTypeDetails('users/forgetpasswordwithotp.json', myData).subscribe(function (result) {
                _this.util.dismissLoader();
                console.log("Your data: ", result);
                _this.data = result;
                if (_this.data.success) {
                    _this.util.showToast(_this.data.data.status);
                }
                else {
                    _this.util.showToast(_this.data.message);
                }
            }, function (error) {
                _this.util.dismissLoader();
                _this.util.showToast('Server error occured. Try again.');
            });
        }
    };
    ForgotpasswordPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgotpassword',
            template: __webpack_require__(/*! ./forgotpassword.page.html */ "./src/app/forgotpassword/forgotpassword.page.html"),
            styles: [__webpack_require__(/*! ./forgotpassword.page.scss */ "./src/app/forgotpassword/forgotpassword.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _api_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ForgotpasswordPage);
    return ForgotpasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=forgotpassword-forgotpassword-module.js.map