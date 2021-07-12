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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button style=\"color: #FFCC23\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Payment Mode</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\" style=\"margin-top: 1px;\">\n    <!-- <ion-col size=\"12\">\n      <ion-card class=\"ion-no-margin\">\n        <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n          <ion-item>\n            <ion-label position=\"stacked\">Sub Total -\n            </ion-label>\n            <ion-label>Rs. {{totalCost}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Total - {{totalCost}}\n            </ion-label>\n            <ion-label></ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-card>\n    </ion-col> -->\n\n    <ion-col size=\"12\">\n      <ion-card class=\"ion-no-margin\">\n        <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n          <ion-item>\n            <ion-label position=\"stacked\">Sub Total -\n            </ion-label>\n            <ion-label style=\"text-align: right;margin-right: 15px;\">₹ {{subtotalCost}}</ion-label>\n          </ion-item>\n          <ion-item *ngIf=\"isCode == '1'\">\n            <ion-label position=\"stacked\">COD Charge -\n            </ion-label>\n            <ion-label style=\"text-align: right;margin-right: 15px;\">₹ {{delivryCharge}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Total - \n            </ion-label>\n            <ion-label style=\"text-align: right;margin-right: 15px;\">₹ {{totalCost}}</ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-card>\n    </ion-col>\n\n\n\n\n    <ion-radio-group value=\"{{isCode}}\" (ionChange)=\"paymentMode($event)\">\n      <ion-list-header>\n        <ion-label>Payment Type</ion-label>\n      </ion-list-header>\n      <ion-item *ngIf=\"iscodLimit\">\n        <ion-label>Cash On Delivery</ion-label>\n        <ion-radio slot=\"start\" value=\"1\" style=\"border: 1px grey;\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Pay Online</ion-label>\n        <ion-radio slot=\"start\" value=\"2\" style=\"border: 1px grey;\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n\n  <!-- <ion-card> -->\n    <ion-button shape=\"round\" fill=\"outline\" expand=\"full\" (click)=\"toPayment()\">\n      Proceed\n    </ion-button>\n  <!-- </ion-card> -->\n\n</ion-content>"

/***/ }),

