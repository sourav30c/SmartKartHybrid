(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-account-details-my-account-details-module"],{

/***/ "./src/app/my-account-details/my-account-details.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/my-account-details/my-account-details.module.ts ***!
  \*****************************************************************/
/*! exports provided: MyAccountDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountDetailsPageModule", function() { return MyAccountDetailsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_account_details_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-account-details.page */ "./src/app/my-account-details/my-account-details.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _my_account_details_page__WEBPACK_IMPORTED_MODULE_5__["MyAccountDetailsPage"]
    }
];
var MyAccountDetailsPageModule = /** @class */ (function () {
    function MyAccountDetailsPageModule() {
    }
    MyAccountDetailsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_my_account_details_page__WEBPACK_IMPORTED_MODULE_5__["MyAccountDetailsPage"]]
        })
    ], MyAccountDetailsPageModule);
    return MyAccountDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/my-account-details/my-account-details.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/my-account-details/my-account-details.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      My Account\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n    <ion-item>\n      <ion-label position=\"stacked\">Name <ion-text color=\"danger\">*</ion-text>\n      </ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"firstname\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Phone <ion-text color=\"danger\">*</ion-text>\n      </ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"phone\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Email <ion-text color=\"danger\">*</ion-text>\n      </ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"email\" disabled></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-col size=\"4\">\n        <ion-label>State</ion-label>\n      </ion-col>\n      <ion-select [(ngModel)]=\"user_state\" ng-init=\"user_state\" name=\"user_state\" (ionChange)=\"selectState($event)\"\n        [selectedText]=\"stateName\">\n        <ion-select-option *ngFor=\"let allState of allStates\" [value]=\"allState.id\"\n          [selected]=\"stateName == allState.name\">{{allState.name}}\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label position=\"stacked\">City <ion-text color=\"danger\">*</ion-text>\n      </ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"city\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Pin <ion-text color=\"danger\">*</ion-text>\n      </ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"pin\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Alternate No. <ion-text color=\"danger\">*</ion-text>\n      </ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"alternateNo\"></ion-input>\n    </ion-item>\n    <ion-button shape=\"round\" expand=\"full\" color=\"primary\" (click)=\"submitAccountInfo()\">Submit</ion-button>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/my-account-details/my-account-details.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/my-account-details/my-account-details.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LWFjY291bnQtZGV0YWlscy9teS1hY2NvdW50LWRldGFpbHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/my-account-details/my-account-details.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/my-account-details/my-account-details.page.ts ***!
  \***************************************************************/
/*! exports provided: MyAccountDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountDetailsPage", function() { return MyAccountDetailsPage; });
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var MyAccountDetailsPage = /** @class */ (function () {
    function MyAccountDetailsPage(menuCtrl, navCtrl, util, events, route, alertCtrl) {
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.util = util;
        this.events = events;
        this.route = route;
        this.alertCtrl = alertCtrl;
        this.firstname = '';
        this.phone = '';
        this.email = '';
        this.user_state = '';
        this.city = '';
        this.pin = '';
        this.alternateNo = '';
        this.stateId = "";
        this.stateName = "";
        if (localStorage.getItem('loginDataKKart') != null) {
            this.myAccountData = JSON.parse(localStorage.getItem('loginDataKKart'));
            console.log("My Account Data", this.myAccountData);
            this.stateList();
            this.firstname = this.myAccountData.first_name ? this.myAccountData.first_name : '';
            this.email = this.myAccountData.email ? this.myAccountData.email : '';
            this.phone = this.myAccountData.mobile ? this.myAccountData.mobile : '';
            this.user_state = this.myAccountData.state ? this.myAccountData.state : '';
            this.city = this.myAccountData.city ? this.myAccountData.city : '';
            this.pin = this.myAccountData.pin ? this.myAccountData.pin : '';
        }
    }
    MyAccountDetailsPage.prototype.ngOnInit = function () {
    };
    MyAccountDetailsPage.prototype.submitAccountInfo = function () {
        if (this.firstname == '') {
            this.util.showAlert('Sorry', 'Please provide first name');
        }
        else if (this.phone == '') {
            this.util.showAlert('Sorry', 'Please provide phone');
        }
        else if (this.email == '') {
            this.util.showAlert('Sorry', 'Please provide email');
        }
        else if (this.user_state == '') {
            this.util.showAlert('Sorry', 'Please provide state');
        }
        else if (this.city == '') {
            this.util.showAlert('Sorry', 'Please provide city');
        }
        else if (this.pin == '') {
            this.util.showAlert('Sorry', 'Please provide pin');
        }
        else if (this.alternateNo == '') {
            this.util.showAlert('Sorry', 'Please provide alternate no.');
        }
        else {
            this.postData();
        }
    };
    MyAccountDetailsPage.prototype.selectState = function (ev) {
        console.log("store id check in select store", ev, ev.detail, this.user_state);
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
    MyAccountDetailsPage.prototype.stateList = function () {
        var _this = this;
        var myData = JSON.stringify({});
        console.log("Your myData: ", JSON.parse(myData));
        this.util.presentLoading();
        this.util.getTypeDetailsWithAuth('carts/statelist.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            console.log("Your state data: ", result);
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
    MyAccountDetailsPage.prototype.postData = function () {
        var _this = this;
        var myData = JSON.stringify({
            first_name: this.firstname,
            mobile: this.phone,
            email: this.email,
            state: this.user_state,
            city: this.city,
            pin: this.pin,
            alternate_phone: this.alternateNo
        });
        this.util.presentLoading();
        console.log("Your changepassword myData: ", myData);
        this.util.getTypeDetailsWithAuth('users/myaccount.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            console.log("Your data: ", result);
            _this.data = result;
            if (_this.data.success) {
                console.log("Your success data: ", _this.data.data);
                localStorage.setItem('loginDataKKart', JSON.stringify(_this.data.data.data_list));
                _this.events.publish('user:login');
                _this.presentConfirm();
            }
            else {
                _this.util.showAlert('Error!', _this.data.status ? _this.data.status : "Please try again later");
            }
        }, function (error) {
            _this.util.dismissLoader();
            _this.util.showAlert('Error!', 'Server error occured. Try again.');
        });
    };
    MyAccountDetailsPage.prototype.presentConfirm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                console.log("action present");
                alert = this.alertCtrl.create({
                    header: 'Thank You',
                    message: 'Profile Updated Successfully',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function () {
                                console.log("befrore dashboard");
                                _this.navCtrl.navigateForward('/home');
                            }
                        }
                    ]
                }).then(function (alert) { return alert.present(); });
                return [2 /*return*/];
            });
        });
    };
    MyAccountDetailsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-account-details',
            template: __webpack_require__(/*! ./my-account-details.page.html */ "./src/app/my-account-details/my-account-details.page.html"),
            styles: [__webpack_require__(/*! ./my-account-details.page.scss */ "./src/app/my-account-details/my-account-details.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _api_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]])
    ], MyAccountDetailsPage);
    return MyAccountDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=my-account-details-my-account-details-module.js.map