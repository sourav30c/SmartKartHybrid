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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Order Tracking</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-col size=\"12\">\n    <label>Product: {{orderProductDetails.product.name | slice:0:20}} </label>\n    <!-- <label>Carrrier Name: {{trackList.allData.carrierName}} </label> -->\n  </ion-col>\n  <ion-grid>\n    <ion-item *ngIf=\"!isTrackList\">\n      No Order Tracking Has Been Generated\n    </ion-item>\n    <ion-row *ngIf=\"isTrackList\">\n      <ion-col size=\"12\" *ngFor=\"let trackListEvent of trackListEvent; let i = index\">\n        <div class=\"customer-details\">\n          <ul>\n            <li>\n              <div class=\"left\">\n                Status\n              </div>\n              <div class=\"right\">\n                {{trackListEvent.status}}\n              </div>\n            </li>\n            <li>\n              <div class=\"left\">\n                Location\n              </div>\n              <div class=\"right\">\n                {{trackListEvent.Location}}\n              </div>\n            </li>\n            <li>\n              <div class=\"left\">\n                Remarks\n              </div>\n              <div class=\"right\">\n                {{trackListEvent.Remarks}}\n              </div>\n            </li>\n            <li>\n              <div class=\"left\">\n                Time\n              </div>\n              <div class=\"right\">\n                {{trackListEvent.Time.toString().split('T')[0]}}\n              </div>\n            </li>\n          </ul>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/order-tracking/order-tracking.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/order-tracking/order-tracking.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-primary {\n  background: #1B98D5; }\n\n.card-box {\n  background: #A7CF46;\n  padding: 10px 5px;\n  text-align: center;\n  position: relative; }\n\n.card-box img {\n    width: 44px;\n    margin: 0 auto; }\n\n.card-box h3 {\n    font-size: 16px;\n    color: #000000;\n    margin: 5px 0;\n    height: 36px;\n    overflow: hidden; }\n\n.card-box h4 {\n    font-size: 18px;\n    color: #ffffff;\n    margin: 5px 0; }\n\n.customer-details {\n  border: 1px solid #D2D2D2; }\n\n.customer-details ul {\n    padding: 0;\n    margin: 0; }\n\n.customer-details ul li {\n      /* OLD - iOS 6-, Safari 3.1-6 */\n      /* OLD - Firefox 19- (buggy but mostly works) */\n      /* TWEENER - IE 10 */\n      /* NEW - Chrome */\n      display: flex;\n      list-style: none;\n      width: 100%;\n      padding: 5px; }\n\n.customer-details ul li .left {\n        font-size: 14px;\n        color: #979797;\n        width: 50%; }\n\n.customer-details ul li .right {\n        font-size: 14px;\n        color: #000000;\n        width: 50%; }\n\n.text-grey {\n  color: #A7A7A7; }\n\n.text-danger {\n  color: #F83956; }\n\n.action-dd {\n  background: #A7CF46;\n  border: 1px solid #A7CF46;\n  color: #fff;\n  border-radius: 5px; }\n\n.action-dd .select-placeholder {\n    color: red;\n    opacity: .33; }\n\n.action-btn {\n  margin-right: 10px;\n  margin-top: 5px;\n  display: inline-block; }\n\n.selectedFullSection {\n  position: relative; }\n\n.selectedFullSection .customer-details {\n    border: 1px solid rgba(175, 229, 238, 0.75);\n    background-color: rgba(175, 229, 238, 0.3); }\n\n.selected {\n  position: relative; }\n\n.selected .customer-details {\n    border: 1px solid rgba(175, 229, 238, 0.75);\n    background-color: rgba(175, 229, 238, 0.3); }\n\n.selected:after {\n    content: \"\";\n    background-image: url('check_icon_blue.svg');\n    background-repeat: no-repeat;\n    width: 28px;\n    height: 28px;\n    position: absolute;\n    top: 5px;\n    right: 5px; }\n\n.unselected {\n  position: relative; }\n\n.unselected .customer-details {\n    border: 1px solid rgba(175, 229, 238, 0.75);\n    background-color: rgba(175, 229, 238, 0.3); }\n\n.unselected:after {\n    content: \"\";\n    background-image: url('uncheck_icon_blue.svg');\n    background-repeat: no-repeat;\n    width: 28px;\n    height: 28px;\n    position: absolute;\n    top: 5px;\n    right: 5px; }\n\n.select-all-bg {\n  border: 1px solid rgba(151, 151, 151, 0.4);\n  padding: 0;\n  margin: 0 auto;\n  width: 97%;\n  position: relative; }\n\n.select-all-bg .delete-all-btn {\n    position: absolute;\n    top: 0;\n    right: 15px;\n    z-index: 10; }\n\n.fixedSection {\n  position: fixed;\n  top: 64px;\n  left: 0;\n  right: 0;\n  background-color: white;\n  z-index: 999999; }\n\n.shortcut-icons {\n  position: absolute;\n  top: 10px;\n  right: 10px; }\n\n.shortcut-icons > li {\n    padding: 3px 4px !important; }\n\n.shortcut-icons > li > a {\n      border: 1px solid #D2D2D2;\n      padding: 5px 5px;\n      display: block;\n      min-width: 40px;\n      text-align: center;\n      background: #fff;\n      min-height: 28px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YXAvRGVza3RvcC9Jb25pY19Qcm9qZWN0L2FyY2hpdmUgaW9uaWMgZlByb2plY3Qvb2xkIGFyY2hpdmUgMi9BcmNoaXZlIDIvc3JjL2FwcC9vcmRlci10cmFja2luZy9vcmRlci10cmFja2luZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFKdEI7SUFNUSxXQUFXO0lBQ1gsY0FBYyxFQUFBOztBQVB0QjtJQVVRLGVBQWU7SUFDZixjQUFjO0lBQ2QsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0IsRUFBQTs7QUFkeEI7SUFpQlEsZUFBZTtJQUNmLGNBQWM7SUFDZCxhQUFhLEVBQUE7O0FBR3JCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRDdCO0lBR1EsVUFBVTtJQUNWLFNBQVMsRUFBQTs7QUFKakI7TUFNdUMsK0JBQUE7TUFDQSwrQ0FBQTtNQUNBLG9CQUFBO01BQ0EsaUJBQUE7TUFDM0IsYUFBYTtNQUNiLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsWUFBWSxFQUFBOztBQWJ4QjtRQWVnQixlQUFlO1FBQ2YsY0FBYztRQUNkLFVBQVUsRUFBQTs7QUFqQjFCO1FBb0JnQixlQUFlO1FBQ2YsY0FBYztRQUNkLFVBQVUsRUFBQTs7QUFLMUI7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNJLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUp0QjtJQU1RLFVBQVU7SUFDVixZQUFZLEVBQUE7O0FBSXBCO0VBQ0ksa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixxQkFBcUIsRUFBQTs7QUFJekI7RUFDSSxrQkFBa0IsRUFBQTs7QUFEdEI7SUFHUSwyQ0FBMkM7SUFDM0MsMENBQTJDLEVBQUE7O0FBY25EO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRHRCO0lBR1EsMkNBQTJDO0lBQzNDLDBDQUEyQyxFQUFBOztBQUpuRDtJQU9RLFdBQVc7SUFDWCw0Q0FBOEQ7SUFDOUQsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVLEVBQUE7O0FBSWxCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRHRCO0lBR1EsMkNBQTJDO0lBQzNDLDBDQUEyQyxFQUFBOztBQUpuRDtJQU9RLFdBQVc7SUFDWCw4Q0FBZ0U7SUFDaEUsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVLEVBQUE7O0FBSWxCO0VBQ0ksMENBQTBDO0VBQzFDLFVBQVU7RUFDVixjQUFjO0VBQ2QsVUFBVTtFQUNWLGtCQUFrQixFQUFBOztBQUx0QjtJQU9RLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVztJQUNYLFdBQVcsRUFBQTs7QUFJbkI7RUFDSSxlQUFlO0VBQ2YsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsdUJBQXVCO0VBQ3ZCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVcsRUFBQTs7QUFIZjtJQUtRLDJCQUEyQixFQUFBOztBQUxuQztNQU9ZLHlCQUF5QjtNQUN6QixnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLGVBQWU7TUFDZixrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvb3JkZXItdHJhY2tpbmcvb3JkZXItdHJhY2tpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLXByaW1hcnl7XG4gICAgYmFja2dyb3VuZDogIzFCOThENTtcbn1cbi5jYXJkLWJveHtcbiAgICBiYWNrZ3JvdW5kOiAjQTdDRjQ2O1xuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaW1ne1xuICAgICAgICB3aWR0aDogNDRweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIGgze1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIGg0e1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBtYXJnaW46IDVweCAwOyBcbiAgICB9XG59XG4uY3VzdG9tZXItZGV0YWlsc3tcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDJEMkQyO1xuICAgIHVse1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGxpe1xuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7ICAgICAgLyogT0xEIC0gaU9TIDYtLCBTYWZhcmkgMy4xLTYgKi9cbiAgICAgICAgICAgIGRpc3BsYXk6IC1tb3otYm94OyAgICAgICAgIC8qIE9MRCAtIEZpcmVmb3ggMTktIChidWdneSBidXQgbW9zdGx5IHdvcmtzKSAqL1xuICAgICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7ICAgICAgLyogVFdFRU5FUiAtIElFIDEwICovXG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7ICAgICAvKiBORVcgLSBDaHJvbWUgKi9cbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAubGVmdHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM5Nzk3OTc7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yaWdodHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi50ZXh0LWdyZXl7XG4gICAgY29sb3I6ICNBN0E3QTc7XG59XG4udGV4dC1kYW5nZXJ7XG4gICAgY29sb3I6ICNGODM5NTY7XG59XG4uYWN0aW9uLWRke1xuICAgIGJhY2tncm91bmQ6ICNBN0NGNDY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0E3Q0Y0NjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLnNlbGVjdC1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIG9wYWNpdHk6IC4zMztcbiAgICB9XG4gICAgXG59XG4uYWN0aW9uLWJ0bntcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBcbn1cblxuLnNlbGVjdGVkRnVsbFNlY3Rpb257XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5jdXN0b21lci1kZXRhaWxze1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE3NSwgMjI5LCAyMzgsIDAuNzUpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3NSwgMjI5LCAyMzgsIDAuMzApO1xuICAgIH1cbiAgICAvLyAmOmFmdGVye1xuICAgIC8vICAgICBjb250ZW50OiBcIlwiO1xuICAgIC8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaW1hZ2VzL2NoZWNrX2ljb25fYmx1ZS5zdmcnKTtcbiAgICAvLyAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAvLyAgICAgd2lkdGg6IDI4cHg7XG4gICAgLy8gICAgIGhlaWdodDogMjhweDtcbiAgICAvLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vICAgICB0b3A6IDE1cHg7XG4gICAgLy8gICAgIHJpZ2h0OiAxNXB4O1xuICAgIC8vIH1cbn1cblxuLnNlbGVjdGVke1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuY3VzdG9tZXItZGV0YWlsc3tcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNzUsIDIyOSwgMjM4LCAwLjc1KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzUsIDIyOSwgMjM4LCAwLjMwKTtcbiAgICB9XG4gICAgJjphZnRlcntcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvYXNzZXRzL2ltYWdlcy9jaGVja19pY29uX2JsdWUuc3ZnJyk7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgfVxufVxuXG4udW5zZWxlY3RlZHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmN1c3RvbWVyLWRldGFpbHN7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTc1LCAyMjksIDIzOCwgMC43NSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc1LCAyMjksIDIzOCwgMC4zMCk7XG4gICAgfVxuICAgICY6YWZ0ZXJ7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjL2Fzc2V0cy9pbWFnZXMvdW5jaGVja19pY29uX2JsdWUuc3ZnJyk7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgfVxufVxuXG4uc2VsZWN0LWFsbC1iZ3tcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1MSwgMTUxLCAxNTEsIDAuNCk7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogOTclO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuZGVsZXRlLWFsbC1idG57XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgfVxufVxuXG4uZml4ZWRTZWN0aW9ue1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDY0cHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB6LWluZGV4OiA5OTk5OTk7XG59XG5cbi5zaG9ydGN1dC1pY29uc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgICY+bGl7XG4gICAgICAgIHBhZGRpbmc6IDNweCA0cHggIWltcG9ydGFudDtcbiAgICAgICAgJj5he1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0QyRDJEMjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCA1cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1pbi13aWR0aDogNDBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAyOHB4O1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

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
        console.log("this.orderDetails", this.orderDetails, this.orderPosition, this.orderProductDetails, this.order_shyplite_details);
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
        console.log("Your track sending myData: ", myData);
        this.util.presentLoading();
        this.util.getTypeDetailsWithAuth('users/track.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            console.log("Your order data: ", result);
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
            console.log("Your track sending myData: ", myData);
            this.util.presentLoading();
            this.util.getTypeDetailsWithAuth('users/returntrack.json', myData).subscribe(function (result) {
                _this.util.dismissLoader();
                console.log("Your order data: ", result);
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