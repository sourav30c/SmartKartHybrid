(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

/***/ "./src/app/cart/cart.module.ts":
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart.page */ "./src/app/cart/cart.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_5__["CartPage"]
    }
];
var CartPageModule = /** @class */ (function () {
    function CartPageModule() {
    }
    CartPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_5__["CartPage"]]
        })
    ], CartPageModule);
    return CartPageModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.page.html":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: #FFCC23\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      My Cart\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid *ngIf=\"isCartList===true\">\n\n    <ion-col size=\"12\" *ngIf=\"isCartList===true\" style=\"top: -10px;\">\n      <div>\n        <ion-label position=\"stacked\">Delivery Charge: <span style=\"color: #0000A0;\"> ??? {{deliveryPrice}}\n        </span></ion-label>\n      </div>\n      <div>\n        <ion-label position=\"stacked\">Subtotal ( {{totalCart}} Items ) : <span style=\"color: #0000A0;\"> ??? {{totalCost}}\n        </span></ion-label>\n      </div>\n      \n      <ion-button shape=\"round\" expand=\"full\" *ngIf=\"isCartList===true\" (click)=\"toBuy()\">\n        Proceed To Buy\n      </ion-button>\n    </ion-col>\n\n    <!-- <ion-card *ngIf=\"isCartList===true\"> -->\n\n    <!-- </ion-card> -->\n\n\n    <ion-row class=\"cartItem\" *ngFor=\"let cartList of cartList; let i = index\">\n      <ion-col size=\"4\">\n        <div class=\"imgwrp\">\n          <ion-img [src]=\"cartList.Products.photo\"></ion-img>\n        </div>\n      </ion-col>\n      <ion-col size=\"8\">\n        <h2 class=\"cName\" (click)=\"details(cartList)\">{{cartList.Products.name | slice:0:20}}</h2>\n        <div class=\"Pprice\" (click)=\"details(cartList)\">\n          <span class=\"crPrice\">??? {{cartList.CartItems.item_net_amount}}\n          </span>\n          <span class=\"oldPrice\">??? {{cartList.UserProducts.actual_price}}</span>\n        </div>\n      </ion-col>\n\n      <!-- <ion-col size=\"8\"> -->\n      <!-- <div class=\"number-field\"> -->\n\n      <!-- <ion-col size=\"4\">\n        <ion-icon class=\"remove\" name=\"remove\" (click)=\"decrement(i,cartList)\"\n          style=\"background-color: red;height: 19px;margin-top: 6px;width: 19px;\">\n        </ion-icon>\n        <input type=\"number\" style=\"width: 30%; text-align: center; height: 20px;margin-top: 6px;\"\n          [(ngModel)]=\"arrQuantity[i]\">\n        <ion-icon class=\"add\" style=\"background-color: green;height: 19px;margin-top: 6px;width: 19px;\" name=\"add\"\n          (click)=\"inrement(i,cartList)\">\n        </ion-icon>\n      </ion-col> -->\n\n      <ion-col size=\"4\">\n        <ion-icon class=\"remove\" name=\"remove\" (click)=\"decrement(i,cartList)\"\n          style=\"background-color: red;height: 16px;width: 16px;color: white;\">\n        </ion-icon>\n        <input type=\"number\" style=\"width: 30%; text-align: center; height: 21px\"\n          [(ngModel)]=\"arrQuantity[i]\">\n        <ion-icon class=\"add\" style=\"background-color: green;height: 16px;width: 16px;color: white;\" name=\"add\"\n          (click)=\"inrement(i,cartList)\">\n        </ion-icon>\n      </ion-col>\n\n      <!-- <ion-col size=\"4\">\n        <button ion-button icon-only clear (click)=\"decrement(i,cartList)\">\n          <ion-icon name=\"remove-circle\" color=\"danger\" style=\"height: 14px;font-size: 14px;\"></ion-icon>\n        </button>\n\n        <input type=\"number\" style=\"width: 30%; text-align: center; height: 18px;margin-top: 6px;\"\n          [(ngModel)]=\"arrQuantity[i]\">\n        <button ion-button icon-only clear (click)=\"inrement(i,cartList)\">\n          <ion-icon name=\"add-circle\" color=\"success\" style=\"height: 14px;font-size: 14px;border-radius: 5px;\">\n          </ion-icon>\n        </button>\n      </ion-col> -->\n\n      <!-- </div> -->\n      <!-- </ion-col> -->\n\n      <ion-col size=\"4\">\n        <div>\n          <ion-button class=\"rmvBtn\" color=\"medium\" fill=\"outline\" expand=\"block\"\n            (click)=\"presentAlertConfirm(cartList)\" style=\"margin-top: -8px;\">\n            Delete</ion-button>\n        </div>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n  <ion-card style=\"text-align:center;margin-top:50% \" *ngIf=\"isCartList===false\">\n    <ion-card-content>\n      Your Cart Is Empty\n      <button style=\"margin-top:10px\" ion-button color=\"dark\" icon-start full (click)=\"continueShopping()\">\n        Continue Shopping\n      </button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n<!-- \n<ion-footer>\n  <ion-toolbar text-center color=\"dark\">\n      <ion-buttons>\n          <ion-button (click)=\"tabBarHome()\">\n              <div class=\"fotricn\">\n                  <ion-icon name=\"home\"></ion-icon>\n                  <ion-label>Home</ion-label>\n              </div>\n          </ion-button>\n          <ion-button (click)=\"tabBarList()\">\n              <div class=\"fotricn\">\n                  <ion-icon name=\"basket\"></ion-icon>\n                  <ion-label>Shop</ion-label>\n              </div>\n          </ion-button>\n          <ion-button (click)=\"tabBarPolicy()\">\n              <div class=\"fotricn\">\n                  <ion-icon name=\"open\"></ion-icon>\n                  <ion-label>Policy</ion-label>\n              </div>\n          </ion-button>\n          <ion-button (click)=\"tabBarContacts()\">\n              <div class=\"fotricnlst\">\n                  <ion-icon name=\"contacts\"></ion-icon>\n                  <ion-label>Contact</ion-label>\n              </div>\n          </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-footer> -->"

