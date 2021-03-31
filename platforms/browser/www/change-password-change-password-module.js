(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-password-change-password-module"],{

/***/ "./src/app/change-password/change-password.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/change-password/change-password.module.ts ***!
  \***********************************************************/
/*! exports provided: ChangePasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-password.page */ "./src/app/change-password/change-password.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordPage"]
    }
];
var ChangePasswordPageModule = /** @class */ (function () {
    function ChangePasswordPageModule() {
    }
    ChangePasswordPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordPage"]]
        })
    ], ChangePasswordPageModule);
    return ChangePasswordPageModule;
}());



/***/ }),

/***/ "./src/app/change-password/change-password.page.html":
/*!***********************************************************!*\
  !*** ./src/app/change-password/change-password.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n          Change Password\n      </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <ion-list class=\"ion-margin-top\">\n        <!-- <ion-item>\n          <ion-label><ion-icon name=\"lock\" color=\"primary\"></ion-icon></ion-label>\n          <ion-input placeholder=\"Old Password\" type=\"password\" [(ngModel)]=\"oldpassword\"></ion-input>\n        </ion-item> -->\n        <ion-item>\n          <ion-label><ion-icon name=\"lock\" color=\"primary\"></ion-icon></ion-label>\n          <ion-input placeholder=\"New Password\" type=\"password\" [(ngModel)]=\"newpassword\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label><ion-icon name=\"lock\" color=\"primary\"></ion-icon></ion-label>\n          <ion-input placeholder=\"Confirm Password\" type=\"password\" [(ngModel)]=\"cnfpassword\"></ion-input>\n        </ion-item>\n        <ion-button shape=\"round\" expand=\"full\" color=\"primary\" (click)=\"toLogin()\">Submit</ion-button>\n    </ion-list>  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/change-password/change-password.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/change-password/change-password.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-title {\n  font-size: 20px;\n  font-weight: 500;\n  color: #fff;\n  background-color: #FFB300;\n  border-radius: 25px;\n  padding: 10px 25px;\n  margin: 0 auto;\n  width: 42%; }\n\nion-list {\n  margin-bottom: 20px; }\n\nion-list ion-item {\n    border: 1px solid #C2C2C2;\n    border-radius: 25px;\n    margin-bottom: 18px; }\n\nion-list ion-item ion-label {\n      margin: 5px 8px 0 0; }\n\nion-list ion-item ion-label ion-icon {\n        font-size: 30px; }\n\nion-list ion-checkbox {\n    --border-radius: 0;\n    width: 15px;\n    height: 15px;\n    margin-right: 6px; }\n\nion-list ion-label {\n    font-size: 15px;\n    color: #4E4E4E;\n    font-weight: 400; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YXAvRGVza3RvcC9Jb25pY19Qcm9qZWN0L2FyY2hpdmUgaW9uaWMgZlByb2plY3Qvb2xkIGFyY2hpdmUgMi9BcmNoaXZlIDIvc3JjL2FwcC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxVQUFVLEVBQUE7O0FBRVg7RUFDSSxtQkFBbUIsRUFBQTs7QUFEdkI7SUFHUSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLG1CQUFtQixFQUFBOztBQUwzQjtNQU9ZLG1CQUFtQixFQUFBOztBQVAvQjtRQVNnQixlQUFlLEVBQUE7O0FBVC9CO0lBY1Esa0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWdCLEVBQUE7O0FBakJ4QjtJQW9CUSxlQUFjO0lBQ2QsY0FBYztJQUNkLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS10aXRsZSB7XG5cdGZvbnQtc2l6ZTogMjBweDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Y29sb3I6ICNmZmY7XG5cdGJhY2tncm91bmQtY29sb3I6ICNGRkIzMDA7XG5cdGJvcmRlci1yYWRpdXM6IDI1cHg7XG5cdHBhZGRpbmc6IDEwcHggMjVweDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdHdpZHRoOiA0MiU7XG59XG5pb24tbGlzdHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGlvbi1pdGVte1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQzJDMkMyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgICBtYXJnaW46IDVweCA4cHggMCAwO1xuICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1jaGVja2JveHtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6NnB4O1xuICAgIH1cbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGZvbnQtc2l6ZToxNXB4O1xuICAgICAgICBjb2xvcjogIzRFNEU0RTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/change-password/change-password.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/change-password/change-password.page.ts ***!
  \*********************************************************/
/*! exports provided: ChangePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function() { return ChangePasswordPage; });
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




var ChangePasswordPage = /** @class */ (function () {
    function ChangePasswordPage(menuCtrl, navCtrl, util, events, route, alertCtrl) {
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.util = util;
        this.events = events;
        this.route = route;
        this.alertCtrl = alertCtrl;
        this.oldpassword = '';
        this.newpassword = '';
        this.cnfpassword = '';
    }
    ChangePasswordPage.prototype.ngOnInit = function () {
    };
    ChangePasswordPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true);
        this.pageDetails = { 'showMenu': true, 'showBack': false, 'showButtons': false, 'title': 'Change Password', 'prevPage': '' };
        this.showMenu(this.pageDetails);
    };
    ChangePasswordPage.prototype.showMenu = function (pageDetails) {
        console.log('User created!');
        this.events.publish('showMenu', pageDetails, Date.now());
    };
    ChangePasswordPage.prototype.toLogin = function () {
        // if (this.oldpassword == '') {
        //   this.util.showAlert('Sorry', 'Please provide old password');
        // } else if (this.oldpassword.length<8) {
        //   this.util.showAlert('Sorry', 'Password length must be of 8 digits');
        // } else 
        if (this.newpassword == '') {
            this.util.showAlert('Sorry', 'Please provide new password');
        }
        else if (this.cnfpassword == '') {
            this.util.showAlert('Sorry', 'Please confirm new password');
        }
        else if (this.cnfpassword != this.newpassword) {
            this.util.showAlert('Sorry', 'Please provide same password');
        }
        else {
            this.postData();
        }
    };
    ChangePasswordPage.prototype.postData = function () {
        var _this = this;
        var myData = JSON.stringify({
            password: this.newpassword,
            confirm_password: this.cnfpassword,
        });
        this.util.presentLoading();
        console.log("Your changepassword myData: ", myData);
        this.util.getTypeDetailsWithAuth('users/changepswd.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            console.log("Your data: ", result);
            _this.data = result;
            if (_this.data.success) {
                console.log("Your success data: ", _this.data.data);
                _this.presentConfirm();
            }
            else {
                _this.oldpassword = '';
                _this.newpassword = '';
                _this.cnfpassword = '';
                _this.util.showAlert('Error!', _this.data.status ? _this.data.status : "Please try again later");
            }
        }, function (error) {
            _this.util.dismissLoader();
            _this.util.showAlert('Error!', 'Server error occured. Try again.');
        });
    };
    ChangePasswordPage.prototype.presentConfirm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                console.log("action present");
                alert = this.alertCtrl.create({
                    header: 'Thank You',
                    message: 'Password Changed Successfully.Please Login to continue',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function () {
                                _this.navCtrl.navigateForward('/login');
                            }
                        }
                    ]
                }).then(function (alert) { return alert.present(); });
                return [2 /*return*/];
            });
        });
    };
    ChangePasswordPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.page.html */ "./src/app/change-password/change-password.page.html"),
            styles: [__webpack_require__(/*! ./change-password.page.scss */ "./src/app/change-password/change-password.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _api_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=change-password-change-password-module.js.map