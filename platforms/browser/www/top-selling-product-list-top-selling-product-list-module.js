(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["top-selling-product-list-top-selling-product-list-module"],{

/***/ "./src/app/top-selling-product-list/top-selling-product-list.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/top-selling-product-list/top-selling-product-list.module.ts ***!
  \*****************************************************************************/
/*! exports provided: TopSellingProductListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopSellingProductListPageModule", function() { return TopSellingProductListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _top_selling_product_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./top-selling-product-list.page */ "./src/app/top-selling-product-list/top-selling-product-list.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _top_selling_product_list_page__WEBPACK_IMPORTED_MODULE_5__["TopSellingProductListPage"]
    }
];
var TopSellingProductListPageModule = /** @class */ (function () {
    function TopSellingProductListPageModule() {
    }
    TopSellingProductListPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_top_selling_product_list_page__WEBPACK_IMPORTED_MODULE_5__["TopSellingProductListPage"]]
        })
    ], TopSellingProductListPageModule);
    return TopSellingProductListPageModule;
}());



/***/ }),

/***/ "./src/app/top-selling-product-list/top-selling-product-list.page.html":
/*!*****************************************************************************!*\
  !*** ./src/app/top-selling-product-list/top-selling-product-list.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n          Today's Deal\n      </ion-title>\n      <ion-buttons slot=\"secondary\">\n          <!-- <ion-button>\n              <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n          </ion-button>\n          <ion-button>\n              <ion-icon slot=\"icon-only\" name=\"notifications-outline\"></ion-icon>\n          </ion-button> -->\n          <ion-button (click)=\"toCart()\">\n              <ion-icon slot=\"icon-only\" name=\"cart\"></ion-icon>\n              <span class=\"badge badge-assertive\" style=\"color: red;\">{{util.cartCount}}</span>\n          </ion-button>\n      </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <!-- <ion-searchbar [placeholder]=\"serachByPlaceholder\" class=\"ion-no-padding\" [(ngModel)]=\"searchText\"\n    showCancelButton=\"always\" cancelButtonText=\"Show All\" (ionInput)=\"getItems($event)\"\n    (ionCancel)=\"onCancel($event)\" (search)=\"submitSearch($event)\">\n  </ion-searchbar> -->\n      <ion-row>\n          <ion-col size=\"12\" *ngFor=\"let productlist of productlist; let i = index\">\n              <ion-card style=\"margin: 0;\">\n                  <!-- <ion-img routerLink=\"/details\" routerDirection=\"forward\" src=\"/assets/images/p1.jpg\"></ion-img> -->\n                  <!-- <ion-img (click)=\"details(productlist)\" src=\"{{productlist.photo}}\"></ion-img> -->\n\n                  <img (click)=\"details(productlist.product)\"\n                      [src]=\"productlist.product.photo\">\n                  <!-- <img *ngIf=\"!productlist.product.isLoad\" src=\"/assets/images/p1.jpg\" (click)=\"details(productlist.product)\"> -->\n\n                  <ion-card-header (click)=\"details(productlist.product)\">\n                      <ion-card-subtitle>{{productlist.product.name | slice:0:20}} ...</ion-card-subtitle>\n                      <ion-row>\n                          <ion-col style=\"text-align: left;\" *ngIf=\"productlist.product.in_stock == true\" size=\"6\">\n                              <span class=\"stk instk\">In Stock</span>\n                          </ion-col>\n                          <ion-col style=\"text-align: left;\" *ngIf=\"productlist.product.in_stock == false\" size=\"6\">\n                              <span class=\"stk outstk\">Out of Stock</span>\n                          </ion-col>\n                          <ion-col style=\"text-align: right;\" size=\"6\">\n                              <span class=\"stkPrc\">Rs. {{productlist.product.actual_price}}</span>\n                          </ion-col>\n                      </ion-row>\n                      <!-- <div clas=\"nrmlwrp\">\n                          <div class=\"w-50 flt py-10\"><span class=\"stk instk\" *ngIf=\"productlist.in_stock == true\">In Stock</span></div>\n                          <div class=\"w-50 flt py-10\"><span class=\"stk outstk\" *ngIf=\"productlist.in_stock == false\">Out of Stock</span></div>\n                          <div class=\"w-50 flt py-10\" style=\"text-align: right;\"><span class=\"stkPrc\">Rs. {{productlist.actual_price}}</span></div>\n                      </div> -->\n                  </ion-card-header>\n                  <div class=\"lstBtnGrp\">\n                      <ion-button color=\"light\" (click)=\"addToWishlist(productlist,i)\">\n                        <ion-icon slot=\"icon-only\" name=\"heart-empty\" *ngIf=\"wishListCheck[i] !== productlist.product_id\"></ion-icon>\n                        <ion-icon slot=\"icon-only\" name=\"heart\" *ngIf=\"wishListCheck[i] === productlist.product_id\" color=\"success\"></ion-icon>\n                      </ion-button>\n                      <ion-button color=\"light\" *ngIf=\"productlist.product.in_stock == true\" (click)=\"addToCart(productlist)\">\n                          <ion-icon slot=\"icon-only\" name=\"cart\"></ion-icon>\n                      </ion-button>\n                      <ion-button color=\"light\" *ngIf=\"productlist.product.in_stock == false\">\n                        <ion-icon slot=\"icon-only\" style=\"color:gainsboro;\" name=\"cart\"></ion-icon>\n                    </ion-button>\n                  </div>\n              </ion-card>\n          </ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar text-center color=\"dark\">\n        <ion-buttons>\n            <ion-button (click)=\"tabBarHome()\">\n                <div class=\"fotricn\">\n                    <ion-icon name=\"home\"></ion-icon>\n                    <ion-label>Home</ion-label>\n                </div>\n            </ion-button>\n            <ion-button (click)=\"tabBarList()\">\n                <div class=\"fotricn\">\n                    <ion-icon name=\"basket\"></ion-icon>\n                    <ion-label>Shop</ion-label>\n                </div>\n            </ion-button>\n            <ion-button (click)=\"tabBarPolicy()\">\n                <div class=\"fotricn\">\n                    <ion-icon name=\"open\"></ion-icon>\n                    <ion-label>Policy</ion-label>\n                </div>\n            </ion-button>\n            <ion-button (click)=\"tabBarContacts()\">\n                <div class=\"fotricnlst\">\n                    <ion-icon name=\"contacts\"></ion-icon>\n                    <ion-label>Contact</ion-label>\n                </div>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/top-selling-product-list/top-selling-product-list.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/top-selling-product-list/top-selling-product-list.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stk {\n  font-size: 10px;\n  font-weight: bold; }\n\n.instk {\n  color: green; }\n\n.outstk {\n  color: red; }\n\n.stkPrc {\n  font-size: 11px;\n  font-weight: bold;\n  display: inline-block; }\n\n.nrmlwrp {\n  overflow: hidden; }\n\n.flt {\n  float: left; }\n\n.w-50 {\n  width: 50%; }\n\n.py-10 {\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n.lstBtnGrp * {\n  font-size: 16px; }\n\n.lstBtnGrp .button {\n  width: 50%;\n  margin: 0;\n  box-shadow: none !important;\n  background: transparent;\n  border-radius: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.109804); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YXAvRGVza3RvcC9Jb25pY19Qcm9qZWN0L2FyY2hpdmUgaW9uaWMgZlByb2plY3Qvb2xkIGFyY2hpdmUgMi9BcmNoaXZlIDIvc3JjL2FwcC90b3Atc2VsbGluZy1wcm9kdWN0LWxpc3QvdG9wLXNlbGxpbmctcHJvZHVjdC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksVUFBVSxFQUFBOztBQUVkO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxXQUFXLEVBQUE7O0FBRWY7RUFDSSxVQUFVLEVBQUE7O0FBRWQ7RUFDSSxpQkFBaUI7RUFDakIsb0JBQW9CLEVBQUE7O0FBRXhCO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLFVBQVU7RUFDVixTQUFTO0VBQ1QsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsNkNBQXdELEVBQUEiLCJmaWxlIjoic3JjL2FwcC90b3Atc2VsbGluZy1wcm9kdWN0LWxpc3QvdG9wLXNlbGxpbmctcHJvZHVjdC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGt7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmluc3Rre1xuICAgIGNvbG9yOiBncmVlbjtcbn1cbi5vdXRzdGt7XG4gICAgY29sb3I6IHJlZDtcbn1cbi5zdGtQcmN7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5ucm1sd3Jwe1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZmx0e1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuLnctNTB7XG4gICAgd2lkdGg6IDUwJTtcbn1cbi5weS0xMHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5sc3RCdG5HcnAgKntcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG4ubHN0QnRuR3JwIC5idXR0b257XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMDk4MDM5MjE1Njg2Mjc0NSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/top-selling-product-list/top-selling-product-list.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/top-selling-product-list/top-selling-product-list.page.ts ***!
  \***************************************************************************/
