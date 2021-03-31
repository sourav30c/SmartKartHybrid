(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-mode-payment-mode-module"],{

/***/ "./src/app/payment-mode/payment-mode.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/payment-mode/payment-mode.module.ts ***!
  \*****************************************************/
/*! exports provided: PaymentModePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModePageModule", function() { return PaymentModePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _payment_mode_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-mode.page */ "./src/app/payment-mode/payment-mode.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _payment_mode_page__WEBPACK_IMPORTED_MODULE_5__["PaymentModePage"]
    }
];
var PaymentModePageModule = /** @class */ (function () {
    function PaymentModePageModule() {
    }
    PaymentModePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_payment_mode_page__WEBPACK_IMPORTED_MODULE_5__["PaymentModePage"]]
        })
    ], PaymentModePageModule);
    return PaymentModePageModule;
}());



/***/ }),

/***/ "./src/app/payment-mode/payment-mode.page.html":
/*!*****************************************************!*\
  !*** ./src/app/payment-mode/payment-mode.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Payment Mode</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\" style=\"margin-top: 1px;\">\n    <ion-col size=\"12\">\n      <ion-card class=\"ion-no-margin\">\n        <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n          <ion-item>\n            <ion-label position=\"stacked\">Sub Total -\n            </ion-label>\n            <ion-label>Rs. {{totalCost}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-input  placeholder=\"Enter Coupon Code\" [(ngModel)]=\"couponCode\" ></ion-input>\n            <ion-button (click)=\"redeemCoupon()\">Redeem</ion-button>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Total - {{totalCost}}\n            </ion-label>\n            <ion-label></ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-card>\n    </ion-col>\n\n    <ion-radio-group value=\"{{isCode}}\" (ionChange)=\"paymentMode($event)\">\n      <ion-list-header>\n        <ion-label>Payment Type</ion-label>\n      </ion-list-header>\n      <ion-item *ngIf=\"iscodLimit\">\n        <ion-label>Cash On Delivery</ion-label>\n        <ion-radio slot=\"start\" value=\"1\" style=\"border: 1px grey;\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Pay Online</ion-label>\n        <ion-radio slot=\"start\" value=\"2\" style=\"border: 1px grey;\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n\n  <ion-card>\n    <ion-button shape=\"round\" fill=\"outline\" expand=\"full\" (click)=\"toPayment()\">\n      Proceed\n    </ion-button>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/payment-mode/payment-mode.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/payment-mode/payment-mode.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cartItem {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n  padding-top: 15px; }\n\n.cName {\n  margin: 0 0 5px;\n  font-size: 18px; }\n\n.Pprice {\n  margin: 10px 0; }\n\n.crPrice {\n  font-size: 18px;\n  display: inline-block;\n  margin-right: 10px; }\n\n.oldPrice {\n  text-decoration: line-through;\n  color: rgba(0, 0, 0, 0.6);\n  display: inline-block;\n  margin-right: 15px; }\n\n.offPrice {\n  color: green; }\n\n.unitP {\n  font-size: 14px;\n  float: right;\n  width: 50px;\n  padding: 4px; }\n\n.qty {\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.24);\n  margin-top: 9px;\n  border-radius: 5px;\n  max-width: 70px;\n  margin: 10px auto 3px; }\n\n.imgwrp {\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.35);\n  padding: 1px; }\n\n.tAmnt {\n  margin-top: 13px; }\n\n.rmvBtn.button-outline {\n  --border-width: 1px;\n  --border-color: rgba(0, 0, 0, 0.35);\n  height: 30px;\n  width: 80px; }\n\n.infoC {\n  text-align: right;\n  margin: 10px 0; }\n\n.PdActins {\n  text-align: center;\n  margin-top: 30px; }\n\n.PdActins ion-button {\n  width: 48%;\n  margin: 0 2px; }\n\nion-content ion-label {\n  font-size: 17px;\n  font-weight: 400; }\n\nion-content ion-textarea {\n  border: 1px solid #CCCCCC;\n  padding: 5px;\n  height: 160px;\n  border-radius: 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YXAvRGVza3RvcC9Jb25pY19Qcm9qZWN0L2FyY2hpdmUgaW9uaWMgZlByb2plY3Qvb2xkIGFyY2hpdmUgMi9BcmNoaXZlIDIvc3JjL2FwcC9wYXltZW50LW1vZGUvcGF5bWVudC1tb2RlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRDQUE0QztFQUM1QyxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUVuQjtFQUFTLGNBQWMsRUFBQTs7QUFDdkI7RUFDSSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGtCQUFrQixFQUFBOztBQUV0QjtFQUFVLFlBQVksRUFBQTs7QUFDdEI7RUFDSSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksdUNBQXVDO0VBQ3ZDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLHVDQUF1QztFQUN2QyxZQUFZLEVBQUE7O0FBRWhCO0VBQVcsZ0JBQWdCLEVBQUE7O0FBRTNCO0VBQ0ksbUJBQWU7RUFDZixtQ0FBZTtFQUNmLFlBQVc7RUFDWCxXQUFVLEVBQUE7O0FBR2Q7RUFDSSxpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxVQUFVO0VBQ1YsYUFBYSxFQUFBOztBQUdqQjtFQUVRLGVBQWU7RUFFZixnQkFBZ0IsRUFBQTs7QUFKeEI7RUFPUSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQtbW9kZS9wYXltZW50LW1vZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcnRJdGVte1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuLmNOYW1le1xuICAgIG1hcmdpbjogMCAwIDVweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG4uUHByaWNleyBtYXJnaW46IDEwcHggMDt9XG4uY3JQcmljZXtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5vbGRQcmljZXtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4ub2ZmUHJpY2V7Y29sb3I6IGdyZWVuO31cbi51bml0UHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIHBhZGRpbmc6IDRweDtcbn1cbi5xdHl7XG4gICAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgIG1hcmdpbi10b3A6IDlweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWF4LXdpZHRoOiA3MHB4O1xuICAgIG1hcmdpbjogMTBweCBhdXRvIDNweDtcbn1cbi5pbWd3cnB7XG4gICAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICAgIHBhZGRpbmc6IDFweDtcbn1cbi50QW1udHsgICAgbWFyZ2luLXRvcDogMTNweDt9XG5cbi5ybXZCdG4uYnV0dG9uLW91dGxpbmUge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgLS1ib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gICAgaGVpZ2h0OjMwcHg7XG4gICAgd2lkdGg6ODBweDtcbn1cblxuLmluZm9De1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbjogMTBweCAwO1xufVxuLlBkQWN0aW5ze1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLlBkQWN0aW5zIGlvbi1idXR0b257XG4gICAgd2lkdGg6IDQ4JTtcbiAgICBtYXJnaW46IDAgMnB4O1xufVxuXG5pb24tY29udGVudHtcbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgLy9jb2xvcjogI0E3Q0Y0NjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG4gICAgaW9uLXRleHRhcmVhe1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGhlaWdodDogMTYwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICB9XG59XG5cbi8vIC5pdGVtLWlucHV0IHtcbi8vICAgICBwYWRkaW5nOiA1cHg7XG4vLyAgICAgYm9yZGVyOiBzb2xpZCAuNXB4IGdyZXk7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuLy8gfSJdfQ== */"

