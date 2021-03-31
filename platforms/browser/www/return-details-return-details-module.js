(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["return-details-return-details-module"],{

/***/ "./src/app/return-details/return-details.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/return-details/return-details.module.ts ***!
  \*********************************************************/
/*! exports provided: ReturnDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnDetailsPageModule", function() { return ReturnDetailsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _return_details_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./return-details.page */ "./src/app/return-details/return-details.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _return_details_page__WEBPACK_IMPORTED_MODULE_5__["ReturnDetailsPage"]
    }
];
var ReturnDetailsPageModule = /** @class */ (function () {
    function ReturnDetailsPageModule() {
    }
    ReturnDetailsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_return_details_page__WEBPACK_IMPORTED_MODULE_5__["ReturnDetailsPage"]]
        })
    ], ReturnDetailsPageModule);
    return ReturnDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/return-details/return-details.page.html":
/*!*********************************************************!*\
  !*** ./src/app/return-details/return-details.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Return Order</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid *ngIf=\"returnStatus != 2\">\n    <ion-row class=\"cartItem\">\n      <ion-col size=\"4\">\n        <div class=\"imgwrp\">\n          <ion-img [src]=\"orderProductDetails.product.photo\"></ion-img>\n        </div>\n      </ion-col>\n      <ion-col size=\"8\">\n        <h2 class=\"cName\">{{orderProductDetails.product.name | slice:0:20}} </h2>\n        <div class=\"Pprice\">\n          <span class=\"crPrice\">Quantity - {{orderProductDetails.quantity}}</span>\n          <span class=\"crPrice\">Price - {{orderProductDetails.item_gross_amount}}</span>\n        </div>\n      </ion-col>\n\n      <ion-card>\n        <ion-textarea placeholder=\"Write reason for return...\" style=\"border-width: 2px;\" [(ngModel)]=\"returnReason\"></ion-textarea>\n        <ion-button shape=\"round\" fill=\"outline\" expand=\"full\" (click)=\"submitReturn()\">\n          Return\n        </ion-button>\n      </ion-card>\n      <ion-col size=\"12\" *ngIf=\"isReturnPlace\">\n        <span class=\"crPrice\">Return Status - {{returnStatus}}</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-grid *ngIf=\"returnStatus == '2'\">\n  <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\" style=\"margin-top: 5px;\">\n    <ion-item>\n      <ion-label position=\"stacked\">Account Name <ion-text color=\"danger\">*</ion-text>\n      </ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"accName\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Bank Name <ion-text color=\"danger\">*</ion-text>\n      </ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"bankName\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Account No <ion-text color=\"danger\">*</ion-text>\n      </ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"accNo\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">IFSC Code <ion-text color=\"danger\">*</ion-text>\n      </ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"ifscCode\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Branch Name <ion-text color=\"danger\">*</ion-text>\n      </ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"branchName\"></ion-input>\n    </ion-item>\n  </ion-list>\n</ion-grid>\n\n\n  <ion-card *ngIf=\"returnStatus == '2'\">\n    <ion-button shape=\"round\" fill=\"outline\" expand=\"full\" (click)=\"submitBankDetails()\">\n      Submit\n    </ion-button>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/return-details/return-details.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/return-details/return-details.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".company-logo {\n  width: 78px;\n  height: 78px;\n  border-radius: 50%;\n  border: 8px solid #1B98D5;\n  background: #979797;\n  overflow: hidden; }\n\n.company-details p {\n  font-size: 12px;\n  color: #A7A7A7;\n  line-height: 18px;\n  margin: 0; }\n\n.company-details h4 {\n  font-size: 16px;\n  color: #000;\n  font-weight: 600; }\n\n.company-details h6 {\n  color: #A7A7A7;\n  margin: 2px 0;\n  font-size: 15px; }\n\n.company-details h6 strong {\n    color: #000;\n    font-weight: 600; }\n\nion-content ion-label {\n  font-size: 17px;\n  color: #A7CF46;\n  font-weight: 400; }\n\nion-content ion-textarea {\n  border: 1px solid #CCCCCC;\n  padding: 5px;\n  height: 160px;\n  border-radius: 6px; }\n\n.customer-details {\n  border: 1px solid #D2D2D2;\n  margin: 5px 0;\n  width: 100%; }\n\n.customer-details ul {\n    padding: 0;\n    margin: 0; }\n\n.customer-details ul li {\n      /* OLD - iOS 6-, Safari 3.1-6 */\n      /* OLD - Firefox 19- (buggy but mostly works) */\n      /* TWEENER - IE 10 */\n      /* NEW - Chrome */\n      display: flex;\n      list-style: none;\n      width: 100%;\n      padding: 5px; }\n\n.customer-details ul li .left {\n        font-size: 14px;\n        color: #979797;\n        width: 50%; }\n\n.customer-details ul li .right {\n        font-size: 14px;\n        color: #000000;\n        width: 50%; }\n\n.cartItem {\n  border-bottom: 5px solid rgba(0, 0, 0, 0.08);\n  padding-top: 7px; }\n\n.cName {\n  margin: 0 0 5px;\n  font-size: 18px; }\n\n.Pprice {\n  margin: 10px 0; }\n\n.crPrice {\n  font-size: 18px;\n  display: inline-block;\n  margin-right: 10px; }\n\n.oldPrice {\n  text-decoration: line-through;\n  color: rgba(0, 0, 0, 0.6);\n  display: inline-block;\n  margin-right: 15px; }\n\n.offPrice {\n  color: green; }\n\n.unitP {\n  font-size: 14px;\n  float: right;\n  width: 50px;\n  padding: 4px; }\n\n.qty {\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.24);\n  margin-top: 9px;\n  border-radius: 5px;\n  max-width: 70px;\n  margin: 10px auto 3px; }\n\n.imgwrp {\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.35);\n  padding: 1px; }\n\n.tAmnt {\n  margin-top: 13px; }\n\n.rmvBtn.button-outline {\n  --border-width: 1px;\n  --border-color: rgba(0, 0, 0, 0.35);\n  height: 30px;\n  width: 120px; }\n\n.infoC {\n  text-align: right;\n  margin: 10px 0; }\n\n.PdActins {\n  text-align: center;\n  margin-top: 30px; }\n\n.PdActins ion-button {\n  width: 48%;\n  margin: 0 2px; }\n\nion-content ion-label {\n  font-size: 17px;\n  font-weight: 400; }\n\nion-content ion-textarea {\n  border: 1px solid #CCCCCC;\n  padding: 5px;\n  height: 160px;\n  border-radius: 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YXAvRGVza3RvcC9Jb25pY19Qcm9qZWN0L2FyY2hpdmUgaW9uaWMgZlByb2plY3Qvb2xkIGFyY2hpdmUgMi9BcmNoaXZlIDIvc3JjL2FwcC9yZXR1cm4tZGV0YWlscy9yZXR1cm4tZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBOztBQUVwQjtFQUVRLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFNBQVMsRUFBQTs7QUFMakI7RUFRUSxlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQixFQUFBOztBQVZ4QjtFQWFRLGNBQWM7RUFDZCxhQUFZO0VBQ1osZUFBZSxFQUFBOztBQWZ2QjtJQWlCWSxXQUFXO0lBQ1gsZ0JBQWdCLEVBQUE7O0FBSzVCO0VBRVEsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFKeEI7RUFPUSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFJMUI7RUFDSSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLFdBQVcsRUFBQTs7QUFIZjtJQUtRLFVBQVU7SUFDVixTQUFTLEVBQUE7O0FBTmpCO01BUXVDLCtCQUFBO01BQ0EsK0NBQUE7TUFDQSxvQkFBQTtNQUNBLGlCQUFBO01BQzNCLGFBQWE7TUFDYixnQkFBZ0I7TUFDaEIsV0FBVztNQUNYLFlBQVksRUFBQTs7QUFmeEI7UUFpQmdCLGVBQWU7UUFDZixjQUFjO1FBQ2QsVUFBVSxFQUFBOztBQW5CMUI7UUFzQmdCLGVBQWU7UUFDZixjQUFjO1FBQ2QsVUFBVSxFQUFBOztBQU0xQjtFQUNJLDRDQUE0QztFQUM1QyxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUVuQjtFQUFTLGNBQWMsRUFBQTs7QUFDdkI7RUFDSSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGtCQUFrQixFQUFBOztBQUV0QjtFQUFVLFlBQVksRUFBQTs7QUFDdEI7RUFDSSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksdUNBQXVDO0VBQ3ZDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLHVDQUF1QztFQUN2QyxZQUFZLEVBQUE7O0FBRWhCO0VBQVcsZ0JBQWdCLEVBQUE7O0FBRTNCO0VBQ0ksbUJBQWU7RUFDZixtQ0FBZTtFQUNmLFlBQVc7RUFDWCxZQUFXLEVBQUE7O0FBR2Y7RUFDSSxpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxVQUFVO0VBQ1YsYUFBYSxFQUFBOztBQUdqQjtFQUVRLGVBQWU7RUFFZixnQkFBZ0IsRUFBQTs7QUFKeEI7RUFPUSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JldHVybi1kZXRhaWxzL3JldHVybi1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wYW55LWxvZ297XG4gICAgd2lkdGg6IDc4cHg7XG4gICAgaGVpZ2h0OiA3OHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDhweCBzb2xpZCAjMUI5OEQ1O1xuICAgIGJhY2tncm91bmQ6ICM5Nzk3OTc7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jb21wYW55LWRldGFpbHN7XG4gICAgcHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogI0E3QTdBNztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgaDR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICAgIGg2e1xuICAgICAgICBjb2xvcjogI0E3QTdBNztcbiAgICAgICAgbWFyZ2luOjJweCAwO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIHN0cm9uZ3tcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLWNvbnRlbnR7XG4gICAgaW9uLWxhYmVse1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIGNvbG9yOiAjQTdDRjQ2O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cbiAgICBpb24tdGV4dGFyZWF7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIH1cbn1cblxuLmN1c3RvbWVyLWRldGFpbHN7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0QyRDJEMjtcbiAgICBtYXJnaW46IDVweCAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHVse1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGxpe1xuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7ICAgICAgLyogT0xEIC0gaU9TIDYtLCBTYWZhcmkgMy4xLTYgKi9cbiAgICAgICAgICAgIGRpc3BsYXk6IC1tb3otYm94OyAgICAgICAgIC8qIE9MRCAtIEZpcmVmb3ggMTktIChidWdneSBidXQgbW9zdGx5IHdvcmtzKSAqL1xuICAgICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7ICAgICAgLyogVFdFRU5FUiAtIElFIDEwICovXG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7ICAgICAvKiBORVcgLSBDaHJvbWUgKi9cbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAubGVmdHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM5Nzk3OTc7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yaWdodHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNhcnRJdGVte1xuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgIHBhZGRpbmctdG9wOiA3cHg7XG59XG4uY05hbWV7XG4gICAgbWFyZ2luOiAwIDAgNXB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbi5QcHJpY2V7IG1hcmdpbjogMTBweCAwO31cbi5jclByaWNle1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLm9sZFByaWNle1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5vZmZQcmljZXtjb2xvcjogZ3JlZW47fVxuLnVuaXRQe1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgcGFkZGluZzogNHB4O1xufVxuLnF0eXtcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgbWFyZ2luLXRvcDogOXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXgtd2lkdGg6IDcwcHg7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gM3B4O1xufVxuLmltZ3dycHtcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gICAgcGFkZGluZzogMXB4O1xufVxuLnRBbW50eyAgICBtYXJnaW4tdG9wOiAxM3B4O31cblxuLnJtdkJ0bi5idXR0b24tb3V0bGluZSB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICAtLWJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgICBoZWlnaHQ6MzBweDtcbiAgICB3aWR0aDoxMjBweDtcbn1cblxuLmluZm9De1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbjogMTBweCAwO1xufVxuLlBkQWN0aW5ze1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLlBkQWN0aW5zIGlvbi1idXR0b257XG4gICAgd2lkdGg6IDQ4JTtcbiAgICBtYXJnaW46IDAgMnB4O1xufVxuXG5pb24tY29udGVudHtcbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgLy9jb2xvcjogI0E3Q0Y0NjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG4gICAgaW9uLXRleHRhcmVhe1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGhlaWdodDogMTYwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICB9XG59XG5cbi8vIC5pdGVtLWlucHV0IHtcbi8vICAgICBwYWRkaW5nOiA1cHg7XG4vLyAgICAgYm9yZGVyOiBzb2xpZCAuNXB4IGdyZXk7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuLy8gfSJdfQ== */"

/***/ }),

