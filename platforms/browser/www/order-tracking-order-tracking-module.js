(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-tracking-order-tracking-module"],{

/***/ "./src/app/order-tracking/order-tracking.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/order-tracking/order-tracking.module.ts ***!
  \*********************************************************/
/*! exports provided: OrderTrackingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTrackingPageModule", function() { return OrderTrackingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _order_tracking_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-tracking.page */ "./src/app/order-tracking/order-tracking.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _order_tracking_page__WEBPACK_IMPORTED_MODULE_5__["OrderTrackingPage"]
    }
];
var OrderTrackingPageModule = /** @class */ (function () {
    function OrderTrackingPageModule() {
    }
    OrderTrackingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_order_tracking_page__WEBPACK_IMPORTED_MODULE_5__["OrderTrackingPage"]]
        })
    ], OrderTrackingPageModule);
    return OrderTrackingPageModule;
}());



/***/ }),

/***/ "./src/app/order-tracking/order-tracking.page.html":
/*!*********************************************************!*\
  !*** ./src/app/order-tracking/order-tracking.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button style=\"color: #FFCC23\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Order Tracking</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-col size=\"12\">\n    <label>Product: {{orderProductDetails.product.name | slice:0:20}} </label>\n    <!-- <label>Carrrier Name: {{trackList.allData.carrierName}} </label> -->\n  </ion-col>\n  <ion-grid>\n    <ion-item *ngIf=\"!isTrackList\">\n      No Order Tracking Has Been Generated\n    </ion-item>\n    <ion-row *ngIf=\"isTrackList\">\n      <ion-col size=\"12\" *ngFor=\"let trackListEvent of trackListEvent; let i = index\">\n        <div class=\"customer-details\">\n          <ul>\n            <li>\n              <div class=\"left\">\n                Status\n              </div>\n              <div class=\"right\">\n                {{trackListEvent.status}}\n              </div>\n            </li>\n            <li>\n              <div class=\"left\">\n                Location\n              </div>\n              <div class=\"right\">\n                {{trackListEvent.Location}}\n              </div>\n            </li>\n            <li>\n              <div class=\"left\">\n                Remarks\n              </div>\n              <div class=\"right\">\n                {{trackListEvent.Remarks}}\n              </div>\n            </li>\n            <li>\n              <div class=\"left\">\n                Time\n              </div>\n              <div class=\"right\">\n                {{trackListEvent.Time.toString().split('T')[0]}}\n              </div>\n            </li>\n          </ul>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/order-tracking/order-tracking.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/order-tracking/order-tracking.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-primary {\n  background: #1B98D5; }\n\n.card-box {\n  background: #A7CF46;\n  padding: 10px 5px;\n  text-align: center;\n  position: relative; }\n\n.card-box img {\n    width: 44px;\n    margin: 0 auto; }\n\n.card-box h3 {\n    font-size: 16px;\n    color: #000000;\n    margin: 5px 0;\n    height: 36px;\n    overflow: hidden; }\n\n.card-box h4 {\n    font-size: 18px;\n    color: #ffffff;\n    margin: 5px 0; }\n\n.customer-details {\n  border: 1px solid #D2D2D2; }\n\n.customer-details ul {\n    padding: 0;\n    margin: 0; }\n\n.customer-details ul li {\n      /* OLD - iOS 6-, Safari 3.1-6 */\n      /* OLD - Firefox 19- (buggy but mostly works) */\n      /* TWEENER - IE 10 */\n      /* NEW - Chrome */\n      display: flex;\n      list-style: none;\n      width: 100%;\n      padding: 5px; }\n\n.customer-details ul li .left {\n        font-size: 14px;\n        color: #979797;\n        width: 50%; }\n\n.customer-details ul li .right {\n        font-size: 14px;\n        color: #000000;\n        width: 50%; }\n\n.text-grey {\n  color: #A7A7A7; }\n\n.text-danger {\n  color: #F83956; }\n\n.action-dd {\n  background: #A7CF46;\n  border: 1px solid #A7CF46;\n  color: #fff;\n  border-radius: 5px; }\n\n.action-dd .select-placeholder {\n    color: red;\n    opacity: .33; }\n\n.action-btn {\n  margin-right: 10px;\n  margin-top: 5px;\n  display: inline-block; }\n\n.selectedFullSection {\n  position: relative; }\n\n.selectedFullSection .customer-details {\n    border: 1px solid rgba(175, 229, 238, 0.75);\n    background-color: rgba(175, 229, 238, 0.3); }\n\n.selected {\n  position: relative; }\n\n.selected .customer-details {\n    border: 1px solid rgba(175, 229, 238, 0.75);\n    background-color: rgba(175, 229, 238, 0.3); }\n\n.selected:after {\n    content: \"\";\n    background-image: url('check_icon_blue.svg');\n    background-repeat: no-repeat;\n    width: 28px;\n    height: 28px;\n    position: absolute;\n    top: 5px;\n    right: 5px; }\n\n.unselected {\n  position: relative; }\n\n.unselected .customer-details {\n    border: 1px solid rgba(175, 229, 238, 0.75);\n    background-color: rgba(175, 229, 238, 0.3); }\n\n.unselected:after {\n    content: \"\";\n    background-image: url('uncheck_icon_blue.svg');\n    background-repeat: no-repeat;\n    width: 28px;\n    height: 28px;\n    position: absolute;\n    top: 5px;\n    right: 5px; }\n\n.select-all-bg {\n  border: 1px solid rgba(151, 151, 151, 0.4);\n  padding: 0;\n  margin: 0 auto;\n  width: 97%;\n  position: relative; }\n\n.select-all-bg .delete-all-btn {\n    position: absolute;\n    top: 0;\n    right: 15px;\n    z-index: 10; }\n\n.fixedSection {\n  position: fixed;\n  top: 64px;\n  left: 0;\n  right: 0;\n  background-color: white;\n  z-index: 999999; }\n\n.shortcut-icons {\n  position: absolute;\n  top: 10px;\n  right: 10px; }\n\n.shortcut-icons > li {\n    padding: 3px 4px !important; }\n\n.shortcut-icons > li > a {\n      border: 1px solid #D2D2D2;\n      padding: 5px 5px;\n      display: block;\n      min-width: 40px;\n      text-align: center;\n      background: #fff;\n      min-height: 28px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YXAvRGVza3RvcC9pb25pYyBQcm9qZWN0L3BwL1NtYXJ0LUNhcnQgMi9zcmMvYXBwL29yZGVyLXRyYWNraW5nL29yZGVyLXRyYWNraW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUp0QjtJQU1RLFdBQVc7SUFDWCxjQUFjLEVBQUE7O0FBUHRCO0lBVVEsZUFBZTtJQUNmLGNBQWM7SUFDZCxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQixFQUFBOztBQWR4QjtJQWlCUSxlQUFlO0lBQ2YsY0FBYztJQUNkLGFBQWEsRUFBQTs7QUFHckI7RUFDSSx5QkFBeUIsRUFBQTs7QUFEN0I7SUFHUSxVQUFVO0lBQ1YsU0FBUyxFQUFBOztBQUpqQjtNQU11QywrQkFBQTtNQUNBLCtDQUFBO01BQ0Esb0JBQUE7TUFDQSxpQkFBQTtNQUMzQixhQUFhO01BQ2IsZ0JBQWdCO01BQ2hCLFdBQVc7TUFDWCxZQUFZLEVBQUE7O0FBYnhCO1FBZWdCLGVBQWU7UUFDZixjQUFjO1FBQ2QsVUFBVSxFQUFBOztBQWpCMUI7UUFvQmdCLGVBQWU7UUFDZixjQUFjO1FBQ2QsVUFBVSxFQUFBOztBQUsxQjtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBSnRCO0lBTVEsVUFBVTtJQUNWLFlBQVksRUFBQTs7QUFJcEI7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQixFQUFBOztBQUl6QjtFQUNJLGtCQUFrQixFQUFBOztBQUR0QjtJQUdRLDJDQUEyQztJQUMzQywwQ0FBMkMsRUFBQTs7QUFjbkQ7RUFDSSxrQkFBa0IsRUFBQTs7QUFEdEI7SUFHUSwyQ0FBMkM7SUFDM0MsMENBQTJDLEVBQUE7O0FBSm5EO0lBT1EsV0FBVztJQUNYLDRDQUE4RDtJQUM5RCw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVUsRUFBQTs7QUFJbEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFEdEI7SUFHUSwyQ0FBMkM7SUFDM0MsMENBQTJDLEVBQUE7O0FBSm5EO0lBT1EsV0FBVztJQUNYLDhDQUFnRTtJQUNoRSw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVUsRUFBQTs7QUFJbEI7RUFDSSwwQ0FBMEM7RUFDMUMsVUFBVTtFQUNWLGNBQWM7RUFDZCxVQUFVO0VBQ1Ysa0JBQWtCLEVBQUE7O0FBTHRCO0lBT1Esa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixXQUFXO0lBQ1gsV0FBVyxFQUFBOztBQUluQjtFQUNJLGVBQWU7RUFDZixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUix1QkFBdUI7RUFDdkIsZUFBZSxFQUFBOztBQUduQjtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVyxFQUFBOztBQUhmO0lBS1EsMkJBQTJCLEVBQUE7O0FBTG5DO01BT1kseUJBQXlCO01BQ3pCLGdCQUFnQjtNQUNoQixjQUFjO01BQ2QsZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixnQkFBZ0I7TUFDaEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9vcmRlci10cmFja2luZy9vcmRlci10cmFja2luZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctcHJpbWFyeXtcbiAgICBiYWNrZ3JvdW5kOiAjMUI5OEQ1O1xufVxuLmNhcmQtYm94e1xuICAgIGJhY2tncm91bmQ6ICNBN0NGNDY7XG4gICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOiA0NHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgaDN7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG4gICAgaDR7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7IFxuICAgIH1cbn1cbi5jdXN0b21lci1kZXRhaWxze1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEMkQyRDI7XG4gICAgdWx7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbGl7XG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDsgICAgICAvKiBPTEQgLSBpT1MgNi0sIFNhZmFyaSAzLjEtNiAqL1xuICAgICAgICAgICAgZGlzcGxheTogLW1vei1ib3g7ICAgICAgICAgLyogT0xEIC0gRmlyZWZveCAxOS0gKGJ1Z2d5IGJ1dCBtb3N0bHkgd29ya3MpICovXG4gICAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDsgICAgICAvKiBUV0VFTkVSIC0gSUUgMTAgKi9cbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDsgICAgIC8qIE5FVyAtIENocm9tZSAqL1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIC5sZWZ0e1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk3OTc5NztcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJpZ2h0e1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLnRleHQtZ3JleXtcbiAgICBjb2xvcjogI0E3QTdBNztcbn1cbi50ZXh0LWRhbmdlcntcbiAgICBjb2xvcjogI0Y4Mzk1Njtcbn1cbi5hY3Rpb24tZGR7XG4gICAgYmFja2dyb3VuZDogI0E3Q0Y0NjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQTdDRjQ2O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAuc2VsZWN0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgb3BhY2l0eTogLjMzO1xuICAgIH1cbiAgICBcbn1cbi5hY3Rpb24tYnRue1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIFxufVxuXG4uc2VsZWN0ZWRGdWxsU2VjdGlvbntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmN1c3RvbWVyLWRldGFpbHN7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTc1LCAyMjksIDIzOCwgMC43NSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc1LCAyMjksIDIzOCwgMC4zMCk7XG4gICAgfVxuICAgIC8vICY6YWZ0ZXJ7XG4gICAgLy8gICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjL2Fzc2V0cy9pbWFnZXMvY2hlY2tfaWNvbl9ibHVlLnN2ZycpO1xuICAgIC8vICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIC8vICAgICB3aWR0aDogMjhweDtcbiAgICAvLyAgICAgaGVpZ2h0OiAyOHB4O1xuICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gICAgIHRvcDogMTVweDtcbiAgICAvLyAgICAgcmlnaHQ6IDE1cHg7XG4gICAgLy8gfVxufVxuXG4uc2VsZWN0ZWR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5jdXN0b21lci1kZXRhaWxze1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE3NSwgMjI5LCAyMzgsIDAuNzUpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3NSwgMjI5LCAyMzgsIDAuMzApO1xuICAgIH1cbiAgICAmOmFmdGVye1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaW1hZ2VzL2NoZWNrX2ljb25fYmx1ZS5zdmcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgIGhlaWdodDogMjhweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgcmlnaHQ6IDVweDtcbiAgICB9XG59XG5cbi51bnNlbGVjdGVke1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuY3VzdG9tZXItZGV0YWlsc3tcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNzUsIDIyOSwgMjM4LCAwLjc1KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzUsIDIyOSwgMjM4LCAwLjMwKTtcbiAgICB9XG4gICAgJjphZnRlcntcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvYXNzZXRzL2ltYWdlcy91bmNoZWNrX2ljb25fYmx1ZS5zdmcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgIGhlaWdodDogMjhweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgcmlnaHQ6IDVweDtcbiAgICB9XG59XG5cbi5zZWxlY3QtYWxsLWJne1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTUxLCAxNTEsIDE1MSwgMC40KTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiA5NyU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5kZWxldGUtYWxsLWJ0bntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICB9XG59XG5cbi5maXhlZFNlY3Rpb257XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNjRweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHotaW5kZXg6IDk5OTk5OTtcbn1cblxuLnNob3J0Y3V0LWljb25ze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgJj5saXtcbiAgICAgICAgcGFkZGluZzogM3B4IDRweCAhaW1wb3J0YW50O1xuICAgICAgICAmPmF7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRDJEMkQyO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDVweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWluLXdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/order-tracking/order-tracking.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/order-tracking/order-tracking.page.ts ***!
  \*******************************************************/
/*! exports provided: OrderTrackingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTrackingPage", function() { return OrderTrackingPage; });
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




var OrderTrackingPage = /** @class */ (function () {
    function OrderTrackingPage(util, alertController, events, navCtrl, route, modalController, activeroute, menuCtrl) {
        this.util = util;
        this.alertController = alertController;
        this.events = events;
        this.navCtrl = navCtrl;
        this.route = route;
        this.modalController = modalController;
        this.activeroute = activeroute;
        this.menuCtrl = menuCtrl;
        this.order_shyplite_details = [];
        this.orderTrackTypePosition = 0;
        this.returnType = "";
        this.returnType = this.route.getCurrentNavigation().extras.state.from;
        this.orderDetails = this.route.getCurrentNavigation().extras.state.parms;
        this.orderPosition = this.route.getCurrentNavigation().extras.state.parms2;
        this.orderProductDetails = this.orderDetails.invoice_items[this.orderPosition];
        this.order_shyplite_details = this.orderProductDetails.shyplite_details;
        //console.log("this.orderDetails", this.orderDetails, this.orderPosition , this.orderProductDetails , this.order_shyplite_details)
        if (this.order_shyplite_details.length > 0) {
            this.isTrackList = true;
            for (var i = 0; i < this.order_shyplite_details.length; i++) {
                if (this.order_shyplite_details[i].type == "1") {
                    this.orderTrackTypePosition == i;
                    break;
                }
                else {
                    continue;
                }
            }
            if (this.returnType == "orderDetails") {
                this.orderTrack();
            }
            else {
                this.returnOrderTrack();
            }
        }
        else {
            this.isTrackList = false;
        }
    }
    OrderTrackingPage.prototype.ngOnInit = function () {
    };
    OrderTrackingPage.prototype.orderTrack = function () {
        var _this = this;
        var myData = JSON.stringify({
            awb_no: this.order_shyplite_details[this.orderTrackTypePosition].awbNo
        });
        //console.log("Your track sending myData: ", myData);
        this.util.presentLoading();
        this.util.getTypeDetailsWithAuth('users/track.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            //console.log("Your order data: ", result);
            _this.data = result;
            if (_this.data.success) {
                _this.trackList = _this.data.data.tracking_list.data;
                _this.trackListEvent = _this.trackList.events;
                if (_this.trackListEvent.length == 0) {
                    _this.isTrackList = true;
                }
                else {
                    _this.isTrackList = true;
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
    OrderTrackingPage.prototype.returnOrderTrack = function () {
        var _this = this;
        var awbNo = this.order_shyplite_details[this.orderTrackTypePosition].awbNo;
        if (awbNo == null) {
            this.isTrackList = false;
        }
        else {
            var myData = JSON.stringify({
                awb_no: this.order_shyplite_details[this.orderTrackTypePosition].awbNo
            });
            //console.log("Your track sending myData: ", myData);
            this.util.presentLoading();
            this.util.getTypeDetailsWithAuth('users/returntrack.json', myData).subscribe(function (result) {
                _this.util.dismissLoader();
                //console.log("Your order data: ", result);
                _this.data = result;
                if (_this.data.success) {
                    _this.trackList = _this.data.data.tracking_list.data;
                    _this.trackListEvent = _this.trackList.events;
                    if (_this.trackListEvent.length == 0) {
                        _this.isTrackList = false;
                    }
                    else {
                        _this.isTrackList = true;
                    }
                }
                else {
                    _this.util.showToast(_this.data.message);
                }
            }, function (error) {
                _this.util.dismissLoader();
                _this.util.showToast('Server error occured. Try again.');
            });
        }
    };
    OrderTrackingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-tracking',
            template: __webpack_require__(/*! ./order-tracking.page.html */ "./src/app/order-tracking/order-tracking.page.html"),
            styles: [__webpack_require__(/*! ./order-tracking.page.scss */ "./src/app/order-tracking/order-tracking.page.scss")]
        }),
        __metadata("design:paramtypes", [_api_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], OrderTrackingPage);
    return OrderTrackingPage;
}());



/***/ })

}]);
//# sourceMappingURL=order-tracking-order-tracking-module.js.map