/***/ }),

/***/ "./src/app/payment-mode/payment-mode.page.ts":
/*!***************************************************!*\
  !*** ./src/app/payment-mode/payment-mode.page.ts ***!
  \***************************************************/
/*! exports provided: PaymentModePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModePage", function() { return PaymentModePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/utility.service */ "./src/app/api/utility.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PaymentModePage = /** @class */ (function () {
    function PaymentModePage(util, alertController, events, navCtrl, route, modalController, activeroute, menuCtrl, iab) {
        this.util = util;
        this.alertController = alertController;
        this.events = events;
        this.navCtrl = navCtrl;
        this.route = route;
        this.modalController = modalController;
        this.activeroute = activeroute;
        this.menuCtrl = menuCtrl;
        this.iab = iab;
        this.totalCost = "";
        this.cartInfoId = "";
        this.isCode = "2";
        this.codLimitValue = 0;
        this.totalCost = this.route.getCurrentNavigation().extras.state.parms;
        this.cartInfoId = this.route.getCurrentNavigation().extras.state.parms1;
        this.codLimitValue = Number(localStorage.getItem('codLimit'));
        console.log("cod limit comparison", this.totalCost, this.util.codLimit, this.codLimitValue);
        if (Number(this.totalCost) <= Number(this.codLimitValue)) {
            this.iscodLimit = true;
        }
        else {
            this.iscodLimit = false;
        }
        if (localStorage.getItem('userToken') != null) {
            this.userToken = JSON.parse(localStorage.getItem('userToken'));
            console.log("user token", this.userToken);
        }
        else {
            this.util.showToast('No User Token fetched. Try again.');
        }
    }
    PaymentModePage.prototype.ngOnInit = function () {
    };
    PaymentModePage.prototype.paymentMode = function (ev) {
        if (ev.detail.value == "1") {
            this.isCode = "1";
        }
        else {
            this.isCode = "2";
        }
        console.log("radio ev", ev.detail.value, this.isCode);
    };
    PaymentModePage.prototype.toPayment = function () {
        if (this.isCode == "1") {
            this.postDataCod();
        }
        else if (this.isCode == "2") {
            this.showFILE('https://www.kkcarts.com/api/carts/ccavenuePayment/' + this.userToken);
        }
    };
    PaymentModePage.prototype.showFILE = function (url) {
        var _this = this;
        //alert(url)
        var browser = this.iab.create(url, '_blank', 'location=yes,toolbar=yes');
        console.log("browser", browser);
        browser.on('loadstop').subscribe(function (event) {
            console.log("loadstop -->", event);
            setInterval(function () { return _this.getStateSecondWindow(browser); }, 5000);
            //setInterval(this.getStateSecondWindow(browser), 5000);
        }, function (err) {
            console.log("InAppbrowser loadstop Event Error: " + err);
        });
        browser.on('loaderror').subscribe(function (event) {
            console.log("loaderror -->", event);
        }, function (err) {
            console.log("InAppbrowser loaderror Event Error: " + err);
        });
        browser.on('exit').subscribe(function (event) {
            console.log("exit -->", event);
        }, function (err) {
            console.log("InAppbrowser exit Event Error: " + err);
        });
        browser.show();
    };
    PaymentModePage.prototype.getStateSecondWindow = function (browser) {
        console.log('call now');
        browser.executeScript({
            code: "localStorage.getItem('isCloseSelf')" //"localStorage.getItem('isCloseSelf')"
        }, function (data) {
            console.log("data test function");
            console.log(data);
            browser.close();
            if (data == 'yes') {
                this.navCtrl.navigateForward('/thank-you');
            }
            else if (data == 'failed') {
                this.util.showToast('Payment is unsuccessful. Please Try again.');
                this.navCtrl.navigateForward('/cart');
            }
            else {
                this.util.showToast('Payment is unsuccessful. Please Try again.');
                this.navCtrl.navigateForward('/cart');
            }
        });
    };
    PaymentModePage.prototype.postDataCod = function () {
        var _this = this;
        var myData = JSON.stringify({});
        console.log("Your myData: ", myData);
        this.util.presentLoading();
        this.util.getTypeDetailsWithAuth('carts/freePayment.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            console.log("Your data: ", result);
            _this.data = result;
            if (_this.data.success) {
                //this.util.showAlert("Thank You", this.data.data)
                _this.navCtrl.navigateForward('/thank-you');
            }
            else {
                _this.util.showToast(_this.data.message);
            }
        }, function (error) {
            _this.util.dismissLoader();
            _this.util.showToast('Server error occured. Try again.');
        });
    };
    PaymentModePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment-mode',
            template: __webpack_require__(/*! ./payment-mode.page.html */ "./src/app/payment-mode/payment-mode.page.html"),
            styles: [__webpack_require__(/*! ./payment-mode.page.scss */ "./src/app/payment-mode/payment-mode.page.scss")]
        }),
        __metadata("design:paramtypes", [_api_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"]])
    ], PaymentModePage);
    return PaymentModePage;
}());



/***/ })

}]);
//# sourceMappingURL=payment-mode-payment-mode-module.js.map