/***/ "./src/app/payment-mode/payment-mode.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/payment-mode/payment-mode.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cartItem {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n  padding-top: 15px; }\n\n.cName {\n  margin: 0 0 5px;\n  font-size: 18px; }\n\n.Pprice {\n  margin: 10px 0; }\n\n.crPrice {\n  font-size: 18px;\n  display: inline-block;\n  margin-right: 10px; }\n\n.oldPrice {\n  text-decoration: line-through;\n  color: rgba(0, 0, 0, 0.6);\n  display: inline-block;\n  margin-right: 15px; }\n\n.offPrice {\n  color: green; }\n\n.unitP {\n  font-size: 14px;\n  float: right;\n  width: 50px;\n  padding: 4px; }\n\n.qty {\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.24);\n  margin-top: 9px;\n  border-radius: 5px;\n  max-width: 70px;\n  margin: 10px auto 3px; }\n\n.imgwrp {\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.35);\n  padding: 1px; }\n\n.tAmnt {\n  margin-top: 13px; }\n\n.rmvBtn.button-outline {\n  --border-width: 1px;\n  --border-color: rgba(0, 0, 0, 0.35);\n  height: 30px;\n  width: 80px; }\n\n.infoC {\n  text-align: right;\n  margin: 10px 0; }\n\n.PdActins {\n  text-align: center;\n  margin-top: 30px; }\n\n.PdActins ion-button {\n  width: 48%;\n  margin: 0 2px; }\n\nion-content ion-label {\n  font-size: 17px;\n  font-weight: 400; }\n\nion-content ion-textarea {\n  border: 1px solid #CCCCCC;\n  padding: 5px;\n  height: 160px;\n  border-radius: 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWF2ZXJzd2ViL0Rlc2t0b3AvU21hcnRLYXJ0SHlicmlkL3NyYy9hcHAvcGF5bWVudC1tb2RlL3BheW1lbnQtbW9kZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0Q0FBNEM7RUFDNUMsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFFbkI7RUFBUyxjQUFjLEVBQUE7O0FBQ3ZCO0VBQ0ksZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFBVSxZQUFZLEVBQUE7O0FBQ3RCO0VBQ0ksZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUVoQjtFQUNJLHVDQUF1QztFQUN2QyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSx1Q0FBdUM7RUFDdkMsWUFBWSxFQUFBOztBQUVoQjtFQUFXLGdCQUFnQixFQUFBOztBQUUzQjtFQUNJLG1CQUFlO0VBQ2YsbUNBQWU7RUFDZixZQUFXO0VBQ1gsV0FBVSxFQUFBOztBQUdkO0VBQ0ksaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksVUFBVTtFQUNWLGFBQWEsRUFBQTs7QUFHakI7RUFFUSxlQUFlO0VBRWYsZ0JBQWdCLEVBQUE7O0FBSnhCO0VBT1EseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYXltZW50LW1vZGUvcGF5bWVudC1tb2RlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJ0SXRlbXtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbi5jTmFtZXtcbiAgICBtYXJnaW46IDAgMCA1cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuLlBwcmljZXsgbWFyZ2luOiAxMHB4IDA7fVxuLmNyUHJpY2V7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ub2xkUHJpY2V7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLm9mZlByaWNle2NvbG9yOiBncmVlbjt9XG4udW5pdFB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBwYWRkaW5nOiA0cHg7XG59XG4ucXR5e1xuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICBtYXJnaW4tdG9wOiA5cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1heC13aWR0aDogNzBweDtcbiAgICBtYXJnaW46IDEwcHggYXV0byAzcHg7XG59XG4uaW1nd3Jwe1xuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgICBwYWRkaW5nOiAxcHg7XG59XG4udEFtbnR7ICAgIG1hcmdpbi10b3A6IDEzcHg7fVxuXG4ucm12QnRuLmJ1dHRvbi1vdXRsaW5lIHtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICAgIGhlaWdodDozMHB4O1xuICAgIHdpZHRoOjgwcHg7XG59XG5cbi5pbmZvQ3tcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW46IDEwcHggMDtcbn1cbi5QZEFjdGluc3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5QZEFjdGlucyBpb24tYnV0dG9ue1xuICAgIHdpZHRoOiA0OCU7XG4gICAgbWFyZ2luOiAwIDJweDtcbn1cblxuaW9uLWNvbnRlbnR7XG4gICAgaW9uLWxhYmVse1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIC8vY29sb3I6ICNBN0NGNDY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICAgIGlvbi10ZXh0YXJlYXtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0NDQ0NDQztcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBoZWlnaHQ6IDE2MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgfVxufVxuXG4vLyAuaXRlbS1pbnB1dCB7XG4vLyAgICAgcGFkZGluZzogNXB4O1xuLy8gICAgIGJvcmRlcjogc29saWQgLjVweCBncmV5O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbi8vIH0iXX0= */"

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
        this.subtotalCost = "";
        this.cartInfoId = "";
        this.isCode = "2";
        this.codLimitValue = 0;
        this.delivryCharge = 0;
        this.datares = 0;
        this.countYes = 0;
        this.totalCost = this.route.getCurrentNavigation().extras.state.parms;
        this.subtotalCost = this.route.getCurrentNavigation().extras.state.parms;
        this.cartInfoId = this.route.getCurrentNavigation().extras.state.parms1;
        this.codLimitValue = Number(localStorage.getItem('codLimit'));
        this.delivryCharge = Number(localStorage.getItem('delivryCharge'));
        console.log("cod limit comparison", this.totalCost, this.codLimitValue);
        localStorage.setItem('this.datares', "0");
        localStorage.setItem('countYes', String(this.countYes));
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
            this.totalCost = String(Number(this.subtotalCost) + this.delivryCharge);
        }
        else {
            this.isCode = "2";
            this.totalCost = this.subtotalCost;
        }
        console.log("radio ev", ev.detail.value, this.isCode);
    };
    PaymentModePage.prototype.toPayment = function () {
        if (this.isCode == "1") {
            this.postDataCod();
        }
        else if (this.isCode == "2") {
            this.postDataOnline();
            //this.showFILE('https://www.smartkart.online/api/carts/ccavenuePayment/'+this.userToken)
        }
    };
    PaymentModePage.prototype.showFILE = function (url) {
        var _this = this;
        var browser = this.iab.create(url, '_blank', 'location=yes,toolbar=yes');
        //console.log("browser1", browser, url)
        // console.log('localstorage check:: ', localStorage.getItem('this.datares'));
        //console.log('localstorage check 22:: ', localStorage.getItem('countYes'), this.countYes);
        // browser.on('loadstop').subscribe(event => {
        //   console.log("loadstop -->", event);
        //   this.getStateSecondWindow(browser)
        //   //var id = setInterval(() => this.getStateSecondWindow(browser), 5000);
        //   //console.log("id = setInterval", id)
        //   //clearInterval(id)
        // }, err => {
        //   console.log("InAppbrowser loadstop Event Error: " + err);
        // });
        browser.on('loadstop').subscribe(function (event) {
            browser.executeScript({ code: "localStorage.getItem('isCloseSelf')" }).then(function (cookie) {
                if (cookie == "yes") {
                    localStorage.setItem('this.datares', "1");
                }
                else {
                    localStorage.setItem('this.datares', "0");
                }
            });
        });
        browser.on('loaderror').subscribe(function (event) {
            console.log("loaderror -->", event);
        }, function (err) {
            console.log("InAppbrowser loaderror Event Error: " + err);
        });
        browser.on('exit').subscribe(function (event) {
            console.log("exit -->", event);
            console.log('browser closed on exit localstorage:: ', localStorage.getItem('this.datares'));
            _this.datares = Number(localStorage.getItem('this.datares'));
            console.log('browser closed on exit:: ', _this.datares);
            if (_this.datares == 1) {
                _this.navCtrl.navigateForward('/thank-you');
            }
            else {
                //this.navCtrl.pop()
            }
        }, function (err) {
            console.log("InAppbrowser exit Event Error: " + err);
        });
        browser.show();
    };
    // getStateSecondWindow(browser) {
    //   console.log('call now');
    //   this.countYes = this.countYes + 1
    //   console.log('countYes', this.countYes);
    //   // browser.executeScript({ code: "localStorage.getItem('isCloseSelf')" }).then((data) => {
    //   //   //this.eventCheck()
    //   //   console.log("data ==" + data)
    //   //   if (data == 'yes') {
    //   //     console.log("transaction yes1", this.datares)
    //   //     this.datares = 1
    //   //     //console.log("transaction yes2", this.datares)
    //   //     //browser.close()
    //   //     // browser.on('exit').subscribe(() => {
    //   //     //   console.log('browser closed');
    //   //     //   this.navCtrl.navigateForward('/thank-you')
    //   //     // }, err => {
    //   //     //   console.error(err);
    //   //     // });
    //   //     // console.log('browser closed not executing');
    //   //     browser.close();
    //   //     this.navCtrl.navigateForward('/thank-you')
    //   //     //browser.close();
    //   //   } else if (data == 'failed') {
    //   //     this.util.showToast('Payment is unsuccessful. Please Try again.');
    //   //     console.log('transaction failed')
    //   //    // this.datares = 0
    //   //     browser.close();
    //   //     this.navCtrl.navigateForward('/cart')
    //   //   } else {
    //   //     // this.util.showToast('Payment is unsuccessful. Please Try again.');
    //   //     // console.log('transaction unsuccessful')
    //   //     // this.datares = 0
    //   //     // browser.close();
    //   //     // this.navCtrl.navigateForward('/cart')
    //   //   }
    //   // })
    //   browser.executeScript(
    //     {
    //       code: "localStorage.getItem('isCloseSelf')" //"localStorage.getItem('isCloseSelf')"
    //     },
    //     function (data) {
    //       console.log("data ==", data, this.countYes)
    //       if (this.countYes != 1 && data == 'yes') {
    //         localStorage.setItem('this.datares', "1");
    //       } else {
    //         localStorage.setItem('this.datares', "0");
    //       }
    //       console.log("localStorage", localStorage.getItem('this.datares'))
    //       // this.eventCheck()
    //       //this.events.publish('showMenuccv');
    //       //console.log("data.length ==", data.length)
    //       //alert(1)
    //       // console.log("transaction yes1")
    //       // this.datares = 1
    //       // //alert(2)
    //       // console.log("transaction yes2")
    //       //alert(this.datares)
    //       //console.log("transaction yes2" + this.datares)
    //       // console.log(this.datares)
    //       if (data == 'yes') {
    //         //console.log("transaction yes1", this.datares)
    //         //localStorage.setItem('this.datares', "1");
    //         //this.datares = 1
    //         //console.log("transaction yes2", this.datares)
    //         //browser.close()
    //         // browser.on('exit').subscribe(() => {
    //         //   console.log('browser closed');
    //         //   this.navCtrl.navigateForward('/thank-you')
    //         // }, err => {
    //         //   console.error(err);
    //         // });
    //         // console.log('browser closed not executing');
    //         //browser.close();
    //         //this.navCtrl.navigateForward('/thank-you')
    //         //browser.close();
    //       } else if (data == 'failed') {
    //         this.util.showToast('Payment is unsuccessful. Please Try again.');
    //         console.log('transaction failed')
    //         this.datares = 0
    //         browser.close();
    //         this.navCtrl.navigateForward('/cart')
    //       } else {
    //         this.util.showToast('Payment is unsuccessful. Please Try again.');
    //         console.log('transaction unsuccessful')
    //         this.datares = 0
    //         browser.close();
    //         this.navCtrl.navigateForward('/cart')
    //       }
    //     }
    //   );
    // }
    PaymentModePage.prototype.eventCheck = function () {
        console.log('user loginnnnnn');
        this.datares = 1;
        console.log('user loginnnnnn this.datares', this.datares);
    };
    PaymentModePage.prototype.postDataOnline = function () {
        var _this = this;
        var myData = JSON.stringify({
            info_id: String(this.cartInfoId),
            delivary_mode: "1"
        });
        console.log("Your myData: ", myData); //carts/freePayment.json
        this.util.presentLoading();
        this.util.getTypeDetailsWithAuth('carts/setDelivaryMode.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            console.log("Your data: ", result);
            _this.data = result;
            if (_this.data.success) {
                _this.showFILE('https://www.smartkart.online/api/carts/ccavenuePayment/' + _this.userToken);
                //this.showFILE('https://www.google.co.in')
            }
            else {
                _this.util.showToast(_this.data.message);
            }
        }, function (error) {
            _this.util.dismissLoader();
            _this.util.showToast('Server error occured. Try again.');
        });
    };
    PaymentModePage.prototype.postDataCod = function () {
        var _this = this;
        var myData = JSON.stringify({
            info_id: String(this.cartInfoId),
            delivary_mode: "2"
        });
        console.log("Your myData: ", myData); //carts/freePayment.json
        this.util.presentLoading();
        this.util.getTypeDetailsWithAuth('carts/setDelivaryMode.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            console.log("Your data: ", result);
            _this.data = result;
            if (_this.data.success) {
                //this.util.showAlert("Thank You", this.data.data)
                //this.showFILE('https://www.smartkart.online/api/carts/ccavenuePayment/'+this.userToken)
                _this.postDataCodPost();
                //this.navCtrl.navigateForward('/thank-you')
            }
            else {
                _this.util.showToast(_this.data.message);
            }
        }, function (error) {
            _this.util.dismissLoader();
            _this.util.showToast('Server error occured. Try again.');
        });
    };
    PaymentModePage.prototype.postDataCodPost = function () {
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