(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-sub-category-product-sub-category-module"],{

/***/ "./src/app/product-sub-category/product-sub-category.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/product-sub-category/product-sub-category.module.ts ***!
  \*********************************************************************/
/*! exports provided: ProductSubCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSubCategoryPageModule", function() { return ProductSubCategoryPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_sub_category_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-sub-category.page */ "./src/app/product-sub-category/product-sub-category.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _product_sub_category_page__WEBPACK_IMPORTED_MODULE_5__["ProductSubCategoryPage"]
    }
];
var ProductSubCategoryPageModule = /** @class */ (function () {
    function ProductSubCategoryPageModule() {
    }
    ProductSubCategoryPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_product_sub_category_page__WEBPACK_IMPORTED_MODULE_5__["ProductSubCategoryPage"]]
        })
    ], ProductSubCategoryPageModule);
    return ProductSubCategoryPageModule;
}());



/***/ }),

/***/ "./src/app/product-sub-category/product-sub-category.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/product-sub-category/product-sub-category.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>productSubCategory</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <div class=\"homeallcat bg1\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"3\" *ngFor=\"let singleCategoryData of subCategory|slice:0:12; let i = index\">\n            <a href=\"\">\n              <p id=\"catcaption\">{{singleCategoryData.name}}</p>\n              <img  (load)=\"loadImageProduct(i,singleCategoryData)\"\n                        [src]=\"singleCategoryData.header_image\" (click)=\"subCategory(singleCategoryData.sub_categories)\">\n                    <img *ngIf=\"!singleCategoryData.isLoad\" src=\"/assets/images/p1.jpg\">\n\n              <!-- <ion-img [src]=\"singleCategoryData.header_image\"></ion-img> -->\n            </a>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/product-sub-category/product-sub-category.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/product-sub-category/product-sub-category.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3Qtc3ViLWNhdGVnb3J5L3Byb2R1Y3Qtc3ViLWNhdGVnb3J5LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/product-sub-category/product-sub-category.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/product-sub-category/product-sub-category.page.ts ***!
  \*******************************************************************/
/*! exports provided: ProductSubCategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSubCategoryPage", function() { return ProductSubCategoryPage; });
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




var ProductSubCategoryPage = /** @class */ (function () {
    function ProductSubCategoryPage(util, menuCtrl, events, navCtrl, route) {
        this.util = util;
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.navCtrl = navCtrl;
        this.route = route;
        this.subCategory = this.route.getCurrentNavigation().extras.state.parms;
        console.log(this.subCategory);
    }
    ProductSubCategoryPage.prototype.ngOnInit = function () {
    };
    ProductSubCategoryPage.prototype.loadImageProduct = function (i, singleCategoryData) {
        singleCategoryData["isLoad"] = true;
        console.log('productlist:: ', singleCategoryData);
    };
    ProductSubCategoryPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-sub-category',
            template: __webpack_require__(/*! ./product-sub-category.page.html */ "./src/app/product-sub-category/product-sub-category.page.html"),
            styles: [__webpack_require__(/*! ./product-sub-category.page.scss */ "./src/app/product-sub-category/product-sub-category.page.scss")]
        }),
        __metadata("design:paramtypes", [_api_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProductSubCategoryPage);
    return ProductSubCategoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=product-sub-category-product-sub-category-module.js.map