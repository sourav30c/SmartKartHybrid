(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auto-search-auto-search-module"],{

/***/ "./src/app/auto-search/auto-search.module.ts":
/*!***************************************************!*\
  !*** ./src/app/auto-search/auto-search.module.ts ***!
  \***************************************************/
/*! exports provided: AutoSearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoSearchPageModule", function() { return AutoSearchPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _auto_search_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auto-search.page */ "./src/app/auto-search/auto-search.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _auto_search_page__WEBPACK_IMPORTED_MODULE_5__["AutoSearchPage"]
    }
];
var AutoSearchPageModule = /** @class */ (function () {
    function AutoSearchPageModule() {
    }
    AutoSearchPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_auto_search_page__WEBPACK_IMPORTED_MODULE_5__["AutoSearchPage"]]
        })
    ], AutoSearchPageModule);
    return AutoSearchPageModule;
}());



/***/ }),

/***/ "./src/app/auto-search/auto-search.page.html":
/*!***************************************************!*\
  !*** ./src/app/auto-search/auto-search.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Search Product</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-searchbar search-icon=“undefined”  [placeholder]=\"serachByPlaceholder\" class=\"ion-no-padding\" [(ngModel)]=\"searchText\"\n    showCancelButton=\"always\" cancelButtonText=\"Show All\" (ionInput)=\"getItems($event)\"\n    (ionCancel)=\"onCancel($event)\" (search)=\"submitSearch($event)\">\n  </ion-searchbar>\n\n    <ion-row>\n        <ion-col size=\"12\" *ngFor=\"let searchlist of searchlist; let i = index\">\n            <ion-card style=\"margin: 0;\">\n                <ion-item (click)=\"toList(searchlist)\" >\n                  <ion-avatar slot=\"start\">\n                    <img [src]=\"searchlist.photo\">\n                  </ion-avatar>\n                  <ion-label>\n                    <h3>{{searchlist.name | slice:0:30}}...</h3>\n                  </ion-label>\n                </ion-item>\n            </ion-card>\n        </ion-col>\n    </ion-row>\n</ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/auto-search/auto-search.page.scss":
/*!***************************************************!*\
  !*** ./src/app/auto-search/auto-search.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stk {\n  font-size: 10px;\n  font-weight: bold; }\n\n.instk {\n  color: green; }\n\n.outstk {\n  color: red; }\n\n.stkPrc {\n  font-size: 11px;\n  font-weight: bold;\n  display: inline-block; }\n\n.nrmlwrp {\n  overflow: hidden; }\n\n.flt {\n  float: left; }\n\n.w-50 {\n  width: 50%; }\n\n.py-10 {\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n.lstBtnGrp * {\n  font-size: 16px; }\n\n.lstBtnGrp .icon {\n  font-size: 16px;\n  color: gainsboro; }\n\n.lstBtnGrp .button {\n  width: 50%;\n  margin: 0;\n  box-shadow: none !important;\n  background: transparent;\n  border-radius: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.109804); }\n\n.instk[_ngcontent-c2] {\n  color: green;\n  font-size: 12px; }\n\n.outstk[_ngcontent-c1] {\n  color: red;\n  font-size: 12px; }\n\n.oldPrice {\n  text-decoration: line-through;\n  color: rgba(0, 0, 0, 0.6);\n  display: inline-block;\n  margin-right: 15px; }\n\n.backIcon {\n  font-size: 28px;\n  color: 226; }\n\n.searchbar-search-icon {\n  display: none;\n  width: 0;\n  height: 0;\n  padding-left: 9px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YXAvRGVza3RvcC9Jb25pY19Qcm9qZWN0L2FyY2hpdmUgaW9uaWMgZlByb2plY3Qvb2xkIGFyY2hpdmUgMi9BcmNoaXZlIDIvc3JjL2FwcC9hdXRvLXNlYXJjaC9hdXRvLXNlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLFVBQVUsRUFBQTs7QUFFZDtFQUNJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksV0FBVyxFQUFBOztBQUVmO0VBQ0ksVUFBVSxFQUFBOztBQUVkO0VBQ0ksaUJBQWlCO0VBQ2pCLG9CQUFvQixFQUFBOztBQUV4QjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksVUFBVTtFQUNWLFNBQVM7RUFDVCwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQiw2Q0FBd0QsRUFBQTs7QUFHNUQ7RUFDSSxZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUduQjtFQUNJLFVBQVU7RUFDVixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksZUFBZTtFQUNmLFVBQTRCLEVBQUE7O0FBSTlCO0VBQ0ksYUFBWTtFQUNaLFFBQU87RUFDUCxTQUFRO0VBQ1IsNEJBQTRCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hdXRvLXNlYXJjaC9hdXRvLXNlYXJjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Rre1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5pbnN0a3tcbiAgICBjb2xvcjogZ3JlZW47XG59XG4ub3V0c3Rre1xuICAgIGNvbG9yOiByZWQ7XG59XG4uc3RrUHJje1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ubnJtbHdycHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmZsdHtcbiAgICBmbG9hdDogbGVmdDtcbn1cbi53LTUwe1xuICAgIHdpZHRoOiA1MCU7XG59XG4ucHktMTB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4ubHN0QnRuR3JwICp7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuLmxzdEJ0bkdycCAuaWNvbntcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IGdhaW5zYm9ybztcbn1cblxuLmxzdEJ0bkdycCAuYnV0dG9ue1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTA5ODAzOTIxNTY4NjI3NDUpO1xufVxuXG4uaW5zdGtbX25nY29udGVudC1jMl0ge1xuICAgIGNvbG9yOiBncmVlbjtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5vdXRzdGtbX25nY29udGVudC1jMV0ge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLm9sZFByaWNle1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmJhY2tJY29ue1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBjb2xvcjogYmx1ZSgkY29sb3I6ICMyMDBhZTIpO1xufVxuXG5cbiAgLnNlYXJjaGJhci1zZWFyY2gtaWNvbiB7IFxuICAgICAgZGlzcGxheTpub25lOyBcbiAgICAgIHdpZHRoOjA7IFxuICAgICAgaGVpZ2h0OjA7IFxuICAgICAgcGFkZGluZy1sZWZ0OiA5cHggIWltcG9ydGFudDtcbiAgICB9XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/auto-search/auto-search.page.ts":
/*!*************************************************!*\
  !*** ./src/app/auto-search/auto-search.page.ts ***!
  \*************************************************/
