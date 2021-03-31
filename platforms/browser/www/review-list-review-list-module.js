(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["review-list-review-list-module"],{

/***/ "./src/app/review-list/review-list.module.ts":
/*!***************************************************!*\
  !*** ./src/app/review-list/review-list.module.ts ***!
  \***************************************************/
/*! exports provided: ReviewListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewListPageModule", function() { return ReviewListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _review_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./review-list.page */ "./src/app/review-list/review-list.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _review_list_page__WEBPACK_IMPORTED_MODULE_5__["ReviewListPage"]
    }
];
var ReviewListPageModule = /** @class */ (function () {
    function ReviewListPageModule() {
    }
    ReviewListPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_review_list_page__WEBPACK_IMPORTED_MODULE_5__["ReviewListPage"]]
        })
    ], ReviewListPageModule);
    return ReviewListPageModule;
}());



/***/ }),

/***/ "./src/app/review-list/review-list.page.html":
/*!***************************************************!*\
  !*** ./src/app/review-list/review-list.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"dark\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Reviews</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-button class=\"addtoCrt\" expand=\"full\" (click)=\"addReview()\" >\n        Add A Review\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <!-- <ion-col *ngFor=\"let singleData of listData; let i = index\" size=\"12\"\n        [class.selectedFullSection]=\"singleData.ischecked\"> -->\n    <ion-col *ngFor=\"let singleReviewList of reviewList; let i = index\" size=\"12\">\n      <div class=\"customer-details\">\n        <ul>\n          <li>\n            <ion-row>\n              <ion-col class=\"left\" size=\"12\">\n                <h6> {{singleReviewList.user.first_name}} {{singleReviewList.user.last_name}}</h6>\n              </ion-col>\n              \n              <ion-col class=\"left\" size=\"12\">\n                <ion-item class=\"star\" *ngIf=\"singleReviewList.rating==='5'\">\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                </ion-item>\n                <ion-item class=\"star\" *ngIf=\"singleReviewList.rating==='4'\">\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                </ion-item>\n                <ion-item class=\"star\" *ngIf=\"singleReviewList.rating==='3'\">\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                </ion-item>\n                <ion-item class=\"star\" *ngIf=\"singleReviewList.rating==='2'\">\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                </ion-item>\n                <ion-item class=\"star\" *ngIf=\"singleReviewList.rating==='1'\">\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                </ion-item>\n                <ion-item class=\"star\" *ngIf=\"singleReviewList.rating==='0'\">\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                </ion-item>\n                Reviewed on {{singleReviewList.dt.toString().split('T')[0]}}\n              </ion-col>\n        \n            </ion-row>\n          </li>\n          <li>\n            <div>\n              <h6>Reviews -</h6>\n              {{singleReviewList.comment}}\n            </div>\n          </li>\n        </ul>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/review-list/review-list.page.scss":
/*!***************************************************!*\
  !*** ./src/app/review-list/review-list.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-primary {\n  background: #1B98D5; }\n\n.card-box {\n  background: #A7CF46;\n  padding: 10px 5px;\n  text-align: center;\n  position: relative; }\n\n.card-box img {\n    width: 44px;\n    margin: 0 auto; }\n\n.card-box h3 {\n    font-size: 16px;\n    color: #000000;\n    margin: 5px 0; }\n\n.card-box h4 {\n    font-size: 18px;\n    color: #ffffff;\n    margin: 5px 0; }\n\n.customer-details {\n  border: 1px solid #D2D2D2;\n  position: relative; }\n\n.customer-details > ul {\n    padding: 0;\n    margin: 0; }\n\n.customer-details > ul > li {\n      /* OLD - iOS 6-, Safari 3.1-6 */\n      /* OLD - Firefox 19- (buggy but mostly works) */\n      /* TWEENER - IE 10 */\n      /* NEW - Chrome */\n      display: flex;\n      list-style: none;\n      width: 100%;\n      padding: 5px; }\n\n.customer-details > ul > li .left {\n        font-size: 14px;\n        color: #979797;\n        width: 100%; }\n\n.customer-details > ul > li .right {\n        font-size: 14px;\n        color: #000000;\n        width: 40%; }\n\n.customer-details > ul > li .rating {\n        font-size: 14px;\n        color: green;\n        width: 100%; }\n\n.text-grey {\n  color: #A7A7A7; }\n\n.text-danger {\n  color: #F83956; }\n\n.action-dd {\n  background: #A7CF46;\n  border: 1px solid #A7CF46;\n  color: #fff;\n  border-radius: 5px; }\n\n.action-btn {\n  margin-right: 10px;\n  margin-top: 5px;\n  display: inline-block; }\n\n.shortcut-icons {\n  position: absolute;\n  top: 10px;\n  right: 10px; }\n\n.shortcut-icons > li {\n    padding: 3px 4px !important; }\n\n.shortcut-icons > li > a {\n      border: 1px solid #D2D2D2;\n      padding: 5px 5px;\n      display: block;\n      min-width: 40px;\n      text-align: center;\n      background: #fff;\n      min-height: 28px; }\n\n.all-task-catagory {\n  white-space: nowrap;\n  overflow-x: scroll; }\n\n.all-task-catagory ul {\n    padding: 0;\n    margin: 0;\n    /* OLD - iOS 6-, Safari 3.1-6 */\n    /* OLD - Firefox 19- (buggy but mostly works) */\n    /* TWEENER - IE 10 */\n    /* NEW - Chrome */\n    display: flex; }\n\n.all-task-catagory ul li {\n      list-style: none;\n      margin: 0 2px; }\n\n.all-task-catagory ul li a {\n        font-size: 12px;\n        background: #E5E5E5;\n        color: #000;\n        padding: 6px 5px;\n        display: block;\n        text-decoration: none; }\n\n.all-task-catagory ul li.active a {\n        background: #A7CF46;\n        color: #fff; }\n\n.selectedFullSection {\n  position: relative; }\n\n.selectedFullSection .customer-details {\n    border: 1px solid rgba(175, 229, 238, 0.75);\n    background-color: rgba(175, 229, 238, 0.3); }\n\n.selected {\n  position: relative; }\n\n.selected .customer-details {\n    border: 1px solid rgba(175, 229, 238, 0.75);\n    background-color: rgba(175, 229, 238, 0.3); }\n\n.selected:after {\n    content: \"\";\n    background-image: url('check_icon_blue.svg');\n    background-repeat: no-repeat;\n    width: 28px;\n    height: 28px;\n    position: absolute;\n    top: 5px;\n    right: 5px; }\n\nlabel {\n  font-family: inherit;\n  line-height: normal;\n  font-size: 14px;\n  top: 15px; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 2px;\n  margin-bottom: 8px;\n  font-weight: 500;\n  line-height: 1.2; }\n\n.addtoCrt {\n  background: transparent;\n  position: relative;\n  border-radius: 5px;\n  background-color: green; }\n\n.star {\n  --min-height: 24px;\n  --transition: background-color 200ms linear;\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --border-color: var(--ion-color-step-150,#c8c7cc);\n  --highlight-height: 0;\n  font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YXAvRGVza3RvcC9Jb25pY19Qcm9qZWN0L2FyY2hpdmUgaW9uaWMgZlByb2plY3Qvb2xkIGFyY2hpdmUgMi9BcmNoaXZlIDIvc3JjL2FwcC9yZXZpZXctbGlzdC9yZXZpZXctbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFKdEI7SUFNUSxXQUFXO0lBQ1gsY0FBYyxFQUFBOztBQVB0QjtJQVVRLGVBQWU7SUFDZixjQUFjO0lBQ2QsYUFBYSxFQUFBOztBQVpyQjtJQWVRLGVBQWU7SUFDZixjQUFjO0lBQ2QsYUFBYSxFQUFBOztBQUdyQjtFQUNJLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTs7QUFGdEI7SUFJUSxVQUFVO0lBQ1YsU0FBUyxFQUFBOztBQUxqQjtNQU91QywrQkFBQTtNQUNBLCtDQUFBO01BQ0Esb0JBQUE7TUFDQSxpQkFBQTtNQUMzQixhQUFhO01BQ2IsZ0JBQWdCO01BQ2hCLFdBQVc7TUFDWCxZQUFZLEVBQUE7O0FBZHhCO1FBZ0JnQixlQUFlO1FBQ2YsY0FBYztRQUNkLFdBQVcsRUFBQTs7QUFsQjNCO1FBcUJnQixlQUFlO1FBQ2YsY0FBYztRQUNkLFVBQVUsRUFBQTs7QUF2QjFCO1FBMEJnQixlQUFlO1FBQ2YsWUFBWTtRQUNaLFdBQVcsRUFBQTs7QUFLM0I7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNJLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXLEVBQUE7O0FBSGY7SUFLUSwyQkFBMkIsRUFBQTs7QUFMbkM7TUFPWSx5QkFBeUI7TUFDekIsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCxlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixnQkFBZ0IsRUFBQTs7QUFLNUI7RUFDSSxtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBRnRCO0lBSVEsVUFBVTtJQUNWLFNBQVM7SUFDa0IsK0JBQUE7SUFDQSwrQ0FBQTtJQUNBLG9CQUFBO0lBQ0EsaUJBQUE7SUFDM0IsYUFBYSxFQUFBOztBQVZyQjtNQVlZLGdCQUFnQjtNQUNoQixhQUFhLEVBQUE7O0FBYnpCO1FBZWdCLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QscUJBQXFCLEVBQUE7O0FBcEJyQztRQXdCb0IsbUJBQW1CO1FBQ25CLFdBQVcsRUFBQTs7QUFPL0I7RUFDSSxrQkFBa0IsRUFBQTs7QUFEdEI7SUFHUSwyQ0FBMkM7SUFDM0MsMENBQTJDLEVBQUE7O0FBY25EO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRHRCO0lBR1EsMkNBQTJDO0lBQzNDLDBDQUEyQyxFQUFBOztBQUpuRDtJQU9RLFdBQVc7SUFDWCw0Q0FBOEQ7SUFDOUQsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVLEVBQUE7O0FBTWxCO0VBQ0ksb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsU0FBUyxFQUFBOztBQUlUO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2hCO0VBQ0ksdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsdUJBQ0osRUFBQTs7QUFFQTtFQUNJLGtCQUFhO0VBQ2IsMkNBQWE7RUFDYixvQkFBZ0I7RUFDaEIsd0JBQW9CO0VBQ3BCLGlEQUFlO0VBQ2YscUJBQW1CO0VBQ25CLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Jldmlldy1saXN0L3Jldmlldy1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1wcmltYXJ5e1xuICAgIGJhY2tncm91bmQ6ICMxQjk4RDU7XG59XG4uY2FyZC1ib3h7XG4gICAgYmFja2dyb3VuZDogI0E3Q0Y0NjtcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDQ0cHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICBoM3tcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICB9XG4gICAgaDR7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7IFxuICAgIH1cbn1cbi5jdXN0b21lci1kZXRhaWxze1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEMkQyRDI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICY+dWx7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgJj5saXtcbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94OyAgICAgIC8qIE9MRCAtIGlPUyA2LSwgU2FmYXJpIDMuMS02ICovXG4gICAgICAgICAgICBkaXNwbGF5OiAtbW96LWJveDsgICAgICAgICAvKiBPTEQgLSBGaXJlZm94IDE5LSAoYnVnZ3kgYnV0IG1vc3RseSB3b3JrcykgKi9cbiAgICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94OyAgICAgIC8qIFRXRUVORVIgLSBJRSAxMCAqL1xuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4OyAgICAgLyogTkVXIC0gQ2hyb21lICovXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgLmxlZnR7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTc5Nzk3O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJpZ2h0e1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJhdGluZ3tcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLnRleHQtZ3JleXtcbiAgICBjb2xvcjogI0E3QTdBNztcbn1cbi50ZXh0LWRhbmdlcntcbiAgICBjb2xvcjogI0Y4Mzk1Njtcbn1cbi5hY3Rpb24tZGR7XG4gICAgYmFja2dyb3VuZDogI0E3Q0Y0NjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQTdDRjQ2O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5hY3Rpb24tYnRue1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnNob3J0Y3V0LWljb25ze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgJj5saXtcbiAgICAgICAgcGFkZGluZzogM3B4IDRweCAhaW1wb3J0YW50O1xuICAgICAgICAmPmF7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRDJEMkQyO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDVweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWluLXdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5hbGwtdGFzay1jYXRhZ29yeXtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICB1bHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDsgICAgICAvKiBPTEQgLSBpT1MgNi0sIFNhZmFyaSAzLjEtNiAqL1xuICAgICAgICBkaXNwbGF5OiAtbW96LWJveDsgICAgICAgICAvKiBPTEQgLSBGaXJlZm94IDE5LSAoYnVnZ3kgYnV0IG1vc3RseSB3b3JrcykgKi9cbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7ICAgICAgLyogVFdFRU5FUiAtIElFIDEwICovXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDsgICAgIC8qIE5FVyAtIENocm9tZSAqL1xuICAgICAgICBkaXNwbGF5OiBmbGV4OyAgXG4gICAgICAgIGxpe1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogMCAycHg7XG4gICAgICAgICAgICBhe1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRTVFNUU1O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweCA1cHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5hY3RpdmV7XG4gICAgICAgICAgICAgICAgYXtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0E3Q0Y0NjtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2VsZWN0ZWRGdWxsU2VjdGlvbntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmN1c3RvbWVyLWRldGFpbHN7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTc1LCAyMjksIDIzOCwgMC43NSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc1LCAyMjksIDIzOCwgMC4zMCk7XG4gICAgfVxuICAgIC8vICY6YWZ0ZXJ7XG4gICAgLy8gICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjL2Fzc2V0cy9pbWFnZXMvY2hlY2tfaWNvbl9ibHVlLnN2ZycpO1xuICAgIC8vICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIC8vICAgICB3aWR0aDogMjhweDtcbiAgICAvLyAgICAgaGVpZ2h0OiAyOHB4O1xuICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gICAgIHRvcDogMTVweDtcbiAgICAvLyAgICAgcmlnaHQ6IDE1cHg7XG4gICAgLy8gfVxufVxuXG4uc2VsZWN0ZWR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5jdXN0b21lci1kZXRhaWxze1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE3NSwgMjI5LCAyMzgsIDAuNzUpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3NSwgMjI5LCAyMzgsIDAuMzApO1xuICAgIH1cbiAgICAmOmFmdGVye1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaW1hZ2VzL2NoZWNrX2ljb25fYmx1ZS5zdmcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgIGhlaWdodDogMjhweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgcmlnaHQ6IDVweDtcbiAgICB9XG59XG5cblxuXG5sYWJlbHtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0b3A6IDE1cHg7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjQTdDRjQ2O1xuICAgIH1cblxuICAgIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hZGR0b0NydHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpncmVlblxuICAgICAgICB9XG5cbiAgICAgICAgLnN0YXIge1xuICAgICAgICAgICAgLS1taW4taGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgLS10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogOHB4O1xuICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwjYzhjN2NjKTtcbiAgICAgICAgICAgIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/review-list/review-list.page.ts":
/*!*************************************************!*\
  !*** ./src/app/review-list/review-list.page.ts ***!
  \*************************************************/
/*! exports provided: ReviewListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewListPage", function() { return ReviewListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/utility.service */ "./src/app/api/utility.service.ts");
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




