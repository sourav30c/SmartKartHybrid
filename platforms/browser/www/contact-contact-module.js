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

module.exports = ".bg {\n  background-image: url(\"/assets/images/bg1.jpg\");\n  height: auto;\n  background-size: cover;\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center; }\n\n.loginBx {\n  margin: auto;\n  max-width: 374px;\n  padding: 25px;\n  background: rgba(255, 254, 254, 0.5);\n  border-radius: 10px;\n  text-align: center; }\n\n.loginBx .logologin {\n  max-width: 150px;\n  margin: auto; }\n\n.loginBx > h1 {\n  margin: 10px 0 10px;\n  font-size: 1.3rem; }\n\n.loginBx form {\n  text-align: left; }\n\nform label {\n  font-weight: 700;\n  font-size: .9rem; }\n\n.loginBx form input {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  border: 1px solid rgba(0, 0, 0, 0.35); }\n\n.secondary-link {\n  font-weight: 700;\n  color: #fff;\n  opacity: .4;\n  display: inline-block;\n  margin-top: 13px;\n  font-size: .9em; }\n\n.secondary-link:hover {\n  color: #fff;\n  opacity: 1; }\n\n.loginBtn {\n  padding: 8px 20px;\n  width: 100%;\n  text-align: center;\n  border-radius: 30px;\n  font-size: 18px;\n  color: #fff;\n  background-color: #1f61d9; }\n\n.loginBx ion-item {\n  border-radius: 30px !important;\n  padding-left: 30px !important;\n  font-size: 0.9em;\n  margin-bottom: 10px;\n  border: 1px solid #ffffff;\n  border-bottom: 0px !important;\n  box-shadow: none !important; }\n\n.loginBx ion-textarea {\n  height: 200px; }\n\n.loginBx ion-item:first-child {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.loginBx ion-item:last-child {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.loginBx ion-item.item {\n  background-color: rgba(255, 255, 255, 0.4);\n  margin-bottom: 1px; }\n\n.loginBx ion-item.item .label {\n    width: 10%;\n    color: rgba(0, 0, 0, 0.6);\n    font-size: 1.2em; }\n\n.thankyou {\n  text-align: center;\n  color: #155724;\n  background-color: #d4edda;\n  border-color: #c3e6cb;\n  padding: 22px 30px;\n  border: 1px solid #155724;\n  border-radius: 10px; }\n\n.thankyou h4 {\n    margin: 0;\n    padding: 0;\n    font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YXAvRGVza3RvcC9pb25pYyBQcm9qZWN0L3BwL1NtYXJ0LUNhcnQgMi9zcmMvYXBwL2NvbnRhY3QvY29udGFjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQ0FBK0M7RUFDL0MsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixrQ0FBa0MsRUFBQTs7QUFHdEM7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixvQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIscUNBQW9DLEVBQUE7O0FBRXhDO0VBQ0ksZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGdCQUFlO0VBQ2YsZUFBYyxFQUFBOztBQUVsQjtFQUNJLFdBQVc7RUFDWCxVQUFTLEVBQUE7O0FBRWI7RUFDSSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFdBQVc7RUFDWCx5QkFBd0IsRUFBQTs7QUFFNUI7RUFDSSw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QiwyQkFBMkIsRUFBQTs7QUFFL0I7RUFDRyxhQUFhLEVBQUE7O0FBRWhCO0VBQ0ksMkJBQTJCO0VBQzNCLDRCQUE0QixFQUFBOztBQUU5QjtFQUNFLDhCQUE4QjtFQUM5QiwrQkFBK0IsRUFBQTs7QUFFbkM7RUFDSSwwQ0FBMEM7RUFDMUMsa0JBQWtCLEVBQUE7O0FBRnRCO0lBSU0sVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUIsRUFBQTs7QUFQckI7SUFTTSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmd7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JnMS5qcGcnKTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG59XHJcblxyXG4ubG9naW5CeHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1heC13aWR0aDogMzc0cHg7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDpyZ2JhKDI1NSwgMjU0LCAyNTQsIDAuNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5sb2dpbkJ4IC5sb2dvbG9naW57XHJcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5sb2dpbkJ4PmgxIHtcclxuICAgIG1hcmdpbjogMTBweCAwIDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG5cclxuLmxvZ2luQnggZm9ybSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbmZvcm0gbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbn1cclxuLmxvZ2luQnggZm9ybSBpbnB1dCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmYwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzUpO1xyXG59XHJcbi5zZWNvbmRhcnktbGlua3tcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG9wYWNpdHk6IC40O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDoxM3B4O1xyXG4gICAgZm9udC1zaXplOi45ZW07XHJcbn1cclxuLnNlY29uZGFyeS1saW5rOmhvdmVye1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBvcGFjaXR5OjE7XHJcbn1cclxuLmxvZ2luQnRuIHtcclxuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxZjYxZDk7XHJcbn1cclxuLmxvZ2luQnggaW9uLWl0ZW0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICBib3JkZXItYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4ubG9naW5CeCBpb24tdGV4dGFyZWEge1xyXG4gICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbi5sb2dpbkJ4IGlvbi1pdGVtOmZpcnN0LWNoaWxkIHtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIC5sb2dpbkJ4IGlvbi1pdGVtOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICB9XHJcbi5sb2dpbkJ4IGlvbi1pdGVtLml0ZW0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXB4O1xyXG4gICAgLmxhYmVsIHtcclxuICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50aGFua3lvdXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMTU1NzI0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZWRkYTtcclxuICAgIGJvcmRlci1jb2xvcjogI2MzZTZjYjtcclxuICAgIHBhZGRpbmc6IDIycHggMzBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxNTU3MjQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgaDR7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG59Il19 */"

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