/*! exports provided: TopSellingProductListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopSellingProductListPage", function() { return TopSellingProductListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/utility.service */ "./src/app/api/utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopSellingProductListPage = /** @class */ (function () {
    function TopSellingProductListPage(util, menuCtrl, events, activeroute, navCtrl) {
        this.util = util;
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.activeroute = activeroute;
        this.navCtrl = navCtrl;
        this.wishListCheck = [];
        this.sliderData = [];
        this.topsellData = [];
        this.recentProductData = [];
        this.categoryData = [];
        this.page = 1;
        this.productTotal = 0;
        this.fixedSectionDelete = false;
        this.slugProduct = "";
        this.searchText = '';
        this.isSearch = false;
        this.pageSearch = 1;
        this.isProductList = true;
        this.count2 = 1;
        this.events.publish('user:login');
        this.pushedFrom = this.activeroute.snapshot.paramMap.get("pushedFrom");
        //this.getProductListData()
        console.log("pushed from", this.pushedFrom);
        if (this.pushedFrom == 'loginWishlist') {
            this.myWishlistWithoutCheck();
        }
        else if (this.pushedFrom == 'loginCartlist') {
            this.postDataAddtoCart(localStorage.getItem('tempListSlugCart'));
        }
    }
    TopSellingProductListPage.prototype.ngOnInit = function () {
        throw new Error("Method not implemented.");
    };
    TopSellingProductListPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true);
        this.pageDetails = { 'showMenu': true, 'showBack': false, 'showButtons': false, 'title': 'Product List', 'prevPage': '' };
        this.showMenu(this.pageDetails);
        this.getProductListData();
        if (localStorage.getItem('loginDataKKart') != null) {
            if (this.pushedFrom != 'loginWishlist') {
                this.myWishlistWithoutCheck();
            }
            this.util.myCartlist();
        }
    };
    TopSellingProductListPage.prototype.showMenu = function (pageDetails) {
        console.log('User created!');
        this.events.publish('showMenu', pageDetails, Date.now());
    };
    TopSellingProductListPage.prototype.getProductListData = function () {
        var _this = this;
        var myData = JSON.stringify({});
        console.log("Your myData: ", myData);
        //this.util.presentLoading();
        if (this.page == 1) {
            this.util.presentLoading();
        }
        this.util.getTypeDetails('sliders/todaydeal.json', myData).subscribe(function (result) {
            //this.util.dismissLoader();
            if (_this.page == 1) {
                _this.util.dismissLoader();
            }
            console.log("Your top data: ", result);
            _this.data = result;
            console.log(_this.data);
            if (_this.data.success) {
                //this.productlist = this.data.data.product
                //console.log("Your list data: ", this.productlist);
                _this.util.dismissLoader();
                if (localStorage.getItem('loginDataKKart') != null) {
                    _this.myWishlist();
                }
                _this.productlist = _this.data.data.adv.advertisement_items;
                if (_this.productlist.length == 0) {
                    _this.isProductList = false;
                }
                else {
                    _this.isProductList = true;
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
    TopSellingProductListPage.prototype.loadImageProduct = function (i, productlist) {
        productlist.product["isLoad"] = true;
        //console.log('productlist:: ', productlist)
    };
    TopSellingProductListPage.prototype.scroll = function (ev) {
        if (ev.detail.scrollTop > 123) {
            this.fixedSectionDelete = true;
        }
        else {
            this.fixedSectionDelete = false;
        }
    };
    TopSellingProductListPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            console.log('Done Load Data Calling');
            event.target.complete();
            _this.getProductListData();
        }, 500);
    };
    TopSellingProductListPage.prototype.details = function (productListSingle) {
        localStorage.setItem('singleProduct', JSON.stringify(productListSingle));
        //localStorage.setItem('singleProduct', productListSingle);
        //this.navCtrl.navigateRoot('/details')
        var navigationExtras = {
            state: {
                from: 'toplist',
                parms: productListSingle,
            }
        };
        this.navCtrl.navigateForward('/details', navigationExtras);
    };
    TopSellingProductListPage.prototype.myWishlistWithoutCheck = function () {
        var _this = this;
        //this.wishListListsForId = []
        var myData = JSON.stringify({});
        //this.util.presentLoading();
        this.util.getTypeDetailsWithAuth('users/wishlist.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            //console.log("Your data: ", result);
            _this.data = result;
            if (_this.data.success) {
                _this.wishListListsForId = _this.data.data.wishlist;
                console.log("wishListListsForId final list", _this.wishListListsForId);
                _this.util.dismissLoader();
            }
            else {
                _this.util.showToast(_this.data.message);
            }
        }, function (error) {
            _this.util.dismissLoader();
            _this.util.showToast('Server error occured. Try again.');
        });
    };
    TopSellingProductListPage.prototype.myWishlist = function () {
        var _this = this;
        this.wishListCheck = [];
        var myData = JSON.stringify({});
        console.log("Your myData: ", myData);
        this.util.getTypeDetailsWithAuth('users/wishlist.json', myData).subscribe(function (result) {
            _this.data = result;
            console.log("wish list result", _this.data);
            if (_this.data.success) {
                _this.wishlistLists = _this.data.data.wishlist;
                for (var i = 0; i < _this.productlist.length; i++) {
                    if (_this.wishlistLists.length > 0) {
                        for (var j = 0; j < _this.wishlistLists.length; j++) {
                            if (_this.productlist[i].product_id == _this.wishlistLists[j].product_id) {
                                _this.wishListCheck[i] = _this.productlist[i].product_id;
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
                console.log("this.wishListCheck", _this.wishListCheck, _this.wishlistLists);
                if (_this.pushedFrom == 'loginWishlist' && _this.count2 == 1) {
                    _this.count2 = _this.count2 + 1;
                    _this.slugProductAny = JSON.parse(localStorage.getItem('tempListSlug'));
                    _this.slugLocation = localStorage.getItem('tempListLocation');
                    console.log("wishlist callingt", localStorage.getItem('tempListSlug'), _this.slugProductAny.slug, _this.slugLocation);
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
    TopSellingProductListPage.prototype.addToWishlist = function (singleproductlistslug, i) {
        var _this = this;
        console.log("wishlist data check", singleproductlistslug, this.wishListCheck, i);
        var wishlistIdForDelete = "";
        if (localStorage.getItem('loginDataKKart') != null) {
            console.log("this.wishlistLists.length ", this.wishListListsForId, Number(i + 1), this.wishListCheck);
            if (this.wishListCheck[i] == singleproductlistslug.product_id) {
                for (var k = 0; k < this.wishListListsForId.length; k++) {
                    console.log("delete ids", singleproductlistslug.id, this.wishListListsForId[k].product_id, i, k, this.wishListListsForId[k].id);
                    if (this.wishListListsForId[k].product_id == singleproductlistslug.product_id) {
                        wishlistIdForDelete = this.wishListListsForId[k].id;
                        break;
                    }
                    else {
                        continue;
                    }
                }
                console.log("xxxxxx", wishlistIdForDelete);
                this.util.deleteFromWishlist(wishlistIdForDelete);
                this.wishListCheck.splice(i, 1, 0);
            }
            else if (this.wishListCheck[i] == false) {
                this.wishListCheck.splice(i, 1, singleproductlistslug.product_id);
                this.util.addToWishlist(singleproductlistslug.product.slug);
            }
            setTimeout(function () {
                _this.myWishlistWithoutCheck();
            }, 2000);
        }
        else {
            localStorage.setItem("tempListSlug", JSON.stringify(singleproductlistslug));
            localStorage.setItem("tempListLocation", i);
            this.navCtrl.navigateForward(['/login', { pushedFrom: "topproductListWishlist" }]);
        }
        this.util.dismissLoader();
    };
    TopSellingProductListPage.prototype.addToCart = function (singleProduct) {
        console.log('tempListSlugCart', singleProduct.product.slug);
        localStorage.setItem('tempListSlugCart', singleProduct.product.slug);
        if (localStorage.getItem('loginDataKKart') != null) {
            this.postDataAddtoCart(singleProduct.product.slug);
        }
        else {
            this.navCtrl.navigateForward(['/login', { pushedFrom: "topproductList" }]);
        }
    };
    TopSellingProductListPage.prototype.postDataAddtoCart = function (singleProductSlug) {
        var _this = this;
        console.log("To Add to Cart");
        var myData = JSON.stringify({
            slug: singleProductSlug,
            quentity: 1
        });
        console.log("Your myData: ", myData);
        this.util.presentLoading3();
        this.util.getTypeDetailsWithAuth('carts/addtocart.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            console.log("Your Cart data: ", result);
            _this.data = result;
            //console.log(this.data)
            if (_this.data.success) {
                _this.util.showToast(_this.data.data);
                _this.util.myCartlist();
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
    TopSellingProductListPage.prototype.toCart = function () {
        if (localStorage.getItem('loginDataKKart') != null) {
            this.navCtrl.navigateForward('/cart');
        }
        else {
            this.navCtrl.navigateForward(['/login', { pushedFrom: "CartIcon" }]);
        }
    };
    TopSellingProductListPage.prototype.tabBarList = function () {
        this.navCtrl.navigateRoot('/list');
    };
    TopSellingProductListPage.prototype.tabBarHome = function () {
        this.navCtrl.navigateRoot('/home');
    };
    TopSellingProductListPage.prototype.tabBarPolicy = function () {
        this.navCtrl.navigateRoot('/privacy-policy');
    };
    TopSellingProductListPage.prototype.tabBarContacts = function () {
        this.navCtrl.navigateRoot('/contact');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
    ], TopSellingProductListPage.prototype, "infiniteScroll", void 0);
    TopSellingProductListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-selling-product-list',
            template: __webpack_require__(/*! ./top-selling-product-list.page.html */ "./src/app/top-selling-product-list/top-selling-product-list.page.html"),
            styles: [__webpack_require__(/*! ./top-selling-product-list.page.scss */ "./src/app/top-selling-product-list/top-selling-product-list.page.scss")]
        }),
        __metadata("design:paramtypes", [_api_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], TopSellingProductListPage);
    return TopSellingProductListPage;
}());



/***/ })

}]);
//# sourceMappingURL=top-selling-product-list-top-selling-product-list-module.js.map