(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-img style=\"max-width: 100px;\" src=\"/assets/images/logo.png\"></ion-img>\n        <ion-buttons slot=\"secondary\">\n            <ion-button (click)=\"toAutoSearch()\">\n                <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n            </ion-button>\n            <!-- <ion-button>\n                <ion-icon slot=\"icon-only\" name=\"notifications-outline\"></ion-icon>\n            </ion-button> -->\n            <ion-button (click)=\"toCartPage()\">\n                <ion-icon slot=\"icon-only\" name=\"cart\"></ion-icon>\n                <span class=\"badge badge-assertive\" style=\"color: red;\">{{util.cartCount}}</span>\n            </ion-button>\n        </ion-buttons>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <!-- <ion-searchbar [placeholder]=\"serachByPlaceholder\" class=\"ion-no-padding\" [(ngModel)]=\"searchText\"\n        showCancelButton=\"always\" cancelButtonText=\"Show All\" (ionInput)=\"getItems($event)\"\n        (ionCancel)=\"onCancel($event)\" (search)=\"submitSearch($event)\">\n      </ion-searchbar> -->\n      \n    <ion-slides *ngIf=\"sliderData.length > 0\"  pager=\"true\">\n        <ion-slide *ngFor=\"let singleSliderData of sliderData; let i = index\">\n            <ion-card class=\"welcome-card\" (click)=\"sliderToProductList(singleSliderData)\">\n                \n                <img (load)=\"loadImageSlider(i)\" [src]=\"singleSliderData.image_link || '/assets/images/ad1.jpg'\">\n                <img  *ngIf=\"!singleSliderData.isLoad\" src=\"/assets/images/ad1.jpg\">\n                <ion-card-header>\n                    <!-- <ion-card-subtitle>{{singleSliderData.name}}</ion-card-subtitle> -->\n                </ion-card-header>\n            </ion-card>\n        </ion-slide>\n\n    </ion-slides>\n\t\n\t<ion-toolbar class=\"forSecHed mb-0\">\n        <ion-title>All <span class=\"instk\">Category</span></ion-title>\n        <ion-buttons slot=\"secondary\">\n            <ion-button color=\"medium\" (click)=\"viewAllCategory()\">\n                view all\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n    <ion-grid>\n        <div class=\"homeallcat bg1\">\n            <ion-grid>\n            <ion-row>\n                <ion-col size=\"3\"  class=\"catgrid\" *ngFor=\"let singleCategoryData of categoryData|slice:0:12; let i = index\" >\n                        <p id=\"catcaption\"  (click)=\"viewSingleCategory(singleCategoryData)\" >{{singleCategoryData.name}}</p>\n                        <img class=\"catImg\" (load)=\"loadImageAllCategory(i)\" [src]=\"singleCategoryData.header_image || '/assets/images/p1.jpg'\" (click)=\"viewSingleCategory(singleCategoryData)\">\n                    <img  *ngIf=\"!singleCategoryData.isLoad\" src=\"/assets/images/p1.jpg\" (click)=\"viewSingleCategory(singleCategoryData)\">\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        </div>\n    </ion-grid>\n\n    <ion-toolbar class=\"forSecHed mb-0\">\n        <ion-title>Top <span class=\"instk\">Sell</span></ion-title>\n        <ion-buttons slot=\"secondary\">\n            <ion-button color=\"medium\" (click)=\"viewAll()\">\n                view all\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n\n    <ion-grid>\n        <ion-row>\n            <ion-col size=\"6\"  *ngFor=\"let singleTopsellData of topsellData|slice:0:6; let i = index\">\n                <ion-card style=\"margin: 0;\">\n                    <!-- <ion-img src=\"/assets/images/p1.jpg\"></ion-img> -->\n\n                    <img (load)=\"loadImageTopsell(i)\" [src]=\"singleTopsellData.photo || '/assets/images/p1.jpg'\" (click)=\"details(singleTopsellData)\">\n                    <img  *ngIf=\"!singleTopsellData.isLoad\" src=\"/assets/images/p1.jpg\" (click)=\"details(singleTopsellData)\">\n\n                    <ion-card-header (click)=\"details(singleTopsellData)\">\n                        <ion-card-subtitle class=\"myWrap\">{{singleTopsellData.name}}</ion-card-subtitle>\n                        <div clas=\"nrmlwrp\">\n                            <div class=\"w-50 flt py-10\"><span class=\"stk instk\">{{(singleTopsellData.in_stock) ? 'In Stock' : 'Out Stock'}}</span></div>\n                            <div class=\"w-50 flt py-10\" style=\"text-align: right;\"><span class=\"stkPrc\">Rs. {{singleTopsellData.offer_price}}</span></div>\n                        </div>\n                    </ion-card-header>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n        \n    </ion-grid>\n\n    <ion-toolbar class=\"forSecHed mb-0\">\n\t\t<ion-title>Recently <span class=\"instk\">Uploaded</span></ion-title>\n        <ion-buttons slot=\"secondary\">\n            <ion-button color=\"medium\" (click)=\"viewAll()\">\n                view all\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n\n    <ion-grid>\n        <ion-row>\n            <ion-col size=\"6\"  *ngFor=\"let singleRecentProductData of recentProductData|slice:0:6; let i = index\">\n                <ion-card style=\"margin: 0;\">\n                    <!-- <ion-img src=\"/assets/images/p1.jpg\"></ion-img> -->\n\n                    <img (load)=\"loadImageRecentProduct(i)\" [src]=\"singleRecentProductData.photo || '/assets/images/p1.jpg'\" (click)=\"details(singleRecentProductData)\">\n                    <img  *ngIf=\"!singleRecentProductData.isLoad\" src=\"/assets/images/p1.jpg\" (click)=\"details(singleRecentProductData)\">\n\n                    <ion-card-header (click)=\"details(singleRecentProductData)\">\n                        <ion-card-subtitle class=\"myWrap\">{{singleRecentProductData.name}}</ion-card-subtitle>\n                        <div clas=\"nrmlwrp\">\n                            <div class=\"w-50 flt py-10\"><span class=\"stk instk\">{{(singleRecentProductData.in_stock) ? 'In Stock' : 'Out Stock'}}</span></div>\n                            <div class=\"w-50 flt py-10\" style=\"text-align: right;\"><span class=\"stkPrc\">Rs. {{singleRecentProductData.offer_price}}</span></div>\n                        </div>\n                    </ion-card-header>\n                </ion-card>\n            </ion-col>\n            \n        </ion-row>\n    </ion-grid>\n    <ion-toolbar class=\"forSecHed mb-0\">\n        <ion-title>Our <span class=\"instk\">Advertisement</span></ion-title>\n    </ion-toolbar>\n    <ion-slides *ngIf=\"advData.length > 0\" pager=\"true\" #slider class=\"bg4\">\n        <ion-slide *ngFor=\"let advSliderData of advData; let i = index\">\n            <div class=\"spech\" (click)=\"addToProductList(advSliderData)\">\n                <img (load)=\"loadImageAdv(i)\" [src]=\"advSliderData.photo || '/assets/images/ad1.jpg'\">\n                <img  *ngIf=\"!advSliderData.isLoad\" src=\"/assets/images/ad1.jpg\">\n            </div>\n        </ion-slide>\n    </ion-slides>\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar text-center color=\"dark\">\n        <ion-buttons>\n            <ion-button (click)=\"tabBarHome()\">\n                <div class=\"fotricn\">\n                    <ion-icon name=\"home\"></ion-icon>\n                    <ion-label>Home</ion-label>\n                </div>\n            </ion-button>\n            <ion-button (click)=\"tabBarList()\">\n                <div class=\"fotricn\">\n                    <ion-icon name=\"basket\"></ion-icon>\n                    <ion-label>Shop</ion-label>\n                </div>\n            </ion-button>\n            <ion-button (click)=\"tabBarPolicy()\">\n                <div class=\"fotricn\">\n                    <ion-icon name=\"open\"></ion-icon>\n                    <ion-label>Policy</ion-label>\n                </div>\n            </ion-button>\n            <ion-button (click)=\"tabBarContacts()\">\n                <div class=\"fotricnlst\">\n                    <ion-icon name=\"contacts\"></ion-icon>\n                    <ion-label>Contact</ion-label>\n                </div>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forSecHed {\n  height: 44px !important;\n  min-height: auto !important; }\n\n.forSecHed * {\n  font-size: 14px !important;\n  text-transform: capitalize !important;\n  height: 20px !important;\n  min-height: auto !important; }\n\n.myWrap {\n  white-space: pre-wrap !important;\n  overflow: hidden;\n  height: 30px !important; }\n\n.welcome-card {\n  padding-bottom: 1px; }\n\n.stk {\n  font-size: 10px;\n  font-weight: bold; }\n\n.instk {\n  color: #1f61d9; }\n\n.outstk {\n  color: red; }\n\n.homeallcat ion-col {\n  width: 100%;\n  margin: 0px;\n  padding: 1px;\n  /* border: 1px solid #1f61d9;*/ }\n\n#catcaption {\n  /*background: rgba(18, 101, 251, 0.55) none repeat scroll 0 0;*/\n  color: #fbd226;\n  height: auto;\n  position: absolute;\n  text-align: center;\n  width: 98%;\n  height: 16px;\n  bottom: 15px;\n  text-decoration: none !important;\n  font-family: arial;\n  font-size: 10px;\n  font-weight: bold; }\n\n.stkPrc {\n  font-size: 11px;\n  font-weight: bold;\n  display: inline-block; }\n\n.testiwrap {\n  font-size: 14px;\n  padding: 0 20px 15px;\n  text-align: center;\n  margin: 15px 0 0; }\n\n.spech {\n  font-style: italic;\n  margin-bottom: 10px; }\n\n.spkr {\n  font-size: 11px;\n  font-weight: bold; }\n\n.spkr span {\n  font-size: 10px;\n  display: block; }\n\n.nrmlwrp {\n  overflow: hidden; }\n\n.flt {\n  float: left; }\n\n.w-50 {\n  width: 50%; }\n\n.py-10 {\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n.bg {\n  background-image: url(\"/assets/images/bg.jpg\");\n  height: auto;\n  background-size: cover;\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center; }\n\n.bg1 {\n  background-color: #e7e9f0e5;\n  height: auto;\n  background-size: cover;\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center; }\n\n.bg2 {\n  background-image: url(\"/assets/images/bg2.jpg\");\n  height: auto;\n  background-size: cover;\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center; }\n\n.bg3 {\n  background-color: #d9534f;\n  height: auto;\n  background-size: cover;\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center; }\n\n.bg4 {\n  background-image: url(\"/assets/images/bg4.jpg\");\n  height: auto;\n  background-size: cover;\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center; }\n\n.galleryBx {\n  margin: auto;\n  background: rgba(252, 250, 250, 0.5);\n  border-radius: 0px;\n  text-align: center; }\n\n.galleryBx ion-img img {\n  height: 100px; }\n\n.loginBx {\n  margin: auto;\n  max-width: 374px;\n  padding: 25px;\n  background: rgba(252, 250, 250, 0.5);\n  border-radius: 0px;\n  text-align: center; }\n\n.loginBx .logologin {\n  max-width: 150px;\n  margin: auto; }\n\n.loginBx > h1 {\n  margin: 40px 0 40px;\n  font-size: 1.3rem; }\n\n.loginBx form {\n  text-align: left; }\n\nform label {\n  font-weight: 700;\n  font-size: .9rem; }\n\n.loginBx form input {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  border: 1px solid rgba(0, 0, 0, 0.35); }\n\n.frmaxon {\n  margin-top: 20px;\n  overflow: hidden; }\n\n.frmaxon .col {\n  float: left;\n  width: 50%; }\n\n.secondary-link {\n  font-weight: 700;\n  color: #fff;\n  opacity: .4;\n  display: inline-block;\n  margin-top: 13px;\n  font-size: .9em; }\n\n.secondary-link:hover {\n  color: #fff;\n  opacity: 1; }\n\n.loginBtn {\n  padding: 8px 20px;\n  width: 100%;\n  text-align: center;\n  border-radius: 30px;\n  font-size: 18px;\n  color: #fff;\n  background-color: #1f61d9; }\n\n.lstBtnGrp * {\n  font-size: 16px; }\n\n.lstBtnGrp .button {\n  width: 50%;\n  margin: 0;\n  box-shadow: none !important;\n  background: transparent;\n  border-radius: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.109804); }\n\nion-card-subtitle {\n  height: 24px; }\n\nion-slide .spech {\n  margin: 10px 0;\n  padding: 10px 0px 20px 0px;\n  font-size: 14px;\n  display: inline-block; }\n\nion-slide .testiwrap .spech {\n  margin: 10px 0;\n  padding: 0px;\n  font-size: 14px;\n  display: inline-block; }\n\nion-slide .testiwrap .spkr {\n  display: inline-block;\n  padding: 0px 0 20px;\n  font-size: 16px; }\n\n.catgrid {\n  background-color: #dee1ece5; }\n\n.catImg {\n  width: 100%;\n  height: 100% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YXAvRGVza3RvcC9Jb25pY19Qcm9qZWN0L2FyY2hpdmUgaW9uaWMgZlByb2plY3Qvb2xkIGFyY2hpdmUgMi9BcmNoaXZlIDIvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQXVCO0VBQ3ZCLDJCQUEyQixFQUFBOztBQUUvQjtFQUNJLDBCQUEwQjtFQUMxQixxQ0FBcUM7RUFDckMsdUJBQXVCO0VBQ3ZCLDJCQUEyQixFQUFBOztBQUUvQjtFQUNJLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsdUJBQXVCLEVBQUE7O0FBRTNCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxVQUFVLEVBQUE7O0FBRWQ7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWiw4QkFBQSxFQUErQjs7QUFFbkM7RUFDSSwrREFBQTtFQUNBLGNBQWM7RUFFZCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUVaLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsa0JBQWlCO0VBQ2pCLGdCQUFlLEVBQUE7O0FBR25CO0VBQ0ksa0JBQWtCO0VBQ2xCLG1CQUFrQixFQUFBOztBQUV0QjtFQUNJLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLFdBQVcsRUFBQTs7QUFFZjtFQUNJLFVBQVUsRUFBQTs7QUFFZDtFQUNJLGlCQUFpQjtFQUNqQixvQkFBb0IsRUFBQTs7QUFFeEI7RUFDSSw4Q0FBOEM7RUFDOUMsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixrQ0FBa0MsRUFBQTs7QUFFdEM7RUFDSSwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixrQ0FBa0MsRUFBQTs7QUFFdEM7RUFDSSwrQ0FBK0M7RUFDL0MsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixrQ0FBa0MsRUFBQTs7QUFFdEM7RUFDSSx5QkFBd0I7RUFDeEIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixrQ0FBa0MsRUFBQTs7QUFFdEM7RUFDSSwrQ0FBK0M7RUFDL0MsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixrQ0FBa0MsRUFBQTs7QUFFdEM7RUFDSSxZQUFZO0VBQ1osb0NBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isb0NBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHFDQUFvQyxFQUFBOztBQUV4QztFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxXQUFXO0VBQ1gsVUFBVSxFQUFBOztBQUVkO0VBQ0ksZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGdCQUFlO0VBQ2YsZUFBYyxFQUFBOztBQUVsQjtFQUNJLFdBQVc7RUFDWCxVQUFTLEVBQUE7O0FBRWI7RUFDSSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFdBQVc7RUFDWCx5QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksVUFBVTtFQUNWLFNBQVM7RUFDVCwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQiw2Q0FBd0QsRUFBQTs7QUFFNUQ7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksY0FBYztFQUNkLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0ksY0FBYztFQUNkLFlBQVk7RUFDWixlQUFlO0VBQ2YscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0kscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksV0FBVztFQUNYLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JTZWNIZWR7XG4gICAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogYXV0byAhaW1wb3J0YW50OyBcbn1cbi5mb3JTZWNIZWQgKntcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDsgXG59XG4ubXlXcmFwe1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcCAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG59XG4ud2VsY29tZS1jYXJke1xuICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XG59XG4uc3Rre1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5pbnN0a3tcbiAgICBjb2xvcjogIzFmNjFkOTtcbn1cbi5vdXRzdGt7XG4gICAgY29sb3I6IHJlZDtcbn1cbi5ob21lYWxsY2F0IGlvbi1jb2wge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDFweDtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjMWY2MWQ5OyovIFxufVxuI2NhdGNhcHRpb24ge1xuICAgIC8qYmFja2dyb3VuZDogcmdiYSgxOCwgMTAxLCAyNTEsIDAuNTUpIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7Ki9cbiAgICBjb2xvcjogI2ZiZDIyNjtcbiAgICAvL2NvbG9yOiAjMTMwZjAxO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA5OCU7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIC8vdG9wOiAyNnB4O1xuICAgIGJvdHRvbTogMTVweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogYXJpYWw7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4uc3RrUHJje1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4udGVzdGl3cmFwe1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAwIDIwcHggMTVweDtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBtYXJnaW46MTVweCAwIDA7XG4gICAgXG59XG4uc3BlY2h7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIG1hcmdpbi1ib3R0b206MTBweDtcbn1cbi5zcGtye1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zcGtyIHNwYW57XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLm5ybWx3cnB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5mbHR7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4udy01MHtcbiAgICB3aWR0aDogNTAlO1xufVxuLnB5LTEwe1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLmJne1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmcuanBnJyk7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgZmlsdGVyOiBibHVyKDBweCk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuLmJnMXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlOWYwZTU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgZmlsdGVyOiBibHVyKDBweCk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuLmJnMntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JnMi5qcGcnKTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG4uYmcze1xuICAgIGJhY2tncm91bmQtY29sb3I6I2Q5NTM0ZjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG4uYmc0e1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmc0LmpwZycpO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGZpbHRlcjogYmx1cigwcHgpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cbi5nYWxsZXJ5Qngge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMjUyLCAyNTAsIDI1MCwgMC41KTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmdhbGxlcnlCeCBpb24taW1nIGltZyB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmxvZ2luQngge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXgtd2lkdGg6IDM3NHB4O1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgYmFja2dyb3VuZDpyZ2JhKDI1MiwgMjUwLCAyNTAsIDAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luQnggLmxvZ29sb2dpbiB7XG4gICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5sb2dpbkJ4PmgxIHtcbiAgICBtYXJnaW46IDQwcHggMCA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4ubG9naW5CeCBmb3JtIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuZm9ybSBsYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IC45cmVtO1xufVxuLmxvZ2luQnggZm9ybSBpbnB1dCB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zNSk7XG59XG4uZnJtYXhvbiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmZybWF4b24gLmNvbCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDUwJTtcbn1cbi5zZWNvbmRhcnktbGlua3tcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG9wYWNpdHk6IC40O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tdG9wOjEzcHg7XG4gICAgZm9udC1zaXplOi45ZW07XG59XG4uc2Vjb25kYXJ5LWxpbms6aG92ZXJ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgb3BhY2l0eToxO1xufVxuLmxvZ2luQnRuIHtcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMWY2MWQ5O1xufVxuXG4ubHN0QnRuR3JwICoge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5sc3RCdG5HcnAgLmJ1dHRvbiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMDk4MDM5MjE1Njg2Mjc0NSk7XG59XG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gICAgaGVpZ2h0OiAyNHB4O1xufVxuaW9uLXNsaWRlIC5zcGVjaCB7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgcGFkZGluZzogMTBweCAwcHggMjBweCAwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbmlvbi1zbGlkZSAudGVzdGl3cmFwIC5zcGVjaCB7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5pb24tc2xpZGUgLnRlc3Rpd3JhcCAgLnNwa3Ige1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAwcHggMCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmNhdGdyaWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWUxZWNlNTtcbn1cblxuLmNhdEltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/utility.service */ "./src/app/api/utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(util, menuCtrl, events, navCtrl) {
        this.util = util;
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.navCtrl = navCtrl;
        this.sliderData = [];
        this.topsellData = [];
        this.recentProductData = [];
        this.categoryData = [];
        this.advData = [];
        this.searchText = '';
        this.isSearch = false;
        this.pageSearch = 1;
        this.events.publish('user:login');
        this.getHomeSliderTopsellRProCategoriData();
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true);
        if (localStorage.getItem('loginDataKKart') != null) {
            this.util.myCartlist();
        }
        console.log("this.cartCount count recieved", this.util.cartCount);
        this.searchText = '';
        this.isSearch = false;
        // this.pageDetails = { 'showMenu': true, 'showBack': false, 'showButtons': false, 'title': 'Login', 'prevPage': '' };
        // this.showMenu(this.pageDetails);
    };
    HomePage.prototype.showMenu = function (pageDetails) {
        console.log('User created!');
        this.events.publish('showMenu', pageDetails, Date.now());
    };
    HomePage.prototype.loadImageSlider = function (i) {
        this.sliderData[i]["isLoad"] = true;
    };
    HomePage.prototype.loadImageAllCategory = function (i) {
        this.categoryData[i]["isLoad"] = true;
    };
    HomePage.prototype.loadImageTopsell = function (i) {
        this.topsellData[i]["isLoad"] = true;
    };
    HomePage.prototype.loadImageRecentProduct = function (i) {
        this.recentProductData[i]["isLoad"] = true;
    };
    HomePage.prototype.loadImageAdv = function (i) {
        this.advData[i]["isLoad"] = true;
    };
    HomePage.prototype.getHomeSliderTopsellRProCategoriData = function () {
        var _this = this;
        var myData = JSON.stringify({
            "appcall": "1"
        });
        console.log("Your myData: ", myData);
        this.util.presentLoading();
        //this.util.presentLoader3()
        this.util.getTypeDetails('sliders/homeSlider.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            console.log("Your data: ", result);
            _this.data = result;
            if (_this.data.success) {
                _this.sliderData = _this.data.data.slider;
                var Limit = _this.data.data.maximum_cod_amount;
                localStorage.setItem('codLimit', Limit);
                for (var i = 0; i < _this.sliderData.length; i++) {
                    _this.sliderData[i]["isLoad"] = false;
                }
                console.log("this.sliderData: ", _this.sliderData);
                _this.topsellData = _this.data.data.topsell;
                for (var i = 0; i < _this.topsellData.length; i++) {
                    _this.topsellData[i]["isLoad"] = false;
                }
                console.log("this.topsellData: ", _this.topsellData, _this.util.codLimit);
                _this.recentProductData = _this.data.data.recent_product;
                for (var i = 0; i < _this.recentProductData.length; i++) {
                    _this.recentProductData[i]["isLoad"] = false;
                }
                console.log("this.recentProductData: ", _this.recentProductData);
                _this.categoryData = _this.data.data.category;
                console.log("this.categoryData", _this.categoryData);
                for (var i = 0; i < _this.categoryData.length; i++) {
                    _this.categoryData[i]["isLoad"] = false;
                }
                _this.getHomeAdvSliderData();
            }
            else {
                // this.email = '';
                // this.password = '';
                _this.util.showToast(_this.data.message);
            }
        }, function (error) {
            _this.util.dismissLoader();
            _this.util.showToast('Server error occured. Try again.');
        });
    };
    HomePage.prototype.getHomeAdvSliderData = function () {
        var _this = this;
        var myData = JSON.stringify({
            "appcall": "1"
        });
        console.log("Your myData: ", myData);
        //this.util.presentLoading();
        //this.util.presentLoader3()https://www.kkcarts.com/api/sliders/adv.json
        this.util.getTypeDetails('sliders/adv.json', myData).subscribe(function (result) {
            //this.util.dismissLoader();
            console.log("Your data: ", result);
            _this.data = result;
            if (_this.data.success) {
                _this.advData = _this.data.data.adv;
                for (var i = 0; i < _this.advData.length; i++) {
                    _this.advData[i]["isLoad"] = false;
                }
                console.log("this.advData: ", _this.advData);
            }
            else {
                _this.util.showToast(_this.data.message);
            }
        }, function (error) {
            //this.util.dismissLoader();
            _this.util.showToast('Server error occured. Try again.');
        });
    };
    HomePage.prototype.viewAll = function () {
        //this.util.showToast("will come soon")
        this.navCtrl.navigateForward(['/list', { pushedFromSub: "Home" }]);
    };
    HomePage.prototype.details = function (productListSingle) {
        console.log("productListSingle", productListSingle);
        localStorage.setItem('singleProduct', JSON.stringify(productListSingle));
        var navigationExtras = {
            state: {
                from: 'Home',
                parms: productListSingle,
            }
        };
        this.navCtrl.navigateForward('/details', navigationExtras);
    };
    HomePage.prototype.viewAllCategory = function () {
        this.navCtrl.navigateForward('/product-category');
    };
    HomePage.prototype.tabBarList = function () {
        this.navCtrl.navigateRoot('/list');
    };
    HomePage.prototype.tabBarHome = function () {
        this.navCtrl.navigateRoot('/home');
    };
    HomePage.prototype.tabBarPolicy = function () {
        this.navCtrl.navigateRoot('/privacy-policy');
    };
    HomePage.prototype.tabBarContacts = function () {
        this.navCtrl.navigateRoot('/contact');
    };
    HomePage.prototype.toCartPage = function () {
        if (localStorage.getItem('loginDataKKart') != null) {
            this.navCtrl.navigateForward('/cart');
        }
        else {
            this.navCtrl.navigateForward(['/login', { pushedFrom: "CartIcon" }]);
        }
    };
    HomePage.prototype.addToProductList = function (singleSliderData) {
        console.log("add", singleSliderData);
        this.navCtrl.navigateForward(['/list', {
                cat: singleSliderData.advertisement_items[0].category_id ? singleSliderData.advertisement_items[0].category_id : "",
                subCat: singleSliderData.advertisement_items[0].sub_category_id ? singleSliderData.advertisement_items[0].sub_category_id : "",
                type: singleSliderData.advertisement_items[0].type_id ? singleSliderData.advertisement_items[0].type_id : "",
                pushedFromSub: "Home"
            }]);
    };
    HomePage.prototype.sliderToProductList = function (singleSliderData) {
        console.log("slider", singleSliderData);
        this.navCtrl.navigateForward(['/list', { cat: "", subCat: "", type: singleSliderData.txt_caption_1, pushedFromSub: "Home" }]);
    };
    HomePage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            // this.items = this.items.filter((item) => {
            //   return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            // })
            console.log('val:: ', val);
        }
    };
    HomePage.prototype.submitSearch = function (ev) {
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
            this.navCtrl.navigateForward(['/list', { searchTxtHome: val }]);
        }
    };
    HomePage.prototype.onCancel = function (ev) {
        this.searchText = '';
        this.isSearch = false;
        this.pageSearch = 1;
    };
    HomePage.prototype.viewSingleCategory = function (singleAllCategory) {
        console.log("singleAllCategory", singleAllCategory);
        this.navCtrl.navigateForward(['/list', { cat: singleAllCategory.id, subCat: "", type: "", pushedFromSub: "Home" }]);
    };
    HomePage.prototype.toAutoSearch = function () {
        this.navCtrl.navigateForward('/auto-search');
    };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map