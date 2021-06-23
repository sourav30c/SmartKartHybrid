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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: #FFCC23\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Category</ion-title>\n    <ion-buttons slot=\"secondary\">\n      <ion-button (click)=\"toCart()\">\n        <ion-icon slot=\"icon-only\" name=\"cart\" style=\"color: #FFCC23\"></ion-icon>\n        <span class=\"badge badge-assertive\" style=\"color: black;\">{{util.cartCount}}</span>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list class=\"product-types\">\n    <ion-list-header>\n      <ion-label>Choose Product Category</ion-label>\n    </ion-list-header>\n\n    <ion-list *ngFor=\"let singleCategoryData of categoryData|slice:0:12; let i = index\"\n      style=\"border-bottom: .5px solid grey\" lines=\"none\">\n      <ion-item class=\"fields\" (click)=\"expandCategory(singleCategoryData,i)\" no-padding style=\"max-height: 80%\">\n        <ion-icon slot=\"start\" style=\"font-size: 1.3em\" name=\"arrow-forward\"\n          *ngIf=\"!isCategoryTappedArr[i] && singleCategoryData.slug === categoryName\"></ion-icon>\n        <ion-icon slot=\"start\" style=\"font-size: 1.3em\" name=\"arrow-forward\"\n          *ngIf=\"isCategoryTappedArr[i] && singleCategoryData.slug !== categoryName\"></ion-icon>\n        <ion-icon slot=\"start\" style=\"font-size: 1.3em\" name=\"arrow-forward\"\n          *ngIf=\"!isCategoryTappedArr[i] && singleCategoryData.slug !== categoryName\"></ion-icon>\n        <ion-icon slot=\"start\" style=\"font-size: 1.3em\" name=\"arrow-down\"\n          *ngIf=\"isCategoryTappedArr[i] && singleCategoryData.slug === categoryName\">\n        </ion-icon>\n        <ion-label>{{singleCategoryData.name}}</ion-label>\n      </ion-item>\n      <div *ngIf=\"isCategoryTappedArr[i] && singleCategoryData.slug === categoryName\">\n\n        <ion-list *ngFor=\"let singlesubCategory of subCategory|slice:0:12; let i = index\"\n          style=\"border-bottom: .5px solid grey\">\n          <ion-item (click)=\"expandSubCategory(singlesubCategory,i)\" no-padding style=\"max-height: 80%\">\n            <ion-icon slot=\"start\" style=\"font-size: 1.3em\" name=\"add\"\n              *ngIf=\"!isSubCategoryTappedArr[i] && singlesubCategory.slug !== subCategoryName\"></ion-icon>\n            <ion-icon slot=\"start\" style=\"font-size: 1.3em\" name=\"add\"\n              *ngIf=\"!isSubCategoryTappedArr[i] && singlesubCategory.slug === subCategoryName\"></ion-icon>\n            <ion-icon slot=\"start\" style=\"font-size: 1.3em\" name=\"add\"\n              *ngIf=\"isSubCategoryTappedArr[i] && singlesubCategory.slug !== subCategoryName\"></ion-icon>\n            <ion-icon slot=\"start\" style=\"font-size: 1.3em\" name=\"close\"\n              *ngIf=\"isSubCategoryTappedArr[i] && singlesubCategory.slug === subCategoryName\"></ion-icon>\n            <ion-label>{{singlesubCategory.name}}</ion-label>\n          </ion-item>\n          <div *ngIf=\"isSubCategoryTappedArr[i] && singlesubCategory.slug === subCategoryName\">\n            <ion-list *ngFor=\"let singlesubCatType of subCatType|slice:0:12; let i = index\"\n              style=\"border-bottom: .5px solid grey\">\n              <ion-item (click)=\"productsList(singlesubCatType)\" style=\"padding-left: 8px\">\n                <ion-label>{{singlesubCatType.name}}</ion-label>\n              </ion-item>\n            </ion-list>\n          </div>\n        </ion-list>\n      </div>\n    </ion-list>\n\n  </ion-list>\n\n</ion-content>\n\n<!-- <ion-footer>\n  <ion-toolbar text-center color=\"dark\">\n      <ion-buttons>\n          <ion-button (click)=\"tabBarHome()\">\n              <div class=\"fotricn\">\n                  <ion-icon name=\"home\"></ion-icon>\n                  <ion-label>Home</ion-label>\n              </div>\n          </ion-button>\n          <ion-button (click)=\"tabBarList()\">\n              <div class=\"fotricn\">\n                  <ion-icon name=\"basket\"></ion-icon>\n                  <ion-label>Shop</ion-label>\n              </div>\n          </ion-button>\n          <ion-button (click)=\"tabBarPolicy()\">\n              <div class=\"fotricn\">\n                  <ion-icon name=\"open\"></ion-icon>\n                  <ion-label>Policy</ion-label>\n              </div>\n          </ion-button>\n          <ion-button (click)=\"tabBarContacts()\">\n              <div class=\"fotricnlst\">\n                  <ion-icon name=\"contacts\"></ion-icon>\n                  <ion-label>Contact</ion-label>\n              </div>\n          </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-footer> -->"

