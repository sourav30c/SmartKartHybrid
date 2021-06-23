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

module.exports = ".stk {\n  font-size: 10px;\n  font-weight: bold; }\n\n.instk {\n  color: green; }\n\n.outstk {\n  color: red; }\n\n.stkPrc {\n  font-size: 11px;\n  font-weight: bold;\n  display: inline-block; }\n\n.nrmlwrp {\n  overflow: hidden; }\n\n.flt {\n  float: left; }\n\n.w-50 {\n  width: 50%; }\n\n.py-10 {\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n.lstBtnGrp * {\n  font-size: 16px;\n  position: relative; }\n\n.lstBtnGrp .icon {\n  font-size: 16px;\n  color: gainsboro; }\n\n.lstBtnGrp .button {\n  position: absolute;\n  top: 5px; }\n\n.instk[_ngcontent-c2] {\n  color: green;\n  font-size: 12px; }\n\n.outstk[_ngcontent-c1] {\n  color: red;\n  font-size: 12px; }\n\n.oldPrice {\n  text-decoration: line-through;\n  color: rgba(0, 0, 0, 0.6);\n  display: inline-block;\n  margin-right: 15px; }\n\n.backIcon {\n  font-size: 28px;\n  color: 226; }\n\n.addtoCrt {\n  background: transparent;\n  position: relative;\n  border-radius: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YXAvRGVza3RvcC9pb25pYyBQcm9qZWN0L3BwL1NtYXJ0LUNhcnQgMi9zcmMvYXBwL2xpc3QvbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLFVBQVUsRUFBQTs7QUFFZDtFQUNJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksV0FBVyxFQUFBOztBQUVmO0VBQ0ksVUFBVSxFQUFBOztBQUVkO0VBQ0ksaUJBQWlCO0VBQ2pCLG9CQUFvQixFQUFBOztBQUV4QjtFQUNJLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBVUksa0JBQWtCO0VBQ2xCLFFBQVEsRUFBQTs7QUFHWjtFQUNJLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxlQUFlO0VBQ2YsVUFBNEIsRUFBQTs7QUFHaEM7RUFDSSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGlzdC9saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGt7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmluc3Rre1xuICAgIGNvbG9yOiBncmVlbjtcbn1cbi5vdXRzdGt7XG4gICAgY29sb3I6IHJlZDtcbn1cbi5zdGtQcmN7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5ucm1sd3Jwe1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZmx0e1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuLnctNTB7XG4gICAgd2lkdGg6IDUwJTtcbn1cbi5weS0xMHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5sc3RCdG5HcnAgKntcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmxzdEJ0bkdycCAuaWNvbntcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IGdhaW5zYm9ybztcbn1cblxuLmxzdEJ0bkdycCAuYnV0dG9ue1xuICAgIC8vd2lkdGg6IDQwJTtcbiAgICAvL21hcmdpbjogMDtcbiAgICAvL3JpZ2h0OiAtMzBweDtcbiAgICAvL2JveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAvL2JhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC8vYm9yZGVyLXJhZGl1czogMDtcbiAgICAvL2JvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTA5ODAzOTIxNTY4NjI3NDUpO1xuXG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1cHg7XG59XG5cbi5pbnN0a1tfbmdjb250ZW50LWMyXSB7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm91dHN0a1tfbmdjb250ZW50LWMxXSB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4ub2xkUHJpY2V7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uYmFja0ljb257XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGNvbG9yOiBibHVlKCRjb2xvcjogIzIwMGFlMik7XG59XG5cbi5hZGR0b0NydHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufSJdfQ== */"

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
            _this.getProductListData();
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
        //alert(1)
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
        //alert(2)
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
        //alert(3)
        //console.log("wishlist data check", singleproductlistslug, this.wishListCheck , i)
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