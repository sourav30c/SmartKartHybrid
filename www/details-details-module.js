(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-details-module"],{

/***/ "./src/app/details/details.module.ts":
/*!*******************************************!*\
  !*** ./src/app/details/details.module.ts ***!
  \*******************************************/
/*! exports provided: DetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details.page */ "./src/app/details/details.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_5__["DetailsPage"]
    }
];
var DetailsPageModule = /** @class */ (function () {
    function DetailsPageModule() {
    }
    DetailsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_details_page__WEBPACK_IMPORTED_MODULE_5__["DetailsPage"]]
        })
    ], DetailsPageModule);
    return DetailsPageModule;
}());



/***/ }),

/***/ "./src/app/details/details.page.html":
/*!*******************************************!*\
  !*** ./src/app/details/details.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" (click)=\"goBack()\" >\n      <ion-icon name=\"arrow-back\" class=\"backIcon\" style=\"color: #FFCC23\"></ion-icon>\n    </ion-buttons>\n    <ion-title>\n          Product Details\n        </ion-title>\n    <!-- <ion-img style=\"max-width: 70px;\" src=\"/assets/images/logo.png\"></ion-img> -->\n    <ion-buttons slot=\"secondary\">\n      <!-- <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"notifications-outline\"></ion-icon>\n      </ion-button> -->\n      <ion-button (click)=\"toCart()\">\n        <ion-icon slot=\"icon-only\" name=\"cart\" style=\"color: #FFCC23\"></ion-icon>\n        <span class=\"badge badge-assertive\" style=\"color: black;\">{{util.cartCount}}</span>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <ion-content *ngIf=\"productImage.length > 0\"> -->\n<ion-content>\n  <ion-slides *ngIf=\"productImage.length > 0\"  pager=\"true\">\n    <ion-slide *ngFor=\"let productImage of productImage; let i = index\">\n        <ion-card class=\"welcome-card\">\n           <img [src]=\"productImage || '/assets/images/p1.jpg'\">\n            <ion-card-header>\n            </ion-card-header>\n        </ion-card>\n    </ion-slide>\n</ion-slides>\n\n  <ion-grid *ngIf=\"isProductDetails==true\">\n    <ion-row>\n      <ion-col>\n        <ion-text>\n          <h2 class=\"pName\">{{name}}</h2>\n        </ion-text>\n        <span *ngIf=\"productTag != ''\" style=\"background-color: yellow;border-radius: 2px;padding-left: 2px;padding-right: 2px;color: darkgreen;\">\n          {{productTag}}\n        </span>\n        <div class=\"rating\" (click)=\"toRatingPage()\">\n          <span>\n            <!-- <ion-col class=\"left\" size=\"6\"> -->\n              <ion-item class=\"star\" *ngIf=\"ratingStar=='5'\" lines=\"none\">\n                <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n              </ion-item>\n              <ion-item class=\"star\" *ngIf=\"ratingStar=='4'\" lines=\"none\">\n                <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                <ion-icon name=\"star-outline\"></ion-icon>\n              </ion-item>\n              <ion-item class=\"star\" *ngIf=\"ratingStar=='3'\" lines=\"none\">\n                <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                <ion-icon name=\"star-outline\"></ion-icon>\n                <ion-icon name=\"star-outline\"></ion-icon>\n              </ion-item>\n              <ion-item class=\"star\" *ngIf=\"ratingStar=='2'\" lines=\"none\">\n                <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                <ion-icon name=\"star-outline\"></ion-icon>\n                <ion-icon name=\"star-outline\"></ion-icon>\n                <ion-icon name=\"star-outline\"></ion-icon>\n              </ion-item>\n              <ion-item class=\"star\" *ngIf=\"ratingStar=='1'\" lines=\"none\">\n                <ion-icon name=\"star\" style=\"color: #FFCC23\"></ion-icon>\n                <ion-icon name=\"star-outline\"></ion-icon>\n                <ion-icon name=\"star-outline\"></ion-icon>\n                <ion-icon name=\"star-outline\"></ion-icon>\n                <ion-icon name=\"star-outline\"></ion-icon>\n              </ion-item>\n              <ion-item class=\"star\" *ngIf=\"ratingStar=='0'\" lines=\"none\">\n                <ion-icon name=\"star-outline\"></ion-icon>\n                <ion-icon name=\"star-outline\"></ion-icon>\n                <ion-icon name=\"star-outline\"></ion-icon>\n                <ion-icon name=\"star-outline\"></ion-icon>\n                <ion-icon name=\"star-outline\"></ion-icon>\n              </ion-item>\n            <!-- </ion-col>  *ngIf=\"this.rating_count_details.length != 0\" -->\n          </span>\n          <span>\n            {{ratingCount}} ratings, {{reviewCount}} reviews\n          </span>\n        </div>\n\n        <div class=\"Pprice\">\n          <span class=\"crPrice\">₹ {{offer_price}}\n          </span>\n          \n          <span class=\"oldPrice\" *ngIf=\"actual_price!=''\">₹ {{actual_price}}</span>\n          <span class=\"offPrice\" *ngIf=\"discount_percentage!=0\">Save {{discount_percentage}} %</span>\n          <!-- <p style=\"font-size: small;\">Delivery Charge - {{delivery_charge}} /- </p> -->\n\n          <ion-col style=\"text-align: left;\" *ngIf=\"total_quantity!='0'\" size=\"6\">\n            <span class=\"stk instk\" >In Stock</span>\n          </ion-col>\n          <ion-col style=\"text-align: left;\" *ngIf=\"total_quantity=='0'\" size=\"6\">\n            <span class=\"stk outstk\">Out of Stock</span>\n          </ion-col>\n        </div>\n\n\n\n        <div class=\"Pprice\" *ngIf=\"arrColorName.length != '0'\">\n          <span class=\"crPrice\">{{arrfilterType1[0]}}\n          </span>\n          <ion-col size=\"4\" *ngFor=\"let arrColorName of arrColorName; let i = index\">\n            <ion-button ion-button id=\"{{i}}\" [ngClass]=\"i==this.buttonClicked1 ? 'pincodeButton': 'pincodeButton2'\" (click)=\"changeProduct(i)\">{{arrColorName}}</ion-button>\n          </ion-col>\n        </div>\n\n        <!-- <div class=\"Pprice\" *ngIf=\"arrColorName2.length != '0'\">\n          <span class=\"crPrice\">{{arrfilterType2[0]}}\n          </span>\n          <ion-col size=\"4\" *ngFor=\"let arrColorName2 of arrColorName2; let i = index\">\n            <ion-button class=\"pincodeButton\" (click)=\"changeProduct2(i)\">{{arrColorName2}}</ion-button>\n          </ion-col>\n        </div> -->\n\n        <div class=\"Pprice\" *ngIf=\"arrColorName2.length != '0'\">\n          <span class=\"crPrice\">{{arrfilterType2[0]}}\n          </span>\n          <ion-col *ngFor=\"let arrColorName2 of arrColorName2; let i = index\">\n            <ion-button id=\"{{i}}\" [ngClass]=\"i==this.buttonClicked2 ? 'pincodeButton': 'pincodeButton2'\" (click)=\"changeProduct2(i)\">{{arrColorName2}}</ion-button>\n          </ion-col>\n        </div>\n\n\n\n        <div>\n          <ion-label position=\"stacked\">Check Pincode</ion-label>\n          <ion-row>\n            <ion-col size=\"8\">\n              <ion-input class=\"item-input\" type=\"text\" [(ngModel)]=\"pincode\"></ion-input>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-button class=\"pincodeButton3\" (click)=\"checkPincode(pincode)\">Check</ion-button>\n            </ion-col>\n          </ion-row>\n        </div>\n        <ion-item *ngIf=\"isDelivery===true\">\n          <p style=\"color: darkgreen;\">Delivery option Available</p>\n        </ion-item>\n        <ion-item *ngIf=\"isDelivery===false\">\n          <p style=\"color: firebrick;\">Delivery option not Available</p>\n        </ion-item>\n        <!-- <div class=\"\">\n          <ion-button *ngIf=\"total_quantity!='0'\" class=\"addtoCrt\" expand=\"full\"  (click)=\"buyNow()\">\n            <ion-icon slot=\"start\" name=\"cart\"></ion-icon>\n            Buy Now\n          </ion-button>\n          <ion-button *ngIf=\"total_quantity!='0'\" class=\"addtoCrt\" expand=\"full\"  (click)=\"addToCart()\">\n            <ion-icon slot=\"start\" name=\"cart\"></ion-icon>\n            Add to Cart\n          </ion-button>\n        </div> -->\n        <div>\n          <ion-button *ngIf=\"total_quantity!='0'\" class=\"addtoWshLst\" expand=\"full\" color=\"light\" (click)=\"addToWishlist()\">\n            <ion-icon slot=\"start\" name=\"heart-empty\"></ion-icon>\n            Add to Wishlist\n          </ion-button>\n        </div>\n        <ion-text>\n          <h4>Product Details</h4>\n          <p>{{introduction}}</p>\n          <ion-item *ngFor=\"let productSpecification of productSpecification;\">\n            <p style=\"font-size: small;\">{{productSpecification.Name}} - {{productSpecification.Value}}</p>\n          </ion-item>\n\n        </ion-text>\n\n      </ion-col>\n      <!-- <div class=\"\">\n        <ion-button class=\"addtoWshLst\" color=\"light\" (click)=\"addToWishlist()\">\n          <ion-icon slot=\"start\" name=\"heart-empty\"></ion-icon>\n          Add to Wishlist\n        </ion-button>\n        <ion-button class=\"addtoCrt\" (click)=\"addToCart()\">\n          <ion-icon slot=\"start\" name=\"cart\"></ion-icon>\n          Add to Cart\n        </ion-button>\n      </div> -->\n    </ion-row>\n  </ion-grid>\n  <ion-toolbar class=\"forSecHed mb-0\">\n    <h3>Related Product</h3>\n    <!-- <ion-buttons slot=\"secondary\">\n      <ion-button color=\"medium\">\n        view all\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\" *ngFor=\"let relatedProduct of relatedProduct; let i = index\">\n        <ion-card style=\"margin: 0;\">\n          <div class=\"lstBtnGrp\">\n            <label style=\"background-color: #FFCC23;color: white;border-radius: 2px;\">{{relatedProduct.discount}} %</label>\n            <button color=\"light\" (click)=\"addToWishlist2(relatedProduct,i)\" style=\"right: -40px;background: transparent;\">\n              <ion-icon slot=\"icon-only\" name=\"heart-empty\" *ngIf=\"wishListCheck[i] !== relatedProduct.product_id\"></ion-icon>\n              <ion-icon slot=\"icon-only\" name=\"heart\" *ngIf=\"wishListCheck[i] === relatedProduct.product_id\" style=\"color: #0000A0\"></ion-icon>\n            </button>\n        </div>\n\n          <ion-img src=\"{{relatedProduct.product.photo}}\" (click)=\"relateProductToDetails(relatedProduct)\" style=\"height: 128px;width: 100%;\"></ion-img>\n\n          <ion-card-header (click)=\"relateProductToDetails(relatedProduct)\" style=\"height: 135px;\">\n            <ion-card-subtitle>{{relatedProduct.product.name | slice:0:20}}</ion-card-subtitle>\n            <ion-row>\n              <ion-col style=\"text-align: left;\" *ngIf=\"relatedProduct.product.total_quantity!='0'\" size=\"6\">\n                <span class=\"stk instk\">In Stock</span>\n              </ion-col>\n              <ion-col style=\"text-align: left;\" *ngIf=\"relatedProduct.product.total_quantity=='0'\" size=\"6\">\n                <span class=\"stk outstk\">Out of Stock</span>\n              </ion-col>\n              <ion-col style=\"text-align: right;\" size=\"6\">\n                <span class=\"stkPrc\">Rs. {{relatedProduct.product.offer_price}}</span>\n              </ion-col>\n            </ion-row>\n          </ion-card-header>\n          \n          <div>\n            <!-- <ion-button color=\"light\" (click)=\"addToWishlist2(relatedProduct,i)\">\n              <ion-icon slot=\"icon-only\" name=\"heart-empty\" *ngIf=\"wishListCheck[i] !== relatedProduct.product_id\"></ion-icon>\n              <ion-icon slot=\"icon-only\" name=\"heart\" *ngIf=\"wishListCheck[i] === relatedProduct.product_id\" style=\"color: #0000A0\"></ion-icon>\n            </ion-button>\n            <ion-button color=\"light\" *ngIf=\"relatedProduct.product.in_stock == true\" (click)=\"addToCart2(relatedProduct)\">\n                <ion-icon slot=\"icon-only\" name=\"cart\"></ion-icon>\n            </ion-button> -->\n            <ion-button class=\"addtoCrt\" expand=\"full\" *ngIf=\"relatedProduct.product.total_quantity!='0'\" (click)=\"addToCart2(relatedProduct)\">\n              <!-- <ion-icon slot=\"icon-only\" style=\"color:gainsboro;\" name=\"cart\"></ion-icon> -->\n              Add To Cart\n          </ion-button>\n\n        </div>\n\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer *ngIf=\"total_quantity!='0'\">\n  <ion-toolbar text-center>\n    <ion-col size=\"6\">\n      <ion-button (click)=\"buyNow()\" style=\"width: 125px;\"> Buy Now\n    </ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button (click)=\"addToCart()\" style=\"width: 125px;\"> Add to Cart\n    </ion-button>\n    </ion-col>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/details/details.page.scss":
/*!*******************************************!*\
  !*** ./src/app/details/details.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hasFix {\n  padding-bottom: 50px; }\n\n.pName {\n  font-size: 18px;\n  margin: 0 0 10px; }\n\n.rating {\n  color: #686868;\n  font-size: 12px; }\n\n.ratingNo {\n  display: inline-block;\n  background: green;\n  color: #fff;\n  padding: 4px;\n  border-radius: 4px;\n  margin-right: 5px; }\n\n.Pprice {\n  margin: 10px 0; }\n\n.crPrice {\n  font-size: 22px;\n  display: inline-block;\n  margin-right: 10px; }\n\n.oldPrice {\n  text-decoration: line-through;\n  color: rgba(0, 0, 0, 0.6);\n  display: inline-block;\n  margin-right: 15px; }\n\n.offPrice {\n  color: #FFCC23; }\n\n.unitP {\n  font-size: 14px;\n  float: right;\n  width: 50px;\n  padding-left: 5px; }\n\n.nrmlwrp {\n  overflow: hidden; }\n\n.flt {\n  float: left; }\n\n.w-50 {\n  width: 50%; }\n\n.py-10 {\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n.forSecHed {\n  height: 44px !important;\n  min-height: auto !important; }\n\n.forSecHed * {\n  font-size: 14px !important;\n  text-transform: capitalize !important;\n  height: 20px !important;\n  min-height: auto !important; }\n\n.stk {\n  font-size: 10px;\n  font-weight: bold; }\n\n.instk {\n  color: green; }\n\n.outstk {\n  color: red; }\n\n.stkPrc {\n  font-size: 11px;\n  font-weight: bold;\n  display: inline-block; }\n\n.PdActins {\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  z-index: 1111;\n  background-color: #fff;\n  padding: 5px 0;\n  text-align: center; }\n\n.PdActins ion-button {\n  width: 48%;\n  margin: 0 2px; }\n\n.addtoWshLst {\n  position: relative;\n  border: solid .5px grey;\n  color: gray; }\n\n.addtoCrt {\n  background: transparent;\n  position: relative;\n  border-radius: 5px; }\n\n.backIcon {\n  font-size: 28px;\n  color: 226; }\n\n.item-input {\n  padding: 5px;\n  border: solid .5px grey;\n  border-radius: 6px; }\n\n.pincodeButton {\n  position: relative;\n  top: -6px;\n  color: #FFCC23;\n  --background: #e95e28; }\n\n.pincodeButton2 {\n  position: relative;\n  top: -6px;\n  color: aqua; }\n\n.pincodeButton3 {\n  position: relative;\n  width: 70px;\n  top: -6px; }\n\n.instk[_ngcontent-c3] {\n  color: green;\n  font-size: 14px; }\n\n.outstk[_ngcontent-c3] {\n  color: red;\n  font-size: 14px; }\n\n.lstBtnGrp * {\n  font-size: 16px;\n  position: relative; }\n\n.lstBtnGrp .button {\n  position: absolute;\n  top: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWF2ZXJzd2ViL0Rlc2t0b3AvU21hcnRLYXJ0SHlicmlkL3NyYy9hcHAvZGV0YWlscy9kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFRLG9CQUFtQixFQUFBOztBQUUzQjtFQUNJLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxjQUFjO0VBQ2QsZUFBZSxFQUFBOztBQUVuQjtFQUNJLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQVMsY0FBYyxFQUFBOztBQUN2QjtFQUNJLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQVUsY0FBYyxFQUFBOztBQUN4QjtFQUNJLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLFdBQVcsRUFBQTs7QUFFZjtFQUNJLFVBQVUsRUFBQTs7QUFFZDtFQUNJLGlCQUFpQjtFQUNqQixvQkFBb0IsRUFBQTs7QUFFeEI7RUFDSSx1QkFBdUI7RUFDdkIsMkJBQTJCLEVBQUE7O0FBRS9CO0VBQ0ksMEJBQTBCO0VBQzFCLHFDQUFxQztFQUNyQyx1QkFBdUI7RUFDdkIsMkJBQTJCLEVBQUE7O0FBRS9CO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxVQUFVLEVBQUE7O0FBRWQ7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLGVBQWU7RUFDZixXQUFXO0VBQ1gsU0FBUztFQUNULE9BQU87RUFDUCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxVQUFVO0VBQ1YsYUFBYSxFQUFBOztBQUVqQjtFQUNJLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsV0FBVyxFQUFBOztBQUVmO0VBQ0ksdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxlQUFlO0VBQ2YsVUFBNEIsRUFBQTs7QUFHaEM7RUFDSSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQjtFQUVsQixTQUFRO0VBRVIsY0FBYztFQUdkLHFCQUFhLEVBQUE7O0FBR2pCO0VBQ0ksa0JBQWtCO0VBRWxCLFNBQVE7RUFFUixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVTtFQUNWLFNBQVEsRUFBQTs7QUFJWjtFQUNJLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBRXRCO0VBUUksa0JBQWtCO0VBQ2xCLFFBQVEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMvZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGFzRml4e3BhZGRpbmctYm90dG9tOjUwcHg7fVxuXG4ucE5hbWV7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbjogMCAwIDEwcHg7XG59XG4ucmF0aW5ne1xuICAgIGNvbG9yOiAjNjg2ODY4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5yYXRpbmdOb3tcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZDogZ3JlZW47XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5QcHJpY2V7IG1hcmdpbjogMTBweCAwO31cbi5jclByaWNle1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLm9sZFByaWNle1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5vZmZQcmljZXtjb2xvcjogI0ZGQ0MyMzt9XG4udW5pdFB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6NXB4O1xufVxuXG4ubnJtbHdycHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmZsdHtcbiAgICBmbG9hdDogbGVmdDtcbn1cbi53LTUwe1xuICAgIHdpZHRoOiA1MCU7XG59XG4ucHktMTB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uZm9yU2VjSGVke1xuICAgIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDsgXG59XG4uZm9yU2VjSGVkICp7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgICBtaW4taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7IFxufVxuLnN0a3tcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaW5zdGt7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuLm91dHN0a3tcbiAgICBjb2xvcjogcmVkO1xufVxuLnN0a1ByY3tcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLlBkQWN0aW5ze1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxMTExO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogNXB4IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLlBkQWN0aW5zIGlvbi1idXR0b257XG4gICAgd2lkdGg6IDQ4JTtcbiAgICBtYXJnaW46IDAgMnB4O1xufVxuLmFkZHRvV3NoTHN0e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXI6IHNvbGlkIC41cHggZ3JleTtcbiAgICBjb2xvcjogZ3JheTtcbn1cbi5hZGR0b0NydHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYmFja0ljb257XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGNvbG9yOiBibHVlKCRjb2xvcjogIzIwMGFlMik7XG59XG5cbi5pdGVtLWlucHV0IHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyOiBzb2xpZCAuNXB4IGdyZXk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4ucGluY29kZUJ1dHRvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8vd2lkdGg6NzBweDtcbiAgICB0b3A6LTZweDtcbiAgICAvL2JvcmRlcjogc29saWQgLjVweCAjRkZDQzIzO1xuICAgIGNvbG9yOiAjRkZDQzIzO1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjpzYWRkbGVicm93bjtcbiAgICAvL0BhdC1yb290OiB2YXIocmVkKTtcbiAgICAtLWJhY2tncm91bmQ6ICNlOTVlMjg7XG59XG5cbi5waW5jb2RlQnV0dG9uMiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8vd2lkdGg6NzBweDtcbiAgICB0b3A6LTZweDtcbiAgICAvL2JvcmRlcjogc29saWQgLjVweCBhcXVhO1xuICAgIGNvbG9yOiBhcXVhO1xufVxuXG4ucGluY29kZUJ1dHRvbjMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDo3MHB4O1xuICAgIHRvcDotNnB4O1xufVxuXG5cbi5pbnN0a1tfbmdjb250ZW50LWMzXSB7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm91dHN0a1tfbmdjb250ZW50LWMzXSB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4ubHN0QnRuR3JwICp7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5sc3RCdG5HcnAgLmJ1dHRvbntcbiAgICAvL3dpZHRoOiA1MCU7XG4gICAgLy9tYXJnaW46IDA7XG4gICAgLy9ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgLy9iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAvL2JvcmRlci1yYWRpdXM6IDA7XG4gICAgLy9ib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEwOTgwMzkyMTU2ODYyNzQ1KTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/details/details.page.ts":
/*!*****************************************!*\
  !*** ./src/app/details/details.page.ts ***!
  \*****************************************/
