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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button style=\"color: #FFCC23\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Billing Address</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- <ion-col size=\"12\">\n    <label>Total - Rs. {{totalCost}}</label>\n  </ion-col> -->\n  <ion-grid *ngIf=\"isAddressAdded\">\n    <ion-row>\n      <ion-col size=\"12\" *ngFor=\"let addressList of addressList; let i = index\" [class.selectedFullSection]=\"arrAddressSelectCheck[i]\">\n        <div class=\"customer-details\">\n          <ul>\n            <li>\n              <div class=\"left\">\n                Name\n              </div>\n              <div class=\"right\">\n                {{addressList.name}}\n              </div>\n            </li>\n            <li>\n              <div class=\"left\">\n                Phone\n              </div>\n              <div class=\"right\">\n                {{addressList.mobile}}\n              </div>\n            </li>\n            <li>\n              <div class=\"left\">\n                Address\n              </div>\n              <div class=\"right\">\n                {{addressList.home_address}} {{addressList.city}} {{addressList.state}}\n                {{addressList.country}} {{addressList.pin}}\n              </div>\n            </li>\n            <li>\n              <div class=\"left\">\n                Email\n              </div>\n              <div class=\"right\">\n                {{addressList.email}}\n              </div>\n            </li>\n\n            <li>\n              <div class=\"left\">\n                Edit\n              </div>\n              <div class=\"right\">\n                <a (click)=\"editAddress(addressList, i)\">\n                  <img src=\"assets/images/edit-icon.svg\" alt=\"\">\n                </a>\n              </div>\n            </li>\n          </ul>\n\n          <ul class=\"shortcut-icons\">\n            <li>\n              <a (click)=\"onItemClicked(addressList, i)\" *ngIf=\"arrAddressSelectCheck[i]\">\n                <img src=\"assets/images/check_icon_blue.svg\" alt=\"\" width=\"20\">\n              </a>\n              <a (click)=\"onItemClicked(addressList, i)\" *ngIf=\"!arrAddressSelectCheck[i]\">\n                <img src=\"assets/images/uncheck_icon_blue.svg\" alt=\"\" width=\"20\">\n              </a>\n            </li>\n          </ul>\n\n        </div>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- <ion-card> -->\n    <ion-button shape=\"round\" fill=\"outline\" expand=\"full\" (click)=\"addAddress()\">\n      Add Address\n    </ion-button>\n  <!-- </ion-card> -->\n\n  <!-- <ion-card> -->\n    <ion-button shape=\"round\" fill=\"outline\" expand=\"full\" (click)=\"toPayment()\">\n      Proceed To Payment\n    </ion-button>\n  <!-- </ion-card> -->\n\n</ion-content>"

/***/ }),

