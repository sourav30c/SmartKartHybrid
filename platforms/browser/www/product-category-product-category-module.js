(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-category-product-category-module"],{

/***/ "./src/app/product-category/product-category.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/product-category/product-category.module.ts ***!
  \*************************************************************/
/*! exports provided: ProductCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategoryPageModule", function() { return ProductCategoryPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_category_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-category.page */ "./src/app/product-category/product-category.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _product_category_page__WEBPACK_IMPORTED_MODULE_5__["ProductCategoryPage"]
    }
];
var ProductCategoryPageModule = /** @class */ (function () {
    function ProductCategoryPageModule() {
    }
    ProductCategoryPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_product_category_page__WEBPACK_IMPORTED_MODULE_5__["ProductCategoryPage"]]
        })
    ], ProductCategoryPageModule);
    return ProductCategoryPageModule;
}());



/***/ }),

/***/ "./src/app/product-category/product-category.page.html":
/*!*************************************************************!*\
  !*** ./src/app/product-category/product-category.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Category</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list class=\"product-types\">\n    <ion-list-header>\n      <ion-label>Choose Product Category</ion-label>\n    </ion-list-header>\n\n    <ion-list *ngFor=\"let singleCategoryData of categoryData|slice:0:12; let i = index\"\n      style=\"border-bottom: .5px solid grey\" lines=\"none\">\n      <ion-item class=\"fields\" (click)=\"expandCategory(singleCategoryData,i)\" no-padding style=\"max-height: 80%\">\n        <ion-icon slot=\"start\" style=\"font-size: 1.3em\" name=\"arrow-forward\"\n          *ngIf=\"!isCategoryTappedArr[i] && singleCategoryData.slug === categoryName\"></ion-icon>\n        <ion-icon slot=\"start\" style=\"font-size: 1.3em\" name=\"arrow-forward\"\n          *ngIf=\"isCategoryTappedArr[i] && singleCategoryData.slug !== categoryName\"></ion-icon>\n        <ion-icon slot=\"start\" style=\"font-size: 1.3em\" name=\"arrow-forward\"\n          *ngIf=\"!isCategoryTappedArr[i] && singleCategoryData.slug !== categoryName\"></ion-icon>\n        <ion-icon slot=\"start\" style=\"font-size: 1.3em\" name=\"arrow-down\"\n          *ngIf=\"isCategoryTappedArr[i] && singleCategoryData.slug === categoryName\">\n        </ion-icon>\n        <ion-label>{{singleCategoryData.name}}</ion-label>\n      </ion-item>\n      <div *ngIf=\"isCategoryTappedArr[i] && singleCategoryData.slug === categoryName\">\n\n        <ion-list *ngFor=\"let singlesubCategory of subCategory|slice:0:12; let i = index\"\n          style=\"border-bottom: .5px solid grey\">\n          <ion-item (click)=\"expandSubCategory(singlesubCategory,i)\" no-padding style=\"max-height: 80%\">\n            <ion-icon slot=\"start\" style=\"font-size: 1.3em\" name=\"add\"\n              *ngIf=\"!isSubCategoryTappedArr[i] && singlesubCategory.slug !== subCategoryName\"></ion-icon>\n            <ion-icon slot=\"start\" style=\"font-size: 1.3em\" name=\"add\"\n              *ngIf=\"!isSubCategoryTappedArr[i] && singlesubCategory.slug === subCategoryName\"></ion-icon>\n              <ion-icon slot=\"start\" style=\"font-size: 1.3em\" name=\"add\"\n              *ngIf=\"isSubCategoryTappedArr[i] && singlesubCategory.slug !== subCategoryName\"></ion-icon>\n            <ion-icon slot=\"start\" style=\"font-size: 1.3em\" name=\"close\"\n              *ngIf=\"isSubCategoryTappedArr[i] && singlesubCategory.slug === subCategoryName\"></ion-icon>\n            <ion-label>{{singlesubCategory.name}}</ion-label>\n          </ion-item>\n          <div *ngIf=\"isSubCategoryTappedArr[i] && singlesubCategory.slug === subCategoryName\">\n            <ion-list *ngFor=\"let singlesubCatType of subCatType|slice:0:12; let i = index\"\n              style=\"border-bottom: .5px solid grey\">\n              <ion-item (click)=\"productsList(singlesubCatType)\" style=\"padding-left: 8px\">\n                <ion-label>{{singlesubCatType.name}}</ion-label>\n              </ion-item>\n            </ion-list>\n          </div>\n        </ion-list>\n      </div>\n    </ion-list>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar text-center color=\"dark\">\n      <ion-buttons>\n          <ion-button (click)=\"tabBarHome()\">\n              <div class=\"fotricn\">\n                  <ion-icon name=\"home\"></ion-icon>\n                  <ion-label>Home</ion-label>\n              </div>\n          </ion-button>\n          <ion-button (click)=\"tabBarList()\">\n              <div class=\"fotricn\">\n                  <ion-icon name=\"basket\"></ion-icon>\n                  <ion-label>Shop</ion-label>\n              </div>\n          </ion-button>\n          <ion-button (click)=\"tabBarPolicy()\">\n              <div class=\"fotricn\">\n                  <ion-icon name=\"open\"></ion-icon>\n                  <ion-label>Policy</ion-label>\n              </div>\n          </ion-button>\n          <ion-button (click)=\"tabBarContacts()\">\n              <div class=\"fotricnlst\">\n                  <ion-icon name=\"contacts\"></ion-icon>\n                  <ion-label>Contact</ion-label>\n              </div>\n          </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/product-category/product-category.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/product-category/product-category.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forSecHed {\n  height: 44px !important;\n  min-height: auto !important; }\n\n.forSecHed * {\n  font-size: 14px !important;\n  text-transform: capitalize !important;\n  height: 20px !important;\n  min-height: auto !important; }\n\n.myWrap {\n  white-space: pre-wrap !important;\n  overflow: hidden;\n  height: 30px !important; }\n\n.welcome-card {\n  padding-bottom: 1px; }\n\n.stk {\n  font-size: 10px;\n  font-weight: bold; }\n\n.instk {\n  color: #1f61d9; }\n\n.outstk {\n  color: red; }\n\n.homeallcat ion-col {\n  width: 100%;\n  margin: 0px;\n  padding: 1px;\n  /* border: 1px solid #1f61d9;*/ }\n\n#catcaption {\n  /*background: rgba(18, 101, 251, 0.55) none repeat scroll 0 0;*/\n  color: #fbd226;\n  height: auto;\n  position: absolute;\n  text-align: center;\n  width: 98%;\n  height: 16px;\n  top: 26px;\n  text-decoration: none !important;\n  font-family: arial;\n  font-size: 10px; }\n\n.stkPrc {\n  font-size: 11px;\n  font-weight: bold;\n  display: inline-block; }\n\n.testiwrap {\n  font-size: 14px;\n  padding: 0 20px 15px;\n  text-align: center;\n  margin: 15px 0 0; }\n\n.spech {\n  font-style: italic;\n  margin-bottom: 10px; }\n\n.spkr {\n  font-size: 11px;\n  font-weight: bold; }\n\n.spkr span {\n  font-size: 10px;\n  display: block; }\n\n.nrmlwrp {\n  overflow: hidden; }\n\n.flt {\n  float: left; }\n\n.w-50 {\n  width: 50%; }\n\n.py-10 {\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n.bg {\n  background-image: url(\"/assets/images/bg.jpg\");\n  height: auto;\n  background-size: cover;\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center; }\n\n.bg1 {\n  background-color: #1e4cccc2;\n  height: auto;\n  background-size: cover;\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center; }\n\n.bg2 {\n  background-image: url(\"/assets/images/bg2.jpg\");\n  height: auto;\n  background-size: cover;\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center; }\n\n.bg3 {\n  background-color: #d9534f;\n  height: auto;\n  background-size: cover;\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center; }\n\n.bg4 {\n  background-image: url(\"/assets/images/bg4.jpg\");\n  height: auto;\n  background-size: cover;\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center; }\n\n.galleryBx {\n  margin: auto;\n  background: rgba(252, 250, 250, 0.5);\n  border-radius: 0px;\n  text-align: center; }\n\n.galleryBx ion-img img {\n  height: 100px; }\n\n.loginBx {\n  margin: auto;\n  max-width: 374px;\n  padding: 25px;\n  background: rgba(252, 250, 250, 0.5);\n  border-radius: 0px;\n  text-align: center; }\n\n.loginBx .logologin {\n  max-width: 150px;\n  margin: auto; }\n\n.loginBx > h1 {\n  margin: 40px 0 40px;\n  font-size: 1.3rem; }\n\n.loginBx form {\n  text-align: left; }\n\nform label {\n  font-weight: 700;\n  font-size: .9rem; }\n\n.loginBx form input {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  border: 1px solid rgba(0, 0, 0, 0.35); }\n\n.frmaxon {\n  margin-top: 20px;\n  overflow: hidden; }\n\n.frmaxon .col {\n  float: left;\n  width: 50%; }\n\n.secondary-link {\n  font-weight: 700;\n  color: #fff;\n  opacity: .4;\n  display: inline-block;\n  margin-top: 13px;\n  font-size: .9em; }\n\n.secondary-link:hover {\n  color: #fff;\n  opacity: 1; }\n\n.fields {\n  max-height: 80% !important; }\n\n.list-ios {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: -1px;\n  margin-bottom: 14px;\n  background: var(--ion-background-color, #fff); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YXAvRGVza3RvcC9Jb25pY19Qcm9qZWN0L2FyY2hpdmUgaW9uaWMgZlByb2plY3Qvb2xkIGFyY2hpdmUgMi9BcmNoaXZlIDIvc3JjL2FwcC9wcm9kdWN0LWNhdGVnb3J5L3Byb2R1Y3QtY2F0ZWdvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQXVCO0VBQ3ZCLDJCQUEyQixFQUFBOztBQUUvQjtFQUNJLDBCQUEwQjtFQUMxQixxQ0FBcUM7RUFDckMsdUJBQXVCO0VBQ3ZCLDJCQUEyQixFQUFBOztBQUUvQjtFQUNJLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsdUJBQXVCLEVBQUE7O0FBRTNCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxVQUFVLEVBQUE7O0FBRWQ7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWiw4QkFBQSxFQUErQjs7QUFFbkM7RUFDSSwrREFBQTtFQUNBLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsa0JBQWlCO0VBQ2pCLGdCQUFlLEVBQUE7O0FBR25CO0VBQ0ksa0JBQWtCO0VBQ2xCLG1CQUFrQixFQUFBOztBQUV0QjtFQUNJLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLFdBQVcsRUFBQTs7QUFFZjtFQUNJLFVBQVUsRUFBQTs7QUFFZDtFQUNJLGlCQUFpQjtFQUNqQixvQkFBb0IsRUFBQTs7QUFFeEI7RUFDSSw4Q0FBOEM7RUFDOUMsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixrQ0FBa0MsRUFBQTs7QUFFdEM7RUFDSSwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixrQ0FBa0MsRUFBQTs7QUFFdEM7RUFDSSwrQ0FBK0M7RUFDL0MsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixrQ0FBa0MsRUFBQTs7QUFFdEM7RUFDSSx5QkFBd0I7RUFDeEIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixrQ0FBa0MsRUFBQTs7QUFFdEM7RUFDSSwrQ0FBK0M7RUFDL0MsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixrQ0FBa0MsRUFBQTs7QUFFdEM7RUFDSSxZQUFZO0VBQ1osb0NBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isb0NBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHFDQUFvQyxFQUFBOztBQUV4QztFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxXQUFXO0VBQ1gsVUFBVSxFQUFBOztBQUVkO0VBQ0ksZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGdCQUFlO0VBQ2YsZUFBYyxFQUFBOztBQUVsQjtFQUNJLFdBQVc7RUFDWCxVQUFTLEVBQUE7O0FBR2I7RUFDSSwwQkFBMEIsRUFBQTs7QUFLNUI7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsNkNBQTRDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0LWNhdGVnb3J5L3Byb2R1Y3QtY2F0ZWdvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvclNlY0hlZHtcbiAgICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgICBtaW4taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7IFxufVxuLmZvclNlY0hlZCAqe1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogYXV0byAhaW1wb3J0YW50OyBcbn1cbi5teVdyYXB7XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbn1cbi53ZWxjb21lLWNhcmR7XG4gICAgcGFkZGluZy1ib3R0b206IDFweDtcbn1cbi5zdGt7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmluc3Rre1xuICAgIGNvbG9yOiAjMWY2MWQ5O1xufVxuLm91dHN0a3tcbiAgICBjb2xvcjogcmVkO1xufVxuLmhvbWVhbGxjYXQgaW9uLWNvbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMXB4O1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICMxZjYxZDk7Ki8gXG59XG4jY2F0Y2FwdGlvbiB7XG4gICAgLypiYWNrZ3JvdW5kOiByZ2JhKDE4LCAxMDEsIDI1MSwgMC41NSkgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDsqL1xuICAgIGNvbG9yOiAjZmJkMjI2O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA5OCU7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHRvcDogMjZweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogYXJpYWw7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4uc3RrUHJje1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4udGVzdGl3cmFwe1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAwIDIwcHggMTVweDtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBtYXJnaW46MTVweCAwIDA7XG4gICAgXG59XG4uc3BlY2h7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIG1hcmdpbi1ib3R0b206MTBweDtcbn1cbi5zcGtye1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zcGtyIHNwYW57XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLm5ybWx3cnB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5mbHR7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4udy01MHtcbiAgICB3aWR0aDogNTAlO1xufVxuLnB5LTEwe1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLmJne1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmcuanBnJyk7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgZmlsdGVyOiBibHVyKDBweCk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuLmJnMXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU0Y2NjYzI7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgZmlsdGVyOiBibHVyKDBweCk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuLmJnMntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JnMi5qcGcnKTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG4uYmcze1xuICAgIGJhY2tncm91bmQtY29sb3I6I2Q5NTM0ZjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG4uYmc0e1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmc0LmpwZycpO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGZpbHRlcjogYmx1cigwcHgpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cbi5nYWxsZXJ5Qngge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMjUyLCAyNTAsIDI1MCwgMC41KTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmdhbGxlcnlCeCBpb24taW1nIGltZyB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmxvZ2luQngge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXgtd2lkdGg6IDM3NHB4O1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgYmFja2dyb3VuZDpyZ2JhKDI1MiwgMjUwLCAyNTAsIDAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luQnggLmxvZ29sb2dpbiB7XG4gICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5sb2dpbkJ4PmgxIHtcbiAgICBtYXJnaW46IDQwcHggMCA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4ubG9naW5CeCBmb3JtIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuZm9ybSBsYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IC45cmVtO1xufVxuLmxvZ2luQnggZm9ybSBpbnB1dCB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zNSk7XG59XG4uZnJtYXhvbiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmZybWF4b24gLmNvbCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDUwJTtcbn1cbi5zZWNvbmRhcnktbGlua3tcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG9wYWNpdHk6IC40O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tdG9wOjEzcHg7XG4gICAgZm9udC1zaXplOi45ZW07XG59XG4uc2Vjb25kYXJ5LWxpbms6aG92ZXJ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgb3BhY2l0eToxO1xufVxuXG4uZmllbGRze1xuICAgIG1heC1oZWlnaHQ6IDgwJSAhaW1wb3J0YW50O1xuICAgIC8vICBtYXJnaW4tbGVmdDogMTVweDtcbiAgIC8vICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIH1cblxuICAubGlzdC1pb3Mge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsI2ZmZik7XG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/product-category/product-category.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/product-category/product-category.page.ts ***!
  \***********************************************************/
