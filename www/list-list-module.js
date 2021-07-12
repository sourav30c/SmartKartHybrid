(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-list-module"],{

/***/ "./src/app/list/list.module.ts":
/*!*************************************!*\
  !*** ./src/app/list/list.module.ts ***!
  \*************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list.page */ "./src/app/list/list.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ListPageModule = /** @class */ (function () {
    function ListPageModule() {
    }
    ListPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _list_page__WEBPACK_IMPORTED_MODULE_5__["ListPage"]
                    }
                ])
            ],
            declarations: [_list_page__WEBPACK_IMPORTED_MODULE_5__["ListPage"]]
        })
    ], ListPageModule);
    return ListPageModule;
}());



/***/ }),

/***/ "./src/app/list/list.page.html":
/*!*************************************!*\
  !*** ./src/app/list/list.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\" *ngIf=\"pushedFromSubCat == ''\">\n            <ion-menu-button style=\"color: #FFCC23\"></ion-menu-button>\n        </ion-buttons>\n        <ion-buttons slot=\"start\" *ngIf=\"pushedFromSubCat != ''\" (click)=\"goBack()\">\n            <ion-icon name=\"arrow-back\" class=\"backIcon\" style=\"color: #FFCC23\"></ion-icon>\n          </ion-buttons>\n        <ion-title>\n            All Products\n        </ion-title>\n        <ion-buttons slot=\"secondary\">\n            <ion-button (click)=\"toCart()\">\n                <ion-icon slot=\"icon-only\" name=\"cart\" style=\"color: #FFCC23\"></ion-icon>\n                <span class=\"badge badge-assertive\" style=\"color: black;\">{{util.cartCount}}</span>\n            </ion-button>\n        </ion-buttons>\n\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n    <ion-grid>\n        <ion-searchbar search-icon=“undefined”  [placeholder]=\"serachByPlaceholder\" class=\"ion-no-padding\" [(ngModel)]=\"searchText\"\n        showCancelButton=\"always\" cancelButtonText=\"Show All\" (ionInput)=\"getItems($event)\"\n        (ionCancel)=\"onCancel($event)\" (search)=\"submitSearch($event)\">\n      </ion-searchbar>\n\n        <ion-row *ngIf=\"isProductList\">\n            <ion-col size=\"6\" *ngFor=\"let productlist of productlist; let i = index\">\n                <ion-card style=\"margin: 0;\">\n                    <div class=\"lstBtnGrp\">\n                        <label style=\"background-color: #FFCC23;color: white;border-radius: 2px;padding: 1px;\">{{productlist.discount_percentage}} %</label>\n                        <button color=\"light\" (click)=\"addToWishlist(productlist,i)\" style=\"right: -28px;background: transparent;\">\n                            <ion-icon slot=\"icon-only\" name=\"heart-empty\" *ngIf=\"wishListCheck[i] !== productlist.id\"></ion-icon>\n                            <ion-icon slot=\"icon-only\" name=\"heart\" *ngIf=\"wishListCheck[i] === productlist.id\" style=\"color: #0000A0\"></ion-icon>\n                        </button>\n                    </div>\n\n\n                    <img (click)=\"details(productlist)\" (load)=\"loadImageProduct(i,productlist)\"\n                        [src]=\"productlist.photo\" style=\"height: 128px;width: 100%;\">\n                    <img *ngIf=\"!productlist.isLoad\" src=\"/assets/images/p1.jpg\" (click)=\"details(productlist)\">\n\n                    <!-- <div class=\"rating\">\n                        <span>\n                            <ion-item class=\"star\" *ngIf=\"ratingStar=='5'\" lines=\"none\">\n                              <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                              <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                              <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                              <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                              <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                            </ion-item>\n                            <ion-item class=\"star\" *ngIf=\"ratingStar=='4'\" lines=\"none\">\n                              <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                              <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                              <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                              <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                              <ion-icon name=\"star-outline\"></ion-icon>\n                            </ion-item>\n                            <ion-item class=\"star\" *ngIf=\"ratingStar=='3'\" lines=\"none\">\n                              <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                              <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                              <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                              <ion-icon name=\"star-outline\"></ion-icon>\n                              <ion-icon name=\"star-outline\"></ion-icon>\n                            </ion-item>\n                            <ion-item class=\"star\" *ngIf=\"ratingStar=='2'\" lines=\"none\">\n                              <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                              <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                              <ion-icon name=\"star-outline\"></ion-icon>\n                              <ion-icon name=\"star-outline\"></ion-icon>\n                              <ion-icon name=\"star-outline\"></ion-icon>\n                            </ion-item>\n                            <ion-item class=\"star\" *ngIf=\"ratingStar=='1'\" lines=\"none\">\n                              <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                              <ion-icon name=\"star-outline\"></ion-icon>\n                              <ion-icon name=\"star-outline\"></ion-icon>\n                              <ion-icon name=\"star-outline\"></ion-icon>\n                              <ion-icon name=\"star-outline\"></ion-icon>\n                            </ion-item>\n                            <ion-item class=\"star\" *ngIf=\"ratingStar=='0'\" lines=\"none\">\n                              <ion-icon name=\"star-outline\"></ion-icon>\n                              <ion-icon name=\"star-outline\"></ion-icon>\n                              <ion-icon name=\"star-outline\"></ion-icon>\n                              <ion-icon name=\"star-outline\"></ion-icon>\n                              <ion-icon name=\"star-outline\"></ion-icon>\n                            </ion-item>\n                            <ion-item class=\"star\" lines=\"none\">\n                                <ion-icon name=\"star-outline\"></ion-icon>\n                                <ion-icon name=\"star-outline\"></ion-icon>\n                                <ion-icon name=\"star-outline\"></ion-icon>\n                                <ion-icon name=\"star-outline\"></ion-icon>\n                                <ion-icon name=\"star-outline\"></ion-icon>\n                              </ion-item>\n                        </span>\n                      </div> -->\n\n                    <ion-card-header (click)=\"details(productlist)\" style=\"height: 135px;\">\n                        <ion-card-subtitle>{{productlist.name | slice:0:20}} ...</ion-card-subtitle>\n                        <ion-row>\n                            <ion-col style=\"text-align: left;\" *ngIf=\"productlist.total_quantity != '0'\" size=\"12\">\n                                <span class=\"stk instk\">In Stock</span>\n                            </ion-col>\n                            <ion-col style=\"text-align: left;\" *ngIf=\"productlist.total_quantity == '0'\" size=\"12\">\n                                <span class=\"stk outstk\">Out of Stock</span>\n                            </ion-col>\n                            \n                        </ion-row>\n                        <ion-row>\n                            <ion-col style=\"text-align: left;\" size=\"12\">\n                                <span class=\"crPrice\">Rs. {{productlist.offer_price}}\n                                </span>\n                                <span class=\"oldPrice\">{{productlist.actual_price}}</span>\n                                <!-- <span class=\"offPrice\">{{productlist.discount_percentage}} %</span> -->\n                            </ion-col>\n                        </ion-row>\n                    </ion-card-header>\n\n                    <div>\n                        <!-- <ion-button color=\"light\" (click)=\"addToWishlist(productlist,i)\">\n                            <ion-icon slot=\"icon-only\" name=\"heart-empty\" *ngIf=\"wishListCheck[i] !== productlist.id\"></ion-icon>\n                            <ion-icon slot=\"icon-only\" name=\"heart\" *ngIf=\"wishListCheck[i] === productlist.id\" style=\"color: #0000A0\"></ion-icon>\n                        </ion-button> -->\n                            <ion-button class=\"addtoCrt\" *ngIf=\"productlist.total_quantity != '0'\" expand=\"full\"  (click)=\"addToCart(productlist)\">\n                                Add To Cart\n                              </ion-button>\n                        <!-- <ion-button color=\"light\" *ngIf=\"productlist.in_stock == false\">\n                            <ion-icon slot=\"icon-only\" style=\"color:gainsboro;\" name=\"cart\"></ion-icon>\n                        </ion-button> -->\n                    </div>\n                    \n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <ion-card style=\"text-align:center;margin-top:50% \" *ngIf=\"isProductList===false\">\n        <ion-card-content>\n            No Product List Found\n            <button style=\"margin-top:10px\" ion-button color=\"dark\" icon-start full (click)=\"continueShopping()\">\n                Continue Shopping\n            </button>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n\n\n<!-- <ion-footer>\n    <ion-toolbar text-center color=\"dark\">\n        <ion-buttons>\n            <ion-button (click)=\"tabBarHome()\">\n                <div class=\"fotricn\">\n                    <ion-icon name=\"home\"></ion-icon>\n                    <ion-label>Home</ion-label>\n                </div>\n            </ion-button>\n            <ion-button (click)=\"tabBarList()\">\n                <div class=\"fotricn\">\n                    <ion-icon name=\"basket\"></ion-icon>\n                    <ion-label>Shop</ion-label>\n                </div>\n            </ion-button>\n            <ion-button (click)=\"tabBarPolicy()\">\n                <div class=\"fotricn\">\n                    <ion-icon name=\"open\"></ion-icon>\n                    <ion-label>Policy</ion-label>\n                </div>\n            </ion-button>\n            <ion-button (click)=\"tabBarContacts()\">\n                <div class=\"fotricnlst\">\n                    <ion-icon name=\"contacts\"></ion-icon>\n                    <ion-label>Contact</ion-label>\n                </div>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-footer> -->"

/***/ }),

