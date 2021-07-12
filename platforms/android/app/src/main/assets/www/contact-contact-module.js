(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-contact-module"],{

/***/ "./src/app/contact/contact.module.ts":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.module.ts ***!
  \*******************************************/
/*! exports provided: ContactPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact.page */ "./src/app/contact/contact.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _contact_page__WEBPACK_IMPORTED_MODULE_5__["ContactPage"]
    }
];
var ContactPageModule = /** @class */ (function () {
    function ContactPageModule() {
    }
    ContactPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_5__["ContactPage"]]
        })
    ], ContactPageModule);
    return ContactPageModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.page.html":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button style=\"color: #FFCC23\"></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n            Contact Us\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\" class=\"thankyou\">\n            <div>\n              <h4>\n                Contact Number -\n              </h4>\n              <h4>\n                7595955400\n              </h4>\n            </div>\n            <div>\n                <h4>\n                  Email Us at - \n                </h4>\n                <h4>\n                    support@smartkart.online\n                </h4>\n              </div>\n          </ion-col>\n        </ion-row>\n    </ion-grid>\n\n\n    <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\" style=\"margin-top: 5px;\">\n        <ion-item>\n            <ion-label position=\"stacked\" style=\"color: #979797;\">Name <ion-text color=\"danger\">*</ion-text>\n            </ion-label>\n            <ion-input [(ngModel)]=\"yourName\" type=\"text\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\" style=\"color: #979797;\">Mobile <ion-text color=\"danger\">*</ion-text>\n            </ion-label>\n            <ion-input [(ngModel)]=\"phoneNo\" type=\"text\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\" style=\"color: #979797;\">Email <ion-text color=\"danger\">*</ion-text>\n            </ion-label>\n            <ion-input [(ngModel)]=\"email\" type=\"text\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\" style=\"color: #979797;\">What's in your mind<ion-text color=\"danger\">*</ion-text>\n            </ion-label>\n            <ion-textarea placeholder=\"Enter more information here...\" style=\"border-width: 5px;height: 90px;\" [(ngModel)]=\"message\">\n            </ion-textarea>\n        </ion-item>\n    </ion-list>\n\n\n    <div>\n        <ion-button shape=\"round\" expand=\"full\" (click)=\"submitAddress()\">\n            Submit\n        </ion-button>\n    </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/contact/contact.page.scss":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg {\n  background-image: url(\"/assets/images/bg1.jpg\");\n  height: auto;\n  background-size: cover;\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center; }\n\n.loginBx {\n  margin: auto;\n  max-width: 374px;\n  padding: 25px;\n  background: rgba(255, 254, 254, 0.5);\n  border-radius: 10px;\n  text-align: center; }\n\n.loginBx .logologin {\n  max-width: 150px;\n  margin: auto; }\n\n.loginBx > h1 {\n  margin: 10px 0 10px;\n  font-size: 1.3rem; }\n\n.loginBx form {\n  text-align: left; }\n\nform label {\n  font-weight: 700;\n  font-size: .9rem; }\n\n.loginBx form input {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  border: 1px solid rgba(0, 0, 0, 0.35); }\n\n.secondary-link {\n  font-weight: 700;\n  color: #fff;\n  opacity: .4;\n  display: inline-block;\n  margin-top: 13px;\n  font-size: .9em; }\n\n.secondary-link:hover {\n  color: #fff;\n  opacity: 1; }\n\n.loginBtn {\n  padding: 8px 20px;\n  width: 100%;\n  text-align: center;\n  border-radius: 30px;\n  font-size: 18px;\n  color: #fff;\n  background-color: #1f61d9; }\n\n.loginBx ion-item {\n  border-radius: 30px !important;\n  padding-left: 30px !important;\n  font-size: 0.9em;\n  margin-bottom: 10px;\n  border: 1px solid #ffffff;\n  border-bottom: 0px !important;\n  box-shadow: none !important; }\n\n.loginBx ion-textarea {\n  height: 200px; }\n\n.loginBx ion-item:first-child {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.loginBx ion-item:last-child {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.loginBx ion-item.item {\n  background-color: rgba(255, 255, 255, 0.4);\n  margin-bottom: 1px; }\n\n.loginBx ion-item.item .label {\n    width: 10%;\n    color: rgba(0, 0, 0, 0.6);\n    font-size: 1.2em; }\n\n.thankyou {\n  text-align: center;\n  color: #155724;\n  background-color: #d4edda;\n  border-color: #c3e6cb;\n  padding: 22px 30px;\n  border: 1px solid #155724;\n  border-radius: 10px; }\n\n.thankyou h4 {\n    margin: 0;\n    padding: 0;\n    font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWF2ZXJzd2ViL0Rlc2t0b3AvU21hcnRLYXJ0SHlicmlkL3NyYy9hcHAvY29udGFjdC9jb250YWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtDQUErQztFQUMvQyxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHlCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLGtDQUFrQyxFQUFBOztBQUd0QztFQUNJLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG9DQUFtQztFQUNuQyxtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxtQkFBbUI7RUFDbkIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixxQ0FBb0MsRUFBQTs7QUFFeEM7RUFDSSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZ0JBQWU7RUFDZixlQUFjLEVBQUE7O0FBRWxCO0VBQ0ksV0FBVztFQUNYLFVBQVMsRUFBQTs7QUFFYjtFQUNJLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsV0FBVztFQUNYLHlCQUF3QixFQUFBOztBQUU1QjtFQUNJLDhCQUE4QjtFQUM5Qiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLDJCQUEyQixFQUFBOztBQUUvQjtFQUNHLGFBQWEsRUFBQTs7QUFFaEI7RUFDSSwyQkFBMkI7RUFDM0IsNEJBQTRCLEVBQUE7O0FBRTlCO0VBQ0UsOEJBQThCO0VBQzlCLCtCQUErQixFQUFBOztBQUVuQztFQUNJLDBDQUEwQztFQUMxQyxrQkFBa0IsRUFBQTs7QUFGdEI7SUFJTSxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLGdCQUFnQixFQUFBOztBQUlwQjtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQixFQUFBOztBQVByQjtJQVNNLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmcxLmpwZycpO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGZpbHRlcjogYmx1cigwcHgpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbkJ4e1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAzNzRweDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMjU1LCAyNTQsIDI1NCwgMC41KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxvZ2luQnggLmxvZ29sb2dpbntcclxuICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmxvZ2luQng+aDEge1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG59XHJcblxyXG4ubG9naW5CeCBmb3JtIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuZm9ybSBsYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAuOXJlbTtcclxufVxyXG4ubG9naW5CeCBmb3JtIGlucHV0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgcGFkZGluZzogOHB4IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zNSk7XHJcbn1cclxuLnNlY29uZGFyeS1saW5re1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgb3BhY2l0eTogLjQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOjEzcHg7XHJcbiAgICBmb250LXNpemU6LjllbTtcclxufVxyXG4uc2Vjb25kYXJ5LWxpbms6aG92ZXJ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG9wYWNpdHk6MTtcclxufVxyXG4ubG9naW5CdG4ge1xyXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzFmNjFkOTtcclxufVxyXG4ubG9naW5CeCBpb24taXRlbSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5sb2dpbkJ4IGlvbi10ZXh0YXJlYSB7XHJcbiAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuLmxvZ2luQnggaW9uLWl0ZW06Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgLmxvZ2luQnggaW9uLWl0ZW06bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gIH1cclxuLmxvZ2luQnggaW9uLWl0ZW0uaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbiAgICAubGFiZWwge1xyXG4gICAgICB3aWR0aDogMTAlO1xyXG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRoYW5reW91e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMxNTU3MjQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRlZGRhO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYzNlNmNiO1xyXG4gICAgcGFkZGluZzogMjJweCAzMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzE1NTcyNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBoNHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/contact/contact.page.ts":
/*!*****************************************!*\
  !*** ./src/app/contact/contact.page.ts ***!
  \*****************************************/
/*! exports provided: ContactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPage", function() { return ContactPage; });
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




var ContactPage = /** @class */ (function () {
    function ContactPage(util, alertController, events, navCtrl, route, modalController, activeroute, menuCtrl, platform) {
        this.util = util;
        this.alertController = alertController;
        this.events = events;
        this.navCtrl = navCtrl;
        this.route = route;
        this.modalController = modalController;
        this.activeroute = activeroute;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.yourName = "";
        this.email = "";
        this.phoneNo = "";
        this.message = "";
    }
    ContactPage.prototype.ngOnInit = function () {
    };
    // ionViewDidEnter() {
    //   alert(this.constructor.name)
    //   this.subscribe = this.platform.backButton.subscribeWithPriority(666, () => {
    //     if (this.constructor.name == "HomePage"){
    //       if(window.confirm("Do you want to exit app")){
    //         navigator["app"].exitApp();
    //       }
    //     }else{}
    //   })
    // }
    ContactPage.prototype.submitAddress = function () {
        if (this.yourName == '') {
            this.util.showToast('Please enter your name');
        }
        else if (this.email == '') {
            this.util.showToast('Please enter your email');
        }
        else if (this.phoneNo == '') {
            this.util.showToast('Please enter your phone no');
        }
        else if (this.message == '') {
            this.util.showToast('Please enter your message');
        }
        else {
            this.contactSubmit();
        }
    };
    ContactPage.prototype.contactSubmit = function () {
        var _this = this;
        var myData = JSON.stringify({
            name: this.yourName,
            email: this.email,
            mobile: this.phoneNo,
            message: this.message,
        });
        console.log("Your myData: ", JSON.parse(myData));
        this.util.presentLoading();
        this.util.getTypeDetailsWithAuth('sliders/contact.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            console.log("Your data: ", result);
            _this.data = result;
            if (_this.data.success) {
                _this.util.showToast(_this.data.msg);
                //this.util.showAlert("Thank You",this.data.msg)
                _this.navCtrl.navigateForward('/home');
            }
            else {
                _this.util.showToast(_this.data.msg);
            }
        }, function (error) {
            _this.util.dismissLoader();
            _this.util.showToast('Server error occured. Try again.');
        });
    };
    ContactPage.prototype.tabBarList = function () {
        this.navCtrl.navigateRoot('/list');
    };
    ContactPage.prototype.tabBarHome = function () {
        this.navCtrl.navigateRoot('/home');
    };
    ContactPage.prototype.tabBarPolicy = function () {
        this.navCtrl.navigateRoot('/privacy-policy');
    };
    ContactPage.prototype.tabBarContacts = function () {
        this.navCtrl.navigateRoot('/contact');
    };
    ContactPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.page.html */ "./src/app/contact/contact.page.html"),
            styles: [__webpack_require__(/*! ./contact.page.scss */ "./src/app/contact/contact.page.scss")]
        }),
        __metadata("design:paramtypes", [_api_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], ContactPage);
    return ContactPage;
}());



/***/ })

}]);
//# sourceMappingURL=contact-contact-module.js.map