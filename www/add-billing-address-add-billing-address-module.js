(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-billing-address-add-billing-address-module"],{

/***/ "./src/app/add-billing-address/add-billing-address.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/add-billing-address/add-billing-address.module.ts ***!
  \*******************************************************************/
/*! exports provided: AddBillingAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBillingAddressPageModule", function() { return AddBillingAddressPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_billing_address_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-billing-address.page */ "./src/app/add-billing-address/add-billing-address.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _add_billing_address_page__WEBPACK_IMPORTED_MODULE_5__["AddBillingAddressPage"]
    }
];
var AddBillingAddressPageModule = /** @class */ (function () {
    function AddBillingAddressPageModule() {
    }
    AddBillingAddressPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_billing_address_page__WEBPACK_IMPORTED_MODULE_5__["AddBillingAddressPage"]]
        })
    ], AddBillingAddressPageModule);
    return AddBillingAddressPageModule;
}());



/***/ }),

/***/ "./src/app/add-billing-address/add-billing-address.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/add-billing-address/add-billing-address.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button style=\"color: #FFCC23\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add Address</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\" style=\"margin-top: 5px;\">\n    <ion-item>\n      <ion-label position=\"stacked\">Name <ion-text color=\"danger\">*</ion-text>\n      </ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"user_name\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Mobile <ion-text color=\"danger\">*</ion-text>\n      </ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"user_mobile\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Email <ion-text color=\"danger\">*</ion-text>\n      </ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"user_email\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Address <ion-text color=\"danger\">*</ion-text>\n      </ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"user_address\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Country <ion-text color=\"danger\">*</ion-text>\n      </ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"user_country\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">State <ion-text color=\"danger\">*</ion-text>\n      </ion-label>\n\n        <ion-select [(ngModel)]=\"user_state\" ng-init=\"user_state\" name=\"user_state\" (ionChange)=\"selectState($event)\" [selectedText]=\"stateName\">\n          <ion-select-option *ngFor=\"let allState of allStates\" [value]=\"allState.id\" [selected]=\"stateName == allState.name\">{{allState.name}}\n          </ion-select-option>\n        </ion-select>\n\n        <!-- <ion-select [(ngModel)]=\"store_id\" ng-init=\"store_id\" name=\"store_id\" (ionChange)=\"selectStore($event)\" [selectedText]=\"storeName\">\n          <ion-select-option *ngFor=\"let singleStore of store_list\" [value]=\"singleStore.storeid\" [selected]=\"storeName == singleStore.title\">{{singleStore.title}}\n          </ion-select-option>\n        </ion-select> -->\n\n\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">City <ion-text color=\"danger\">*</ion-text>\n      </ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"user_city\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Zip <ion-text color=\"danger\">*</ion-text>\n      </ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"user_zip\"></ion-input>\n    </ion-item>\n\n      <ion-radio-group value=\"{{isHomeAddress}}\" (ionChange)=\"addressTypeRadio($event)\">\n        <ion-list-header>\n          <ion-label>Billing Address Type</ion-label>\n        </ion-list-header>\n        <ion-item>\n          <ion-label>Home</ion-label>\n          <ion-radio slot=\"start\" value=\"1\" style=\"border: 1px grey;\"></ion-radio>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label>Office</ion-label>\n          <ion-radio slot=\"start\" value=\"2\" style=\"border: 1px grey;\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n\n  </ion-list>\n\n  <ion-card>\n    <ion-button shape=\"round\" fill=\"outline\" expand=\"full\" (click)=\"submitAddress()\">\n      Add Address\n    </ion-button>\n  </ion-card>\n\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/add-billing-address/add-billing-address.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/add-billing-address/add-billing-address.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".company-logo {\n  width: 78px;\n  height: 78px;\n  border-radius: 50%;\n  border: 8px solid #1B98D5;\n  background: #979797;\n  overflow: hidden; }\n\n.company-details p {\n  font-size: 12px;\n  color: #A7A7A7;\n  line-height: 18px;\n  margin: 0; }\n\n.company-details h4 {\n  font-size: 16px;\n  color: #000;\n  font-weight: 600; }\n\n.company-details h6 {\n  color: #A7A7A7;\n  margin: 2px 0;\n  font-size: 15px; }\n\n.company-details h6 strong {\n    color: #000;\n    font-weight: 600; }\n\nion-content ion-label {\n  font-size: 17px;\n  color: #A7CF46;\n  font-weight: 400; }\n\nion-content ion-textarea {\n  border: 1px solid #CCCCCC;\n  padding: 5px;\n  height: 160px;\n  border-radius: 6px; }\n\n.customer-details {\n  border: 1px solid #D2D2D2;\n  margin: 5px 0;\n  width: 100%; }\n\n.customer-details ul {\n    padding: 0;\n    margin: 0; }\n\n.customer-details ul li {\n      /* OLD - iOS 6-, Safari 3.1-6 */\n      /* OLD - Firefox 19- (buggy but mostly works) */\n      /* TWEENER - IE 10 */\n      /* NEW - Chrome */\n      display: flex;\n      list-style: none;\n      width: 100%;\n      padding: 5px; }\n\n.customer-details ul li .left {\n        font-size: 14px;\n        color: #979797;\n        width: 50%; }\n\n.customer-details ul li .right {\n        font-size: 14px;\n        color: #000000;\n        width: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YXAvRGVza3RvcC9pb25pYyBQcm9qZWN0L3BwL1NtYXJ0LUNhcnQgMi9zcmMvYXBwL2FkZC1iaWxsaW5nLWFkZHJlc3MvYWRkLWJpbGxpbmctYWRkcmVzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBOztBQUVwQjtFQUVRLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFNBQVMsRUFBQTs7QUFMakI7RUFRUSxlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQixFQUFBOztBQVZ4QjtFQWFRLGNBQWM7RUFDZCxhQUFZO0VBQ1osZUFBZSxFQUFBOztBQWZ2QjtJQWlCWSxXQUFXO0lBQ1gsZ0JBQWdCLEVBQUE7O0FBSzVCO0VBRVEsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFKeEI7RUFPUSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFJMUI7RUFDSSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLFdBQVcsRUFBQTs7QUFIZjtJQUtRLFVBQVU7SUFDVixTQUFTLEVBQUE7O0FBTmpCO01BUXVDLCtCQUFBO01BQ0EsK0NBQUE7TUFDQSxvQkFBQTtNQUNBLGlCQUFBO01BQzNCLGFBQWE7TUFDYixnQkFBZ0I7TUFDaEIsV0FBVztNQUNYLFlBQVksRUFBQTs7QUFmeEI7UUFpQmdCLGVBQWU7UUFDZixjQUFjO1FBQ2QsVUFBVSxFQUFBOztBQW5CMUI7UUFzQmdCLGVBQWU7UUFDZixjQUFjO1FBQ2QsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRkLWJpbGxpbmctYWRkcmVzcy9hZGQtYmlsbGluZy1hZGRyZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wYW55LWxvZ297XG4gICAgd2lkdGg6IDc4cHg7XG4gICAgaGVpZ2h0OiA3OHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDhweCBzb2xpZCAjMUI5OEQ1O1xuICAgIGJhY2tncm91bmQ6ICM5Nzk3OTc7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jb21wYW55LWRldGFpbHN7XG4gICAgcHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogI0E3QTdBNztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgaDR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICAgIGg2e1xuICAgICAgICBjb2xvcjogI0E3QTdBNztcbiAgICAgICAgbWFyZ2luOjJweCAwO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIHN0cm9uZ3tcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLWNvbnRlbnR7XG4gICAgaW9uLWxhYmVse1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIGNvbG9yOiAjQTdDRjQ2O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cbiAgICBpb24tdGV4dGFyZWF7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIH1cbn1cblxuLmN1c3RvbWVyLWRldGFpbHN7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0QyRDJEMjtcbiAgICBtYXJnaW46IDVweCAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHVse1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGxpe1xuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7ICAgICAgLyogT0xEIC0gaU9TIDYtLCBTYWZhcmkgMy4xLTYgKi9cbiAgICAgICAgICAgIGRpc3BsYXk6IC1tb3otYm94OyAgICAgICAgIC8qIE9MRCAtIEZpcmVmb3ggMTktIChidWdneSBidXQgbW9zdGx5IHdvcmtzKSAqL1xuICAgICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7ICAgICAgLyogVFdFRU5FUiAtIElFIDEwICovXG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7ICAgICAvKiBORVcgLSBDaHJvbWUgKi9cbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAubGVmdHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM5Nzk3OTc7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yaWdodHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/add-billing-address/add-billing-address.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/add-billing-address/add-billing-address.page.ts ***!
  \*****************************************************************/
/*! exports provided: AddBillingAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBillingAddressPage", function() { return AddBillingAddressPage; });
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




var AddBillingAddressPage = /** @class */ (function () {
    function AddBillingAddressPage(util, alertController, events, navCtrl, route, modalController, activeroute, menuCtrl) {
        this.util = util;
        this.alertController = alertController;
        this.events = events;
        this.navCtrl = navCtrl;
        this.route = route;
        this.modalController = modalController;
        this.activeroute = activeroute;
        this.menuCtrl = menuCtrl;
        this.user_name = '';
        this.user_mobile = '';
        this.user_email = '';
        this.user_address = '';
        this.user_country = '';
        this.user_state = '';
        this.user_city = '';
        this.user_zip = '';
        this.isHomeAddress = "1";
        this.addressId = "";
        this.stateId = "";
        this.stateName = "";
        this.userdata = JSON.parse(localStorage.getItem('loginDataKKart'));
        //console.log("this.userdata", JSON.parse(localStorage.getItem('loginDataKKart')))
        this.stateList();
        if (this.route.getCurrentNavigation().extras.state) {
            this.billingAddressData = this.route.getCurrentNavigation().extras.state.parms;
            this.user_name = this.billingAddressData.name;
            this.user_mobile = this.billingAddressData.mobile;
            this.user_email = this.billingAddressData.email;
            this.user_country = this.billingAddressData.country;
            this.user_state = this.billingAddressData.state;
            this.user_city = this.billingAddressData.city;
            this.user_zip = this.billingAddressData.pin;
            this.isHomeAddress = this.billingAddressData.address_type;
            if (this.isHomeAddress == "1") {
                this.user_address = this.billingAddressData.home_address;
            }
            else {
                this.user_address = this.billingAddressData.home_address;
            }
            this.addressId = this.billingAddressData.id;
            //console.log("this.billingAddressData", this.billingAddressData)
        }
        else {
            this.addressId = "";
        }
    }
    AddBillingAddressPage.prototype.ngOnInit = function () {
    };
    AddBillingAddressPage.prototype.addressTypeRadio = function (ev) {
        //console.log("radio ev", ev.detail.value)
        this.isHomeAddress = ev.detail.value;
    };
    AddBillingAddressPage.prototype.submitAddress = function () {
        if (this.user_name == '') {
            this.util.showToast('Please enter your name');
        }
        else if (this.user_mobile == '') {
            this.util.showToast('Please enter your phone number');
        }
        else if (this.user_email == '') {
            this.util.showToast('Please enter your email');
        }
        else if (this.user_address == '') {
            this.util.showToast('Please enter your address');
        }
        else if (this.user_country == '') {
            this.util.showToast('Please enter your country');
        }
        else if (this.user_state == '') {
            this.util.showToast('Please enter your state');
        }
        else if (this.user_city == '') {
            this.util.showToast('Please enter your city');
        }
        else if (this.user_zip == '') {
            this.util.showToast('Please enter your zip');
        }
        else {
            this.billingAddressSubmit();
        }
    };
    AddBillingAddressPage.prototype.billingAddressSubmit = function () {
        var _this = this;
        var myData = JSON.stringify({
            "id": this.addressId,
            "postData": {
                "id": this.addressId,
                "name": this.user_name,
                "mobile": this.user_mobile,
                "email": this.user_email,
                "home_address": this.user_address,
                "country": this.user_country,
                "state": this.user_state,
                "city": this.user_city,
                "pin": this.user_zip,
                "address_type": this.isHomeAddress
            }
        });
        //console.log("Your myData: ", JSON.parse(myData));
        this.util.presentLoading();
        this.util.getTypeDetailsWithAuth('carts/addDelivaryAddress.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            //console.log("Your data: ", result);
            _this.data = result;
            if (_this.data.success) {
                _this.util.showToast(_this.data.msg);
                _this.navCtrl.navigateForward('/billing-address');
            }
            else {
                _this.util.showToast(_this.data.msg);
            }
        }, function (error) {
            _this.util.dismissLoader();
            _this.util.showToast('Server error occured. Try again.');
        });
    };
    AddBillingAddressPage.prototype.selectState = function (ev) {
        //console.log("store id check in select store", ev, ev.detail, this.user_state);
        this.user_state = ev.detail.value;
        for (var i = 0; i < this.allStates.length; i++) {
            if (this.allStates[i].id == this.user_state) {
                this.stateName = this.allStates[i].name;
                break;
            }
            else {
                continue;
            }
        }
    };
    AddBillingAddressPage.prototype.stateList = function () {
        var _this = this;
        var myData = JSON.stringify({});
        //console.log("Your myData: ", JSON.parse(myData));
        this.util.presentLoading();
        this.util.getTypeDetailsWithAuth('carts/statelist.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            //console.log("Your state data: ", result);
            _this.data = result;
            if (_this.data.success) {
                _this.allStates = _this.data.data;
                for (var i = 0; i < _this.allStates.length; i++) {
                    if (_this.allStates[i].id == _this.user_state) {
                        _this.stateName = _this.allStates[i].name;
                        break;
                    }
                    else {
                        continue;
                    }
                }
            }
            else {
                _this.util.showToast(_this.data.msg);
            }
        }, function (error) {
            _this.util.dismissLoader();
            _this.util.showToast('Server error occured. Try again.');
        });
    };
    AddBillingAddressPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-billing-address',
            template: __webpack_require__(/*! ./add-billing-address.page.html */ "./src/app/add-billing-address/add-billing-address.page.html"),
            styles: [__webpack_require__(/*! ./add-billing-address.page.scss */ "./src/app/add-billing-address/add-billing-address.page.scss")]
        }),
        __metadata("design:paramtypes", [_api_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], AddBillingAddressPage);
    return AddBillingAddressPage;
}());



/***/ })

}]);
//# sourceMappingURL=add-billing-address-add-billing-address-module.js.map