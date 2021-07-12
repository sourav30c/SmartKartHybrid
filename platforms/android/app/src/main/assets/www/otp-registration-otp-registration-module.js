(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["otp-registration-otp-registration-module"],{

/***/ "./src/app/otp-registration/otp-registration.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/otp-registration/otp-registration.module.ts ***!
  \*************************************************************/
/*! exports provided: OtpRegistrationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpRegistrationPageModule", function() { return OtpRegistrationPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _otp_registration_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./otp-registration.page */ "./src/app/otp-registration/otp-registration.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _otp_registration_page__WEBPACK_IMPORTED_MODULE_5__["OtpRegistrationPage"]
    }
];
var OtpRegistrationPageModule = /** @class */ (function () {
    function OtpRegistrationPageModule() {
    }
    OtpRegistrationPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_otp_registration_page__WEBPACK_IMPORTED_MODULE_5__["OtpRegistrationPage"]]
        })
    ], OtpRegistrationPageModule);
    return OtpRegistrationPageModule;
}());



/***/ }),

/***/ "./src/app/otp-registration/otp-registration.page.html":
/*!*************************************************************!*\
  !*** ./src/app/otp-registration/otp-registration.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button style=\"color: #FFCC23\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>OTP</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid class=\"bg\">\n    <ion-row>\n      <ion-col>\n        <div class=\"loginPg\">\n          <div class=\"loginBx\">\n            <div class=\"logologin\">\n              <ion-img src=\"/assets/images/logo.png\"></ion-img>\n            </div>\n            <div class=\"logologinInstruction\">\n              <h4>Please Enter The OTP to Verify Your Mobile Number</h4>\n            </div>\n            \n              <div class=\"form-group\">\n                <ion-input type=\"email\" class=\"form-control\" [(ngModel)]=\"otp\"></ion-input>\n              </div>\n              <div class=\"frmaxon\">\n                <ion-button (click)=\"submitOtp()\" color=\"primary\" shape=\"round\" expand=\"block\">Submit</ion-button>\n              </div>\n\n              <div class=\"logologinInstruction\">\n                <label>Did not recieve otp yet?</label>\n              </div>\n              <div class=\"frmaxon\">\n                <ion-button (click)=\"resendOtp()\" color=\"primary\" shape=\"round\" expand=\"block\">Resend OTP</ion-button>\n              </div>\n\n          </div>\n        </div>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/otp-registration/otp-registration.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/otp-registration/otp-registration.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg {\n  background-image: url(\"/assets/images/bg.jpg\");\n  height: auto;\n  background-size: cover;\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center; }\n\n.loginBx {\n  margin: auto;\n  max-width: 374px;\n  padding: 25px;\n  background: rgba(252, 250, 250, 0.5);\n  border-radius: 10px;\n  text-align: center; }\n\n.loginBx .logologin {\n  max-width: 150px;\n  margin: auto; }\n\n.loginBx > h1 {\n  margin: 30px 0 10px;\n  font-size: 1.3rem; }\n\n.logologinInstruction {\n  margin-bottom: 20px; }\n\n.loginBx form {\n  text-align: left; }\n\nform label {\n  font-weight: 700;\n  font-size: .9rem; }\n\n.form-control {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  border: 1px solid rgba(0, 0, 0, 0.35); }\n\n.loginBx form input {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  border: 1px solid rgba(0, 0, 0, 0.35); }\n\n.frmaxon {\n  margin-top: 20px;\n  overflow: hidden; }\n\n.frmaxon .col {\n  float: left;\n  width: 50%; }\n\n.secondary-link {\n  font-weight: 700;\n  color: #000;\n  opacity: .4;\n  display: inline-block;\n  margin-top: 13px;\n  font-size: .9em; }\n\n.secondary-link:hover {\n  color: #000;\n  opacity: 1; }\n\n.loginBtn {\n  padding: 8px 20px;\n  width: 100%;\n  text-align: center;\n  border-radius: 30px;\n  font-size: 18px;\n  color: #fff;\n  background-color: #5E8F0F; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWF2ZXJzd2ViL0Rlc2t0b3AvU21hcnRLYXJ0SHlicmlkL3NyYy9hcHAvb3RwLXJlZ2lzdHJhdGlvbi9vdHAtcmVnaXN0cmF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhDQUE4QztFQUM5QyxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHlCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLGtDQUFrQyxFQUFBOztBQUV0QztFQUNJLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG9DQUFtQztFQUNuQyxtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxtQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGdCQUFlLEVBQUE7O0FBRW5CO0VBQ0ksa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHFDQUFpQyxFQUFBOztBQUVyQztFQUNJLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixxQ0FBaUMsRUFBQTs7QUFFckM7RUFBUyxnQkFBZ0I7RUFBRSxnQkFBZ0IsRUFBQTs7QUFDM0M7RUFBYyxXQUFXO0VBQUUsVUFBVSxFQUFBOztBQUNyQztFQUNJLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixnQkFBZTtFQUNmLGVBQWMsRUFBQTs7QUFFbEI7RUFDSSxXQUFXO0VBQ1gsVUFBUyxFQUFBOztBQUViO0VBQ0ksaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixXQUFXO0VBQ1gseUJBQXdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9vdHAtcmVnaXN0cmF0aW9uL290cC1yZWdpc3RyYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJne1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmcuanBnJyk7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgZmlsdGVyOiBibHVyKDBweCk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuLmxvZ2luQnh7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1heC13aWR0aDogMzc0cHg7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMjUyLCAyNTAsIDI1MCwgMC41KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2dpbkJ4IC5sb2dvbG9naW57XG4gICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG4ubG9naW5CeCA+IGgxe1xuICAgIG1hcmdpbjozMHB4IDAgMTBweDtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLmxvZ29sb2dpbkluc3RydWN0aW9ue1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5sb2dpbkJ4IGZvcm17XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbmZvcm0gbGFiZWx7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6LjlyZW07XG59XG4uZm9ybS1jb250cm9se1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMzUpO1xufVxuLmxvZ2luQnggZm9ybSBpbnB1dHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmYwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjM1KTtcbn1cbi5mcm1heG9ue21hcmdpbi10b3A6IDIwcHg7IG92ZXJmbG93OiBoaWRkZW47fVxuLmZybWF4b24gLmNvbHtmbG9hdDogbGVmdDsgd2lkdGg6IDUwJTt9XG4uc2Vjb25kYXJ5LWxpbmt7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBvcGFjaXR5OiAuNDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXRvcDoxM3B4O1xuICAgIGZvbnQtc2l6ZTouOWVtO1xufVxuLnNlY29uZGFyeS1saW5rOmhvdmVye1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIG9wYWNpdHk6MTtcbn1cbi5sb2dpbkJ0biB7XG4gICAgcGFkZGluZzogOHB4IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IzVFOEYwRjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/otp-registration/otp-registration.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/otp-registration/otp-registration.page.ts ***!
  \***********************************************************/