/***/ }),

/***/ "./src/app/product-category/product-category.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/product-category/product-category.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forSecHed {\n  height: 44px !important;\n  min-height: auto !important; }\n\n.forSecHed * {\n  font-size: 14px !important;\n  text-transform: capitalize !important;\n  height: 20px !important;\n  min-height: auto !important; }\n\n.myWrap {\n  white-space: pre-wrap !important;\n  overflow: hidden;\n  height: 30px !important; }\n\n.welcome-card {\n  padding-bottom: 1px; }\n\n.stk {\n  font-size: 10px;\n  font-weight: bold; }\n\n.instk {\n  color: #1f61d9; }\n\n.outstk {\n  color: red; }\n\n.homeallcat ion-col {\n  width: 100%;\n  margin: 0px;\n  padding: 1px;\n  /* border: 1px solid #1f61d9;*/ }\n\n#catcaption {\n  /*background: rgba(18, 101, 251, 0.55) none repeat scroll 0 0;*/\n  color: #fbd226;\n  height: auto;\n  position: absolute;\n  text-align: center;\n  width: 98%;\n  height: 16px;\n  top: 26px;\n  text-decoration: none !important;\n  font-family: arial;\n  font-size: 10px; }\n\n.stkPrc {\n  font-size: 11px;\n  font-weight: bold;\n  display: inline-block; }\n\n.testiwrap {\n  font-size: 14px;\n  padding: 0 20px 15px;\n  text-align: center;\n  margin: 15px 0 0; }\n\n.spech {\n  font-style: italic;\n  margin-bottom: 10px; }\n\n.spkr {\n  font-size: 11px;\n  font-weight: bold; }\n\n.spkr span {\n  font-size: 10px;\n  display: block; }\n\n.nrmlwrp {\n  overflow: hidden; }\n\n.flt {\n  float: left; }\n\n.w-50 {\n  width: 50%; }\n\n.py-10 {\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n.bg {\n  background-image: url(\"/assets/images/bg.jpg\");\n  height: auto;\n  background-size: cover;\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center; }\n\n.bg1 {\n  background-color: #1e4cccc2;\n  height: auto;\n  background-size: cover;\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center; }\n\n.bg2 {\n  background-image: url(\"/assets/images/bg2.jpg\");\n  height: auto;\n  background-size: cover;\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center; }\n\n.bg3 {\n  background-color: #d9534f;\n  height: auto;\n  background-size: cover;\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center; }\n\n.bg4 {\n  background-image: url(\"/assets/images/bg4.jpg\");\n  height: auto;\n  background-size: cover;\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n  background-repeat: no-repeat;\n  background-position: center center; }\n\n.galleryBx {\n  margin: auto;\n  background: rgba(252, 250, 250, 0.5);\n  border-radius: 0px;\n  text-align: center; }\n\n.galleryBx ion-img img {\n  height: 100px; }\n\n.loginBx {\n  margin: auto;\n  max-width: 374px;\n  padding: 25px;\n  background: rgba(252, 250, 250, 0.5);\n  border-radius: 0px;\n  text-align: center; }\n\n.loginBx .logologin {\n  max-width: 150px;\n  margin: auto; }\n\n.loginBx > h1 {\n  margin: 40px 0 40px;\n  font-size: 1.3rem; }\n\n.loginBx form {\n  text-align: left; }\n\nform label {\n  font-weight: 700;\n  font-size: .9rem; }\n\n.loginBx form input {\n  border-radius: 5px;\n  font-size: 1em;\n  padding: 8px 15px;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 15px;\n  background: #fff0;\n  border: 1px solid rgba(0, 0, 0, 0.35); }\n\n.frmaxon {\n  margin-top: 20px;\n  overflow: hidden; }\n\n.frmaxon .col {\n  float: left;\n  width: 50%; }\n\n.secondary-link {\n  font-weight: 700;\n  color: #fff;\n  opacity: .4;\n  display: inline-block;\n  margin-top: 13px;\n  font-size: .9em; }\n\n.secondary-link:hover {\n  color: #fff;\n  opacity: 1; }\n\n.fields {\n  max-height: 80% !important; }\n\n.list-ios {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: -1px;\n  margin-bottom: 14px;\n  background: var(--ion-background-color, #fff); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YXAvRGVza3RvcC9pb25pYyBQcm9qZWN0L3BwL1NtYXJ0LUNhcnQgMi9zcmMvYXBwL3Byb2R1Y3QtY2F0ZWdvcnkvcHJvZHVjdC1jYXRlZ29yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBdUI7RUFDdkIsMkJBQTJCLEVBQUE7O0FBRS9CO0VBQ0ksMEJBQTBCO0VBQzFCLHFDQUFxQztFQUNyQyx1QkFBdUI7RUFDdkIsMkJBQTJCLEVBQUE7O0FBRS9CO0VBQ0ksZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQix1QkFBdUIsRUFBQTs7QUFFM0I7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNJLFVBQVUsRUFBQTs7QUFFZDtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDhCQUFBLEVBQStCOztBQUVuQztFQUNJLCtEQUFBO0VBQ0EsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osU0FBUztFQUNULGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUVuQjtFQUNJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0ksZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixrQkFBaUI7RUFDakIsZ0JBQWUsRUFBQTs7QUFHbkI7RUFDSSxrQkFBa0I7RUFDbEIsbUJBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksV0FBVyxFQUFBOztBQUVmO0VBQ0ksVUFBVSxFQUFBOztBQUVkO0VBQ0ksaUJBQWlCO0VBQ2pCLG9CQUFvQixFQUFBOztBQUV4QjtFQUNJLDhDQUE4QztFQUM5QyxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHlCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLGtDQUFrQyxFQUFBOztBQUV0QztFQUNJLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHlCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLGtDQUFrQyxFQUFBOztBQUV0QztFQUNJLCtDQUErQztFQUMvQyxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHlCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLGtDQUFrQyxFQUFBOztBQUV0QztFQUNJLHlCQUF3QjtFQUN4QixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHlCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLGtDQUFrQyxFQUFBOztBQUV0QztFQUNJLCtDQUErQztFQUMvQyxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHlCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLGtDQUFrQyxFQUFBOztBQUV0QztFQUNJLFlBQVk7RUFDWixvQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixvQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIscUNBQW9DLEVBQUE7O0FBRXhDO0VBQ0ksZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLFdBQVc7RUFDWCxVQUFVLEVBQUE7O0FBRWQ7RUFDSSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZ0JBQWU7RUFDZixlQUFjLEVBQUE7O0FBRWxCO0VBQ0ksV0FBVztFQUNYLFVBQVMsRUFBQTs7QUFHYjtFQUNJLDBCQUEwQixFQUFBOztBQUs1QjtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiw2Q0FBNEMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtY2F0ZWdvcnkvcHJvZHVjdC1jYXRlZ29yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9yU2VjSGVke1xuICAgIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDsgXG59XG4uZm9yU2VjSGVkICp7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgICBtaW4taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7IFxufVxuLm15V3JhcHtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXAgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xufVxuLndlbGNvbWUtY2FyZHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xufVxuLnN0a3tcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaW5zdGt7XG4gICAgY29sb3I6ICMxZjYxZDk7XG59XG4ub3V0c3Rre1xuICAgIGNvbG9yOiByZWQ7XG59XG4uaG9tZWFsbGNhdCBpb24tY29sIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAxcHg7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgIzFmNjFkOTsqLyBcbn1cbiNjYXRjYXB0aW9uIHtcbiAgICAvKmJhY2tncm91bmQ6IHJnYmEoMTgsIDEwMSwgMjUxLCAwLjU1KSBub25lIHJlcGVhdCBzY3JvbGwgMCAwOyovXG4gICAgY29sb3I6ICNmYmQyMjY7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDk4JTtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgdG9wOiAyNnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbi5zdGtQcmN7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi50ZXN0aXdyYXB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDAgMjBweCAxNXB4O1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIG1hcmdpbjoxNXB4IDAgMDtcbiAgICBcbn1cbi5zcGVjaHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xufVxuLnNwa3J7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNwa3Igc3BhbntcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4ubnJtbHdycHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmZsdHtcbiAgICBmbG9hdDogbGVmdDtcbn1cbi53LTUwe1xuICAgIHdpZHRoOiA1MCU7XG59XG4ucHktMTB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uYmd7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9iZy5qcGcnKTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG4uYmcxe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTRjY2NjMjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG4uYmcye1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmcyLmpwZycpO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGZpbHRlcjogYmx1cigwcHgpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cbi5iZzN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZDk1MzRmO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGZpbHRlcjogYmx1cigwcHgpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cbi5iZzR7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9iZzQuanBnJyk7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgZmlsdGVyOiBibHVyKDBweCk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuLmdhbGxlcnlCeCB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJhY2tncm91bmQ6cmdiYSgyNTIsIDI1MCwgMjUwLCAwLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZ2FsbGVyeUJ4IGlvbi1pbWcgaW1nIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4ubG9naW5CeCB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1heC13aWR0aDogMzc0cHg7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMjUyLCAyNTAsIDI1MCwgMC41KTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9naW5CeCAubG9nb2xvZ2luIHtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmxvZ2luQng+aDEge1xuICAgIG1hcmdpbjogNDBweCAwIDQwcHg7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi5sb2dpbkJ4IGZvcm0ge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5mb3JtIGxhYmVsIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogLjlyZW07XG59XG4ubG9naW5CeCBmb3JtIGlucHV0IHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmYwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjM1KTtcbn1cbi5mcm1heG9uIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZnJtYXhvbiAuY29sIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogNTAlO1xufVxuLnNlY29uZGFyeS1saW5re1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgb3BhY2l0eTogLjQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi10b3A6MTNweDtcbiAgICBmb250LXNpemU6LjllbTtcbn1cbi5zZWNvbmRhcnktbGluazpob3ZlcntcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBvcGFjaXR5OjE7XG59XG5cbi5maWVsZHN7XG4gICAgbWF4LWhlaWdodDogODAlICFpbXBvcnRhbnQ7XG4gICAgLy8gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgLy8gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgfVxuXG4gIC5saXN0LWlvcyB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwjZmZmKTtcbiAgICB9Il19 */"

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
                //console.log("this.categoryData",this.categoryData)
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
        //console.log('productlist:: ', singleCategoryData)
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
        //console.log("this.isCategoryTappedArr begining", this.isCategoryTappedArr)
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
        //console.log("this.isCategoryTappedArr", this.isCategoryTappedArr)
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
        //console.log("Sub Cat", singleSubCat)
        //localStorage.setItem("productType", singleSubCat.sub_category_id)
        this.navCtrl.navigateForward(['/list', { cat: singleSubCat.category_id ? singleSubCat.category_id : "",
                subCat: singleSubCat.sub_category_id ? singleSubCat.sub_category_id : "",
                type: singleSubCat.id ? singleSubCat.id : "",
                pushedFromSub: "Category" }]);
    };
    ProductCategoryPage.prototype.toCart = function () {
        if (localStorage.getItem('loginDataKKart') != null) {
            this.navCtrl.navigateForward('/cart');
        }
        else {
            this.navCtrl.navigateForward(['/login', { pushedFrom: "CartIcon" }]);
        }
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