/*! exports provided: ProductCategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategoryPage", function() { return ProductCategoryPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/utility.service */ "./src/app/api/utility.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductCategoryPage = /** @class */ (function () {
    function ProductCategoryPage(util, menuCtrl, events, navCtrl) {
        this.util = util;
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.navCtrl = navCtrl;
        this.sliderData = [];
        this.topsellData = [];
        this.categoryData = [];
        this.subCategoryData = [];
        this.subCatType = [];
        this.advData = [];
        this.isCategoryTapped = false;
        this.isCategoryTappedArr = [];
        this.isSubCategoryTapped = false;
        this.isSubCategoryTappedArr = [];
        this.getProductCategory();
    }
    ProductCategoryPage.prototype.ionViewWillEnter = function () {
        //console.log("viewwillentercalling")
        this.menuCtrl.enable(true);
        //this.pageDetails = { 'showMenu': false, 'showBack': true, 'showButtons': false, 'title': 'Details', 'prevPage': 'list' };
        //this.showMenu(this.pageDetails);
        //this.productDetails = this.route.getCurrentNavigation().extras.state.parms;
        //console.log("product details in view will enter", this.productDetails)
    };
    ProductCategoryPage.prototype.showMenu = function (pageDetails) {
        console.log('User created!');
        this.events.publish('showMenu', pageDetails, Date.now());
    };
    ProductCategoryPage.prototype.ngOnInit = function () {
        //this.getProductDetailsData()
    };
    ProductCategoryPage.prototype.getProductCategory = function () {
        var _this = this;
        var myData = JSON.stringify({});
        console.log("Your myData: ", myData);
        this.util.presentLoading();
        //this.util.presentLoader3()
        this.util.getTypeDetails('sliders/category.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            console.log("Your category data: ", result);
            _this.data = result;
            if (_this.data.success) {
                _this.categoryData = _this.data.data.cat;
                console.log("this.categoryData", _this.categoryData);
                for (var i = 0; i < _this.categoryData.length; i++) {
                    _this.isCategoryTappedArr[i] = false;
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
    ProductCategoryPage.prototype.loadImageProduct = function (i, singleCategoryData) {
        singleCategoryData["isLoad"] = true;
        console.log('productlist:: ', singleCategoryData);
    };
    ProductCategoryPage.prototype.subCategory = function (singleSubCategory) {
        var navigationExtras = {
            state: {
                from: 'list',
                parms: singleSubCategory,
            }
        };
        this.navCtrl.navigateForward('/product-sub-category', navigationExtras);
    };
    ProductCategoryPage.prototype.expandCategory = function (singleCategory, i) {
        //console.log("category tapped",singleCategory)
        console.log("this.isCategoryTappedArr begining", this.isCategoryTappedArr);
        this.categoryName = singleCategory.slug;
        this.subCategory = singleCategory.sub_categories;
        this.isSubCategoryTapped = false;
        for (var j = 0; j < this.categoryData.length; j++) {
            if (j != i) {
                this.isCategoryTappedArr[j] = false;
            }
            else {
                if (this.isCategoryTappedArr[i] == false) {
                    this.isCategoryTappedArr.splice(i, 1, true);
                }
                else {
                    this.isCategoryTappedArr.splice(i, 1, false);
                }
            }
        }
        for (var j = 0; j < this.subCategory.length; j++) {
            this.isSubCategoryTappedArr[j] = false;
        }
        console.log("this.isCategoryTappedArr", this.isCategoryTappedArr);
    };
    ProductCategoryPage.prototype.expandSubCategory = function (singleSubCategory, i) {
        this.subCategoryName = singleSubCategory.slug;
        this.subCatType = singleSubCategory.types;
        for (var j = 0; j < this.categoryData.length; j++) {
            if (j != i) {
                this.isSubCategoryTappedArr[j] = false;
            }
            else {
                if (this.isSubCategoryTappedArr[i] == false) {
                    this.isSubCategoryTappedArr.splice(i, 1, true);
                }
                else {
                    this.isSubCategoryTappedArr.splice(i, 1, false);
                }
            }
        }
    };
    ProductCategoryPage.prototype.productsList = function (singleSubCat) {
        console.log("Sub Cat", singleSubCat);
        //localStorage.setItem("productType", singleSubCat.sub_category_id)
        this.navCtrl.navigateForward(['/list', { cat: singleSubCat.category_id ? singleSubCat.category_id : "",
                subCat: singleSubCat.sub_category_id ? singleSubCat.sub_category_id : "",
                type: singleSubCat.id ? singleSubCat.id : "",
                pushedFromSub: "Category" }]);
    };
    ProductCategoryPage.prototype.tabBarList = function () {
        this.navCtrl.navigateRoot('/list');
    };
    ProductCategoryPage.prototype.tabBarHome = function () {
        this.navCtrl.navigateRoot('/home');
    };
    ProductCategoryPage.prototype.tabBarPolicy = function () {
        this.navCtrl.navigateRoot('/privacy-policy');
    };
    ProductCategoryPage.prototype.tabBarContacts = function () {
        this.navCtrl.navigateRoot('/contact');
    };
    ProductCategoryPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-category',
            template: __webpack_require__(/*! ./product-category.page.html */ "./src/app/product-category/product-category.page.html"),
            styles: [__webpack_require__(/*! ./product-category.page.scss */ "./src/app/product-category/product-category.page.scss")]
        }),
        __metadata("design:paramtypes", [_api_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], ProductCategoryPage);
    return ProductCategoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=product-category-product-category-module.js.map