/*! exports provided: AutoSearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoSearchPage", function() { return AutoSearchPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/utility.service */ "./src/app/api/utility.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AutoSearchPage = /** @class */ (function () {
    function AutoSearchPage(util, menuCtrl, route, events, activeroute, navCtrl, keyboard) {
        this.util = util;
        this.menuCtrl = menuCtrl;
        this.route = route;
        this.events = events;
        this.activeroute = activeroute;
        this.navCtrl = navCtrl;
        this.keyboard = keyboard;
        this.searchlist = [];
        this.searchText = '';
    }
    AutoSearchPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    AutoSearchPage.prototype.ngOnInit = function () {
    };
    AutoSearchPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            // this.items = this.items.filter((item) => {
            //   return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            // })
            console.log('val:: ', val);
        }
        if (val.length >= 2) {
            this.getSearchListData(val);
        }
    };
    AutoSearchPage.prototype.submitSearch = function (ev) {
        // Reset items back to all of the items
        console.log('evev:: ', ev);
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            // this.items = this.items.filter((item) => {
            //   return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            // })
            console.log('val:: ', val);
            this.navCtrl.navigateForward(['/list', { searchTxtHome: val, pushedFromSub: "autoSearch" }]);
        }
    };
    AutoSearchPage.prototype.onCancel = function (ev) {
        this.searchText = '';
    };
    AutoSearchPage.prototype.getSearchListData = function (searchBy) {
        var _this = this;
        this.keyboard.show();
        var myData = JSON.stringify({
            search: searchBy
        });
        console.log("Your myData: ", myData);
        //this.util.presentLoading();
        this.util.getTypeDetails('products/autoSuggestion.json', myData).subscribe(function (result) {
            //this.util.dismissLoader();
            _this.keyboard.show();
            console.log("Your search data: ", result);
            _this.data = result;
            console.log(_this.data);
            if (_this.data.success) {
                _this.searchlist = _this.data.data;
            }
            else {
                _this.util.showToast(_this.data.message);
            }
        }, function (error) {
            _this.util.dismissLoader();
            _this.util.showToast('Server error occured. Try again.');
        });
    };
    AutoSearchPage.prototype.toList = function (singleSearch) {
        console.log("singleSearch", singleSearch);
        var navigationExtras = {
            state: {
                from: 'autoSearch',
                parms: singleSearch,
            }
        };
        this.navCtrl.navigateForward('/details', navigationExtras);
    };
    AutoSearchPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auto-search',
            template: __webpack_require__(/*! ./auto-search.page.html */ "./src/app/auto-search/auto-search.page.html"),
            styles: [__webpack_require__(/*! ./auto-search.page.scss */ "./src/app/auto-search/auto-search.page.scss")]
        }),
        __metadata("design:paramtypes", [_api_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Keyboard"]])
    ], AutoSearchPage);
    return AutoSearchPage;
}());



/***/ })

}]);
//# sourceMappingURL=auto-search-auto-search-module.js.map