/***/ "./src/app/list/list.page.scss":
/*!*************************************!*\
  !*** ./src/app/list/list.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stk {\n  font-size: 10px;\n  font-weight: bold; }\n\n.instk {\n  color: green; }\n\n.outstk {\n  color: red; }\n\n.stkPrc {\n  font-size: 11px;\n  font-weight: bold;\n  display: inline-block; }\n\n.nrmlwrp {\n  overflow: hidden; }\n\n.flt {\n  float: left; }\n\n.w-50 {\n  width: 50%; }\n\n.py-10 {\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n.lstBtnGrp * {\n  font-size: 16px;\n  position: relative; }\n\n.lstBtnGrp .icon {\n  font-size: 16px;\n  color: gainsboro; }\n\n.lstBtnGrp .button {\n  position: absolute;\n  top: 5px; }\n\n.instk[_ngcontent-c2] {\n  color: green;\n  font-size: 12px; }\n\n.outstk[_ngcontent-c1] {\n  color: red;\n  font-size: 12px; }\n\n.oldPrice {\n  text-decoration: line-through;\n  color: rgba(0, 0, 0, 0.6);\n  display: inline-block;\n  margin-right: 15px; }\n\n.backIcon {\n  font-size: 28px;\n  color: 226; }\n\n.addtoCrt {\n  background: transparent;\n  position: relative;\n  border-radius: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWF2ZXJzd2ViL0Rlc2t0b3AvU21hcnRLYXJ0SHlicmlkL3NyYy9hcHAvbGlzdC9saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksVUFBVSxFQUFBOztBQUVkO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxXQUFXLEVBQUE7O0FBRWY7RUFDSSxVQUFVLEVBQUE7O0FBRWQ7RUFDSSxpQkFBaUI7RUFDakIsb0JBQW9CLEVBQUE7O0FBRXhCO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFVSSxrQkFBa0I7RUFDbEIsUUFBUSxFQUFBOztBQUdaO0VBQ0ksWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxVQUFVO0VBQ1YsZUFBZSxFQUFBOztBQUVuQjtFQUNJLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGVBQWU7RUFDZixVQUE0QixFQUFBOztBQUdoQztFQUNJLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9saXN0L2xpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0a3tcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaW5zdGt7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuLm91dHN0a3tcbiAgICBjb2xvcjogcmVkO1xufVxuLnN0a1ByY3tcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLm5ybWx3cnB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5mbHR7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4udy01MHtcbiAgICB3aWR0aDogNTAlO1xufVxuLnB5LTEwe1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLmxzdEJ0bkdycCAqe1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubHN0QnRuR3JwIC5pY29ue1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogZ2FpbnNib3JvO1xufVxuXG4ubHN0QnRuR3JwIC5idXR0b257XG4gICAgLy93aWR0aDogNDAlO1xuICAgIC8vbWFyZ2luOiAwO1xuICAgIC8vcmlnaHQ6IC0zMHB4O1xuICAgIC8vYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIC8vYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLy9ib3JkZXItcmFkaXVzOiAwO1xuICAgIC8vYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMDk4MDM5MjE1Njg2Mjc0NSk7XG5cblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDVweDtcbn1cblxuLmluc3RrW19uZ2NvbnRlbnQtYzJdIHtcbiAgICBjb2xvcjogZ3JlZW47XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ub3V0c3RrW19uZ2NvbnRlbnQtYzFdIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5vbGRQcmljZXtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5iYWNrSWNvbntcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgY29sb3I6IGJsdWUoJGNvbG9yOiAjMjAwYWUyKTtcbn1cblxuLmFkZHRvQ3J0e1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/list/list.page.ts":
/*!***********************************!*\
  !*** ./src/app/list/list.page.ts ***!
  \***********************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
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




var ListPage = /** @class */ (function () {
    function ListPage(util, menuCtrl, route, events, activeroute, navCtrl, platform) {
        this.util = util;
        this.menuCtrl = menuCtrl;
        this.route = route;
        this.events = events;
        this.activeroute = activeroute;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.productlist = [];
        this.wishListCheck = [];
        this.sliderData = [];
        this.topsellData = [];
        this.recentProductData = [];
        this.categoryData = [];
        this.page = 1;
        this.productTotal = 0;
        this.fixedSectionDelete = false;
        this.slugProduct = "";
        this.isWishlist = false;
        this.subCategoryId = "";
        this.categoryId = "";
        this.type_id = "";
        this.isProductList = true;
        this.pushedFromSubCat = "";
        this.searchText = '';
        this.isSearch = false;
        this.pageSearch = 1;
        this.count1 = 1;
        this.count2 = 1;
        this.events.publish('user:login');
        this.pushedFrom = this.activeroute.snapshot.paramMap.get("pushedFrom");
        //this.getProductListData()
        console.log("pushed from", this.pushedFrom);
        if (this.pushedFrom == 'loginWishlist') {
            //this.slugProduct = localStorage.getItem('tempListSlug')
            //this.slugLocation = localStorage.getItem('tempListLocation')
            this.myWishlistWithoutCheck();
            //this.myWishlist()
            //this.addToWishlist(this.slugProduct, this.slugLocation)
        }
        else if (this.pushedFrom == 'loginCartlist') {
            this.postDataAddtoCart(localStorage.getItem('tempListSlugCart'));
        }
        //this.subCategoryId = this.activeroute.snapshot.paramMap.get("subCat") ?this.activeroute.snapshot.paramMap.get("subCat") : ""
    }
    // ionViewDidEnter() {
    //   this.subscribe = this.platform.backButton.subscribeWithPriority(666, () => {
    //     if (this.constructor.name == "HomePage"){
    //       if(window.confirm("Do you want to exit app")){
    //         navigator["app"].exitApp();
    //       }
    //     }
    //   })
    // }
    ListPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true);
        this.pageDetails = { 'showMenu': true, 'showBack': false, 'showButtons': false, 'title': 'Product List', 'prevPage': '' };
        this.showMenu(this.pageDetails);
        if (localStorage.getItem('loginDataKKart') != null) {
            if (this.pushedFrom != 'loginWishlist') {
                this.myWishlistWithoutCheck();
            }
            this.util.myCartlist();
        }
        //this.subCategoryId = localStorage.getItem("productType")
        this.subCategoryId = this.activeroute.snapshot.paramMap.get("subCat") ? this.activeroute.snapshot.paramMap.get("subCat") : "";
        this.categoryId = this.activeroute.snapshot.paramMap.get("cat") ? this.activeroute.snapshot.paramMap.get("cat") : "";
        this.type_id = this.activeroute.snapshot.paramMap.get("type") ? this.activeroute.snapshot.paramMap.get("type") : "";
        this.pushedFromSubCat = this.activeroute.snapshot.paramMap.get("pushedFromSub") ? this.activeroute.snapshot.paramMap.get("pushedFromSub") : "";
        //console.log("From Home", this.pushedFromSubCat)
        this.searchText = this.activeroute.snapshot.paramMap.get("searchTxtHome") ? this.activeroute.snapshot.paramMap.get("searchTxtHome") : "";
        if (this.searchText == "") {
            this.getProductListData();
        }
        else {
            this.getSearchProductListData();
        }
    };
    ListPage.prototype.showMenu = function (pageDetails) {
        //console.log('User created!')
        this.events.publish('showMenu', pageDetails, Date.now());
    };
    ListPage.prototype.getProductListData = function () {
        var _this = this;
        var myData = JSON.stringify({
            "category_id": this.categoryId,
            "sub_category_id": this.subCategoryId,
            "type_id": this.type_id,
            "search": ""
        });
        //console.log("Your myData product list: ", myData);
        //this.util.presentLoading();
        if (this.page == 1) {
            this.util.presentLoading();
        }
        this.util.getTypeDetails('products/productList.json?page=' + this.page, myData).subscribe(function (result) {
            _this.util.dismissLoader();
            if (_this.page == 1) {
                _this.util.dismissLoader();
            }
            _this.data = result;
            //console.log("ProductListData",this.data)
            if (_this.data.success) {
                _this.util.dismissLoader();
                if (localStorage.getItem('loginDataKKart') != null) {
                    _this.myWishlist();
                }
                if (_this.page == 1) {
                    _this.productlist = _this.data.data.product;
                }
                else {
                    var arrNewRecord = _this.data.data.product;
                    var otherWay = _this.productlist.concat(arrNewRecord);
                    //console.log(otherWay);
                    _this.productlist = otherWay;
                }
                if (_this.productlist.length == 0) {
                    _this.isProductList = false;
                }
                else {
                    _this.isProductList = true;
                }
                _this.productTotal = _this.data.paging.count;
                if (_this.productlist.length == _this.productTotal) {
                    _this.infiniteScroll.disabled = true;
                }
                _this.page += 1;
                if (_this.productlist.length > 0) {
                    for (var i = 0; i < _this.productlist.length; i++) {
                        //console.log("isLoadisLoad: ", this.productlist[i]["isLoad"]);
                        if (_this.productlist[i]["isLoad"] != true) {
                            _this.productlist[i]["isLoad"] = false;
                        }
                    }
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
    ListPage.prototype.loadImageProduct = function (i, productlist) {
        productlist["isLoad"] = true;
    };
    ListPage.prototype.scroll = function (ev) {
        if (ev.detail.scrollTop > 123) {
            this.fixedSectionDelete = true;
        }
        else {
            this.fixedSectionDelete = false;
        }
    };
    ListPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            //console.log('Done Load Data Calling');
            event.target.complete();
            //this.getProductListData();
            if (_this.searchText == "") {
                _this.getProductListData();
            }
            else {
                _this.getSearchProductListData();
            }
        }, 500);
    };
    ListPage.prototype.details = function (productListSingle) {
        localStorage.setItem('singleProduct', JSON.stringify(productListSingle));
        var navigationExtras = {
            state: {
                from: 'list',
                parms: productListSingle,
                parms2: this.subCategoryId
            }
        };
        this.navCtrl.navigateForward('/details', navigationExtras);
    };
    ListPage.prototype.myWishlistWithoutCheck = function () {
        var _this = this;
        //this.wishListListsForId = []
        var myData = JSON.stringify({});
        //this.util.presentLoading();
        this.util.getTypeDetailsWithAuth('users/wishlist.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            //console.log("Your data: ", result);
            _this.data = result;
            if (_this.data.success) {
                _this.util.dismissLoader();
                _this.wishListListsForId = _this.data.data.wishlist;
                //console.log("wishListListsForId final list", this.wishListListsForId)
            }
            else {
                _this.util.showToast(_this.data.message);
            }
        }, function (error) {
            _this.util.dismissLoader();
            _this.util.showToast('Server error occured. Try again.');
        });
    };
    ListPage.prototype.myWishlist = function () {
        var _this = this;
        this.wishListCheck = [];
        var myData = JSON.stringify({});
        this.util.getTypeDetailsWithAuth('users/wishlist.json', myData).subscribe(function (result) {
            _this.data = result;
            if (_this.data.success) {
                _this.wishlistLists = _this.data.data.wishlist;
                for (var i = 0; i < _this.productlist.length; i++) {
                    if (_this.wishlistLists.length > 0) {
                        for (var j = 0; j < _this.wishlistLists.length; j++) {
                            if (_this.productlist[i].id == _this.wishlistLists[j].product_id) {
                                _this.wishListCheck[i] = _this.productlist[i].id;
                                break;
                            }
                            else {
                                _this.wishListCheck[i] = 0;
                            }
                        }
                    }
                    else {
                        _this.wishListCheck[i] = 0;
                    }
                }
                _this.util.dismissLoader();
                //console.log("this.wishListCheck", this.wishListCheck, this.wishlistLists)
                if (_this.pushedFrom == 'loginWishlist' && _this.count2 == 1) {
                    _this.count2 = _this.count2 + 1;
                    _this.slugProductAny = JSON.parse(localStorage.getItem('tempListSlug'));
                    _this.slugLocation = localStorage.getItem('tempListLocation');
                    //console.log("wishlist callingt", localStorage.getItem('tempListSlug') , this.slugProductAny.slug , this.slugLocation)
                    _this.addToWishlist(_this.slugProductAny, _this.slugLocation);
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
    ListPage.prototype.addToWishlist = function (singleproductlistslug, i) {
        var _this = this;
        var wishlistIdForDelete = "";
        if (localStorage.getItem('loginDataKKart') != null) {
            //console.log("this.wishlistLists.length ", this.wishListListsForId, Number(i + 1), this.wishListCheck)
            if (this.wishListCheck[i] == singleproductlistslug.id) {
                for (var k = 0; k < this.wishListListsForId.length; k++) {
                    //console.log("delete ids", singleproductlistslug.id, this.wishListListsForId[k].product_id, i, k, this.wishListListsForId[k].id)
                    if (this.wishListListsForId[k].product_id == singleproductlistslug.id) {
                        wishlistIdForDelete = this.wishListListsForId[k].id;
                        break;
                    }
                    else {
                        continue;
                    }
                }
                //console.log("delete from wishlist", wishlistIdForDelete)
                this.util.deleteFromWishlist(wishlistIdForDelete); //delete from wishlist
                this.wishListCheck.splice(i, 1, 0);
            }
            else if (this.wishListCheck[i] == false) {
                this.wishListCheck.splice(i, 1, singleproductlistslug.id);
                this.util.addToWishlist(singleproductlistslug.slug); //ad to wishlist
                //console.log("added to wislist")
            }
            setTimeout(function () {
                _this.myWishlistWithoutCheck();
            }, 2000);
        }
        else {
            localStorage.setItem("tempListSlug", JSON.stringify(singleproductlistslug));
            localStorage.setItem("tempListLocation", i);
            //console.log("tempListSlug",localStorage.getItem("tempListSlug") , singleproductlistslug)
            this.navCtrl.navigateForward(['/login', { pushedFrom: "productListWishlist" }]);
        }
        this.util.dismissLoader();
    };
    ListPage.prototype.addToCart = function (singleProduct) {
        //console.log('tempListSlugCart', singleProduct.slug)
        localStorage.setItem('tempListSlugCart', singleProduct.slug);
        if (localStorage.getItem('loginDataKKart') != null) {
            this.postDataAddtoCart(singleProduct.slug);
        }
        else {
            this.navCtrl.navigateForward(['/login', { pushedFrom: "productList" }]);
        }
    };
    ListPage.prototype.postDataAddtoCart = function (singleProductSlug) {
        var _this = this;
        //console.log("To Add to Cart")
        var myData = JSON.stringify({
            slug: singleProductSlug,
            quentity: 1
        });
        //console.log("Your myData: ", myData);
        this.util.presentLoading3();
        this.util.getTypeDetailsWithAuth('carts/addtocart.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            //console.log("Your Cart data: ", result);
            _this.data = result;
            //console.log(this.data)
            if (_this.data.success) {
                _this.util.myCartlist();
                _this.util.showToast(_this.data.data);
            }
            else {
                _this.util.showToast(_this.data.data);
            }
        }, function (error) {
            _this.util.dismissLoader();
            _this.util.showToast('Server error occured. Try again.');
        });
        this.util.dismissLoader();
    };
    ListPage.prototype.continueShopping = function () {
        this.navCtrl.navigateRoot('/home');
    };
    ListPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            // this.items = this.items.filter((item) => {
            //   return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            // })
            //console.log('val:: ', val);
        }
    };
    ListPage.prototype.submitSearch = function (ev) {
        // Reset items back to all of the items
        //console.log('evev:: ', ev);
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            // this.items = this.items.filter((item) => {
            //   return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            // })
            //console.log('val:: ', val);
            this.pageSearch = 1;
            this.productlist = [];
            this.getSearchProductListData();
        }
    };
    ListPage.prototype.getSearchProductListData = function () {
        var _this = this;
        var myData = JSON.stringify({
            "category_id": this.categoryId,
            "sub_category_id": this.subCategoryId,
            "type_id": this.type_id,
            "search": this.searchText
        });
        //console.log("Your myData: ", myData);
        if (this.pageSearch == 1) {
            this.util.presentLoading();
        }
        this.util.getTypeDetails('products/productList.json?page=' + this.pageSearch, myData).subscribe(function (result) {
            _this.util.dismissLoader();
            if (_this.pageSearch == 1) {
                _this.util.dismissLoader();
            }
            _this.data = result;
            //console.log(this.data)
            if (_this.data.success) {
                _this.util.dismissLoader();
                if (localStorage.getItem('loginDataKKart') != null) {
                    _this.myWishlist();
                }
                if (_this.pageSearch == 1) {
                    _this.productlist = _this.data.data.product;
                }
                else {
                    var arrNewRecord = _this.data.data.product;
                    var otherWay = _this.productlist.concat(arrNewRecord);
                    _this.productlist = otherWay;
                }
                if (_this.productlist.length == 0) {
                    _this.isProductList = false;
                }
                else {
                    _this.isProductList = true;
                }
                //console.log("searched product list", this.productlist, this.isProductList)
                _this.productTotal = _this.data.paging.count;
                if (_this.productlist.length == _this.productTotal) {
                    _this.infiniteScroll.disabled = true;
                }
                _this.pageSearch += 1;
                if (_this.productlist.length > 0) {
                    for (var i = 0; i < _this.productlist.length; i++) {
                        //console.log("isLoadisLoad: ", this.productlist[i]["isLoad"]);
                        if (_this.productlist[i]["isLoad"] != true) {
                            _this.productlist[i]["isLoad"] = false;
                        }
                    }
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
    ListPage.prototype.onCancel = function (ev) {
        this.searchText = '';
        this.isSearch = false;
        this.pageSearch = 1;
        this.page = 1;
        this.productlist = [];
        this.getProductListData();
    };
    ListPage.prototype.toCart = function () {
        if (localStorage.getItem('loginDataKKart') != null) {
            this.navCtrl.navigateForward('/cart');
        }
        else {
            this.navCtrl.navigateForward(['/login', { pushedFrom: "CartIcon" }]);
        }
    };
    ListPage.prototype.goBack = function () {
        if (this.pushedFromSubCat == "Home") {
            this.navCtrl.navigateBack('/home');
        }
        else if (this.pushedFromSubCat == "Category") {
            this.navCtrl.navigateBack('/product-category');
        }
        else if (this.pushedFromSubCat == "autoSearch") {
            this.navCtrl.navigateBack('/auto-search');
        }
        else {
            this.navCtrl.navigateBack('/home');
        }
    };
    ListPage.prototype.tabBarList = function () {
        this.navCtrl.navigateRoot('/list');
    };
    ListPage.prototype.tabBarHome = function () {
        this.navCtrl.navigateRoot('/home');
    };
    ListPage.prototype.tabBarPolicy = function () {
        this.navCtrl.navigateRoot('/privacy-policy');
    };
    ListPage.prototype.tabBarContacts = function () {
        this.navCtrl.navigateRoot('/contact');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
    ], ListPage.prototype, "infiniteScroll", void 0);
    ListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.page.html */ "./src/app/list/list.page.html"),
            styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/list/list.page.scss")]
        }),
        __metadata("design:paramtypes", [_api_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], ListPage);
    return ListPage;
}());



/***/ })

}]);
//# sourceMappingURL=list-list-module.js.map