/***/ "./src/app/return-details/return-details.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/return-details/return-details.page.ts ***!
  \*******************************************************/
/*! exports provided: ReturnDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnDetailsPage", function() { return ReturnDetailsPage; });
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




var ReturnDetailsPage = /** @class */ (function () {
    function ReturnDetailsPage(util, alertController, events, navCtrl, route, modalController, activeroute, menuCtrl) {
        this.util = util;
        this.alertController = alertController;
        this.events = events;
        this.navCtrl = navCtrl;
        this.route = route;
        this.modalController = modalController;
        this.activeroute = activeroute;
        this.menuCtrl = menuCtrl;
        this.orderProductPosition = 0;
        this.accName = "";
        this.bankName = "";
        this.accNo = "";
        this.ifscCode = "";
        this.branchName = "";
        this.returnStatus = "";
        this.returnReason = "";
        this.isReturnPlace = false;
        this.orderDetails = this.route.getCurrentNavigation().extras.state.parms;
        this.orderProductPosition = this.route.getCurrentNavigation().extras.state.params2;
        this.orderProductDetails = this.orderDetails.invoice_items[this.orderProductPosition];
        this.returnStatus = this.orderDetails.invoice_items[0].return_status;
        //this.returnStatus = "2"
        console.log("this.orderDetails", this.orderDetails);
    }
    ReturnDetailsPage.prototype.ngOnInit = function () {
    };
    ReturnDetailsPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    ReturnDetailsPage.prototype.submitReturn = function () {
        if (this.returnReason == '') {
            this.util.showToast('Please mention the reason for return');
        }
        else {
            this.returnOrderPost();
        }
    };
    ReturnDetailsPage.prototype.returnOrderPost = function () {
        var _this = this;
        var myData = JSON.stringify({
            id: this.orderProductDetails.id,
            return_reason: this.returnReason
        });
        this.util.presentLoading();
        console.log("Your return request myData: ", myData);
        this.util.getTypeDetailsWithAuth('users/returnorder.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            console.log("Your data: ", result);
            _this.data = result;
            if (_this.data.success) {
                _this.returnStatus = _this.data.data.status;
                _this.isReturnPlace = true;
                _this.navCtrl.navigateForward('/order-list');
                //this.bankDetailsSubmit()
            }
            else {
                _this.util.showAlert('Error!', _this.data.status ? _this.data.status : "Please try again later");
            }
        }, function (error) {
            _this.util.dismissLoader();
            _this.util.showAlert('Error!', 'Server error occured. Try again.');
        });
    };
    ReturnDetailsPage.prototype.submitBankDetails = function () {
        if (this.accName == '') {
            this.util.showToast('Please enter your account name');
        }
        else if (this.bankName == '') {
            this.util.showToast('Please enter your bank name');
        }
        else if (this.accNo == '') {
            this.util.showToast('Please enter account no');
        }
        else if (this.ifscCode == '') {
            this.util.showToast('Please enter Ifsc code');
        }
        else if (this.branchName == '') {
            this.util.showToast('Please enter branch name');
        }
        else {
            this.bankDetailsSubmit();
        }
    };
    ReturnDetailsPage.prototype.bankDetailsSubmit = function () {
        var _this = this;
        var myData = JSON.stringify({
            id: this.orderDetails.id,
            account_name: this.accName,
            bank_name: this.bankName,
            account_no: this.accNo,
            ifsc_code: this.ifscCode,
            branch_name: this.branchName
        });
        this.util.presentLoading();
        console.log("Your bankDetails myData: ", myData);
        this.util.getTypeDetailsWithAuth('users/bankdetails.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            console.log("Your data: ", result);
            _this.data = result;
            if (_this.data.success) {
                _this.util.showToast(_this.data.status);
                _this.navCtrl.navigateForward('/order-list');
                //localStorage.setItem('loginDataKKart', JSON.stringify(this.data.data.address));
                //this.events.publish('user:login')
            }
            else {
                _this.util.showAlert('Error!', _this.data.status ? _this.data.status : "Please try again later");
            }
        }, function (error) {
            _this.util.dismissLoader();
            _this.util.showAlert('Error!', 'Server error occured. Try again.');
        });
    };
    ReturnDetailsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-return-details',
            template: __webpack_require__(/*! ./return-details.page.html */ "./src/app/return-details/return-details.page.html"),
            styles: [__webpack_require__(/*! ./return-details.page.scss */ "./src/app/return-details/return-details.page.scss")]
        }),
        __metadata("design:paramtypes", [_api_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], ReturnDetailsPage);
    return ReturnDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=return-details-return-details-module.js.map