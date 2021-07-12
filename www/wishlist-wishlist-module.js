(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wishlist-wishlist-module"],{

/***/ "./src/app/wishlist/wishlist.module.ts":
/*!*********************************************!*\
  !*** ./src/app/wishlist/wishlist.module.ts ***!
  \*********************************************/
/*! exports provided: WishlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPageModule", function() { return WishlistPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _wishlist_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wishlist.page */ "./src/app/wishlist/wishlist.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _wishlist_page__WEBPACK_IMPORTED_MODULE_5__["WishlistPage"]
    }
];
var WishlistPageModule = /** @class */ (function () {
    function WishlistPageModule() {
    }
    WishlistPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_wishlist_page__WEBPACK_IMPORTED_MODULE_5__["WishlistPage"]]
        })
    ], WishlistPageModule);
    return WishlistPageModule;
}());



/***/ }),

/***/ "./src/app/wishlist/wishlist.page.html":
/*!*********************************************!*\
  !*** ./src/app/wishlist/wishlist.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button style=\"color: #FFCC23\"></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n            Wish List\n        </ion-title>\n\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n        <ion-row *ngIf=\"isWishlist===true\">\n            <ion-col size=\"6\" *ngFor=\"let wishlistList of wishlistLists; let i = index\">\n                <ion-card style=\"margin: 0;\">\n                    <div class=\"lstBtnGrp\">\n                        <label style=\"background-color: #FFCC23;color: white;border-radius: 2px;padding: 1px;\">{{wishlistList.discount_percentage}} %</label>\n                        <button color=\"light\" (click)=\"presentAlertConfirm(wishlistList)\" style=\"right: -70px;background: transparent;\">\n                            <ion-icon slot=\"icon-only\" name=\"trash\" style=\"color: #0000A0\"></ion-icon>\n                        </button>\n                    </div>\n\n                    <ion-img (click)=\"details(wishlistList)\" src=\"{{wishlistList.product.photo}}\"></ion-img>\n                    <div class=\"rating\">\n                        <span>\n                          <!-- <ion-col class=\"left\" size=\"6\"> -->\n                            <ion-item class=\"star\" *ngIf=\"ratingStar=='5'\" lines=\"none\">\n                              <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                              <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                              <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                              <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                              <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                            </ion-item>\n                            <ion-item class=\"star\" *ngIf=\"ratingStar=='4'\" lines=\"none\">\n                              <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                              <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                              <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                              <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                              <ion-icon name=\"star-outline\"></ion-icon>\n                            </ion-item>\n                            <ion-item class=\"star\" *ngIf=\"ratingStar=='3'\" lines=\"none\">\n                              <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                              <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                              <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                              <ion-icon name=\"star-outline\"></ion-icon>\n                              <ion-icon name=\"star-outline\"></ion-icon>\n                            </ion-item>\n                            <ion-item class=\"star\" *ngIf=\"ratingStar=='2'\" lines=\"none\">\n                              <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                              <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                              <ion-icon name=\"star-outline\"></ion-icon>\n                              <ion-icon name=\"star-outline\"></ion-icon>\n                              <ion-icon name=\"star-outline\"></ion-icon>\n                            </ion-item>\n                            <ion-item class=\"star\" *ngIf=\"ratingStar=='1'\" lines=\"none\">\n                              <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                              <ion-icon name=\"star-outline\"></ion-icon>\n                              <ion-icon name=\"star-outline\"></ion-icon>\n                              <ion-icon name=\"star-outline\"></ion-icon>\n                              <ion-icon name=\"star-outline\"></ion-icon>\n                            </ion-item>\n                            <ion-item class=\"star\" *ngIf=\"ratingStar=='0'\" lines=\"none\">\n                              <ion-icon name=\"star-outline\"></ion-icon>\n                              <ion-icon name=\"star-outline\"></ion-icon>\n                              <ion-icon name=\"star-outline\"></ion-icon>\n                              <ion-icon name=\"star-outline\"></ion-icon>\n                              <ion-icon name=\"star-outline\"></ion-icon>\n                            </ion-item>\n                            <ion-item class=\"star\" lines=\"none\">\n                                <ion-icon name=\"star-outline\"></ion-icon>\n                                <ion-icon name=\"star-outline\"></ion-icon>\n                                <ion-icon name=\"star-outline\"></ion-icon>\n                                <ion-icon name=\"star-outline\"></ion-icon>\n                                <ion-icon name=\"star-outline\"></ion-icon>\n                              </ion-item>\n                          <!-- </ion-col> -->\n                        </span>\n                      </div>\n                    <ion-card-header (click)=\"details(wishlistList)\">\n                        <ion-card-subtitle>{{wishlistList.product.name | slice:0:20}}...</ion-card-subtitle>\n                        <ion-row>\n                            <ion-col style=\"text-align: left;\" *ngIf=\"wishlistList.product.in_stock == true\" size=\"6\">\n                                <span class=\"stk instk\">In Stock</span>\n                            </ion-col>\n                            <ion-col style=\"text-align: left;\" *ngIf=\"wishlistList.product.in_stock == false\" size=\"6\">\n                                <span class=\"stk outstk\">Out of Stock</span>\n                            </ion-col>\n                            <ion-col style=\"text-align: right;\" size=\"6\">\n                                <span class=\"stkPrc\">Rs. {{wishlistList.product.actual_price}}</span>\n                            </ion-col>\n                        </ion-row>\n                        <!-- <div clas=\"nrmlwrp\">\n                            <div class=\"w-50 flt py-10\"><span class=\"stk instk\" *ngIf=\"wishlistList.product.in_stock == true\">In Stock</span></div>\n                            <div class=\"w-50 flt py-10\"><span class=\"stk outstk\" *ngIf=\"wishlistList.product.in_stock == false\">Out of Stock</span></div>\n                            <div class=\"w-50 flt py-10\" style=\"text-align: right;\"><span class=\"stkPrc\">Rs. {{wishlistList.product.actual_price}}</span>\n                            </div>\n                        </div> -->\n                    </ion-card-header>\n                    <div>\n                        <!-- <ion-button color=\"light\" (click)=\"presentAlertConfirm(wishlistList)\">\n                            <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                        </ion-button> -->\n                        <ion-button class=\"addtoCrt\" expand=\"full\"  (click)=\"postDataAddtoCart(wishlistList)\">\n                            Buy Now\n                          </ion-button>\n                        <!-- <ion-button color=\"light\" (click)=\"postDataAddtoCart(wishlistList)\">\n                            <ion-icon slot=\"icon-only\" name=\"cart\"></ion-icon>\n                        </ion-button> -->\n                    </div>\n\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <ion-card style=\"text-align:center;margin-top:50% \" *ngIf=\"isWishlist===false\">\n        <ion-card-content>\n            No Wishlist Created\n            <button style=\"margin-top:10px\" ion-button color=\"dark\" icon-start full (click)=\"continueShopping()\">\n                Continue Shopping\n            </button>\n        </ion-card-content>\n    </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/wishlist/wishlist.page.scss":
/*!*********************************************!*\
  !*** ./src/app/wishlist/wishlist.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stk {\n  font-size: 10px;\n  font-weight: bold; }\n\n.instk {\n  color: green; }\n\n.outstk {\n  color: red; }\n\n.stkPrc {\n  font-size: 11px;\n  font-weight: bold;\n  display: inline-block; }\n\n.nrmlwrp {\n  overflow: hidden; }\n\n.flt {\n  float: left; }\n\n.w-50 {\n  width: 50%; }\n\n.py-10 {\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n.lstBtnGrp * {\n  font-size: 16px;\n  position: relative; }\n\n.lstBtnGrp .icon {\n  font-size: 16px;\n  color: gainsboro; }\n\n.lstBtnGrp .button {\n  position: absolute;\n  top: 5px; }\n\n.grey-bg {\n  background-color: #eeeeee; }\n\n.item-inner {\n  padding-right: 0 !important; }\n\n.item-inner ion-label.label {\n    margin-top: 0; }\n\n.price {\n  background: #000;\n  padding: 3px 7px;\n  border-radius: 8px;\n  color: #fefefe;\n  font-size: 1.4rem;\n  display: inline-block; }\n\n.price .old-price {\n    color: #848383;\n    text-decoration: line-through;\n    padding: 0 5px;\n    font-size: 1.2rem; }\n\n.price .old-price i.fa {\n      color: #848383;\n      font-size: 1.2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWF2ZXJzd2ViL0Rlc2t0b3AvU21hcnRLYXJ0SHlicmlkL3NyYy9hcHAvd2lzaGxpc3Qvd2lzaGxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxVQUFVLEVBQUE7O0FBRWQ7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLFdBQVcsRUFBQTs7QUFFZjtFQUNJLFVBQVUsRUFBQTs7QUFFZDtFQUNJLGlCQUFpQjtFQUNqQixvQkFBb0IsRUFBQTs7QUFFeEI7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdwQjtFQVVJLGtCQUFrQjtFQUNsQixRQUFRLEVBQUE7O0FBR1o7RUFDSSx5QkFBeUIsRUFBQTs7QUFFN0I7RUFDSSwyQkFBMkIsRUFBQTs7QUFEL0I7SUFHUSxhQUFhLEVBQUE7O0FBU3JCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixxQkFBcUIsRUFBQTs7QUFOekI7SUFRUSxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCxpQkFBaUIsRUFBQTs7QUFYekI7TUFhWSxjQUFjO01BQ2QsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC93aXNobGlzdC93aXNobGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Rre1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5pbnN0a3tcbiAgICBjb2xvcjogZ3JlZW47XG59XG4ub3V0c3Rre1xuICAgIGNvbG9yOiByZWQ7XG59XG4uc3RrUHJje1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ubnJtbHdycHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmZsdHtcbiAgICBmbG9hdDogbGVmdDtcbn1cbi53LTUwe1xuICAgIHdpZHRoOiA1MCU7XG59XG4ucHktMTB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4ubHN0QnRuR3JwICp7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5sc3RCdG5HcnAgLmljb257XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiBnYWluc2Jvcm87XG59XG5cbi5sc3RCdG5HcnAgLmJ1dHRvbntcbiAgICAvL3dpZHRoOiA0MCU7XG4gICAgLy9tYXJnaW46IDA7XG4gICAgLy9yaWdodDogLTMwcHg7XG4gICAgLy9ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgLy9iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAvL2JvcmRlci1yYWRpdXM6IDA7XG4gICAgLy9ib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEwOTgwMzkyMTU2ODYyNzQ1KTtcblxuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNXB4O1xufVxuXG4uZ3JleS1iZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbn1cbi5pdGVtLWlubmVyIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgaW9uLWxhYmVsLmxhYmVsIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG59XG4vLyBpb24tY2FyZC1jb250ZW50LmNhcmQtY29udGVudCB7XG4vLyAgICAgcGFkZGluZzogOHB4O1xuLy8gICAgIGgyIHtcbi8vICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuLy8gICAgIH1cbi8vIH1cbi5wcmljZSB7XG4gICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICBwYWRkaW5nOiAzcHggN3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBjb2xvcjogI2ZlZmVmZTtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgLm9sZC1wcmljZSB7XG4gICAgICAgIGNvbG9yOiAjODQ4MzgzO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICBpLmZhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjODQ4MzgzO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/wishlist/wishlist.page.ts":
/*!*******************************************!*\
  !*** ./src/app/wishlist/wishlist.page.ts ***!
  \*******************************************/