/*! exports provided: OtpRegistrationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpRegistrationPage", function() { return OtpRegistrationPage; });
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




var OtpRegistrationPage = /** @class */ (function () {
    function OtpRegistrationPage(menuCtrl, navCtrl, util, events, route, activeroute) {
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.util = util;
        this.events = events;
        this.route = route;
        this.activeroute = activeroute;
        this.otp = '';
        this.otpCheck = '';
        this.pushedFrom = "";
        //this.otpCheck = JSON.parse(localStorage.getItem('otp'))
        this.pushedFrom = this.activeroute.snapshot.paramMap.get("pushedFrom");
        console.log("PushedFrom", this.pushedFrom);
    }
    OtpRegistrationPage.prototype.ngOnInit = function () {
    };
    OtpRegistrationPage.prototype.submitOtp = function () {
        var _this = this;
        console.log("otp verify", this.otp, this.otpCheck);
        //alert(1)
        if (this.otp != this.otpCheck) {
            this.util.showToast('Please provide right otp');
        }
        else {
            var myData = JSON.stringify({
                otp: this.otp
            });
            console.log("Your myData: ", myData);
            this.util.presentLoading();
            this.util.getTypeDetailsWithAuth('users/sendotp.json', myData).subscribe(function (result) {
                //alert(2)
                _this.util.dismissLoader();
                console.log("Your otp response: ", JSON.stringify(result));
                _this.data = result;
                console.log(_this.data);
                if (_this.data.success) {
                    _this.events.publish('user:login');
                    var userData = JSON.parse(localStorage.getItem('loginDataKKartTemp'));
                    localStorage.setItem('loginDataKKart', JSON.stringify(userData));
                    //var userToken = JSON.parse(localStorage.getItem('userTokenTemp'))
                    //localStorage.setItem('userToken', JSON.stringify(userToken));
                    if (_this.pushedFrom == null) {
                        _this.navCtrl.navigateRoot('/home');
                    }
                    else if (_this.pushedFrom == 'productDetailsWishlist') {
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
                    //alert(3)
                    _this.util.showToast(_this.data.message);
                }
            }, function (error) {
                _this.util.dismissLoader();
                //alert(4)
                _this.util.showToast('Server error occured. Try again.');
            });
        }
    };
    OtpRegistrationPage.prototype.resendOtp = function () {
        var _this = this;
        var myData = JSON.stringify({});
        console.log("Your myData: ", myData);
        this.util.presentLoading();
        this.util.getTypeDetailsWithAuth('users/resendotp.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            console.log("Your data: ", result);
            _this.data = result;
            console.log(_this.data);
            if (_this.data.success) {
                _this.util.showToast('Otp has been sent');
                localStorage.setItem('otp', JSON.stringify(_this.data.otp));
                _this.otpCheck = _this.data.otp;
            }
            else {
                _this.util.showToast(_this.data.message);
            }
        }, function (error) {
            _this.util.dismissLoader();
            _this.util.showToast('Server error occured. Try again.');
        });
    };
    OtpRegistrationPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-otp-registration',
            template: __webpack_require__(/*! ./otp-registration.page.html */ "./src/app/otp-registration/otp-registration.page.html"),
            styles: [__webpack_require__(/*! ./otp-registration.page.scss */ "./src/app/otp-registration/otp-registration.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _api_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], OtpRegistrationPage);
    return OtpRegistrationPage;
}());



/***/ })

}]);
//# sourceMappingURL=otp-registration-otp-registration-module.js.map