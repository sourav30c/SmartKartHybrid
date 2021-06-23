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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button style=\"color: #FFCC23\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Search Product</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-searchbar search-icon=“undefined”  [placeholder]=\"serachByPlaceholder\" class=\"ion-no-padding\" [(ngModel)]=\"searchText\"\n    showCancelButton=\"always\" cancelButtonText=\"Show All\" (ionInput)=\"getItems($event)\"\n    (ionCancel)=\"onCancel($event)\" (search)=\"submitSearch($event)\">\n  </ion-searchbar>\n\n    <ion-row *ngIf=\"isProductFound == true\">\n        <ion-col size=\"12\" *ngFor=\"let searchlist of searchlist; let i = index\">\n            <ion-card style=\"margin: 0;\">\n                <ion-item (click)=\"toList(searchlist)\" >\n                  <ion-avatar slot=\"start\">\n                    <img [src]=\"searchlist.photo\">\n                  </ion-avatar>\n                  <ion-label>\n                    <h3>{{searchlist.name | slice:0:30}}...</h3>\n                  </ion-label>\n                </ion-item>\n            </ion-card>\n        </ion-col>\n    </ion-row>\n\n    <ion-card style=\"text-align:center;margin-top:50% \" *ngIf=\"isProductFound == false\">\n      <ion-card-content>\n          No Product List Found\n      </ion-card-content>\n    </ion-card>\n\n</ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/auto-search/auto-search.page.scss":
/*!***************************************************!*\
  !*** ./src/app/auto-search/auto-search.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stk {\n  font-size: 10px;\n  font-weight: bold; }\n\n.instk {\n  color: green; }\n\n.outstk {\n  color: red; }\n\n.stkPrc {\n  font-size: 11px;\n  font-weight: bold;\n  display: inline-block; }\n\n.nrmlwrp {\n  overflow: hidden; }\n\n.flt {\n  float: left; }\n\n.w-50 {\n  width: 50%; }\n\n.py-10 {\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n.lstBtnGrp * {\n  font-size: 16px; }\n\n.lstBtnGrp .icon {\n  font-size: 16px;\n  color: gainsboro; }\n\n.lstBtnGrp .button {\n  width: 50%;\n  margin: 0;\n  box-shadow: none !important;\n  background: transparent;\n  border-radius: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.109804); }\n\n.instk[_ngcontent-c2] {\n  color: green;\n  font-size: 12px; }\n\n.outstk[_ngcontent-c1] {\n  color: red;\n  font-size: 12px; }\n\n.oldPrice {\n  text-decoration: line-through;\n  color: rgba(0, 0, 0, 0.6);\n  display: inline-block;\n  margin-right: 15px; }\n\n.backIcon {\n  font-size: 28px;\n  color: 226; }\n\n.searchbar-search-icon {\n  display: none;\n  width: 0;\n  height: 0;\n  padding-left: 9px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YXAvRGVza3RvcC9pb25pYyBQcm9qZWN0L3BwL1NtYXJ0LUNhcnQgMi9zcmMvYXBwL2F1dG8tc2VhcmNoL2F1dG8tc2VhcmNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksVUFBVSxFQUFBOztBQUVkO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxXQUFXLEVBQUE7O0FBRWY7RUFDSSxVQUFVLEVBQUE7O0FBRWQ7RUFDSSxpQkFBaUI7RUFDakIsb0JBQW9CLEVBQUE7O0FBRXhCO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxVQUFVO0VBQ1YsU0FBUztFQUNULDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLDZDQUF3RCxFQUFBOztBQUc1RDtFQUNJLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxlQUFlO0VBQ2YsVUFBNEIsRUFBQTs7QUFJOUI7RUFDSSxhQUFZO0VBQ1osUUFBTztFQUNQLFNBQVE7RUFDUiw0QkFBNEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2F1dG8tc2VhcmNoL2F1dG8tc2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGt7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmluc3Rre1xuICAgIGNvbG9yOiBncmVlbjtcbn1cbi5vdXRzdGt7XG4gICAgY29sb3I6IHJlZDtcbn1cbi5zdGtQcmN7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5ucm1sd3Jwe1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZmx0e1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuLnctNTB7XG4gICAgd2lkdGg6IDUwJTtcbn1cbi5weS0xMHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5sc3RCdG5HcnAgKntcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG4ubHN0QnRuR3JwIC5pY29ue1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogZ2FpbnNib3JvO1xufVxuXG4ubHN0QnRuR3JwIC5idXR0b257XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMDk4MDM5MjE1Njg2Mjc0NSk7XG59XG5cbi5pbnN0a1tfbmdjb250ZW50LWMyXSB7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm91dHN0a1tfbmdjb250ZW50LWMxXSB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4ub2xkUHJpY2V7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uYmFja0ljb257XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGNvbG9yOiBibHVlKCRjb2xvcjogIzIwMGFlMik7XG59XG5cblxuICAuc2VhcmNoYmFyLXNlYXJjaC1pY29uIHsgXG4gICAgICBkaXNwbGF5Om5vbmU7IFxuICAgICAgd2lkdGg6MDsgXG4gICAgICBoZWlnaHQ6MDsgXG4gICAgICBwYWRkaW5nLWxlZnQ6IDlweCAhaW1wb3J0YW50O1xuICAgIH1cblxuIl19 */"

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
/* harmony import */ var _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/speech-recognition/ngx */ "./node_modules/@ionic-native/speech-recognition/ngx/index.js");
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
    function AutoSearchPage(util, menuCtrl, route, events, activeroute, navCtrl, keyboard, speechRecognition) {
        this.util = util;
        this.menuCtrl = menuCtrl;
        this.route = route;
        this.events = events;
        this.activeroute = activeroute;
        this.navCtrl = navCtrl;
        this.keyboard = keyboard;
        this.speechRecognition = speechRecognition;
        this.searchlist = [];
        this.searchText = '';
        this.isRecording = false;
        this.searchPattern = '';
        this.isProductFound = true;
        this.searchPattern = this.activeroute.snapshot.paramMap.get("pushed");
        if (this.searchPattern == 'audio') {
            this.getPermission();
        }
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
        if (this.searchPattern != 'audio') {
            this.keyboard.show();
        }
        else {
            this.keyboard.hide();
            this.searchPattern = '';
        }
        var myData = JSON.stringify({
            search: searchBy
        });
        //console.log("Your myData search by: ", myData);
        //this.util.presentLoading();
        this.util.getTypeDetails('products/autoSuggestion.json', myData).subscribe(function (result) {
            //this.util.dismissLoader();
            // if (this.searchPattern != 'audio') {
            //   this.keyboard.show();
            // } else {
            //   this.keyboard.hide();
            // }
            //console.log("Your search data: ", result);
            _this.data = result;
            //console.log(this.data)
            if (_this.data.success) {
                _this.searchlist = _this.data.data;
                if (_this.searchlist.length > 0) {
                    _this.isProductFound = true;
                }
                else {
                    _this.isProductFound = false;
                }
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
        //console.log("singleSearch", singleSearch)
        var navigationExtras = {
            state: {
                from: 'autoSearch',
                parms: singleSearch,
            }
        };
        this.navCtrl.navigateForward('/details', navigationExtras);
    };
    AutoSearchPage.prototype.getPermission = function () {
        var _this = this;
        //console.log("Grant Permission")
        this.speechRecognition.hasPermission()
            .then(function (hasPermission) {
            if (!hasPermission) {
                _this.speechRecognition.requestPermission()
                    .then(function () { return _this.startListening(); }, //console.log('granted'),
                function () { return console.log('Denied'); });
            }
            else {
                _this.startListening();
            }
        });
    };
    AutoSearchPage.prototype.startListening = function () {
        var _this = this;
        var options = {
            language: 'en-US'
        };
        this.util.presentLoading();
        this.speechRecognition.startListening().subscribe(function (matches) {
            _this.util.dismissLoader();
            //console.log('start listening meeeee', matches)
            _this.voiceSearchData = matches[0];
            //this.myInput = this.voiceSearchData
            //this.cd.detectChanges();
            //console.log("start listening matches", this.voiceSearchData)
            //this.getItems(this.voiceSearchData);
        });
        this.isRecording = true;
        setTimeout(function () {
            console.log('works');
            _this.stopListening(_this.voiceSearchData);
        }, 5000);
    };
    AutoSearchPage.prototype.stopListening = function (vss) {
        var _this = this;
        this.speechRecognition.stopListening().then(function () {
            _this.isRecording = false;
        });
        this.util.dismissLoader();
        //console.log("start listening matches after stop", vss)
        this.searchText = vss;
        this.getSearchListData(vss);
    };
    AutoSearchPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auto-search',
            template: __webpack_require__(/*! ./auto-search.page.html */ "./src/app/auto-search/auto-search.page.html"),
            styles: [__webpack_require__(/*! ./auto-search.page.scss */ "./src/app/auto-search/auto-search.page.scss")]
        }),
        __metadata("design:paramtypes", [_api_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Keyboard"], _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_5__["SpeechRecognition"]])
    ], AutoSearchPage);
    return AutoSearchPage;
}());



/***/ })

}]);
//# sourceMappingURL=auto-search-auto-search-module.js.map