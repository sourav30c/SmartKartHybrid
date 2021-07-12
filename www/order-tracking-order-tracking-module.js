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

module.exports = ".bg-primary {\n  background: #1B98D5; }\n\n.card-box {\n  background: #A7CF46;\n  padding: 10px 5px;\n  text-align: center;\n  position: relative; }\n\n.card-box img {\n    width: 44px;\n    margin: 0 auto; }\n\n.card-box h3 {\n    font-size: 16px;\n    color: #000000;\n    margin: 5px 0;\n    height: 36px;\n    overflow: hidden; }\n\n.card-box h4 {\n    font-size: 18px;\n    color: #ffffff;\n    margin: 5px 0; }\n\n.customer-details {\n  border: 1px solid #D2D2D2; }\n\n.customer-details ul {\n    padding: 0;\n    margin: 0; }\n\n.customer-details ul li {\n      /* OLD - iOS 6-, Safari 3.1-6 */\n      /* OLD - Firefox 19- (buggy but mostly works) */\n      /* TWEENER - IE 10 */\n      /* NEW - Chrome */\n      display: flex;\n      list-style: none;\n      width: 100%;\n      padding: 5px; }\n\n.customer-details ul li .left {\n        font-size: 14px;\n        color: #979797;\n        width: 50%; }\n\n.customer-details ul li .right {\n        font-size: 14px;\n        color: #000000;\n        width: 50%; }\n\n.text-grey {\n  color: #A7A7A7; }\n\n.text-danger {\n  color: #F83956; }\n\n.action-dd {\n  background: #A7CF46;\n  border: 1px solid #A7CF46;\n  color: #fff;\n  border-radius: 5px; }\n\n.action-dd .select-placeholder {\n    color: red;\n    opacity: .33; }\n\n.action-btn {\n  margin-right: 10px;\n  margin-top: 5px;\n  display: inline-block; }\n\n.selectedFullSection {\n  position: relative; }\n\n.selectedFullSection .customer-details {\n    border: 1px solid rgba(175, 229, 238, 0.75);\n    background-color: rgba(175, 229, 238, 0.3); }\n\n.selected {\n  position: relative; }\n\n.selected .customer-details {\n    border: 1px solid rgba(175, 229, 238, 0.75);\n    background-color: rgba(175, 229, 238, 0.3); }\n\n.selected:after {\n    content: \"\";\n    background-image: url('check_icon_blue.svg');\n    background-repeat: no-repeat;\n    width: 28px;\n    height: 28px;\n    position: absolute;\n    top: 5px;\n    right: 5px; }\n\n.unselected {\n  position: relative; }\n\n.unselected .customer-details {\n    border: 1px solid rgba(175, 229, 238, 0.75);\n    background-color: rgba(175, 229, 238, 0.3); }\n\n.unselected:after {\n    content: \"\";\n    background-image: url('uncheck_icon_blue.svg');\n    background-repeat: no-repeat;\n    width: 28px;\n    height: 28px;\n    position: absolute;\n    top: 5px;\n    right: 5px; }\n\n.select-all-bg {\n  border: 1px solid rgba(151, 151, 151, 0.4);\n  padding: 0;\n  margin: 0 auto;\n  width: 97%;\n  position: relative; }\n\n.select-all-bg .delete-all-btn {\n    position: absolute;\n    top: 0;\n    right: 15px;\n    z-index: 10; }\n\n.fixedSection {\n  position: fixed;\n  top: 64px;\n  left: 0;\n  right: 0;\n  background-color: white;\n  z-index: 999999; }\n\n.shortcut-icons {\n  position: absolute;\n  top: 10px;\n  right: 10px; }\n\n.shortcut-icons > li {\n    padding: 3px 4px !important; }\n\n.shortcut-icons > li > a {\n      border: 1px solid #D2D2D2;\n      padding: 5px 5px;\n      display: block;\n      min-width: 40px;\n      text-align: center;\n      background: #fff;\n      min-height: 28px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWF2ZXJzd2ViL0Rlc2t0b3AvU21hcnRLYXJ0SHlicmlkL3NyYy9hcHAvb3JkZXItdHJhY2tpbmcvb3JkZXItdHJhY2tpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBSnRCO0lBTVEsV0FBVztJQUNYLGNBQWMsRUFBQTs7QUFQdEI7SUFVUSxlQUFlO0lBQ2YsY0FBYztJQUNkLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCLEVBQUE7O0FBZHhCO0lBaUJRLGVBQWU7SUFDZixjQUFjO0lBQ2QsYUFBYSxFQUFBOztBQUdyQjtFQUNJLHlCQUF5QixFQUFBOztBQUQ3QjtJQUdRLFVBQVU7SUFDVixTQUFTLEVBQUE7O0FBSmpCO01BTXVDLCtCQUFBO01BQ0EsK0NBQUE7TUFDQSxvQkFBQTtNQUNBLGlCQUFBO01BQzNCLGFBQWE7TUFDYixnQkFBZ0I7TUFDaEIsV0FBVztNQUNYLFlBQVksRUFBQTs7QUFieEI7UUFlZ0IsZUFBZTtRQUNmLGNBQWM7UUFDZCxVQUFVLEVBQUE7O0FBakIxQjtRQW9CZ0IsZUFBZTtRQUNmLGNBQWM7UUFDZCxVQUFVLEVBQUE7O0FBSzFCO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFKdEI7SUFNUSxVQUFVO0lBQ1YsWUFBWSxFQUFBOztBQUlwQjtFQUNJLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YscUJBQXFCLEVBQUE7O0FBSXpCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRHRCO0lBR1EsMkNBQTJDO0lBQzNDLDBDQUEyQyxFQUFBOztBQWNuRDtFQUNJLGtCQUFrQixFQUFBOztBQUR0QjtJQUdRLDJDQUEyQztJQUMzQywwQ0FBMkMsRUFBQTs7QUFKbkQ7SUFPUSxXQUFXO0lBQ1gsNENBQThEO0lBQzlELDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVSxFQUFBOztBQUlsQjtFQUNJLGtCQUFrQixFQUFBOztBQUR0QjtJQUdRLDJDQUEyQztJQUMzQywwQ0FBMkMsRUFBQTs7QUFKbkQ7SUFPUSxXQUFXO0lBQ1gsOENBQWdFO0lBQ2hFLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVSxFQUFBOztBQUlsQjtFQUNJLDBDQUEwQztFQUMxQyxVQUFVO0VBQ1YsY0FBYztFQUNkLFVBQVU7RUFDVixrQkFBa0IsRUFBQTs7QUFMdEI7SUFPUSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFdBQVc7SUFDWCxXQUFXLEVBQUE7O0FBSW5CO0VBQ0ksZUFBZTtFQUNmLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLHVCQUF1QjtFQUN2QixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXLEVBQUE7O0FBSGY7SUFLUSwyQkFBMkIsRUFBQTs7QUFMbkM7TUFPWSx5QkFBeUI7TUFDekIsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCxlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL29yZGVyLXRyYWNraW5nL29yZGVyLXRyYWNraW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1wcmltYXJ5e1xuICAgIGJhY2tncm91bmQ6ICMxQjk4RDU7XG59XG4uY2FyZC1ib3h7XG4gICAgYmFja2dyb3VuZDogI0E3Q0Y0NjtcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDQ0cHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICBoM3tcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbiAgICBoNHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgbWFyZ2luOiA1cHggMDsgXG4gICAgfVxufVxuLmN1c3RvbWVyLWRldGFpbHN7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0QyRDJEMjtcbiAgICB1bHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBsaXtcbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94OyAgICAgIC8qIE9MRCAtIGlPUyA2LSwgU2FmYXJpIDMuMS02ICovXG4gICAgICAgICAgICBkaXNwbGF5OiAtbW96LWJveDsgICAgICAgICAvKiBPTEQgLSBGaXJlZm94IDE5LSAoYnVnZ3kgYnV0IG1vc3RseSB3b3JrcykgKi9cbiAgICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94OyAgICAgIC8qIFRXRUVORVIgLSBJRSAxMCAqL1xuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4OyAgICAgLyogTkVXIC0gQ2hyb21lICovXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgLmxlZnR7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTc5Nzk3O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmlnaHR7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4udGV4dC1ncmV5e1xuICAgIGNvbG9yOiAjQTdBN0E3O1xufVxuLnRleHQtZGFuZ2Vye1xuICAgIGNvbG9yOiAjRjgzOTU2O1xufVxuLmFjdGlvbi1kZHtcbiAgICBiYWNrZ3JvdW5kOiAjQTdDRjQ2O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNBN0NGNDY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC5zZWxlY3QtcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICBvcGFjaXR5OiAuMzM7XG4gICAgfVxuICAgIFxufVxuLmFjdGlvbi1idG57XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgXG59XG5cbi5zZWxlY3RlZEZ1bGxTZWN0aW9ue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuY3VzdG9tZXItZGV0YWlsc3tcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNzUsIDIyOSwgMjM4LCAwLjc1KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzUsIDIyOSwgMjM4LCAwLjMwKTtcbiAgICB9XG4gICAgLy8gJjphZnRlcntcbiAgICAvLyAgICAgY29udGVudDogXCJcIjtcbiAgICAvLyAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvYXNzZXRzL2ltYWdlcy9jaGVja19pY29uX2JsdWUuc3ZnJyk7XG4gICAgLy8gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgLy8gICAgIHdpZHRoOiAyOHB4O1xuICAgIC8vICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyAgICAgdG9wOiAxNXB4O1xuICAgIC8vICAgICByaWdodDogMTVweDtcbiAgICAvLyB9XG59XG5cbi5zZWxlY3RlZHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmN1c3RvbWVyLWRldGFpbHN7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTc1LCAyMjksIDIzOCwgMC43NSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc1LCAyMjksIDIzOCwgMC4zMCk7XG4gICAgfVxuICAgICY6YWZ0ZXJ7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjL2Fzc2V0cy9pbWFnZXMvY2hlY2tfaWNvbl9ibHVlLnN2ZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICB3aWR0aDogMjhweDtcbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNXB4O1xuICAgICAgICByaWdodDogNXB4O1xuICAgIH1cbn1cblxuLnVuc2VsZWN0ZWR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5jdXN0b21lci1kZXRhaWxze1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE3NSwgMjI5LCAyMzgsIDAuNzUpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3NSwgMjI5LCAyMzgsIDAuMzApO1xuICAgIH1cbiAgICAmOmFmdGVye1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaW1hZ2VzL3VuY2hlY2tfaWNvbl9ibHVlLnN2ZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICB3aWR0aDogMjhweDtcbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNXB4O1xuICAgICAgICByaWdodDogNXB4O1xuICAgIH1cbn1cblxuLnNlbGVjdC1hbGwtYmd7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNTEsIDE1MSwgMTUxLCAwLjQpO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDk3JTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmRlbGV0ZS1hbGwtYnRue1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgIH1cbn1cblxuLmZpeGVkU2VjdGlvbntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA2NHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgei1pbmRleDogOTk5OTk5O1xufVxuXG4uc2hvcnRjdXQtaWNvbnN7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICByaWdodDogMTBweDtcbiAgICAmPmxpe1xuICAgICAgICBwYWRkaW5nOiAzcHggNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICY+YXtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEMkQyRDI7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggNXB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgbWluLWhlaWdodDogMjhweDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

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