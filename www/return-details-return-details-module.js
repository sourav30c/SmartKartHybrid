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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button style=\"color: #FFCC23\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Return Order</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid *ngIf=\"returnStatus != 2\">\n    <ion-row class=\"cartItem\">\n      <ion-col size=\"4\">\n        <div class=\"imgwrp\">\n          <ion-img [src]=\"orderProductDetails.product.photo\"></ion-img>\n        </div>\n      </ion-col>\n      <ion-col size=\"8\">\n        <h2 class=\"cName\">{{orderProductDetails.product.name | slice:0:20}} </h2>\n        <div class=\"Pprice\">\n          <span class=\"crPrice\">Quantity - {{orderProductDetails.quantity}}</span>\n          <span class=\"crPrice\">Price - {{orderProductDetails.item_gross_amount}}</span>\n        </div>\n      </ion-col>\n\n      <ion-card>\n        <ion-textarea placeholder=\"Write reason for return...\" style=\"border-width: 2px;\" [(ngModel)]=\"returnReason\"></ion-textarea>\n        <ion-button shape=\"round\" fill=\"outline\" expand=\"full\" (click)=\"submitReturn()\">\n          Return\n        </ion-button>\n      </ion-card>\n      <ion-col size=\"12\" *ngIf=\"isReturnPlace\">\n        <span class=\"crPrice\">Return Status - {{returnStatus}}</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-grid *ngIf=\"returnStatus == '2'\">\n  <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\" style=\"margin-top: 5px;\">\n    <ion-item>\n      <ion-label position=\"stacked\">Account Name <ion-text color=\"danger\">*</ion-text>\n      </ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"accName\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Bank Name <ion-text color=\"danger\">*</ion-text>\n      </ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"bankName\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Account No <ion-text color=\"danger\">*</ion-text>\n      </ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"accNo\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">IFSC Code <ion-text color=\"danger\">*</ion-text>\n      </ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"ifscCode\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Branch Name <ion-text color=\"danger\">*</ion-text>\n      </ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"branchName\"></ion-input>\n    </ion-item>\n  </ion-list>\n</ion-grid>\n\n\n  <ion-card *ngIf=\"returnStatus == '2'\">\n    <ion-button shape=\"round\" fill=\"outline\" expand=\"full\" (click)=\"submitBankDetails()\">\n      Submit\n    </ion-button>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/return-details/return-details.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/return-details/return-details.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".company-logo {\n  width: 78px;\n  height: 78px;\n  border-radius: 50%;\n  border: 8px solid #1B98D5;\n  background: #979797;\n  overflow: hidden; }\n\n.company-details p {\n  font-size: 12px;\n  color: #A7A7A7;\n  line-height: 18px;\n  margin: 0; }\n\n.company-details h4 {\n  font-size: 16px;\n  color: #000;\n  font-weight: 600; }\n\n.company-details h6 {\n  color: #A7A7A7;\n  margin: 2px 0;\n  font-size: 15px; }\n\n.company-details h6 strong {\n    color: #000;\n    font-weight: 600; }\n\nion-content ion-label {\n  font-size: 17px;\n  color: #A7CF46;\n  font-weight: 400; }\n\nion-content ion-textarea {\n  border: 1px solid #CCCCCC;\n  padding: 5px;\n  height: 160px;\n  border-radius: 6px; }\n\n.customer-details {\n  border: 1px solid #D2D2D2;\n  margin: 5px 0;\n  width: 100%; }\n\n.customer-details ul {\n    padding: 0;\n    margin: 0; }\n\n.customer-details ul li {\n      /* OLD - iOS 6-, Safari 3.1-6 */\n      /* OLD - Firefox 19- (buggy but mostly works) */\n      /* TWEENER - IE 10 */\n      /* NEW - Chrome */\n      display: flex;\n      list-style: none;\n      width: 100%;\n      padding: 5px; }\n\n.customer-details ul li .left {\n        font-size: 14px;\n        color: #979797;\n        width: 50%; }\n\n.customer-details ul li .right {\n        font-size: 14px;\n        color: #000000;\n        width: 50%; }\n\n.cartItem {\n  border-bottom: 5px solid rgba(0, 0, 0, 0.08);\n  padding-top: 7px; }\n\n.cName {\n  margin: 0 0 5px;\n  font-size: 18px; }\n\n.Pprice {\n  margin: 10px 0; }\n\n.crPrice {\n  font-size: 18px;\n  display: inline-block;\n  margin-right: 10px; }\n\n.oldPrice {\n  text-decoration: line-through;\n  color: rgba(0, 0, 0, 0.6);\n  display: inline-block;\n  margin-right: 15px; }\n\n.offPrice {\n  color: green; }\n\n.unitP {\n  font-size: 14px;\n  float: right;\n  width: 50px;\n  padding: 4px; }\n\n.qty {\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.24);\n  margin-top: 9px;\n  border-radius: 5px;\n  max-width: 70px;\n  margin: 10px auto 3px; }\n\n.imgwrp {\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.35);\n  padding: 1px; }\n\n.tAmnt {\n  margin-top: 13px; }\n\n.rmvBtn.button-outline {\n  --border-width: 1px;\n  --border-color: rgba(0, 0, 0, 0.35);\n  height: 30px;\n  width: 120px; }\n\n.infoC {\n  text-align: right;\n  margin: 10px 0; }\n\n.PdActins {\n  text-align: center;\n  margin-top: 30px; }\n\n.PdActins ion-button {\n  width: 48%;\n  margin: 0 2px; }\n\nion-content ion-label {\n  font-size: 17px;\n  font-weight: 400; }\n\nion-content ion-textarea {\n  border: 1px solid #CCCCCC;\n  padding: 5px;\n  height: 160px;\n  border-radius: 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWF2ZXJzd2ViL0Rlc2t0b3AvU21hcnRLYXJ0SHlicmlkL3NyYy9hcHAvcmV0dXJuLWRldGFpbHMvcmV0dXJuLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFFUSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixTQUFTLEVBQUE7O0FBTGpCO0VBUVEsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFWeEI7RUFhUSxjQUFjO0VBQ2QsYUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFmdkI7SUFpQlksV0FBVztJQUNYLGdCQUFnQixFQUFBOztBQUs1QjtFQUVRLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBSnhCO0VBT1EseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBSTFCO0VBQ0kseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixXQUFXLEVBQUE7O0FBSGY7SUFLUSxVQUFVO0lBQ1YsU0FBUyxFQUFBOztBQU5qQjtNQVF1QywrQkFBQTtNQUNBLCtDQUFBO01BQ0Esb0JBQUE7TUFDQSxpQkFBQTtNQUMzQixhQUFhO01BQ2IsZ0JBQWdCO01BQ2hCLFdBQVc7TUFDWCxZQUFZLEVBQUE7O0FBZnhCO1FBaUJnQixlQUFlO1FBQ2YsY0FBYztRQUNkLFVBQVUsRUFBQTs7QUFuQjFCO1FBc0JnQixlQUFlO1FBQ2YsY0FBYztRQUNkLFVBQVUsRUFBQTs7QUFNMUI7RUFDSSw0Q0FBNEM7RUFDNUMsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFFbkI7RUFBUyxjQUFjLEVBQUE7O0FBQ3ZCO0VBQ0ksZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFBVSxZQUFZLEVBQUE7O0FBQ3RCO0VBQ0ksZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUVoQjtFQUNJLHVDQUF1QztFQUN2QyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSx1Q0FBdUM7RUFDdkMsWUFBWSxFQUFBOztBQUVoQjtFQUFXLGdCQUFnQixFQUFBOztBQUUzQjtFQUNJLG1CQUFlO0VBQ2YsbUNBQWU7RUFDZixZQUFXO0VBQ1gsWUFBVyxFQUFBOztBQUdmO0VBQ0ksaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksVUFBVTtFQUNWLGFBQWEsRUFBQTs7QUFHakI7RUFFUSxlQUFlO0VBRWYsZ0JBQWdCLEVBQUE7O0FBSnhCO0VBT1EseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZXR1cm4tZGV0YWlscy9yZXR1cm4tZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tcGFueS1sb2dve1xuICAgIHdpZHRoOiA3OHB4O1xuICAgIGhlaWdodDogNzhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiA4cHggc29saWQgIzFCOThENTtcbiAgICBiYWNrZ3JvdW5kOiAjOTc5Nzk3O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY29tcGFueS1kZXRhaWxze1xuICAgIHB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6ICNBN0E3QTc7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIGg0e1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICBoNntcbiAgICAgICAgY29sb3I6ICNBN0E3QTc7XG4gICAgICAgIG1hcmdpbjoycHggMDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBzdHJvbmd7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1jb250ZW50e1xuICAgIGlvbi1sYWJlbHtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBjb2xvcjogI0E3Q0Y0NjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG4gICAgaW9uLXRleHRhcmVhe1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGhlaWdodDogMTYwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICB9XG59XG5cbi5jdXN0b21lci1kZXRhaWxze1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEMkQyRDI7XG4gICAgbWFyZ2luOiA1cHggMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB1bHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBsaXtcbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94OyAgICAgIC8qIE9MRCAtIGlPUyA2LSwgU2FmYXJpIDMuMS02ICovXG4gICAgICAgICAgICBkaXNwbGF5OiAtbW96LWJveDsgICAgICAgICAvKiBPTEQgLSBGaXJlZm94IDE5LSAoYnVnZ3kgYnV0IG1vc3RseSB3b3JrcykgKi9cbiAgICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94OyAgICAgIC8qIFRXRUVORVIgLSBJRSAxMCAqL1xuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4OyAgICAgLyogTkVXIC0gQ2hyb21lICovXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgLmxlZnR7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTc5Nzk3O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmlnaHR7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jYXJ0SXRlbXtcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xufVxuLmNOYW1le1xuICAgIG1hcmdpbjogMCAwIDVweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG4uUHByaWNleyBtYXJnaW46IDEwcHggMDt9XG4uY3JQcmljZXtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5vbGRQcmljZXtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4ub2ZmUHJpY2V7Y29sb3I6IGdyZWVuO31cbi51bml0UHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIHBhZGRpbmc6IDRweDtcbn1cbi5xdHl7XG4gICAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgIG1hcmdpbi10b3A6IDlweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWF4LXdpZHRoOiA3MHB4O1xuICAgIG1hcmdpbjogMTBweCBhdXRvIDNweDtcbn1cbi5pbWd3cnB7XG4gICAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICAgIHBhZGRpbmc6IDFweDtcbn1cbi50QW1udHsgICAgbWFyZ2luLXRvcDogMTNweDt9XG5cbi5ybXZCdG4uYnV0dG9uLW91dGxpbmUge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgLS1ib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gICAgaGVpZ2h0OjMwcHg7XG4gICAgd2lkdGg6MTIwcHg7XG59XG5cbi5pbmZvQ3tcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW46IDEwcHggMDtcbn1cbi5QZEFjdGluc3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5QZEFjdGlucyBpb24tYnV0dG9ue1xuICAgIHdpZHRoOiA0OCU7XG4gICAgbWFyZ2luOiAwIDJweDtcbn1cblxuaW9uLWNvbnRlbnR7XG4gICAgaW9uLWxhYmVse1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIC8vY29sb3I6ICNBN0NGNDY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICAgIGlvbi10ZXh0YXJlYXtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0NDQ0NDQztcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBoZWlnaHQ6IDE2MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgfVxufVxuXG4vLyAuaXRlbS1pbnB1dCB7XG4vLyAgICAgcGFkZGluZzogNXB4O1xuLy8gICAgIGJvcmRlcjogc29saWQgLjVweCBncmV5O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbi8vIH0iXX0= */"

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