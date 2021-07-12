(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-address-add-address-module"],{

/***/ "./src/app/add-address/add-address.module.ts":
/*!***************************************************!*\
  !*** ./src/app/add-address/add-address.module.ts ***!
  \***************************************************/
/*! exports provided: AddAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAddressPageModule", function() { return AddAddressPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_address_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-address.page */ "./src/app/add-address/add-address.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _add_address_page__WEBPACK_IMPORTED_MODULE_5__["AddAddressPage"]
    }
];
var AddAddressPageModule = /** @class */ (function () {
    function AddAddressPageModule() {
    }
    AddAddressPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_address_page__WEBPACK_IMPORTED_MODULE_5__["AddAddressPage"]]
        })
    ], AddAddressPageModule);
    return AddAddressPageModule;
}());



/***/ }),

/***/ "./src/app/add-address/add-address.page.html":
/*!***************************************************!*\
  !*** ./src/app/add-address/add-address.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button style=\"color: #FFCC23\"></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n          Add Address\n      </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"ion-text-center\" size=\"12\">\n        <ion-label>Home Address <ion-text color=\"danger\">*</ion-text></ion-label>\n      </ion-col>\n      <ion-col size=\"12\">\n          <ion-textarea [(ngModel)]=\"homeaddress\"></ion-textarea>\n      </ion-col>\n    </ion-row>\n  </ion-grid> \n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"ion-text-center\" size=\"12\">\n        <ion-label>Work Address <ion-text color=\"danger\">*</ion-text></ion-label>\n      </ion-col>\n      <ion-col size=\"12\">\n          <ion-textarea [(ngModel)]=\"workaddress\"></ion-textarea>\n      </ion-col>\n    </ion-row>\n  </ion-grid>     \n  <ion-button shape=\"round\" expand=\"full\" color=\"primary\" (click)=\"submitAddress()\">Submit</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/add-address/add-address.page.scss":
/*!***************************************************!*\
  !*** ./src/app/add-address/add-address.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-label {\n  font-size: 17px;\n  color: #008ED8;\n  font-weight: 400; }\n\nion-content ion-textarea {\n  border: 1px solid #CCCCCC;\n  padding: 5px;\n  height: 160px;\n  border-radius: 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWF2ZXJzd2ViL0Rlc2t0b3AvU21hcnRLYXJ0SHlicmlkL3NyYy9hcHAvYWRkLWFkZHJlc3MvYWRkLWFkZHJlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsZUFBZTtFQUNmLGNBQWE7RUFDYixnQkFBZ0IsRUFBQTs7QUFKeEI7RUFPUSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FkZC1hZGRyZXNzL2FkZC1hZGRyZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIGlvbi1sYWJlbHtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBjb2xvcjojMDA4RUQ4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cbiAgICBpb24tdGV4dGFyZWF7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/add-address/add-address.page.ts":
/*!*************************************************!*\
  !*** ./src/app/add-address/add-address.page.ts ***!
  \*************************************************/
/*! exports provided: AddAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAddressPage", function() { return AddAddressPage; });
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




var AddAddressPage = /** @class */ (function () {
    function AddAddressPage(menuCtrl, navCtrl, util, events, route, alertCtrl) {
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.util = util;
        this.events = events;
        this.route = route;
        this.alertCtrl = alertCtrl;
        this.homeaddress = '';
        this.workaddress = '';
        if (localStorage.getItem('loginDataKKart') != null) {
            this.myAccountData = JSON.parse(localStorage.getItem('loginDataKKart'));
            this.homeaddress = this.myAccountData.address1 ? this.myAccountData.address1 : '';
            this.workaddress = this.myAccountData.address2 ? this.myAccountData.address2 : '';
        }
    }
    AddAddressPage.prototype.ngOnInit = function () {
    };
    AddAddressPage.prototype.submitAddress = function () {
        if (this.homeaddress == '') {
            this.util.showAlert('Sorry', 'Please provide home address');
        }
        else if (this.workaddress == '') {
            this.util.showAlert('Sorry', 'Please confirm work address');
        }
        else {
            this.postData();
        }
    };
    AddAddressPage.prototype.postData = function () {
        var _this = this;
        var myData = JSON.stringify({
            address1: this.homeaddress,
            address2: this.workaddress,
        });
        this.util.presentLoading();
        //console.log("Your changepassword myData: ", myData);
        this.util.getTypeDetailsWithAuth('users/addressbook.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            //console.log("Your data: ", result);
            _this.data = result;
            if (_this.data.success) {
                //console.log("Your success data: ", this.data.data);
                localStorage.setItem('loginDataKKart', JSON.stringify(_this.data.data.address));
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
    AddAddressPage.prototype.presentConfirm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                console.log("action present");
                alert = this.alertCtrl.create({
                    header: 'Thank You',
                    message: 'Address Updated Successfully',
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
    AddAddressPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-address',
            template: __webpack_require__(/*! ./add-address.page.html */ "./src/app/add-address/add-address.page.html"),
            styles: [__webpack_require__(/*! ./add-address.page.scss */ "./src/app/add-address/add-address.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _api_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]])
    ], AddAddressPage);
    return AddAddressPage;
}());



/***/ })

}]);
//# sourceMappingURL=add-address-add-address-module.js.map