var ReviewListPage = /** @class */ (function () {
    function ReviewListPage(menuCtrl, navCtrl, util, events, route, activeroute) {
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.util = util;
        this.events = events;
        this.route = route;
        this.activeroute = activeroute;
        this.slug = "";
        this.vendorId = "";
        this.pushedFrom = "";
        this.pushedFrom = this.activeroute.snapshot.paramMap.get("pushedFrom");
        if (this.pushedFrom == "loginReviewlist") {
            this.reviewwdProductData = JSON.parse(localStorage.getItem('reviewProdDetails'));
            this.reviewList = this.reviewwdProductData.state.parms;
            this.slug = this.reviewwdProductData.state.params2;
            this.vendorId = this.reviewwdProductData.state.params3;
            console.log("reviewProdDetails", this.reviewwdProductData);
        }
        else {
            this.reviewList = this.route.getCurrentNavigation().extras.state.parms;
            this.slug = this.route.getCurrentNavigation().extras.state.params2;
            this.vendorId = this.route.getCurrentNavigation().extras.state.params3;
        }
        //console.log("this.route.getCurrentNavigation().extras.state",this.route.getCurrentNavigation().extras.state)
    }
    ReviewListPage.prototype.ngOnInit = function () {
    };
    ReviewListPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
        //this.reviewList = this.route.getCurrentNavigation().extras.state.parms;
        //this.pageDetails = { 'showMenu': false, 'showBack': false, 'showButtons': false, 'title': 'Login', 'prevPage': '' };
        //this.showMenu(this.pageDetails);
    };
    ReviewListPage.prototype.showMenu = function (pageDetails) {
        console.log('User created!');
        this.events.publish('showMenu', pageDetails, Date.now());
    };
    ReviewListPage.prototype.addReview = function () {
        var navigationExtras = {
            state: {
                from: 'reviewlist',
                parms: this.slug,
                params2: this.vendorId
            }
        };
        if (localStorage.getItem('loginDataKKart') != null) {
            this.navCtrl.navigateForward('/add-your-review', navigationExtras);
        }
        else {
            this.navCtrl.navigateForward(['/login', { pushedFrom: "addReviewsList" }]);
        }
    };
    ReviewListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review-list',
            template: __webpack_require__(/*! ./review-list.page.html */ "./src/app/review-list/review-list.page.html"),
            styles: [__webpack_require__(/*! ./review-list.page.scss */ "./src/app/review-list/review-list.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _api_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ReviewListPage);
    return ReviewListPage;
}());



/***/ })

}]);
//# sourceMappingURL=review-list-review-list-module.js.map