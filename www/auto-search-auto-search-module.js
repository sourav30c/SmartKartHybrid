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

module.exports = ".stk {\n  font-size: 10px;\n  font-weight: bold; }\n\n.instk {\n  color: green; }\n\n.outstk {\n  color: red; }\n\n.stkPrc {\n  font-size: 11px;\n  font-weight: bold;\n  display: inline-block; }\n\n.nrmlwrp {\n  overflow: hidden; }\n\n.flt {\n  float: left; }\n\n.w-50 {\n  width: 50%; }\n\n.py-10 {\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n.lstBtnGrp * {\n  font-size: 16px; }\n\n.lstBtnGrp .icon {\n  font-size: 16px;\n  color: gainsboro; }\n\n.lstBtnGrp .button {\n  width: 50%;\n  margin: 0;\n  box-shadow: none !important;\n  background: transparent;\n  border-radius: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.109804); }\n\n.instk[_ngcontent-c2] {\n  color: green;\n  font-size: 12px; }\n\n.outstk[_ngcontent-c1] {\n  color: red;\n  font-size: 12px; }\n\n.oldPrice {\n  text-decoration: line-through;\n  color: rgba(0, 0, 0, 0.6);\n  display: inline-block;\n  margin-right: 15px; }\n\n.backIcon {\n  font-size: 28px;\n  color: 226; }\n\n.searchbar-search-icon {\n  display: none;\n  width: 0;\n  height: 0;\n  padding-left: 9px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWF2ZXJzd2ViL0Rlc2t0b3AvU21hcnRLYXJ0SHlicmlkL3NyYy9hcHAvYXV0by1zZWFyY2gvYXV0by1zZWFyY2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxVQUFVLEVBQUE7O0FBRWQ7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLFdBQVcsRUFBQTs7QUFFZjtFQUNJLFVBQVUsRUFBQTs7QUFFZDtFQUNJLGlCQUFpQjtFQUNqQixvQkFBb0IsRUFBQTs7QUFFeEI7RUFDSSxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFVBQVU7RUFDVixTQUFTO0VBQ1QsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsNkNBQXdELEVBQUE7O0FBRzVEO0VBQ0ksWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxVQUFVO0VBQ1YsZUFBZSxFQUFBOztBQUVuQjtFQUNJLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGVBQWU7RUFDZixVQUE0QixFQUFBOztBQUk5QjtFQUNJLGFBQVk7RUFDWixRQUFPO0VBQ1AsU0FBUTtFQUNSLDRCQUE0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXV0by1zZWFyY2gvYXV0by1zZWFyY2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0a3tcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaW5zdGt7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuLm91dHN0a3tcbiAgICBjb2xvcjogcmVkO1xufVxuLnN0a1ByY3tcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLm5ybWx3cnB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5mbHR7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4udy01MHtcbiAgICB3aWR0aDogNTAlO1xufVxuLnB5LTEwe1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLmxzdEJ0bkdycCAqe1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5sc3RCdG5HcnAgLmljb257XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiBnYWluc2Jvcm87XG59XG5cbi5sc3RCdG5HcnAgLmJ1dHRvbntcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEwOTgwMzkyMTU2ODYyNzQ1KTtcbn1cblxuLmluc3RrW19uZ2NvbnRlbnQtYzJdIHtcbiAgICBjb2xvcjogZ3JlZW47XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ub3V0c3RrW19uZ2NvbnRlbnQtYzFdIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5vbGRQcmljZXtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5iYWNrSWNvbntcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgY29sb3I6IGJsdWUoJGNvbG9yOiAjMjAwYWUyKTtcbn1cblxuXG4gIC5zZWFyY2hiYXItc2VhcmNoLWljb24geyBcbiAgICAgIGRpc3BsYXk6bm9uZTsgXG4gICAgICB3aWR0aDowOyBcbiAgICAgIGhlaWdodDowOyBcbiAgICAgIHBhZGRpbmctbGVmdDogOXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4iXX0= */"

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
            console.log(_this.data);
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