/***/ "./src/app/billing-address/billing-address.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/billing-address/billing-address.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-primary {\n  background: #1B98D5; }\n\n.card-box {\n  background: #A7CF46;\n  padding: 10px 5px;\n  text-align: center;\n  position: relative; }\n\n.card-box img {\n    width: 44px;\n    margin: 0 auto; }\n\n.card-box h3 {\n    font-size: 16px;\n    color: #000000;\n    margin: 5px 0;\n    height: 36px;\n    overflow: hidden; }\n\n.card-box h4 {\n    font-size: 18px;\n    color: #ffffff;\n    margin: 5px 0; }\n\n.customer-details {\n  border: 1px solid #D2D2D2; }\n\n.customer-details ul {\n    padding: 0;\n    margin: 0; }\n\n.customer-details ul li {\n      /* OLD - iOS 6-, Safari 3.1-6 */\n      /* OLD - Firefox 19- (buggy but mostly works) */\n      /* TWEENER - IE 10 */\n      /* NEW - Chrome */\n      display: flex;\n      list-style: none;\n      width: 100%;\n      padding: 5px; }\n\n.customer-details ul li .left {\n        font-size: 14px;\n        color: #979797;\n        width: 50%; }\n\n.customer-details ul li .right {\n        font-size: 14px;\n        color: #000000;\n        width: 50%; }\n\n.text-grey {\n  color: #A7A7A7; }\n\n.text-danger {\n  color: #F83956; }\n\n.action-dd {\n  background: #A7CF46;\n  border: 1px solid #A7CF46;\n  color: #fff;\n  border-radius: 5px; }\n\n.action-dd .select-placeholder {\n    color: red;\n    opacity: .33; }\n\n.action-btn {\n  margin-right: 10px;\n  margin-top: 5px;\n  display: inline-block; }\n\n.selectedFullSection {\n  position: relative; }\n\n.selectedFullSection .customer-details {\n    border: 1px solid rgba(175, 229, 238, 0.75);\n    background-color: rgba(175, 229, 238, 0.3); }\n\n.selected {\n  position: relative; }\n\n.selected .customer-details {\n    border: 1px solid rgba(175, 229, 238, 0.75);\n    background-color: rgba(175, 229, 238, 0.3); }\n\n.selected:after {\n    content: \"\";\n    background-image: url('check_icon_blue.svg');\n    background-repeat: no-repeat;\n    width: 28px;\n    height: 28px;\n    position: absolute;\n    top: 5px;\n    right: 5px; }\n\n.unselected {\n  position: relative; }\n\n.unselected .customer-details {\n    border: 1px solid rgba(175, 229, 238, 0.75);\n    background-color: rgba(175, 229, 238, 0.3); }\n\n.unselected:after {\n    content: \"\";\n    background-image: url('uncheck_icon_blue.svg');\n    background-repeat: no-repeat;\n    width: 28px;\n    height: 28px;\n    position: absolute;\n    top: 5px;\n    right: 5px; }\n\n.select-all-bg {\n  border: 1px solid rgba(151, 151, 151, 0.4);\n  padding: 0;\n  margin: 0 auto;\n  width: 97%;\n  position: relative; }\n\n.select-all-bg .delete-all-btn {\n    position: absolute;\n    top: 0;\n    right: 15px;\n    z-index: 10; }\n\n.fixedSection {\n  position: fixed;\n  top: 64px;\n  left: 0;\n  right: 0;\n  background-color: white;\n  z-index: 999999; }\n\n.shortcut-icons {\n  position: absolute;\n  top: 10px;\n  right: 10px; }\n\n.shortcut-icons > li {\n    padding: 3px 4px !important; }\n\n.shortcut-icons > li > a {\n      border: 1px solid #D2D2D2;\n      padding: 5px 5px;\n      display: block;\n      min-width: 40px;\n      text-align: center;\n      background: #fff;\n      min-height: 28px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWF2ZXJzd2ViL0Rlc2t0b3AvU21hcnRLYXJ0SHlicmlkL3NyYy9hcHAvYmlsbGluZy1hZGRyZXNzL2JpbGxpbmctYWRkcmVzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFKdEI7SUFNUSxXQUFXO0lBQ1gsY0FBYyxFQUFBOztBQVB0QjtJQVVRLGVBQWU7SUFDZixjQUFjO0lBQ2QsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0IsRUFBQTs7QUFkeEI7SUFpQlEsZUFBZTtJQUNmLGNBQWM7SUFDZCxhQUFhLEVBQUE7O0FBR3JCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRDdCO0lBR1EsVUFBVTtJQUNWLFNBQVMsRUFBQTs7QUFKakI7TUFNdUMsK0JBQUE7TUFDQSwrQ0FBQTtNQUNBLG9CQUFBO01BQ0EsaUJBQUE7TUFDM0IsYUFBYTtNQUNiLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsWUFBWSxFQUFBOztBQWJ4QjtRQWVnQixlQUFlO1FBQ2YsY0FBYztRQUNkLFVBQVUsRUFBQTs7QUFqQjFCO1FBb0JnQixlQUFlO1FBQ2YsY0FBYztRQUNkLFVBQVUsRUFBQTs7QUFLMUI7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNJLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUp0QjtJQU1RLFVBQVU7SUFDVixZQUFZLEVBQUE7O0FBSXBCO0VBQ0ksa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixxQkFBcUIsRUFBQTs7QUFJekI7RUFDSSxrQkFBa0IsRUFBQTs7QUFEdEI7SUFHUSwyQ0FBMkM7SUFDM0MsMENBQTJDLEVBQUE7O0FBY25EO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRHRCO0lBR1EsMkNBQTJDO0lBQzNDLDBDQUEyQyxFQUFBOztBQUpuRDtJQU9RLFdBQVc7SUFDWCw0Q0FBOEQ7SUFDOUQsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVLEVBQUE7O0FBSWxCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRHRCO0lBR1EsMkNBQTJDO0lBQzNDLDBDQUEyQyxFQUFBOztBQUpuRDtJQU9RLFdBQVc7SUFDWCw4Q0FBZ0U7SUFDaEUsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVLEVBQUE7O0FBSWxCO0VBQ0ksMENBQTBDO0VBQzFDLFVBQVU7RUFDVixjQUFjO0VBQ2QsVUFBVTtFQUNWLGtCQUFrQixFQUFBOztBQUx0QjtJQU9RLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVztJQUNYLFdBQVcsRUFBQTs7QUFJbkI7RUFDSSxlQUFlO0VBQ2YsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsdUJBQXVCO0VBQ3ZCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVcsRUFBQTs7QUFIZjtJQUtRLDJCQUEyQixFQUFBOztBQUxuQztNQU9ZLHlCQUF5QjtNQUN6QixnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLGVBQWU7TUFDZixrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYmlsbGluZy1hZGRyZXNzL2JpbGxpbmctYWRkcmVzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctcHJpbWFyeXtcbiAgICBiYWNrZ3JvdW5kOiAjMUI5OEQ1O1xufVxuLmNhcmQtYm94e1xuICAgIGJhY2tncm91bmQ6ICNBN0NGNDY7XG4gICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOiA0NHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgaDN7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG4gICAgaDR7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7IFxuICAgIH1cbn1cbi5jdXN0b21lci1kZXRhaWxze1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEMkQyRDI7XG4gICAgdWx7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbGl7XG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDsgICAgICAvKiBPTEQgLSBpT1MgNi0sIFNhZmFyaSAzLjEtNiAqL1xuICAgICAgICAgICAgZGlzcGxheTogLW1vei1ib3g7ICAgICAgICAgLyogT0xEIC0gRmlyZWZveCAxOS0gKGJ1Z2d5IGJ1dCBtb3N0bHkgd29ya3MpICovXG4gICAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDsgICAgICAvKiBUV0VFTkVSIC0gSUUgMTAgKi9cbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDsgICAgIC8qIE5FVyAtIENocm9tZSAqL1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIC5sZWZ0e1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk3OTc5NztcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJpZ2h0e1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLnRleHQtZ3JleXtcbiAgICBjb2xvcjogI0E3QTdBNztcbn1cbi50ZXh0LWRhbmdlcntcbiAgICBjb2xvcjogI0Y4Mzk1Njtcbn1cbi5hY3Rpb24tZGR7XG4gICAgYmFja2dyb3VuZDogI0E3Q0Y0NjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQTdDRjQ2O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAuc2VsZWN0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgb3BhY2l0eTogLjMzO1xuICAgIH1cbiAgICBcbn1cbi5hY3Rpb24tYnRue1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIFxufVxuXG4uc2VsZWN0ZWRGdWxsU2VjdGlvbntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmN1c3RvbWVyLWRldGFpbHN7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTc1LCAyMjksIDIzOCwgMC43NSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc1LCAyMjksIDIzOCwgMC4zMCk7XG4gICAgfVxuICAgIC8vICY6YWZ0ZXJ7XG4gICAgLy8gICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjL2Fzc2V0cy9pbWFnZXMvY2hlY2tfaWNvbl9ibHVlLnN2ZycpO1xuICAgIC8vICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIC8vICAgICB3aWR0aDogMjhweDtcbiAgICAvLyAgICAgaGVpZ2h0OiAyOHB4O1xuICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gICAgIHRvcDogMTVweDtcbiAgICAvLyAgICAgcmlnaHQ6IDE1cHg7XG4gICAgLy8gfVxufVxuXG4uc2VsZWN0ZWR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5jdXN0b21lci1kZXRhaWxze1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE3NSwgMjI5LCAyMzgsIDAuNzUpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3NSwgMjI5LCAyMzgsIDAuMzApO1xuICAgIH1cbiAgICAmOmFmdGVye1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaW1hZ2VzL2NoZWNrX2ljb25fYmx1ZS5zdmcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgIGhlaWdodDogMjhweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgcmlnaHQ6IDVweDtcbiAgICB9XG59XG5cbi51bnNlbGVjdGVke1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuY3VzdG9tZXItZGV0YWlsc3tcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNzUsIDIyOSwgMjM4LCAwLjc1KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzUsIDIyOSwgMjM4LCAwLjMwKTtcbiAgICB9XG4gICAgJjphZnRlcntcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvYXNzZXRzL2ltYWdlcy91bmNoZWNrX2ljb25fYmx1ZS5zdmcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgIGhlaWdodDogMjhweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgcmlnaHQ6IDVweDtcbiAgICB9XG59XG5cbi5zZWxlY3QtYWxsLWJne1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTUxLCAxNTEsIDE1MSwgMC40KTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiA5NyU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5kZWxldGUtYWxsLWJ0bntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICB9XG59XG5cbi5maXhlZFNlY3Rpb257XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNjRweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHotaW5kZXg6IDk5OTk5OTtcbn1cblxuLnNob3J0Y3V0LWljb25ze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgJj5saXtcbiAgICAgICAgcGFkZGluZzogM3B4IDRweCAhaW1wb3J0YW50O1xuICAgICAgICAmPmF7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRDJEMkQyO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDVweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWluLXdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

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
        //console.log("Your myData: ", myData);
        this.util.presentLoading();
        this.util.getTypeDetailsWithAuth('carts/getDelivaryAdd.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            //console.log("Your data: ", result);
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
        //console.log("arrAddressSelectCheck", this.arrAddressSelectCheck)
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
        //console.log("Your myData: ", myData);
        this.util.presentLoading();
        this.util.getTypeDetailsWithAuth('carts/setDelivaryadd.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            //console.log("Your address data: ", result);
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