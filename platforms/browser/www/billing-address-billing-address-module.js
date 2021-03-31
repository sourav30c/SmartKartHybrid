(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["billing-address-billing-address-module"],{

/***/ "./src/app/billing-address/billing-address.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/billing-address/billing-address.module.ts ***!
  \***********************************************************/
/*! exports provided: BillingAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingAddressPageModule", function() { return BillingAddressPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _billing_address_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./billing-address.page */ "./src/app/billing-address/billing-address.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _billing_address_page__WEBPACK_IMPORTED_MODULE_5__["BillingAddressPage"]
    }
];
var BillingAddressPageModule = /** @class */ (function () {
    function BillingAddressPageModule() {
    }
    BillingAddressPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_billing_address_page__WEBPACK_IMPORTED_MODULE_5__["BillingAddressPage"]]
        })
    ], BillingAddressPageModule);
    return BillingAddressPageModule;
}());



/***/ }),

/***/ "./src/app/billing-address/billing-address.page.html":
/*!***********************************************************!*\
  !*** ./src/app/billing-address/billing-address.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Billing Address</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- <ion-col size=\"12\">\n    <label>Total - Rs. {{totalCost}}</label>\n  </ion-col> -->\n  <ion-grid *ngIf=\"isAddressAdded\">\n    <ion-row>\n      <ion-col size=\"12\" *ngFor=\"let addressList of addressList; let i = index\" [class.selectedFullSection]=\"arrAddressSelectCheck[i]\">\n        <div class=\"customer-details\">\n          <ul>\n            <li>\n              <div class=\"left\">\n                Name\n              </div>\n              <div class=\"right\">\n                {{addressList.name}}\n              </div>\n            </li>\n            <li>\n              <div class=\"left\">\n                Phone\n              </div>\n              <div class=\"right\">\n                {{addressList.mobile}}\n              </div>\n            </li>\n            <li>\n              <div class=\"left\">\n                Address\n              </div>\n              <div class=\"right\">\n                {{addressList.home_address}} {{addressList.city}} {{addressList.state}}\n                {{addressList.country}} {{addressList.pin}}\n              </div>\n            </li>\n            <li>\n              <div class=\"left\">\n                Email\n              </div>\n              <div class=\"right\">\n                {{addressList.email}}\n              </div>\n            </li>\n\n            <li>\n              <div class=\"left\">\n                Edit\n              </div>\n              <div class=\"right\">\n                <a (click)=\"editAddress(addressList, i)\">\n                  <img src=\"assets/images/edit-icon.svg\" alt=\"\">\n                </a>\n              </div>\n            </li>\n          </ul>\n\n          <ul class=\"shortcut-icons\">\n            <li>\n              <a (click)=\"onItemClicked(addressList, i)\" *ngIf=\"arrAddressSelectCheck[i]\">\n                <img src=\"assets/images/check_icon_blue.svg\" alt=\"\" width=\"20\">\n              </a>\n              <a (click)=\"onItemClicked(addressList, i)\" *ngIf=\"!arrAddressSelectCheck[i]\">\n                <img src=\"assets/images/uncheck_icon_blue.svg\" alt=\"\" width=\"20\">\n              </a>\n            </li>\n          </ul>\n\n        </div>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card>\n    <ion-button shape=\"round\" fill=\"outline\" expand=\"full\" (click)=\"addAddress()\">\n      Add Address\n    </ion-button>\n  </ion-card>\n\n  <ion-card>\n    <ion-button shape=\"round\" fill=\"outline\" expand=\"full\" (click)=\"toPayment()\">\n      Proceed To Payment\n    </ion-button>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/billing-address/billing-address.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/billing-address/billing-address.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-primary {\n  background: #1B98D5; }\n\n.card-box {\n  background: #A7CF46;\n  padding: 10px 5px;\n  text-align: center;\n  position: relative; }\n\n.card-box img {\n    width: 44px;\n    margin: 0 auto; }\n\n.card-box h3 {\n    font-size: 16px;\n    color: #000000;\n    margin: 5px 0;\n    height: 36px;\n    overflow: hidden; }\n\n.card-box h4 {\n    font-size: 18px;\n    color: #ffffff;\n    margin: 5px 0; }\n\n.customer-details {\n  border: 1px solid #D2D2D2; }\n\n.customer-details ul {\n    padding: 0;\n    margin: 0; }\n\n.customer-details ul li {\n      /* OLD - iOS 6-, Safari 3.1-6 */\n      /* OLD - Firefox 19- (buggy but mostly works) */\n      /* TWEENER - IE 10 */\n      /* NEW - Chrome */\n      display: flex;\n      list-style: none;\n      width: 100%;\n      padding: 5px; }\n\n.customer-details ul li .left {\n        font-size: 14px;\n        color: #979797;\n        width: 50%; }\n\n.customer-details ul li .right {\n        font-size: 14px;\n        color: #000000;\n        width: 50%; }\n\n.text-grey {\n  color: #A7A7A7; }\n\n.text-danger {\n  color: #F83956; }\n\n.action-dd {\n  background: #A7CF46;\n  border: 1px solid #A7CF46;\n  color: #fff;\n  border-radius: 5px; }\n\n.action-dd .select-placeholder {\n    color: red;\n    opacity: .33; }\n\n.action-btn {\n  margin-right: 10px;\n  margin-top: 5px;\n  display: inline-block; }\n\n.selectedFullSection {\n  position: relative; }\n\n.selectedFullSection .customer-details {\n    border: 1px solid rgba(175, 229, 238, 0.75);\n    background-color: rgba(175, 229, 238, 0.3); }\n\n.selected {\n  position: relative; }\n\n.selected .customer-details {\n    border: 1px solid rgba(175, 229, 238, 0.75);\n    background-color: rgba(175, 229, 238, 0.3); }\n\n.selected:after {\n    content: \"\";\n    background-image: url('check_icon_blue.svg');\n    background-repeat: no-repeat;\n    width: 28px;\n    height: 28px;\n    position: absolute;\n    top: 5px;\n    right: 5px; }\n\n.unselected {\n  position: relative; }\n\n.unselected .customer-details {\n    border: 1px solid rgba(175, 229, 238, 0.75);\n    background-color: rgba(175, 229, 238, 0.3); }\n\n.unselected:after {\n    content: \"\";\n    background-image: url('uncheck_icon_blue.svg');\n    background-repeat: no-repeat;\n    width: 28px;\n    height: 28px;\n    position: absolute;\n    top: 5px;\n    right: 5px; }\n\n.select-all-bg {\n  border: 1px solid rgba(151, 151, 151, 0.4);\n  padding: 0;\n  margin: 0 auto;\n  width: 97%;\n  position: relative; }\n\n.select-all-bg .delete-all-btn {\n    position: absolute;\n    top: 0;\n    right: 15px;\n    z-index: 10; }\n\n.fixedSection {\n  position: fixed;\n  top: 64px;\n  left: 0;\n  right: 0;\n  background-color: white;\n  z-index: 999999; }\n\n.shortcut-icons {\n  position: absolute;\n  top: 10px;\n  right: 10px; }\n\n.shortcut-icons > li {\n    padding: 3px 4px !important; }\n\n.shortcut-icons > li > a {\n      border: 1px solid #D2D2D2;\n      padding: 5px 5px;\n      display: block;\n      min-width: 40px;\n      text-align: center;\n      background: #fff;\n      min-height: 28px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YXAvRGVza3RvcC9Jb25pY19Qcm9qZWN0L2FyY2hpdmUgaW9uaWMgZlByb2plY3Qvb2xkIGFyY2hpdmUgMi9BcmNoaXZlIDIvc3JjL2FwcC9iaWxsaW5nLWFkZHJlc3MvYmlsbGluZy1hZGRyZXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUp0QjtJQU1RLFdBQVc7SUFDWCxjQUFjLEVBQUE7O0FBUHRCO0lBVVEsZUFBZTtJQUNmLGNBQWM7SUFDZCxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQixFQUFBOztBQWR4QjtJQWlCUSxlQUFlO0lBQ2YsY0FBYztJQUNkLGFBQWEsRUFBQTs7QUFHckI7RUFDSSx5QkFBeUIsRUFBQTs7QUFEN0I7SUFHUSxVQUFVO0lBQ1YsU0FBUyxFQUFBOztBQUpqQjtNQU11QywrQkFBQTtNQUNBLCtDQUFBO01BQ0Esb0JBQUE7TUFDQSxpQkFBQTtNQUMzQixhQUFhO01BQ2IsZ0JBQWdCO01BQ2hCLFdBQVc7TUFDWCxZQUFZLEVBQUE7O0FBYnhCO1FBZWdCLGVBQWU7UUFDZixjQUFjO1FBQ2QsVUFBVSxFQUFBOztBQWpCMUI7UUFvQmdCLGVBQWU7UUFDZixjQUFjO1FBQ2QsVUFBVSxFQUFBOztBQUsxQjtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBSnRCO0lBTVEsVUFBVTtJQUNWLFlBQVksRUFBQTs7QUFJcEI7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQixFQUFBOztBQUl6QjtFQUNJLGtCQUFrQixFQUFBOztBQUR0QjtJQUdRLDJDQUEyQztJQUMzQywwQ0FBMkMsRUFBQTs7QUFjbkQ7RUFDSSxrQkFBa0IsRUFBQTs7QUFEdEI7SUFHUSwyQ0FBMkM7SUFDM0MsMENBQTJDLEVBQUE7O0FBSm5EO0lBT1EsV0FBVztJQUNYLDRDQUE4RDtJQUM5RCw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVUsRUFBQTs7QUFJbEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFEdEI7SUFHUSwyQ0FBMkM7SUFDM0MsMENBQTJDLEVBQUE7O0FBSm5EO0lBT1EsV0FBVztJQUNYLDhDQUFnRTtJQUNoRSw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVUsRUFBQTs7QUFJbEI7RUFDSSwwQ0FBMEM7RUFDMUMsVUFBVTtFQUNWLGNBQWM7RUFDZCxVQUFVO0VBQ1Ysa0JBQWtCLEVBQUE7O0FBTHRCO0lBT1Esa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixXQUFXO0lBQ1gsV0FBVyxFQUFBOztBQUluQjtFQUNJLGVBQWU7RUFDZixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUix1QkFBdUI7RUFDdkIsZUFBZSxFQUFBOztBQUduQjtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVyxFQUFBOztBQUhmO0lBS1EsMkJBQTJCLEVBQUE7O0FBTG5DO01BT1kseUJBQXlCO01BQ3pCLGdCQUFnQjtNQUNoQixjQUFjO01BQ2QsZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixnQkFBZ0I7TUFDaEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9iaWxsaW5nLWFkZHJlc3MvYmlsbGluZy1hZGRyZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1wcmltYXJ5e1xuICAgIGJhY2tncm91bmQ6ICMxQjk4RDU7XG59XG4uY2FyZC1ib3h7XG4gICAgYmFja2dyb3VuZDogI0E3Q0Y0NjtcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDQ0cHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICBoM3tcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbiAgICBoNHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgbWFyZ2luOiA1cHggMDsgXG4gICAgfVxufVxuLmN1c3RvbWVyLWRldGFpbHN7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0QyRDJEMjtcbiAgICB1bHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBsaXtcbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94OyAgICAgIC8qIE9MRCAtIGlPUyA2LSwgU2FmYXJpIDMuMS02ICovXG4gICAgICAgICAgICBkaXNwbGF5OiAtbW96LWJveDsgICAgICAgICAvKiBPTEQgLSBGaXJlZm94IDE5LSAoYnVnZ3kgYnV0IG1vc3RseSB3b3JrcykgKi9cbiAgICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94OyAgICAgIC8qIFRXRUVORVIgLSBJRSAxMCAqL1xuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4OyAgICAgLyogTkVXIC0gQ2hyb21lICovXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgLmxlZnR7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTc5Nzk3O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmlnaHR7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4udGV4dC1ncmV5e1xuICAgIGNvbG9yOiAjQTdBN0E3O1xufVxuLnRleHQtZGFuZ2Vye1xuICAgIGNvbG9yOiAjRjgzOTU2O1xufVxuLmFjdGlvbi1kZHtcbiAgICBiYWNrZ3JvdW5kOiAjQTdDRjQ2O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNBN0NGNDY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC5zZWxlY3QtcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICBvcGFjaXR5OiAuMzM7XG4gICAgfVxuICAgIFxufVxuLmFjdGlvbi1idG57XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgXG59XG5cbi5zZWxlY3RlZEZ1bGxTZWN0aW9ue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuY3VzdG9tZXItZGV0YWlsc3tcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNzUsIDIyOSwgMjM4LCAwLjc1KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzUsIDIyOSwgMjM4LCAwLjMwKTtcbiAgICB9XG4gICAgLy8gJjphZnRlcntcbiAgICAvLyAgICAgY29udGVudDogXCJcIjtcbiAgICAvLyAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvYXNzZXRzL2ltYWdlcy9jaGVja19pY29uX2JsdWUuc3ZnJyk7XG4gICAgLy8gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgLy8gICAgIHdpZHRoOiAyOHB4O1xuICAgIC8vICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyAgICAgdG9wOiAxNXB4O1xuICAgIC8vICAgICByaWdodDogMTVweDtcbiAgICAvLyB9XG59XG5cbi5zZWxlY3RlZHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmN1c3RvbWVyLWRldGFpbHN7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTc1LCAyMjksIDIzOCwgMC43NSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc1LCAyMjksIDIzOCwgMC4zMCk7XG4gICAgfVxuICAgICY6YWZ0ZXJ7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjL2Fzc2V0cy9pbWFnZXMvY2hlY2tfaWNvbl9ibHVlLnN2ZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICB3aWR0aDogMjhweDtcbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNXB4O1xuICAgICAgICByaWdodDogNXB4O1xuICAgIH1cbn1cblxuLnVuc2VsZWN0ZWR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5jdXN0b21lci1kZXRhaWxze1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE3NSwgMjI5LCAyMzgsIDAuNzUpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3NSwgMjI5LCAyMzgsIDAuMzApO1xuICAgIH1cbiAgICAmOmFmdGVye1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaW1hZ2VzL3VuY2hlY2tfaWNvbl9ibHVlLnN2ZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICB3aWR0aDogMjhweDtcbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNXB4O1xuICAgICAgICByaWdodDogNXB4O1xuICAgIH1cbn1cblxuLnNlbGVjdC1hbGwtYmd7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNTEsIDE1MSwgMTUxLCAwLjQpO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDk3JTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmRlbGV0ZS1hbGwtYnRue1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgIH1cbn1cblxuLmZpeGVkU2VjdGlvbntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA2NHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgei1pbmRleDogOTk5OTk5O1xufVxuXG4uc2hvcnRjdXQtaWNvbnN7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICByaWdodDogMTBweDtcbiAgICAmPmxpe1xuICAgICAgICBwYWRkaW5nOiAzcHggNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICY+YXtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEMkQyRDI7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggNXB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgbWluLWhlaWdodDogMjhweDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/billing-address/billing-address.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/billing-address/billing-address.page.ts ***!
  \*********************************************************/
/*! exports provided: BillingAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingAddressPage", function() { return BillingAddressPage; });
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




var BillingAddressPage = /** @class */ (function () {
    function BillingAddressPage(util, alertController, events, navCtrl, route, modalController, activeroute, menuCtrl) {
        this.util = util;
        this.alertController = alertController;
        this.events = events;
        this.navCtrl = navCtrl;
        this.route = route;
        this.modalController = modalController;
        this.activeroute = activeroute;
        this.menuCtrl = menuCtrl;
        this.currentSelected = [];
        this.addressSelected = [];
        this.arrAddressSelectCheck = [];
        this.totalCost = "0";
        this.cartInfoId = "";
        this.isChecked = false;
        this.totalCost = this.route.getCurrentNavigation().extras.state.parmsTotal;
        this.cartInfoId = this.route.getCurrentNavigation().extras.state.cartid;
        console.log("total cost", this.totalCost);
        //this.billingAddressList()
    }
    BillingAddressPage.prototype.ngOnInit = function () {
    };
    BillingAddressPage.prototype.ionViewWillEnter = function () {
        console.log("viewwillentercalling");
        this.menuCtrl.enable(false);
        this.billingAddressList();
        //this.pageDetails = { 'showMenu': true, 'showBack': false, 'showButtons': false, 'title': 'My Wishlist', 'prevPage': '' };
        //this.showMenu(this.pageDetails);
    };
    BillingAddressPage.prototype.showMenu = function (pageDetails) {
        console.log('User created!');
        this.events.publish('showMenu', pageDetails, Date.now());
    };
    BillingAddressPage.prototype.billingAddressList = function () {
        var _this = this;
        var myData = JSON.stringify({});
        console.log("Your myData: ", myData);
        this.util.presentLoading();
        this.util.getTypeDetailsWithAuth('carts/getDelivaryAdd.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            console.log("Your data: ", result);
            _this.data = result;
            if (_this.data.success) {
                _this.addressList = _this.data.data;
                if (_this.addressList.length == 0) {
                    _this.isAddressAdded = false;
                }
                else {
                    _this.isAddressAdded = true;
                }
                for (var i = 0; i < _this.addressList.length; i++) {
                    _this.arrAddressSelectCheck[i] = false;
                }
                //console.log("address list", this.addressList, this.arrAddressSelectCheck)
            }
            else {
                _this.util.showToast(_this.data.message);
            }
        }, function (error) {
            _this.util.dismissLoader();
            _this.util.showToast('Server error occured. Try again.');
        });
    };
    BillingAddressPage.prototype.goBack = function () {
        this.navCtrl.navigateBack('/cart');
    };
    BillingAddressPage.prototype.addAddress = function () {
        this.navCtrl.navigateForward('/add-billing-address');
    };
    BillingAddressPage.prototype.editAddress = function (singleAddressList, i) {
        var navigationExtras = {
            state: {
                from: 'billingList',
                parms: singleAddressList,
            }
        };
        this.navCtrl.navigateForward('/add-billing-address', navigationExtras);
    };
    BillingAddressPage.prototype.onItemClicked = function (addressList, i) {
        for (var j = 0; j < this.arrAddressSelectCheck.length; j++) {
            if (i == j) {
                if (this.arrAddressSelectCheck[j] == false) {
                    this.arrAddressSelectCheck.splice(j, 1, true);
                }
                else {
                    this.arrAddressSelectCheck.splice(j, 1, false);
                }
            }
            else {
                this.arrAddressSelectCheck.splice(j, 1, false);
            }
        }
        console.log("arrAddressSelectCheck", this.arrAddressSelectCheck);
    };
    BillingAddressPage.prototype.toPayment = function () {
        for (var j = 0; j < this.arrAddressSelectCheck.length; j++) {
            if (this.arrAddressSelectCheck[j] == true) {
                this.postAddress(j);
                break;
            }
            else {
                if (j == (this.arrAddressSelectCheck.length - 1)) {
                    this.util.showToast("Please select/add an address for delivery");
                }
                else {
                    continue;
                }
            }
        }
    };
    BillingAddressPage.prototype.postAddress = function (adrsPosition) {
        var _this = this;
        var myData = JSON.stringify({
            info_id: String(this.cartInfoId),
            delivery_id: String(this.addressList[adrsPosition].id)
        });
        console.log("Your myData: ", myData);
        this.util.presentLoading();
        this.util.getTypeDetailsWithAuth('carts/setDelivaryadd.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            console.log("Your address data: ", result);
            _this.data = result;
            _this.util.showToast('Delivery Address is Selected');
            if (_this.data.success == "1") {
                var navigationExtras = {
                    state: {
                        from: 'cartlist',
                        parms: _this.totalCost,
                        parms1: _this.cartInfoId,
                    }
                };
                _this.navCtrl.navigateForward('/payment-mode', navigationExtras);
            }
            else {
                _this.util.showToast(_this.data.message);
            }
        }, function (error) {
            _this.util.dismissLoader();
            _this.util.showToast('Server error occured. Try again.');
        });
    };
    BillingAddressPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-billing-address',
            template: __webpack_require__(/*! ./billing-address.page.html */ "./src/app/billing-address/billing-address.page.html"),
            styles: [__webpack_require__(/*! ./billing-address.page.scss */ "./src/app/billing-address/billing-address.page.scss")]
        }),
        __metadata("design:paramtypes", [_api_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], BillingAddressPage);
    return BillingAddressPage;
}());



/***/ })

}]);
//# sourceMappingURL=billing-address-billing-address-module.js.map