/***/ }),

/***/ "./src/app/cart/cart.page.scss":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cartItem {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n  padding-top: 15px; }\n\n.cName {\n  margin: 0 0 5px;\n  font-size: 18px; }\n\n.Pprice {\n  margin: 10px 0; }\n\n.crPrice {\n  font-size: 18px;\n  display: inline-block;\n  margin-right: 10px; }\n\n.oldPrice {\n  text-decoration: line-through;\n  color: rgba(0, 0, 0, 0.6);\n  display: inline-block;\n  margin-right: 15px; }\n\n.offPrice {\n  color: green; }\n\n.unitP {\n  font-size: 14px;\n  float: right;\n  width: 50px;\n  padding: 4px; }\n\n.qty {\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.24);\n  margin-top: 9px;\n  border-radius: 5px;\n  max-width: 70px;\n  margin: 10px auto 3px; }\n\n.imgwrp {\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.35);\n  padding: 1px; }\n\n.tAmnt {\n  margin-top: 13px; }\n\n.rmvBtn.button-outline {\n  --border-width: 1px;\n  --border-color: rgba(0, 0, 0, 0.35);\n  height: 30px;\n  width: 80px; }\n\n.infoC {\n  text-align: right;\n  margin: 10px 0; }\n\n.PdActins {\n  text-align: center;\n  margin-top: 30px; }\n\n.PdActins ion-button {\n  width: 48%;\n  margin: 0 2px; }\n\nion-content ion-label {\n  font-size: 17px;\n  font-weight: 400; }\n\nion-content ion-textarea {\n  border: 1px solid #CCCCCC;\n  padding: 5px;\n  height: 160px;\n  border-radius: 6px; }\n\n.button-outline-md-danger {\n  border-color: gold !important;\n  color: gold !important; }\n\n.button-clear-md-danger {\n  color: gold !important; }\n\n.button-md-danger {\n  color: #fff;\n  background-color: purple !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWF2ZXJzd2ViL0Rlc2t0b3AvU21hcnRLYXJ0SHlicmlkL3NyYy9hcHAvY2FydC9jYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRDQUE0QztFQUM1QyxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUVuQjtFQUFTLGNBQWMsRUFBQTs7QUFDdkI7RUFDSSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGtCQUFrQixFQUFBOztBQUV0QjtFQUFVLFlBQVksRUFBQTs7QUFDdEI7RUFDSSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksdUNBQXVDO0VBQ3ZDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLHVDQUF1QztFQUN2QyxZQUFZLEVBQUE7O0FBRWhCO0VBQVcsZ0JBQWdCLEVBQUE7O0FBRTNCO0VBQ0ksbUJBQWU7RUFDZixtQ0FBZTtFQUNmLFlBQVc7RUFDWCxXQUFVLEVBQUE7O0FBR2Q7RUFDSSxpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxVQUFVO0VBQ1YsYUFBYSxFQUFBOztBQUdqQjtFQUVRLGVBQWU7RUFFZixnQkFBZ0IsRUFBQTs7QUFKeEI7RUFPUSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUEwQjFCO0VBQ0ksNkJBQTZCO0VBQzdCLHNCQUFzQixFQUFBOztBQUUxQjtFQUNJLHNCQUFzQixFQUFBOztBQUUxQjtFQUNJLFdBQVc7RUFDWCxtQ0FBbUMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FydEl0ZW17XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG59XG4uY05hbWV7XG4gICAgbWFyZ2luOiAwIDAgNXB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbi5QcHJpY2V7IG1hcmdpbjogMTBweCAwO31cbi5jclByaWNle1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLm9sZFByaWNle1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5vZmZQcmljZXtjb2xvcjogZ3JlZW47fVxuLnVuaXRQe1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgcGFkZGluZzogNHB4O1xufVxuLnF0eXtcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgbWFyZ2luLXRvcDogOXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXgtd2lkdGg6IDcwcHg7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gM3B4O1xufVxuLmltZ3dycHtcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gICAgcGFkZGluZzogMXB4O1xufVxuLnRBbW50eyAgICBtYXJnaW4tdG9wOiAxM3B4O31cblxuLnJtdkJ0bi5idXR0b24tb3V0bGluZSB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICAtLWJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgICBoZWlnaHQ6MzBweDtcbiAgICB3aWR0aDo4MHB4O1xufVxuXG4uaW5mb0N7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG59XG4uUGRBY3RpbnN7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG4uUGRBY3RpbnMgaW9uLWJ1dHRvbntcbiAgICB3aWR0aDogNDglO1xuICAgIG1hcmdpbjogMCAycHg7XG59XG5cbmlvbi1jb250ZW50e1xuICAgIGlvbi1sYWJlbHtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAvL2NvbG9yOiAjQTdDRjQ2O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cbiAgICBpb24tdGV4dGFyZWF7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIH1cbn1cblxuLy8gLm51bWJlci1maWVsZHtcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgYm9yZGVyLXdpZHRoOiAycHg7XG4vLyAgICAgYm9yZGVyLWNvbG9yOiBibHVlO1xuLy8gICAgIC8vdG9wOiAyMHB4O1xuLy8gICAgIC8vIGxlZnQ6IDVweDtcbi8vICAgICAvLyAuYWRke1xuLy8gICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgLy8gICAgIC8vcmlnaHQ6IDYwcHg7XG4vLyAgICAgLy8gICAgIHRvcDogMHB4O1xuLy8gICAgIC8vICAgICBmb250LXNpemU6IDI0cHg7XG4vLyAgICAgLy8gICAgIGNvbG9yOiAjMDAwO1xuLy8gICAgIC8vIH1cbi8vICAgICAvLyAucmVtb3Zle1xuLy8gICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgLy8gICAgIC8vbGVmdDogNDUlO1xuLy8gICAgIC8vICAgICB0b3A6IDBweDtcbi8vICAgICAvLyAgICAgZm9udC1zaXplOiAyNHB4O1xuLy8gICAgIC8vICAgICBjb2xvcjogIzAwMDtcbi8vICAgICAvLyB9XG4vLyB9XG5cbi5idXR0b24tb3V0bGluZS1tZC1kYW5nZXIge1xuICAgIGJvcmRlci1jb2xvcjogZ29sZCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiBnb2xkICFpbXBvcnRhbnQ7XG59ICAgIFxuLmJ1dHRvbi1jbGVhci1tZC1kYW5nZXIge1xuICAgIGNvbG9yOiBnb2xkICFpbXBvcnRhbnQ7XG59ICAgIFxuLmJ1dHRvbi1tZC1kYW5nZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/cart/cart.page.ts":
/*!***********************************!*\
  !*** ./src/app/cart/cart.page.ts ***!
  \***********************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
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




var CartPage = /** @class */ (function () {
    function CartPage(util, alertController, events, navCtrl, route, modalController, activeroute, menuCtrl) {
        this.util = util;
        this.alertController = alertController;
        this.events = events;
        this.navCtrl = navCtrl;
        this.route = route;
        this.modalController = modalController;
        this.activeroute = activeroute;
        this.menuCtrl = menuCtrl;
        this.totalCart = 0;
        this.totalCost = 0;
        this.deliveryPrice = 0;
        this.couponCode = '';
        this.couponId = '';
        this.discountAmount = 0;
        this.isCouponApplied = false;
        this.quantity = 1;
        this.arrQuantity = [];
        if (localStorage.getItem('loginDataKKart') != null) {
            this.myCartlist();
        }
        else {
            this.isCartList = false;
        }
    }
    CartPage.prototype.ngOnInit = function () {
    };
    CartPage.prototype.ionViewWillEnter = function () {
        //console.log("viewwillentercalling")
        this.menuCtrl.enable(true);
        //this.pageDetails = { 'showMenu': true, 'showBack': false, 'showButtons': false, 'title': 'My Wishlist', 'prevPage': '' };
        //this.showMenu(this.pageDetails);
    };
    CartPage.prototype.showMenu = function (pageDetails) {
        console.log('User created!');
        this.events.publish('showMenu', pageDetails, Date.now());
    };
    CartPage.prototype.myCartlist = function () {
        var _this = this;
        var myData = JSON.stringify({});
        //console.log("Your myData: ", myData);
        this.util.presentLoading();
        this.util.getTypeDetailsWithAuth('carts/getcartitems.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            _this.totalCost = 0;
            _this.deliveryPrice = 0;
            _this.arrQuantity = [];
            console.log("Your cart data: ", result);
            _this.data = result;
            if (_this.data.success) {
                _this.cartList = _this.data.data;
                _this.totalCart = _this.cartList.length;
                if (_this.data.coupon_id == "0") {
                    _this.isCouponApplied = false;
                }
                else {
                    _this.isCouponApplied = true;
                    _this.couponId = _this.data.coupon_id;
                }
                //console.log("this.cartList",this.cartList.length)
                if (_this.cartList.length == 0 || _this.data.success == "2") {
                    _this.isCartList = false;
                }
                else {
                    _this.isCartList = true;
                }
                //console.log("cart list coupon check", this.cartList , this.isCouponApplied)
                var cost = 0;
                if (_this.isCartList == true) {
                    for (var i = 0; i < _this.cartList.length; i++) {
                        cost = cost + Number(_this.cartList[i].CartItems.item_net_amount);
                        //cost = cost + Number(this.cartList[i].UserProducts.offer_price)
                        _this.deliveryPrice = _this.deliveryPrice + Number(_this.cartList[i].UserProducts.delivery_charge * _this.cartList[i].CartItems.quantity);
                        _this.discountAmount = Number(_this.cartList[i].CartItems.discount_amt);
                        //this.arrQuantity.push(1)
                        _this.arrQuantity.push(_this.cartList[i].CartItems.quantity);
                    }
                    _this.totalCost = cost + _this.deliveryPrice;
                    //console.log("Total Cost", this.totalCost)
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
    CartPage.prototype.presentAlertConfirm = function (singleCart) {
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
                                        _this.removeCart(singleCart);
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
    CartPage.prototype.removeCart = function (singleCart) {
        var _this = this;
        var myData = JSON.stringify({
            info_id: singleCart.CartItems.id
        });
        //console.log("Your myData: ", myData);
        this.util.presentLoading();
        this.util.getTypeDetailsWithAuth('carts/deletecartitem.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            //console.log("Your data: ", result);
            _this.data = result;
            if (_this.data.success) {
                //console.log("cart list", this.cartList)
                _this.util.showToast(_this.data.data);
                setTimeout(function () {
                    _this.myCartlist();
                }, 2000);
            }
            else {
                _this.util.showToast(_this.data.message);
            }
        }, function (error) {
            _this.util.dismissLoader();
            _this.util.showToast('Server error occured. Try again.');
        });
    };
    CartPage.prototype.continueShopping = function () {
        this.navCtrl.navigateRoot('/home');
    };
    CartPage.prototype.decrement = function (pos, singleCart) {
        if (this.arrQuantity[pos] > 1) {
            this.arrQuantity[pos] = this.arrQuantity[pos] - 1;
            this.postDataupdateCart(this.arrQuantity[pos], singleCart.CartItems.id);
        }
        // if (this.quantity > 1){
        //   this.quantity = this.quantity - 1
        // }
        //this.postDataupdateCart(this.arrQuantity[pos],singleCart.CartItems.id)
    };
    CartPage.prototype.inrement = function (pos, singleCart) {
        this.arrQuantity[pos] = this.arrQuantity[pos] + 1;
        //this.quantity = this.quantity + 1
        this.postDataupdateCart(this.arrQuantity[pos], singleCart.CartItems.id);
    };
    // updateCart(ev,singleCart){
    //   console.log(ev.detail.value,singleCart)
    //   this.postDataupdateCart(ev.detail.value,singleCart.CartItems.id)
    // }
    CartPage.prototype.postDataupdateCart = function (value, productId) {
        var _this = this;
        console.log("To Add to Cart");
        var myData = JSON.stringify({
            info_id: productId,
            quantity: value
        });
        //console.log("Your myData: ", myData);
        this.util.presentLoading3();
        this.util.getTypeDetailsWithAuth('carts/updateItem.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            //console.log("Your Cart data: ", result);
            _this.data = result;
            //console.log(this.data)
            if (_this.data.success) {
                _this.util.showToast(_this.data.data);
                setTimeout(function () {
                    _this.myCartlist();
                }, 2000);
                //this.util.myCartlist()
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
    CartPage.prototype.toBuy = function () {
        var navigationExtras = {
            state: {
                from: 'cartlist',
                parmsTotal: this.totalCost,
                cartid: this.cartList[0].CartItems.cart_id
            }
        };
        //console.log("navigationExtras",navigationExtras)
        this.navCtrl.navigateForward('/billing-address', navigationExtras);
    };
    CartPage.prototype.redeemCoupon = function () {
        if (this.couponCode == '') {
            this.util.showToast('Please provide coupon code');
        }
        else {
            this.applyCoupon();
        }
    };
    CartPage.prototype.applyCoupon = function () {
        var _this = this;
        var myData = JSON.stringify({
            coupon_code: this.couponCode
        });
        //console.log("Your coupon code myData: ", myData);
        this.util.presentLoading();
        this.util.getTypeDetailsWithAuth('carts/checkcouponcode.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            //console.log("Your couponCode data: ", result);
            _this.data = result;
            if (_this.data.success) {
                _this.util.showToast(_this.data.data.msg);
                //this.isCouponApplied == true
                _this.couponCode = "";
                _this.myCartlist();
            }
            else {
                _this.util.showToast(_this.data.message);
            }
        }, function (error) {
            _this.util.dismissLoader();
            _this.util.showToast('Server error occured. Try again.');
        });
    };
    CartPage.prototype.deleteCoupon = function () {
        var _this = this;
        var myData = JSON.stringify({
            coupon_id: this.couponId
        });
        //console.log("Your coupon code myData: ", myData);
        this.util.presentLoading();
        this.util.getTypeDetailsWithAuth('carts/deletecouponcode.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            //console.log("Your delete couponCode data: ", result);
            _this.data = result;
            if (_this.data.success) {
                _this.util.showToast(_this.data.data);
                //this.isCouponApplied = false
                _this.myCartlist();
            }
            else {
                _this.util.showToast(_this.data.data);
            }
        }, function (error) {
            _this.util.dismissLoader();
            _this.util.showToast('Server error occured. Try again.');
        });
    };
    CartPage.prototype.details = function (cartList) {
        //localStorage.setItem('singleProduct', JSON.stringify(productListSingle));
        var navigationExtras = {
            state: {
                from: 'cartlist',
                parms: cartList,
            }
        };
        this.navCtrl.navigateForward('/details', navigationExtras);
    };
    CartPage.prototype.tabBarList = function () {
        this.navCtrl.navigateRoot('/list');
    };
    CartPage.prototype.tabBarHome = function () {
        this.navCtrl.navigateRoot('/home');
    };
    CartPage.prototype.tabBarPolicy = function () {
        this.navCtrl.navigateRoot('/privacy-policy');
    };
    CartPage.prototype.tabBarContacts = function () {
        this.navCtrl.navigateRoot('/contact');
    };
    CartPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.page.html */ "./src/app/cart/cart.page.html"),
            styles: [__webpack_require__(/*! ./cart.page.scss */ "./src/app/cart/cart.page.scss")]
        }),
        __metadata("design:paramtypes", [_api_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], CartPage);
    return CartPage;
}());



/***/ })

}]);
//# sourceMappingURL=cart-cart-module.js.map