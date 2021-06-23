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

module.exports = ".company-logo {\n  width: 78px;\n  height: 78px;\n  border-radius: 50%;\n  border: 8px solid #1B98D5;\n  background: #979797;\n  overflow: hidden; }\n\n.company-details p {\n  font-size: 12px;\n  color: #A7A7A7;\n  line-height: 18px;\n  margin: 0; }\n\n.company-details h4 {\n  font-size: 16px;\n  color: #000;\n  font-weight: 600; }\n\n.company-details h6 {\n  color: #A7A7A7;\n  margin: 2px 0;\n  font-size: 15px; }\n\n.company-details h6 strong {\n    color: #000;\n    font-weight: 600; }\n\nion-content ion-label {\n  font-size: 17px;\n  color: #A7CF46;\n  font-weight: 400; }\n\nion-content ion-textarea {\n  border: 1px solid #CCCCCC;\n  padding: 5px;\n  height: 160px;\n  border-radius: 6px; }\n\n.customer-details {\n  border: 1px solid #D2D2D2;\n  margin: 5px 0;\n  width: 100%; }\n\n.customer-details ul {\n    padding: 0;\n    margin: 0; }\n\n.customer-details ul li {\n      /* OLD - iOS 6-, Safari 3.1-6 */\n      /* OLD - Firefox 19- (buggy but mostly works) */\n      /* TWEENER - IE 10 */\n      /* NEW - Chrome */\n      display: flex;\n      list-style: none;\n      width: 100%;\n      padding: 5px; }\n\n.customer-details ul li .left {\n        font-size: 14px;\n        color: #979797;\n        width: 50%; }\n\n.customer-details ul li .right {\n        font-size: 14px;\n        color: #000000;\n        width: 50%; }\n\n.cartItem {\n  border-bottom: 5px solid rgba(0, 0, 0, 0.08);\n  padding-top: 7px; }\n\n.cName {\n  margin: 0 0 5px;\n  font-size: 18px; }\n\n.Pprice {\n  margin: 10px 0; }\n\n.crPrice {\n  font-size: 18px;\n  display: inline-block;\n  margin-right: 10px; }\n\n.oldPrice {\n  text-decoration: line-through;\n  color: rgba(0, 0, 0, 0.6);\n  display: inline-block;\n  margin-right: 15px; }\n\n.offPrice {\n  color: green; }\n\n.unitP {\n  font-size: 14px;\n  float: right;\n  width: 50px;\n  padding: 4px; }\n\n.qty {\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.24);\n  margin-top: 9px;\n  border-radius: 5px;\n  max-width: 70px;\n  margin: 10px auto 3px; }\n\n.imgwrp {\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.35);\n  padding: 1px; }\n\n.tAmnt {\n  margin-top: 13px; }\n\n.rmvBtn.button-outline {\n  --border-width: 1px;\n  --border-color: rgba(0, 0, 0, 0.35);\n  height: 30px;\n  width: 120px; }\n\n.infoC {\n  text-align: right;\n  margin: 10px 0; }\n\n.PdActins {\n  text-align: center;\n  margin-top: 30px; }\n\n.PdActins ion-button {\n  width: 48%;\n  margin: 0 2px; }\n\nion-content ion-label {\n  font-size: 17px;\n  font-weight: 400; }\n\nion-content ion-textarea {\n  border: 1px solid #CCCCCC;\n  padding: 5px;\n  height: 160px;\n  border-radius: 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YXAvRGVza3RvcC9pb25pYyBQcm9qZWN0L3BwL1NtYXJ0LUNhcnQgMi9zcmMvYXBwL3JldHVybi1kZXRhaWxzL3JldHVybi1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBRVEsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsU0FBUyxFQUFBOztBQUxqQjtFQVFRLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBVnhCO0VBYVEsY0FBYztFQUNkLGFBQVk7RUFDWixlQUFlLEVBQUE7O0FBZnZCO0lBaUJZLFdBQVc7SUFDWCxnQkFBZ0IsRUFBQTs7QUFLNUI7RUFFUSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUp4QjtFQU9RLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQixFQUFBOztBQUkxQjtFQUNJLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUhmO0lBS1EsVUFBVTtJQUNWLFNBQVMsRUFBQTs7QUFOakI7TUFRdUMsK0JBQUE7TUFDQSwrQ0FBQTtNQUNBLG9CQUFBO01BQ0EsaUJBQUE7TUFDM0IsYUFBYTtNQUNiLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsWUFBWSxFQUFBOztBQWZ4QjtRQWlCZ0IsZUFBZTtRQUNmLGNBQWM7UUFDZCxVQUFVLEVBQUE7O0FBbkIxQjtRQXNCZ0IsZUFBZTtRQUNmLGNBQWM7UUFDZCxVQUFVLEVBQUE7O0FBTTFCO0VBQ0ksNENBQTRDO0VBQzVDLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGVBQWU7RUFDZixlQUFlLEVBQUE7O0FBRW5CO0VBQVMsY0FBYyxFQUFBOztBQUN2QjtFQUNJLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQVUsWUFBWSxFQUFBOztBQUN0QjtFQUNJLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFaEI7RUFDSSx1Q0FBdUM7RUFDdkMsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0ksdUNBQXVDO0VBQ3ZDLFlBQVksRUFBQTs7QUFFaEI7RUFBVyxnQkFBZ0IsRUFBQTs7QUFFM0I7RUFDSSxtQkFBZTtFQUNmLG1DQUFlO0VBQ2YsWUFBVztFQUNYLFlBQVcsRUFBQTs7QUFHZjtFQUNJLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLFVBQVU7RUFDVixhQUFhLEVBQUE7O0FBR2pCO0VBRVEsZUFBZTtFQUVmLGdCQUFnQixFQUFBOztBQUp4QjtFQU9RLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmV0dXJuLWRldGFpbHMvcmV0dXJuLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBhbnktbG9nb3tcbiAgICB3aWR0aDogNzhweDtcbiAgICBoZWlnaHQ6IDc4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogOHB4IHNvbGlkICMxQjk4RDU7XG4gICAgYmFja2dyb3VuZDogIzk3OTc5NztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNvbXBhbnktZGV0YWlsc3tcbiAgICBwe1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAjQTdBN0E3O1xuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICBoNHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gICAgaDZ7XG4gICAgICAgIGNvbG9yOiAjQTdBN0E3O1xuICAgICAgICBtYXJnaW46MnB4IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgc3Ryb25ne1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tY29udGVudHtcbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgY29sb3I6ICNBN0NGNDY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICAgIGlvbi10ZXh0YXJlYXtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0NDQ0NDQztcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBoZWlnaHQ6IDE2MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgfVxufVxuXG4uY3VzdG9tZXItZGV0YWlsc3tcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDJEMkQyO1xuICAgIG1hcmdpbjogNXB4IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdWx7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbGl7XG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDsgICAgICAvKiBPTEQgLSBpT1MgNi0sIFNhZmFyaSAzLjEtNiAqL1xuICAgICAgICAgICAgZGlzcGxheTogLW1vei1ib3g7ICAgICAgICAgLyogT0xEIC0gRmlyZWZveCAxOS0gKGJ1Z2d5IGJ1dCBtb3N0bHkgd29ya3MpICovXG4gICAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDsgICAgICAvKiBUV0VFTkVSIC0gSUUgMTAgKi9cbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDsgICAgIC8qIE5FVyAtIENocm9tZSAqL1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIC5sZWZ0e1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk3OTc5NztcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJpZ2h0e1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2FydEl0ZW17XG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgcGFkZGluZy10b3A6IDdweDtcbn1cbi5jTmFtZXtcbiAgICBtYXJnaW46IDAgMCA1cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuLlBwcmljZXsgbWFyZ2luOiAxMHB4IDA7fVxuLmNyUHJpY2V7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ub2xkUHJpY2V7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLm9mZlByaWNle2NvbG9yOiBncmVlbjt9XG4udW5pdFB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBwYWRkaW5nOiA0cHg7XG59XG4ucXR5e1xuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICBtYXJnaW4tdG9wOiA5cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1heC13aWR0aDogNzBweDtcbiAgICBtYXJnaW46IDEwcHggYXV0byAzcHg7XG59XG4uaW1nd3Jwe1xuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgICBwYWRkaW5nOiAxcHg7XG59XG4udEFtbnR7ICAgIG1hcmdpbi10b3A6IDEzcHg7fVxuXG4ucm12QnRuLmJ1dHRvbi1vdXRsaW5lIHtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICAgIGhlaWdodDozMHB4O1xuICAgIHdpZHRoOjEyMHB4O1xufVxuXG4uaW5mb0N7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG59XG4uUGRBY3RpbnN7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG4uUGRBY3RpbnMgaW9uLWJ1dHRvbntcbiAgICB3aWR0aDogNDglO1xuICAgIG1hcmdpbjogMCAycHg7XG59XG5cbmlvbi1jb250ZW50e1xuICAgIGlvbi1sYWJlbHtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAvL2NvbG9yOiAjQTdDRjQ2O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cbiAgICBpb24tdGV4dGFyZWF7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIH1cbn1cblxuLy8gLml0ZW0taW5wdXQge1xuLy8gICAgIHBhZGRpbmc6IDVweDtcbi8vICAgICBib3JkZXI6IHNvbGlkIC41cHggZ3JleTtcbi8vICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4vLyB9Il19 */"

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