/*! exports provided: WishlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPage", function() { return WishlistPage; });
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var WishlistPage = /** @class */ (function () {
    function WishlistPage(util, menuCtrl, events, navCtrl, alertController) {
        this.util = util;
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        if (localStorage.getItem('loginDataKKart') != null) {
            this.isWishlist = true;
            this.myWishlist();
        }
        else {
            this.isWishlist = false;
        }
    }
    WishlistPage.prototype.ionViewWillEnter = function () {
        console.log("viewwillentercalling");
        this.menuCtrl.enable(true);
        //this.pageDetails = { 'showMenu': true, 'showBack': false, 'showButtons': false, 'title': 'My Wishlist', 'prevPage': '' };
        //this.showMenu(this.pageDetails);
    };
    WishlistPage.prototype.showMenu = function (pageDetails) {
        console.log('User created!');
        this.events.publish('showMenu', pageDetails, Date.now());
    };
    WishlistPage.prototype.ngOnInit = function () {
    };
    WishlistPage.prototype.myWishlist = function () {
        var _this = this;
        var myData = JSON.stringify({});
        console.log("Your myData: ", myData);
        this.util.presentLoading();
        this.util.getTypeDetailsWithAuth('users/wishlist.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            console.log("Your data: ", result);
            _this.data = result;
            console.log(_this.data.data.wishlist);
            if (_this.data.success) {
                _this.wishlistLists = _this.data.data.wishlist;
                if (_this.wishlistLists.length == 0) {
                    _this.isWishlist = false;
                }
                else {
                    _this.isWishlist = true;
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
    WishlistPage.prototype.presentAlertConfirm = function (singleWishlist) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: 'Are you sure to delete this record ?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Yes',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        //this.deleteFromWishlist(singleWishlist);
                                        _this.util.deleteFromWishlist(singleWishlist.id);
                                        setTimeout(function () {
                                            _this.myWishlist();
                                        }, 2000);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WishlistPage.prototype.postDataAddtoCart = function (singleWishlist) {
        var _this = this;
        console.log("To Add to Cart", singleWishlist);
        var myData = JSON.stringify({
            slug: singleWishlist.product.slug,
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
    WishlistPage.prototype.continueShopping = function () {
        this.navCtrl.navigateRoot('/home');
    };
    WishlistPage.prototype.details = function (productListSingle) {
        localStorage.setItem('singleProduct', JSON.stringify(productListSingle));
        var navigationExtras = {
            state: {
                from: 'wishlist',
                parms: productListSingle,
            }
        };
        this.navCtrl.navigateForward('/details', navigationExtras);
    };
    WishlistPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! ./wishlist.page.html */ "./src/app/wishlist/wishlist.page.html"),
            styles: [__webpack_require__(/*! ./wishlist.page.scss */ "./src/app/wishlist/wishlist.page.scss")]
        }),
        __metadata("design:paramtypes", [_api_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], WishlistPage);
    return WishlistPage;
}());



/***/ })

}]);
//# sourceMappingURL=wishlist-wishlist-module.js.map