(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" *ngIf=\"pushedFrom != null\" (click)=\"goBack()\">\n      <ion-icon name=\"arrow-back\" class=\"backIcon\"></ion-icon>\n    </ion-buttons>\n    <ion-buttons slot=\"start\" *ngIf=\"pushedFrom == null\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- <ion-grid class=\"bg\"> -->\n  <!-- <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class=\"loginPg\"> -->\n          <!-- <div class=\"loginBx\"> -->\n            <div class=\"logologin\">\n              <ion-img src=\"/assets/images/logo1.png\"></ion-img>\n              <!-- <h6>Login</h6> -->\n            </div>\n            <h6>Login With</h6>\n            <!-- <form> -->\n            <ion-list class=\"ion-margin-top\">\n              <!-- <ion-item>\n                <ion-label>\n                  <ion-icon name=\"contact\" style=\"color: #FFCC23;\"></ion-icon>\n                </ion-label>\n                <ion-input placeholder=\"Email\" type=\"text\" [(ngModel)]=\"username\" style=\"border-color: brown;\"></ion-input>\n              </ion-item> -->\n              <ion-item>\n                <ion-label>\n                  <ion-icon name=\"contact\" style=\"color: #FFCC23;\"></ion-icon>\n                </ion-label>\n                <ion-input placeholder=\"Email\" type=\"text\" [(ngModel)]=\"username\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label>\n                  <ion-icon name=\"lock\" style=\"color: #FFCC23\"></ion-icon>\n                </ion-label>\n                <ion-input placeholder=\"Password\" type=\"password\" [(ngModel)]=\"password\"></ion-input>\n\n                <label (click)=\"showPassword()\">\n                  <ion-icon *ngIf=\"showPasswordId=='password'\" name=\"eye-off\" style=\"color: #FFCC23;font-size: 20px;\"></ion-icon>\n                </label>\n        \n                <label (click)=\"hidePassword()\">\n                  <ion-icon *ngIf=\"showPasswordId=='text'\" name=\"eye\" style=\"color: #FFCC23;font-size: 20px;\"></ion-icon>\n                </label>\n              </ion-item>\n            </ion-list>\n            <!-- <div class=\"form-group\">\n              <ion-input type=\"email\" class=\"form-control\" placeholder=\"User Name\" [(ngModel)]=\"username\"></ion-input>\n            </div>\n            <div class=\"form-group\">\n              <ion-input type=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\" class=\"form-control\"></ion-input>\n            </div> -->\n            <div class=\"frmaxon\">\n              <div class=\"col\">\n                <div routerLink=\"/forgotpassword\" class=\"secondary-link transition\">Forgot Password?</div>\n              </div>\n              <div class=\"col text-right\">\n                <!-- [ngStyle]=\"{'background-color':'pink'}\" style=\"background-color;: #FFCC23\" -->\n                <!-- <ion-button (click)=\"login()\" color=\"primary\" shape=\"round\" expand=\"block\">Login</ion-button> -->\n                \n                <ion-button (click)=\"login()\" color=\"primary\" shape=\"round\" expand=\"block\" style=\"--background:red\">Login</ion-button>\n                <!-- <button (click)=\"login()\" color=\"primary\" shape=\"round\" expand=\"block\">Login</button> -->\n              </div>\n            </div>\n\n              <div class=\"frmaxon\" *ngIf=\"pushedFromHtmlCheck!=='productDetails'\">\n                <div class=\"col\">\n                  <label style=\"color: #FFCC23\" >Don't have an account?</label>\n                </div>\n                <div class=\"col text-right\">\n                  <ion-button color=\"primary\" shape=\"round\" expand=\"block\" (click)=\"toSingUp()\">Register</ion-button>\n                  <!-- <button ion-button color=\"primary\" round full (click)=\"toSingUp()\" style=\"background: #0000A0\">Register</button> -->\n                </div>\n              </div>\n          <!-- </div> -->\n        <!-- </div>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg {\n  background-image: url(\"/assets/images/bg.jpg\");\n  height: auto;\n  background-size: cover;\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center; }\n\n.loginBx {\n  margin: auto;\n  max-width: 374px;\n  padding: 25px;\n  background: rgba(252, 250, 250, 0.5);\n  border-radius: 10px;\n  text-align: center; }\n\n.logologin {\n  max-width: 135px;\n  padding: 15px;\n  margin: auto; }\n\n.loginBx > h1 {\n  margin: 40px 0 40px;\n  font-size: 1.3rem; }\n\n.loginBx form {\n  text-align: left; }\n\nform label {\n  font-weight: 700;\n  font-size: .9rem; }\n\n.form-control {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  border: 1px solid #FFCC23; }\n\n.loginBx form input {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  border: 1px solid rgba(0, 0, 0, 0.35); }\n\n.frmaxon {\n  margin-top: 20px;\n  overflow: hidden; }\n\n.frmaxon .col {\n  float: left;\n  width: 50%; }\n\n.secondary-link {\n  font-weight: 700;\n  color: #000;\n  opacity: .4;\n  display: inline-block;\n  margin-top: 13px;\n  font-size: .9em; }\n\n.secondary-link:hover {\n  color: #000;\n  opacity: 1; }\n\n.loginBtn {\n  padding: 8px 20px;\n  width: 100%;\n  text-align: center;\n  border-radius: 30px;\n  font-size: 18px;\n  color: #fff;\n  background-color: #200ae2; }\n\n.backIcon {\n  font-size: 28px;\n  color: 226; }\n\n.ion-item {\n  --border-top-width: 2px;\n  --border-end-width: 3px;\n  --border-bottom-width: 2px;\n  --border-start-width: 6px;\n  --inner-border-width: 0;\n  --border-width: var(--border-top-width) var(--border-end-width) var(--border-bottom-width) var(--border-start-width);\n  --border-color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YXAvRGVza3RvcC9pb25pYyBQcm9qZWN0L3BwL1NtYXJ0LUNhcnQgMi9zcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhDQUE4QztFQUM5QyxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHlCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLGtDQUFrQyxFQUFBOztBQUV0QztFQUNJLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG9DQUFtQztFQUNuQyxtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksbUJBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZSxFQUFBOztBQUVuQjtFQUNJLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQix5QkFDSixFQUFBOztBQUNBO0VBQ0ksa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHFDQUFpQyxFQUFBOztBQUVyQztFQUFTLGdCQUFnQjtFQUFFLGdCQUFnQixFQUFBOztBQUMzQztFQUFjLFdBQVc7RUFBRSxVQUFVLEVBQUE7O0FBQ3JDO0VBQ0ksZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGdCQUFlO0VBQ2YsZUFBYyxFQUFBOztBQUVsQjtFQUNJLFdBQVc7RUFDWCxVQUFTLEVBQUE7O0FBRWI7RUFDSSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFdBQVc7RUFDWCx5QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSxlQUFlO0VBQ2YsVUFBNEIsRUFBQTs7QUFHaEM7RUFDSSx1QkFBbUI7RUFDbkIsdUJBQW1CO0VBQ25CLDBCQUFzQjtFQUN0Qix5QkFBcUI7RUFFckIsdUJBQXFCO0VBRXJCLG9IQUFlO0VBQ2YsbUJBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JnLmpwZycpO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGZpbHRlcjogYmx1cigwcHgpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cbi5sb2dpbkJ4e1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXgtd2lkdGg6IDM3NHB4O1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgYmFja2dyb3VuZDpyZ2JhKDI1MiwgMjUwLCAyNTAsIDAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubG9nb2xvZ2lue1xuICAgIG1heC13aWR0aDogMTM1cHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG4ubG9naW5CeCA+IGgxe1xuICAgIG1hcmdpbjo0MHB4IDAgNDBweDtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLmxvZ2luQnggZm9ybXtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuZm9ybSBsYWJlbHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTouOXJlbTtcbn1cbi5mb3JtLWNvbnRyb2x7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRkZDQzIzXG59XG4ubG9naW5CeCBmb3JtIGlucHV0e1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMzUpO1xufVxuLmZybWF4b257bWFyZ2luLXRvcDogMjBweDsgb3ZlcmZsb3c6IGhpZGRlbjt9XG4uZnJtYXhvbiAuY29se2Zsb2F0OiBsZWZ0OyB3aWR0aDogNTAlO31cbi5zZWNvbmRhcnktbGlua3tcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIG9wYWNpdHk6IC40O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tdG9wOjEzcHg7XG4gICAgZm9udC1zaXplOi45ZW07XG59XG4uc2Vjb25kYXJ5LWxpbms6aG92ZXJ7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgb3BhY2l0eToxO1xufVxuLmxvZ2luQnRuIHtcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMjAwYWUyO1xufVxuXG4uYmFja0ljb257XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGNvbG9yOiBibHVlKCRjb2xvcjogIzIwMGFlMik7XG59XG5cbi5pb24taXRlbSB7XG4gICAgLS1ib3JkZXItdG9wLXdpZHRoOiAycHg7XG4gICAgLS1ib3JkZXItZW5kLXdpZHRoOiAzcHg7XG4gICAgLS1ib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG4gICAgLS1ib3JkZXItc3RhcnQtd2lkdGg6IDZweDtcbiAgICBcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcbiAgICBcbiAgICAtLWJvcmRlci13aWR0aDogdmFyKC0tYm9yZGVyLXRvcC13aWR0aCkgdmFyKC0tYm9yZGVyLWVuZC13aWR0aCkgdmFyKC0tYm9yZGVyLWJvdHRvbS13aWR0aCkgdmFyKC0tYm9yZGVyLXN0YXJ0LXdpZHRoKTtcbiAgICAtLWJvcmRlci1jb2xvcjogcmVkO1xuICB9XG5cbi8vICAgLmlvbi1idXR0b257XG4vLyAgICAgLS1iYWNrZ3JvdW5kOiAjMDg2OUFFO1xuLy8gICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbi8vICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
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




var LoginPage = /** @class */ (function () {
    function LoginPage(menuCtrl, navCtrl, util, events, route) {
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.util = util;
        this.events = events;
        this.route = route;
        this.username = '';
        this.password = '';
        this.pushedFrom = '';
        this.pushedFromHtmlCheck = '';
        this.showPasswordId = "password";
        this.pushedFrom = this.route.snapshot.paramMap.get("pushedFrom");
        if (this.pushedFrom == "productDetailsCart" || this.pushedFrom == "productDetailsWishlist") {
            this.pushedFromHtmlCheck = "productDetails";
        }
        else if (this.pushedFrom == "productListWishlist" || this.pushedFrom == "productDetailsBuy") {
            this.pushedFromHtmlCheck = "productDetails";
        }
        else if (this.pushedFrom == "productList") {
            this.pushedFromHtmlCheck = "productDetails";
        }
        console.log("this.pushedFrom", this.pushedFrom);
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.logout();
        this.menuCtrl.enable(true);
        //this.pageDetails = { 'showMenu': false, 'showBack': false, 'showButtons': false, 'title': 'Login', 'prevPage': '' };
        //this.showMenu(this.pageDetails);
    };
    LoginPage.prototype.showMenu = function (pageDetails) {
        console.log('User created!');
        this.events.publish('showMenu', pageDetails, Date.now());
    };
    LoginPage.prototype.logout = function () {
        localStorage.removeItem('loginDataKKart');
    };
    LoginPage.prototype.showPassword = function () {
        console.log("show");
        this.showPasswordId = "text";
    };
    LoginPage.prototype.hidePassword = function () {
        console.log("hide");
        this.showPasswordId = "password";
    };
    LoginPage.prototype.login = function () {
        if (this.username == '') {
            this.util.showToast('Please provide username');
        }
        else if (this.password == '') {
            this.util.showToast('Please provide password');
        }
        else {
            this.postData();
        }
    };
    LoginPage.prototype.postData = function () {
        var _this = this;
        var myData = JSON.stringify({
            email: this.username,
            password: this.password,
        });
        console.log("Your myData: ", myData);
        this.util.presentLoading();
        this.util.getTypeDetails('users/token.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            //console.log("Your data login data testing: ", result);
            _this.data = result;
            if (_this.data.success == 1) {
                //console.log("Your success data: ", this.data.data);
                localStorage.setItem('loginDataKKart', JSON.stringify(_this.data.data.userdetails));
                localStorage.setItem('userToken', JSON.stringify(_this.data.data.token));
                _this.events.publish('user:login');
                if (_this.pushedFrom == 'productDetailsWishlist') {
                    _this.navCtrl.navigateForward(['/details', { pushedFrom: 'loginWishlist' }]);
                }
                else if (_this.pushedFrom == 'productDetailsCart') {
                    _this.navCtrl.navigateForward(['/details', { pushedFrom: 'loginCart' }]);
                }
                else if (_this.pushedFrom == 'detailsRelatedWishlist') {
                    _this.navCtrl.navigateForward(['/details', { pushedFrom: 'loginRelatedWishlist' }]);
                }
                else if (_this.pushedFrom == 'detailsRelatedCart') {
                    _this.navCtrl.navigateForward(['/details', { pushedFrom: 'loginRelatedCart' }]);
                }
                else if (_this.pushedFrom == 'productListWishlist') {
                    _this.navCtrl.navigateForward(['/list', { pushedFrom: 'loginWishlist' }]);
                }
                else if (_this.pushedFrom == 'topproductListWishlist') {
                    _this.navCtrl.navigateForward(['/top-selling-product-list', { pushedFrom: 'loginWishlist' }]);
                }
                else if (_this.pushedFrom == 'productDetailsBuy') {
                    _this.navCtrl.navigateForward('/cart');
                }
                else if (_this.pushedFrom == 'productList') {
                    _this.navCtrl.navigateForward(['/list', { pushedFrom: 'loginCartlist' }]);
                }
                else if (_this.pushedFrom == 'topproductList') {
                    _this.navCtrl.navigateForward(['/top-selling-product-list', { pushedFrom: 'loginCartlist' }]);
                }
                else if (_this.pushedFrom == 'addReviewsList') {
                    _this.navCtrl.navigateForward(['/review-list', { pushedFrom: 'loginReviewlist' }]);
                }
                else {
                    _this.navCtrl.navigateRoot('/home');
                }
            }
            else if (_this.data.success == 2) {
                // localStorage.setItem('loginDataKKartTemp', JSON.stringify(this.data.data.userdetails));
                // localStorage.setItem('userToken', JSON.stringify(this.data.data.token));
                // localStorage.setItem('otp', JSON.stringify(this.data.otp));
                // //this.navCtrl.navigateForward(['/otp-registration', { pushedFrom: this.pushedFrom }])
                // localStorage.setItem('loginDataKKart', JSON.stringify(this.data.data.userdetails));
                // this.navCtrl.navigateRoot('/home')
                //console.log("Your success data: ", this.data.data);
                localStorage.setItem('loginDataKKart', JSON.stringify(_this.data.data.userdetails));
                localStorage.setItem('userToken', JSON.stringify(_this.data.data.token));
                _this.events.publish('user:login');
                if (_this.pushedFrom == 'productDetailsWishlist') {
                    _this.navCtrl.navigateForward(['/details', { pushedFrom: 'loginWishlist' }]);
                }
                else if (_this.pushedFrom == 'productDetailsCart') {
                    _this.navCtrl.navigateForward(['/details', { pushedFrom: 'loginCart' }]);
                }
                else if (_this.pushedFrom == 'detailsRelatedWishlist') {
                    _this.navCtrl.navigateForward(['/details', { pushedFrom: 'loginRelatedWishlist' }]);
                }
                else if (_this.pushedFrom == 'detailsRelatedCart') {
                    _this.navCtrl.navigateForward(['/details', { pushedFrom: 'loginRelatedCart' }]);
                }
                else if (_this.pushedFrom == 'productListWishlist') {
                    _this.navCtrl.navigateForward(['/list', { pushedFrom: 'loginWishlist' }]);
                }
                else if (_this.pushedFrom == 'topproductListWishlist') {
                    _this.navCtrl.navigateForward(['/top-selling-product-list', { pushedFrom: 'loginWishlist' }]);
                }
                else if (_this.pushedFrom == 'productDetailsBuy') {
                    _this.navCtrl.navigateForward('/cart');
                }
                else if (_this.pushedFrom == 'productList') {
                    _this.navCtrl.navigateForward(['/list', { pushedFrom: 'loginCartlist' }]);
                }
                else if (_this.pushedFrom == 'topproductList') {
                    _this.navCtrl.navigateForward(['/top-selling-product-list', { pushedFrom: 'loginCartlist' }]);
                }
                else if (_this.pushedFrom == 'addReviewsList') {
                    _this.navCtrl.navigateForward(['/review-list', { pushedFrom: 'loginReviewlist' }]);
                }
                else {
                    _this.navCtrl.navigateRoot('/home');
                }
            }
            else {
                console.log("is it errror ???????");
                _this.util.showToast(_this.data.data.message);
            }
        }, function (error) {
            _this.util.dismissLoader();
            _this.util.showToast('Server error occured. Try again.');
        });
    };
    LoginPage.prototype.toSingUp = function () {
        this.navCtrl.navigateForward(['/signup', { pushedFrom: this.pushedFrom }]);
    };
    LoginPage.prototype.goBack = function () {
        //console.log(JSON.parse(localStorage.getItem('loginDataKKart')))
        this.events.publish('user:login');
        if (this.pushedFrom == 'productDetailsWishlist') {
            this.navCtrl.navigateBack('/details');
        }
        else if (this.pushedFrom == 'productDetailsCart') {
            this.navCtrl.navigateBack('/details');
        }
        else if (this.pushedFrom == 'detailsRelatedWishlist') {
            this.navCtrl.navigateBack('/details');
        }
        else if (this.pushedFrom == 'detailsRelatedCart') {
            this.navCtrl.navigateBack('/details');
        }
        else if (this.pushedFrom == 'productListWishlist') {
            this.navCtrl.navigateBack('/list');
        }
        else if (this.pushedFrom == 'topproductListWishlist') {
            this.navCtrl.navigateBack('/top-selling-product-list');
        }
        else if (this.pushedFrom == 'productDetailsBuy') {
            this.navCtrl.navigateBack('/details');
        }
        else if (this.pushedFrom == 'productList') {
            this.navCtrl.navigateBack('/list');
        }
        else if (this.pushedFrom == 'topproductList') {
            this.navCtrl.navigateBack('/top-selling-product-list');
        }
        else if (this.pushedFrom == 'addReviewsList') {
            this.navCtrl.navigateBack('/review-list');
        }
        else {
            this.navCtrl.navigateRoot('/home');
        }
    };
    LoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map