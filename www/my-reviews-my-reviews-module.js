(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-reviews-my-reviews-module"],{

/***/ "./src/app/my-reviews/my-reviews.module.ts":
/*!*************************************************!*\
  !*** ./src/app/my-reviews/my-reviews.module.ts ***!
  \*************************************************/
/*! exports provided: MyReviewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyReviewsPageModule", function() { return MyReviewsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_reviews_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-reviews.page */ "./src/app/my-reviews/my-reviews.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _my_reviews_page__WEBPACK_IMPORTED_MODULE_5__["MyReviewsPage"]
    }
];
var MyReviewsPageModule = /** @class */ (function () {
    function MyReviewsPageModule() {
    }
    MyReviewsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_my_reviews_page__WEBPACK_IMPORTED_MODULE_5__["MyReviewsPage"]]
        })
    ], MyReviewsPageModule);
    return MyReviewsPageModule;
}());



/***/ }),

/***/ "./src/app/my-reviews/my-reviews.page.html":
/*!*************************************************!*\
  !*** ./src/app/my-reviews/my-reviews.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: #FFCC23\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>My Reviews</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-row *ngIf=\"isReviewList==true\">\n    <ion-col *ngFor=\"let singleReviewList of reviewList; let i = index\" size=\"12\">\n      <div class=\"customer-details\">\n        <ul>\n          <li>\n            <ion-row>\n              <ion-col size=\"12\">\n                <h6> {{singleReviewList.product.name}} </h6>\n              </ion-col>\n              \n              <ion-col class=\"left\" size=\"12\">\n                <ion-item class=\"star\" *ngIf=\"singleReviewList.rating==='5'\">\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                </ion-item>\n                <ion-item class=\"star\" *ngIf=\"singleReviewList.rating==='4'\">\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                </ion-item>\n                <ion-item class=\"star\" *ngIf=\"singleReviewList.rating==='3'\">\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                </ion-item>\n                <ion-item class=\"star\" *ngIf=\"singleReviewList.rating==='2'\">\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                </ion-item>\n                <ion-item class=\"star\" *ngIf=\"singleReviewList.rating==='1'\">\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                </ion-item>\n                <ion-item class=\"star\" *ngIf=\"singleReviewList.rating==='0'\">\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                </ion-item>\n                Reviewed on {{singleReviewList.dt.toString().split('T')[0]}}\n              </ion-col>\n            </ion-row>\n          </li>\n      \n          <li>\n            <div class=\"left\">\n              <h6>Reviews -</h6>\n            </div>\n            <div class=\"right\">\n              <ion-icon name=\"create\" md=\"md-create\" style=\"font-size:28px\" (click)=\"editReview(singleReviewList,i)\" ></ion-icon>\n            </div>\n          </li>\n          <li>\n            <div>\n              {{singleReviewList.comment}}\n            </div>\n          </li>\n          <ion-col size=\"6\">\n            <ion-button (click)=\"deleteReview(singleReviewList)\" color=\"primary\" shape=\"round\" expand=\"block\" style=\"width: 100%;\">Delete</ion-button>\n          </ion-col>          \n        </ul>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-card style=\"text-align:center;margin-top:50% \" *ngIf=\"isReviewList==false\">\n    <ion-card-content>\n      You have not reviewed any product yet\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/my-reviews/my-reviews.page.scss":
/*!*************************************************!*\
  !*** ./src/app/my-reviews/my-reviews.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-primary {\n  background: #1B98D5; }\n\n.card-box {\n  background: #A7CF46;\n  padding: 10px 5px;\n  text-align: center;\n  position: relative; }\n\n.card-box img {\n    width: 44px;\n    margin: 0 auto; }\n\n.card-box h3 {\n    font-size: 16px;\n    color: #000000;\n    margin: 5px 0; }\n\n.card-box h4 {\n    font-size: 18px;\n    color: #ffffff;\n    margin: 5px 0; }\n\n.customer-details {\n  border: 1px solid #D2D2D2;\n  position: relative; }\n\n.customer-details > ul {\n    padding: 0;\n    margin: 0; }\n\n.customer-details > ul > li {\n      /* OLD - iOS 6-, Safari 3.1-6 */\n      /* OLD - Firefox 19- (buggy but mostly works) */\n      /* TWEENER - IE 10 */\n      /* NEW - Chrome */\n      display: flex;\n      list-style: none;\n      width: 100%;\n      padding: 5px; }\n\n.customer-details > ul > li .left {\n        font-size: 14px;\n        color: #979797;\n        width: 40%; }\n\n.customer-details > ul > li .right {\n        font-size: 14px;\n        color: #000000;\n        width: 40%; }\n\n.customer-details > ul > li .rating {\n        font-size: 14px;\n        color: green;\n        width: 100%; }\n\n.text-grey {\n  color: #A7A7A7; }\n\n.text-danger {\n  color: #F83956; }\n\n.action-dd {\n  background: #A7CF46;\n  border: 1px solid #A7CF46;\n  color: #fff;\n  border-radius: 5px; }\n\n.action-btn {\n  margin-right: 10px;\n  margin-top: 5px;\n  display: inline-block; }\n\n.shortcut-icons {\n  position: absolute;\n  top: 10px;\n  right: 10px; }\n\n.shortcut-icons > li {\n    padding: 3px 4px !important; }\n\n.shortcut-icons > li > a {\n      border: 1px solid #D2D2D2;\n      padding: 5px 5px;\n      display: block;\n      min-width: 40px;\n      text-align: center;\n      background: #fff;\n      min-height: 28px; }\n\n.all-task-catagory {\n  white-space: nowrap;\n  overflow-x: scroll; }\n\n.all-task-catagory ul {\n    padding: 0;\n    margin: 0;\n    /* OLD - iOS 6-, Safari 3.1-6 */\n    /* OLD - Firefox 19- (buggy but mostly works) */\n    /* TWEENER - IE 10 */\n    /* NEW - Chrome */\n    display: flex; }\n\n.all-task-catagory ul li {\n      list-style: none;\n      margin: 0 2px; }\n\n.all-task-catagory ul li a {\n        font-size: 12px;\n        background: #E5E5E5;\n        color: #000;\n        padding: 6px 5px;\n        display: block;\n        text-decoration: none; }\n\n.all-task-catagory ul li.active a {\n        background: #A7CF46;\n        color: #fff; }\n\n.selectedFullSection {\n  position: relative; }\n\n.selectedFullSection .customer-details {\n    border: 1px solid rgba(175, 229, 238, 0.75);\n    background-color: rgba(175, 229, 238, 0.3); }\n\n.selected {\n  position: relative; }\n\n.selected .customer-details {\n    border: 1px solid rgba(175, 229, 238, 0.75);\n    background-color: rgba(175, 229, 238, 0.3); }\n\n.selected:after {\n    content: \"\";\n    background-image: url('check_icon_blue.svg');\n    background-repeat: no-repeat;\n    width: 28px;\n    height: 28px;\n    position: absolute;\n    top: 5px;\n    right: 5px; }\n\nlabel {\n  font-family: inherit;\n  line-height: normal;\n  font-size: 14px;\n  top: 15px; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 2px;\n  margin-bottom: 8px;\n  font-weight: 500;\n  line-height: 1.2; }\n\n.addtoCrt {\n  background: transparent;\n  position: relative;\n  border-radius: 5px;\n  background-color: green; }\n\n.star {\n  --min-height: 24px;\n  --transition: background-color 200ms linear;\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --border-color: var(--ion-color-step-150,#c8c7cc);\n  --highlight-height: 0;\n  font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YXAvRGVza3RvcC9pb25pYyBQcm9qZWN0L3BwL1NtYXJ0LUNhcnQgMi9zcmMvYXBwL215LXJldmlld3MvbXktcmV2aWV3cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFKdEI7SUFNUSxXQUFXO0lBQ1gsY0FBYyxFQUFBOztBQVB0QjtJQVVRLGVBQWU7SUFDZixjQUFjO0lBQ2QsYUFBYSxFQUFBOztBQVpyQjtJQWVRLGVBQWU7SUFDZixjQUFjO0lBQ2QsYUFBYSxFQUFBOztBQUdyQjtFQUNJLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTs7QUFGdEI7SUFJUSxVQUFVO0lBQ1YsU0FBUyxFQUFBOztBQUxqQjtNQU91QywrQkFBQTtNQUNBLCtDQUFBO01BQ0Esb0JBQUE7TUFDQSxpQkFBQTtNQUMzQixhQUFhO01BQ2IsZ0JBQWdCO01BQ2hCLFdBQVc7TUFDWCxZQUFZLEVBQUE7O0FBZHhCO1FBZ0JnQixlQUFlO1FBQ2YsY0FBYztRQUNkLFVBQVUsRUFBQTs7QUFsQjFCO1FBcUJnQixlQUFlO1FBQ2YsY0FBYztRQUNkLFVBQVUsRUFBQTs7QUF2QjFCO1FBMEJnQixlQUFlO1FBQ2YsWUFBWTtRQUNaLFdBQVcsRUFBQTs7QUFLM0I7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNJLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXLEVBQUE7O0FBSGY7SUFLUSwyQkFBMkIsRUFBQTs7QUFMbkM7TUFPWSx5QkFBeUI7TUFDekIsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCxlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixnQkFBZ0IsRUFBQTs7QUFLNUI7RUFDSSxtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBRnRCO0lBSVEsVUFBVTtJQUNWLFNBQVM7SUFDa0IsK0JBQUE7SUFDQSwrQ0FBQTtJQUNBLG9CQUFBO0lBQ0EsaUJBQUE7SUFDM0IsYUFBYSxFQUFBOztBQVZyQjtNQVlZLGdCQUFnQjtNQUNoQixhQUFhLEVBQUE7O0FBYnpCO1FBZWdCLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QscUJBQXFCLEVBQUE7O0FBcEJyQztRQXdCb0IsbUJBQW1CO1FBQ25CLFdBQVcsRUFBQTs7QUFPL0I7RUFDSSxrQkFBa0IsRUFBQTs7QUFEdEI7SUFHUSwyQ0FBMkM7SUFDM0MsMENBQTJDLEVBQUE7O0FBY25EO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRHRCO0lBR1EsMkNBQTJDO0lBQzNDLDBDQUEyQyxFQUFBOztBQUpuRDtJQU9RLFdBQVc7SUFDWCw0Q0FBOEQ7SUFDOUQsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVLEVBQUE7O0FBTWxCO0VBQ0ksb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsU0FBUyxFQUFBOztBQUlUO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2hCO0VBQ0ksdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsdUJBQ0osRUFBQTs7QUFFQTtFQUNJLGtCQUFhO0VBQ2IsMkNBQWE7RUFDYixvQkFBZ0I7RUFDaEIsd0JBQW9CO0VBQ3BCLGlEQUFlO0VBQ2YscUJBQW1CO0VBQ25CLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL215LXJldmlld3MvbXktcmV2aWV3cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctcHJpbWFyeXtcbiAgICBiYWNrZ3JvdW5kOiAjMUI5OEQ1O1xufVxuLmNhcmQtYm94e1xuICAgIGJhY2tncm91bmQ6ICNBN0NGNDY7XG4gICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOiA0NHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgaDN7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgfVxuICAgIGg0e1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBtYXJnaW46IDVweCAwOyBcbiAgICB9XG59XG4uY3VzdG9tZXItZGV0YWlsc3tcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDJEMkQyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAmPnVse1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICY+bGl7XG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDsgICAgICAvKiBPTEQgLSBpT1MgNi0sIFNhZmFyaSAzLjEtNiAqL1xuICAgICAgICAgICAgZGlzcGxheTogLW1vei1ib3g7ICAgICAgICAgLyogT0xEIC0gRmlyZWZveCAxOS0gKGJ1Z2d5IGJ1dCBtb3N0bHkgd29ya3MpICovXG4gICAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDsgICAgICAvKiBUV0VFTkVSIC0gSUUgMTAgKi9cbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDsgICAgIC8qIE5FVyAtIENocm9tZSAqL1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIC5sZWZ0e1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk3OTc5NztcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJpZ2h0e1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJhdGluZ3tcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLnRleHQtZ3JleXtcbiAgICBjb2xvcjogI0E3QTdBNztcbn1cbi50ZXh0LWRhbmdlcntcbiAgICBjb2xvcjogI0Y4Mzk1Njtcbn1cbi5hY3Rpb24tZGR7XG4gICAgYmFja2dyb3VuZDogI0E3Q0Y0NjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQTdDRjQ2O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5hY3Rpb24tYnRue1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnNob3J0Y3V0LWljb25ze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgJj5saXtcbiAgICAgICAgcGFkZGluZzogM3B4IDRweCAhaW1wb3J0YW50O1xuICAgICAgICAmPmF7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRDJEMkQyO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDVweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWluLXdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5hbGwtdGFzay1jYXRhZ29yeXtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICB1bHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDsgICAgICAvKiBPTEQgLSBpT1MgNi0sIFNhZmFyaSAzLjEtNiAqL1xuICAgICAgICBkaXNwbGF5OiAtbW96LWJveDsgICAgICAgICAvKiBPTEQgLSBGaXJlZm94IDE5LSAoYnVnZ3kgYnV0IG1vc3RseSB3b3JrcykgKi9cbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7ICAgICAgLyogVFdFRU5FUiAtIElFIDEwICovXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDsgICAgIC8qIE5FVyAtIENocm9tZSAqL1xuICAgICAgICBkaXNwbGF5OiBmbGV4OyAgXG4gICAgICAgIGxpe1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogMCAycHg7XG4gICAgICAgICAgICBhe1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRTVFNUU1O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweCA1cHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5hY3RpdmV7XG4gICAgICAgICAgICAgICAgYXtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0E3Q0Y0NjtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2VsZWN0ZWRGdWxsU2VjdGlvbntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmN1c3RvbWVyLWRldGFpbHN7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTc1LCAyMjksIDIzOCwgMC43NSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc1LCAyMjksIDIzOCwgMC4zMCk7XG4gICAgfVxuICAgIC8vICY6YWZ0ZXJ7XG4gICAgLy8gICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjL2Fzc2V0cy9pbWFnZXMvY2hlY2tfaWNvbl9ibHVlLnN2ZycpO1xuICAgIC8vICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIC8vICAgICB3aWR0aDogMjhweDtcbiAgICAvLyAgICAgaGVpZ2h0OiAyOHB4O1xuICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gICAgIHRvcDogMTVweDtcbiAgICAvLyAgICAgcmlnaHQ6IDE1cHg7XG4gICAgLy8gfVxufVxuXG4uc2VsZWN0ZWR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5jdXN0b21lci1kZXRhaWxze1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE3NSwgMjI5LCAyMzgsIDAuNzUpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3NSwgMjI5LCAyMzgsIDAuMzApO1xuICAgIH1cbiAgICAmOmFmdGVye1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaW1hZ2VzL2NoZWNrX2ljb25fYmx1ZS5zdmcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgIGhlaWdodDogMjhweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgcmlnaHQ6IDVweDtcbiAgICB9XG59XG5cblxuXG5sYWJlbHtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0b3A6IDE1cHg7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjQTdDRjQ2O1xuICAgIH1cblxuICAgIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hZGR0b0NydHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpncmVlblxuICAgICAgICB9XG5cbiAgICAgICAgLnN0YXIge1xuICAgICAgICAgICAgLS1taW4taGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgLS10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogOHB4O1xuICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwjYzhjN2NjKTtcbiAgICAgICAgICAgIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/my-reviews/my-reviews.page.ts":
/*!***********************************************!*\
  !*** ./src/app/my-reviews/my-reviews.page.ts ***!
  \***********************************************/
/*! exports provided: MyReviewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyReviewsPage", function() { return MyReviewsPage; });
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




var MyReviewsPage = /** @class */ (function () {
    function MyReviewsPage(menuCtrl, navCtrl, util, events, route, activeroute) {
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.util = util;
        this.events = events;
        this.route = route;
        this.activeroute = activeroute;
        this.isReviewList = true;
    }
    MyReviewsPage.prototype.ngOnInit = function () {
    };
    MyReviewsPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true);
        if (localStorage.getItem('loginDataKKart') != null) {
            this.myReviewlist();
        }
        else {
            this.isReviewList = false;
        }
    };
    MyReviewsPage.prototype.myReviewlist = function () {
        var _this = this;
        var myData = JSON.stringify({});
        console.log("Your myData: ", myData);
        this.util.presentLoading();
        this.util.getTypeDetailsWithAuth('users/myreviews.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            console.log("Your review data: ", result);
            _this.data = result;
            if (_this.data.success) {
                _this.reviewList = _this.data.data.review_list;
                if (_this.reviewList.length == 0) {
                    _this.isReviewList = false;
                }
                else {
                    _this.isReviewList = true;
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
    MyReviewsPage.prototype.editReview = function (reviewProduct, i) {
        console.log("editreviewProduct", reviewProduct);
        var navigationExtras = {
            state: {
                from: 'myreviewlist',
                parms: reviewProduct.slug,
                params2: reviewProduct.id,
                params3: reviewProduct.comment,
                params4: reviewProduct.id
            }
        };
        this.navCtrl.navigateForward('/add-your-review', navigationExtras);
    };
    MyReviewsPage.prototype.deleteReview = function (reviewProduct) {
        var _this = this;
        console.log("deletereviewProduct", reviewProduct);
        var myData = JSON.stringify({
            id: reviewProduct.id
        });
        console.log("Your myData: ", myData);
        this.util.presentLoading();
        this.util.getTypeDetailsWithAuth('users/deletereview.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            console.log("Your order data: ", result);
            _this.data = result;
            if (_this.data.success) {
                _this.util.showToast(_this.data.data.status);
                _this.myReviewlist();
            }
            else {
                _this.util.showToast(_this.data.message);
            }
        }, function (error) {
            _this.util.dismissLoader();
            _this.util.showToast('Server error occured. Try again.');
        });
    };
    MyReviewsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-reviews',
            template: __webpack_require__(/*! ./my-reviews.page.html */ "./src/app/my-reviews/my-reviews.page.html"),
            styles: [__webpack_require__(/*! ./my-reviews.page.scss */ "./src/app/my-reviews/my-reviews.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _api_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MyReviewsPage);
    return MyReviewsPage;
}());



/***/ })

}]);
//# sourceMappingURL=my-reviews-my-reviews-module.js.map