/*! exports provided: DetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPage", function() { return DetailsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/utility.service */ "./src/app/api/utility.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/deeplinks/ngx */ "./node_modules/@ionic-native/deeplinks/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { DeeplinksOriginal } from '@ionic-native/deeplinks';

var DetailsPage = /** @class */ (function () {
    function DetailsPage(util, alertController, events, navCtrl, route, modalController, activeroute, menuCtrl, 
    //private deeplinks: DeeplinksOriginal,
    deeplinks, platform) {
        this.util = util;
        this.alertController = alertController;
        this.events = events;
        this.navCtrl = navCtrl;
        this.route = route;
        this.modalController = modalController;
        this.activeroute = activeroute;
        this.menuCtrl = menuCtrl;
        this.deeplinks = deeplinks;
        this.platform = platform;
        this.ratingCount = 0;
        this.reviewCount = 0;
        this.productImage = [];
        this.name = '';
        this.offer_price = '';
        this.actual_price = '';
        this.delivery_charge = '';
        this.introduction = '';
        this.slugProduct = '';
        this.totalReview = '';
        this.pushedFrom = '';
        this.previousPage = '';
        this.productPhoto = '';
        this.pincode = '';
        this.vendorId = '';
        this.subCategoryId = "";
        this.wishListCheck = [];
        this.isProductDetails = false;
        this.quantity = "1";
        this.quantityCheck = "0";
        this.total_quantity = "";
        this.arrVariationFilter = [];
        this.arrColorName = [];
        this.arrVariationFilter2 = [];
        this.arrColorName2 = [];
        this.varposition = 0;
        this.arrfilterType1 = [];
        this.arrfilterType2 = [];
        this.isClick1 = false;
        this.isClick2 = false;
        this.buttonClicked1 = 0;
        this.buttonClicked2 = 0;
        this.productTag = "";
        this.pushedFrom = this.activeroute.snapshot.paramMap.get("pushedFrom");
        if (this.pushedFrom == 'loginCart') {
            this.productDetails = JSON.parse(localStorage.getItem('singleProduct'));
            this.slugProduct = this.productDetails.slug;
            this.postDataAddtoCart();
        }
        else if (this.pushedFrom == 'loginWishlist') {
            this.productDetails = JSON.parse(localStorage.getItem('singleProduct'));
            this.slugProduct = this.productDetails.slug;
            this.addToWishlist();
        }
        else {
            if (this.route.getCurrentNavigation().extras.state) {
                this.pushedFrom = this.route.getCurrentNavigation().extras.state.from;
                this.productDetails = this.route.getCurrentNavigation().extras.state.parms ? this.route.getCurrentNavigation().extras.state.parms : "";
                this.subCategoryId = this.route.getCurrentNavigation().extras.state.parms2 ? this.route.getCurrentNavigation().extras.state.parms2 : "";
                //console.log("pdfffffff", this.productDetails, this.pushedFrom)
                if (this.pushedFrom == 'list') {
                    this.slugProduct = this.productDetails.slug;
                    //this.vendorId = this.productDetails.user.vendor_id
                }
                else if (this.pushedFrom == 'Home') {
                    this.slugProduct = this.productDetails.slug;
                    //this.vendorId = this.productDetails.user.vendor_id
                }
                else if (this.pushedFrom == 'wishlist') {
                    this.slugProduct = this.productDetails.product.slug;
                    //this.vendorId = this.productDetails.vendor_id
                }
                else if (this.pushedFrom == 'toplist') {
                    this.slugProduct = this.productDetails.slug;
                    //this.vendorId = this.productDetails.vendor_id
                }
                else if (this.pushedFrom == 'cartlist') {
                    this.slugProduct = this.productDetails.Products.slug;
                }
                else if (this.pushedFrom == 'add-review') {
                    this.slugProduct = this.productDetails;
                }
                else if (this.pushedFrom == 'autoSearch') {
                    this.slugProduct = this.productDetails.slug;
                }
                if (this.pushedFrom == 'loginRelatedWishlist') {
                    //console.log("wishlist callingt", localStorage.getItem('tempListSlug'))
                    this.slugProduct = localStorage.getItem('tempListSlug');
                    this.slugLocation = localStorage.getItem('tempListLocation');
                    this.addToWishlist2(this.slugProduct, this.slugLocation);
                }
            }
        }
        if (this.pushedFrom == 'loginRelatedCart') {
            this.postDataAddtoCart2(localStorage.getItem('tempListSlugCart'));
        }
        if (localStorage.getItem('loginDataKKart') != null) {
            this.vendorId = JSON.parse(localStorage.getItem('loginDataKKart')).id;
        }
        else {
            this.vendorId = "";
        }
        console.log("pushed from check", this.pushedFrom);
        //console.log("product details", this.productDetails, this.slugProduct ,this.vendorId)
    }
    DetailsPage.prototype.ionViewWillEnter = function () {
        //console.log("viewwillentercalling")
        //this.previousPage = '/home'
        this.menuCtrl.enable(false);
        //this.pageDetails = { 'showMenu': false, 'showBack': true, 'showButtons': false, 'title': 'Details', 'prevPage': 'list' };
        //this.showMenu(this.pageDetails);
        //this.productDetails = this.route.getCurrentNavigation().extras.state.parms;
        //console.log("product details in view will enter", this.productDetails)
        this.getProductDetailsData();
        //console.log("localStorage.getItem('loginDataKKart')", localStorage.getItem('loginDataKKart'))
        if (localStorage.getItem('loginDataKKart') != null) {
            this.util.myCartlist();
            this.myWishlistWithoutCheck();
        }
    };
    DetailsPage.prototype.showMenu = function (pageDetails) {
        //console.log('User created!')
        this.events.publish('showMenu', pageDetails, Date.now());
    };
    DetailsPage.prototype.ngOnInit = function () {
        //this.getProductDetailsData()
    };
    DetailsPage.prototype.isClicked = function () {
        //return this.isClick;
    };
    // onClick(){
    //  this.isClick=!this.isClick;
    // }
    DetailsPage.prototype.sharePageDeeplink = function () {
    };
    DetailsPage.prototype.changeProduct = function (i) {
        //console.log(i)
        this.buttonClicked1 = i;
        this.isClick1 = !this.isClick1;
        this.varposition = i;
        this.slugProduct = this.arrVariationFilter[i].slug;
        this.getProductDetailsData();
    };
    DetailsPage.prototype.changeProduct2 = function (i) {
        this.buttonClicked2 = i;
        this.isClick2 = !this.isClick2;
        //console.log(i)
        this.slugProduct = this.arrVariationFilter2[0][i].slug;
        this.getProductDetailsData();
    };
    DetailsPage.prototype.getProductDetailsData = function () {
        var _this = this;
        var myData = JSON.stringify({
            slug: this.slugProduct ? this.slugProduct : "renew-honor-4a-smartphone-champagne-gold-8gb-internal-memory-2gb-ram-screen-size-5-inches-2200-mah-battery"
        });
        //console.log("Your myData: ", myData);
        //this.util.presentLoading3();
        this.util.presentLoading();
        this.util.getTypeDetails('products/productDetails.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            //console.log("Your data: ", result);
            _this.data = result;
            _this.arrColorName = [];
            _this.arrVariationFilter = [];
            _this.arrVariationFilter2 = [];
            _this.arrColorName2 = [];
            _this.productImage = [];
            console.log("ProductDetails", _this.data);
            if (_this.data.success) {
                _this.isProductDetails = true;
                _this.productDetailsFromApi = _this.data.data.product;
                _this.total_quantity = _this.productDetailsFromApi.total_quantity;
                _this.reviewListData = _this.data.data.review_list;
                _this.rating_count_details = _this.data.data.count_rating_1_2_3_4_5;
                //console.log("this.productDetailsFromApi.discount_percentage" , this.productDetailsFromApi.discount_percentage)
                if (_this.productDetailsFromApi.discount_percentage != 'inf') {
                    _this.discount_percentage = _this.productDetailsFromApi.discount_percentage;
                }
                else {
                    _this.discount_percentage = 0;
                }
                if (_this.productDetailsFromApi.product_tag != null) {
                    _this.productTag = _this.productDetailsFromApi.product_tag;
                }
                else {
                    _this.productTag = "";
                }
                _this.name = _this.productDetailsFromApi.name;
                _this.productImage.push(_this.productDetailsFromApi.photo);
                _this.quantityCheck = _this.productDetailsFromApi.minimum_order;
                if (_this.data.data.product.single != null) {
                    _this.arrVariationFilter = _this.data.data.product.single;
                    //console.log("this.arrVariationFilter", this.arrVariationFilter)
                    for (var i = 0; i < _this.arrVariationFilter.length; i++) {
                        _this.arrColorName.push(_this.arrVariationFilter[i].filter_option.name);
                        _this.arrfilterType1.push(_this.arrVariationFilter[i].filter.name);
                    }
                }
                //console.log("this.arrVariationFilter", this.arrVariationFilter)
                if (_this.arrVariationFilter.length != 0 && _this.arrVariationFilter[_this.varposition].double != null) {
                    _this.arrVariationFilter2.push(_this.arrVariationFilter[_this.varposition].double);
                }
                //console.log("this.arrVariationFilter2", this.arrVariationFilter2)
                if (_this.arrVariationFilter2.length != 0) {
                    //console.log("this.arrVariationFilter2 varposition",this.varposition, this.arrVariationFilter2[0])
                    for (var i = 0; i < _this.arrVariationFilter2[0].length; i++) {
                        //console.log("this.arrVariationFilter", this.arrVariationFilter2[0][i].filter_option)
                        _this.arrColorName2.push(_this.arrVariationFilter2[0][i].filter_option_news.name);
                        _this.arrfilterType2.push(_this.arrVariationFilter2[0][i].filter_news.name);
                    }
                }
                for (var i = 0; i < _this.productDetailsFromApi.product_images.length; i++) {
                    //console.log("i",this.productDetailsFromApi.product_images[i])
                    _this.productImage.push(_this.productDetailsFromApi.product_images[i].image);
                }
                //this.productImage.push(this.productDetailsFromApi.product_images)
                //this.productImage = this.productDetailsFromApi.product_images
                //console.log("Product Image", this.productImage , this.productDetailsFromApi.product_images.length)
                _this.offer_price = _this.productDetailsFromApi.offer_price;
                _this.actual_price = _this.productDetailsFromApi.actual_price ? _this.productDetailsFromApi.actual_price : '';
                _this.delivery_charge = _this.productDetailsFromApi.delivery_charge;
                _this.relatedProduct = _this.data.data.related_products;
                _this.introduction = _this.productDetailsFromApi.introduction;
                _this.productSpecification = _this.data.data.product_specification;
                //this.totalReview = this.data.data.total_review
                _this.productPhoto = _this.productDetailsFromApi.photo;
                if (_this.productDetailsFromApi.in_stock == false || _this.productDetailsFromApi.total_quantity == '0') {
                    _this.isInStock = false;
                }
                else {
                    _this.isInStock = true;
                }
                //this.isInStock = this.productDetailsFromApi.in_stock
                //console.log("this.rating_count_details.length", this.rating_count_details.length)
                if (_this.rating_count_details.length > 0) {
                    _this.ratingCount = _this.rating_count_details.length;
                    var sum = 0;
                    for (var i = 0; i < _this.rating_count_details.length; i++) {
                        sum = sum + Number(_this.rating_count_details[i].rating);
                    }
                    _this.ratingStar = Number(sum) / Number(_this.ratingCount);
                }
                else {
                    _this.ratingCount = 0;
                    _this.ratingStar = 0;
                }
                if (_this.reviewListData.length > 0) {
                    _this.reviewCount = _this.reviewListData.length;
                }
                else {
                    _this.reviewCount = 0;
                }
                //console.log("this.ratingStar",this.ratingStar)
                if (localStorage.getItem('loginDataKKart') != null) {
                    _this.myWishlist();
                }
                //console.log("ratiing check", this.ratingCount , sum, this.ratingStar)
            }
            else {
                //this.util.showToast(this.data.message);
            }
        }, function (error) {
            _this.util.dismissLoader();
            _this.util.showToast('Product is not available in server. Please try again.');
        });
        //this.util.dismissLoader();
    };
    DetailsPage.prototype.loadImageSlider = function (i) {
        this.productImage[i]["isLoad"] = true;
    };
    DetailsPage.prototype.checkPincode = function () {
        // if (localStorage.getItem('loginDataKKart') == null) {
        //   this.util.showToast('Please login first to check your pincode availability');
        // } else if (this.pincode == '') {
        //   this.util.showToast('Please enter your pincode');
        // } else {
        //   this.checkPincodePostData()
        // }
        this.sharePageDeeplink();
    };
    DetailsPage.prototype.checkPincodePostData = function () {
        var _this = this;
        var myData = JSON.stringify({
            pincode: this.pincode,
            vendor_id: this.vendorId
        });
        //console.log("Your myData: ", myData);
        this.util.presentLoading3();
        this.util.getTypeDetails('products/checkpin.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            //console.log("Your data: ", result);
            _this.data = result;
            //console.log(this.data)
            if (_this.data.success) {
                _this.isDelivery = true;
            }
            else {
                _this.isDelivery = false;
                _this.util.showToast(_this.data.message);
            }
        }, function (error) {
            _this.util.dismissLoader();
            _this.util.showToast('Server error occured. Try again.');
        });
    };
    DetailsPage.prototype.addToWishlist = function () {
        if (localStorage.getItem('loginDataKKart') != null) {
            this.util.addToWishlist(this.productDetails.slug);
        }
        else {
            this.navCtrl.navigateForward(['/login', { pushedFrom: "productDetailsWishlist" }]);
        }
    };
    DetailsPage.prototype.relateProductToDetails = function (singleRelatedProduct) {
        var _this = this;
        //console.log(singleRelatedProduct)
        this.slugProduct = singleRelatedProduct.product.slug;
        setTimeout(function () {
            _this.getProductDetailsData();
            _this.content.scrollToTop(400);
        }, 1000);
    };
    DetailsPage.prototype.addToCart = function () {
        if (localStorage.getItem('loginDataKKart') != null) {
            this.postDataAddtoCart();
        }
        else {
            this.navCtrl.navigateForward(['/login', { pushedFrom: "productDetailsCart" }]);
        }
    };
    DetailsPage.prototype.buyNow = function () {
        if (localStorage.getItem('loginDataKKart') != null) {
            this.postDataAddtoCartBuyNow();
        }
        else {
            this.navCtrl.navigateForward(['/login', { pushedFrom: "productDetailsBuy" }]);
        }
    };
    DetailsPage.prototype.postDataAddtoCart = function () {
        //console.log("quantity Check", this.quantityCheck)
        var _this = this;
        if (Number(this.quantity) >= Number(this.quantityCheck)) {
            var myData = JSON.stringify({
                slug: this.slugProduct,
                quentity: this.quantity
            });
            //console.log("Your myData: ", myData);
            this.util.presentLoading3();
            this.util.getTypeDetailsWithAuth('carts/addtocart.json', myData).subscribe(function (result) {
                _this.util.dismissLoader();
                //console.log("Your Cart data: ", result);
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
        }
        else {
            this.util.showToast("Please purchase minimum quantity-" + this.quantityCheck);
        }
    };
    DetailsPage.prototype.postDataAddtoCartBuyNow = function () {
        var _this = this;
        var myData = JSON.stringify({
            slug: this.slugProduct,
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
                //this.util.showToast(this.data.data);
                _this.navCtrl.navigateForward('/cart');
            }
            else {
                //this.util.showToast(this.data.data);
                //if (this.util.data == "Already in your cart."){
                _this.navCtrl.navigateForward('/cart');
                //}
            }
        }, function (error) {
            _this.util.dismissLoader();
            _this.util.showToast('Server error occured. Try again.');
        });
        this.util.dismissLoader();
    };
    DetailsPage.prototype.toRatingPage = function () {
        var navigationExtras = {
            state: {
                from: 'details',
                parms: this.reviewListData,
                params2: this.slugProduct,
                params3: this.vendorId
            }
        };
        if (localStorage.getItem('loginDataKKart') == null) {
            localStorage.setItem('reviewProdDetails', JSON.stringify(navigationExtras));
        }
        this.navCtrl.navigateForward('/review-list', navigationExtras);
    };
    DetailsPage.prototype.goBack = function () {
        //console.log(JSON.parse(localStorage.getItem('loginDataKKart')))
        this.events.publish('user:login');
        if (this.pushedFrom == "list") {
            //this.navCtrl.navigateBack('/list')
            this.navCtrl.navigateBack(['/list', { subCat: this.subCategoryId }]);
        }
        else if (this.pushedFrom == "toplist") {
            this.navCtrl.navigateBack('/top-selling-product-list');
        }
        else if (this.pushedFrom == "wishlist") {
            this.navCtrl.navigateBack('/wishlist');
        }
        else if (this.pushedFrom == "cartlist") {
            this.navCtrl.navigateBack('/cart');
        }
        else if (this.pushedFrom == "Home") {
            this.navCtrl.navigateBack('/home');
        }
        else if (this.pushedFrom == "autoSearch") {
            //this.navCtrl.navigateBack('/auto-search')
            this.navCtrl.navigateBack('/home');
        }
        else {
            this.navCtrl.navigateBack('/list');
        }
    };
    DetailsPage.prototype.toCart = function () {
        if (localStorage.getItem('loginDataKKart') != null) {
            this.navCtrl.navigateForward('/cart');
        }
        else {
            this.navCtrl.navigateForward(['/login', { pushedFrom: "CartIcon" }]);
        }
    };
    /*Related product AddToCart n Wishlist work*/
    DetailsPage.prototype.myWishlist = function () {
        var _this = this;
        this.wishListCheck = [];
        var myData = JSON.stringify({});
        this.util.getTypeDetailsWithAuth('users/wishlist.json', myData).subscribe(function (result) {
            _this.data = result;
            //console.log("wish list result", this.data)
            if (_this.data.success) {
                _this.wishlistLists = _this.data.data.wishlist;
                for (var i = 0; i < _this.relatedProduct.length; i++) {
                    if (_this.wishlistLists.length > 0) {
                        for (var j = 0; j < _this.wishlistLists.length; j++) {
                            if (_this.relatedProduct[i].product_id == _this.wishlistLists[j].product_id) {
                                _this.wishListCheck[i] = _this.relatedProduct[i].product_id;
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
            }
            else {
                _this.util.showToast(_this.data.message);
            }
        }, function (error) {
            _this.util.dismissLoader();
            _this.util.showToast('Server error occured. Try again.');
        });
    };
    DetailsPage.prototype.myWishlistWithoutCheck = function () {
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
                //console.log("wishListListsForId final list", this.wishListListsForId)
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
    DetailsPage.prototype.addToWishlist2 = function (singleproductlistslug, i) {
        var _this = this;
        //console.log("wishlist data check", singleproductlistslug, this.wishListCheck, i)
        var wishlistIdForDelete = "";
        localStorage.setItem("tempListSlug", singleproductlistslug);
        localStorage.setItem("tempListLocation", i);
        if (localStorage.getItem('loginDataKKart') != null) {
            //console.log("this.wishlistLists.length ", this.wishListListsForId, Number(i + 1), this.wishListCheck)
            if (this.wishListCheck[i] == singleproductlistslug.product_id) {
                for (var k = 0; k < this.wishListListsForId.length; k++) {
                    //console.log("delete ids", singleproductlistslug.id, this.wishListListsForId[k].product_id, i, k, this.wishListListsForId[k].id)
                    if (this.wishListListsForId[k].product_id == singleproductlistslug.product_id) {
                        wishlistIdForDelete = this.wishListListsForId[k].id;
                        break;
                    }
                    else {
                        continue;
                    }
                }
                //console.log("xxxxxx", wishlistIdForDelete)
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
            this.navCtrl.navigateForward(['/login', { pushedFrom: "detailsRelatedWishlist" }]);
        }
        this.util.dismissLoader();
    };
    DetailsPage.prototype.addToCart2 = function (singleProduct) {
        //console.log('tempListSlugCart', singleProduct.product.slug)
        localStorage.setItem('tempListSlugCart', singleProduct.product.slug);
        if (localStorage.getItem('loginDataKKart') != null) {
            this.postDataAddtoCart2(singleProduct.product.slug);
        }
        else {
            this.navCtrl.navigateForward(['/login', { pushedFrom: "detailsRelatedCart" }]);
        }
    };
    DetailsPage.prototype.postDataAddtoCart2 = function (singleProductSlug) {
        var _this = this;
        //console.log("To Add to Cart", singleProductSlug)
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
    DetailsPage.prototype.tabBarList = function () {
        this.navCtrl.navigateRoot('/list');
    };
    DetailsPage.prototype.tabBarHome = function () {
        this.navCtrl.navigateRoot('/home');
    };
    DetailsPage.prototype.tabBarPolicy = function () {
        this.navCtrl.navigateRoot('/privacy-policy');
    };
    DetailsPage.prototype.tabBarContacts = function () {
        this.navCtrl.navigateRoot('/contact');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
    ], DetailsPage.prototype, "content", void 0);
    DetailsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.page.html */ "./src/app/details/details.page.html"),
            styles: [__webpack_require__(/*! ./details.page.scss */ "./src/app/details/details.page.scss")]
        }),
        __metadata("design:paramtypes", [_api_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_4__["Deeplinks"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], DetailsPage);
    return DetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=details-details-module.js.map