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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"dark\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>My Reviews</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-row *ngIf=\"isReviewList==true\">\n    <ion-col *ngFor=\"let singleReviewList of reviewList; let i = index\" size=\"12\">\n      <div class=\"customer-details\">\n        <ul>\n          <li>\n            <ion-row>\n              <ion-col size=\"12\">\n                <h6> {{singleReviewList.product.name}} </h6>\n              </ion-col>\n              \n              <ion-col class=\"left\" size=\"12\">\n                <ion-item class=\"star\" *ngIf=\"singleReviewList.rating==='5'\">\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                </ion-item>\n                <ion-item class=\"star\" *ngIf=\"singleReviewList.rating==='4'\">\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                </ion-item>\n                <ion-item class=\"star\" *ngIf=\"singleReviewList.rating==='3'\">\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                </ion-item>\n                <ion-item class=\"star\" *ngIf=\"singleReviewList.rating==='2'\">\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                </ion-item>\n                <ion-item class=\"star\" *ngIf=\"singleReviewList.rating==='1'\">\n                  <ion-icon name=\"star\" color=\"success\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                </ion-item>\n                <ion-item class=\"star\" *ngIf=\"singleReviewList.rating==='0'\">\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                  <ion-icon name=\"star-outline\"></ion-icon>\n                </ion-item>\n                Reviewed on {{singleReviewList.dt.toString().split('T')[0]}}\n              </ion-col>\n            </ion-row>\n          </li>\n      \n          <li>\n            <div class=\"left\">\n              <h6>Reviews -</h6>\n            </div>\n            <div class=\"right\">\n              <ion-icon name=\"create\" md=\"md-create\" style=\"font-size:28px\" (click)=\"editReview(singleReviewList,i)\" ></ion-icon>\n            </div>\n          </li>\n          <li>\n            <div>\n              {{singleReviewList.comment}}\n            </div>\n          </li>\n          <ion-col size=\"6\">\n            <ion-button (click)=\"deleteReview(singleReviewList)\" color=\"primary\" shape=\"round\" expand=\"block\" style=\"width: 100%;\">Delete</ion-button>\n          </ion-col>          \n        </ul>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-card style=\"text-align:center;margin-top:50% \" *ngIf=\"isReviewList==false\">\n    <ion-card-content>\n      You have not reviewed any product yet\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/my-reviews/my-reviews.page.scss":
/*!*************************************************!*\
  !*** ./src/app/my-reviews/my-reviews.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-primary {\n  background: #1B98D5; }\n\n.card-box {\n  background: #A7CF46;\n  padding: 10px 5px;\n  text-align: center;\n  position: relative; }\n\n.card-box img {\n    width: 44px;\n    margin: 0 auto; }\n\n.card-box h3 {\n    font-size: 16px;\n    color: #000000;\n    margin: 5px 0; }\n\n.card-box h4 {\n    font-size: 18px;\n    color: #ffffff;\n    margin: 5px 0; }\n\n.customer-details {\n  border: 1px solid #D2D2D2;\n  position: relative; }\n\n.customer-details > ul {\n    padding: 0;\n    margin: 0; }\n\n.customer-details > ul > li {\n      /* OLD - iOS 6-, Safari 3.1-6 */\n      /* OLD - Firefox 19- (buggy but mostly works) */\n      /* TWEENER - IE 10 */\n      /* NEW - Chrome */\n      display: flex;\n      list-style: none;\n      width: 100%;\n      padding: 5px; }\n\n.customer-details > ul > li .left {\n        font-size: 14px;\n        color: #979797;\n        width: 40%; }\n\n.customer-details > ul > li .right {\n        font-size: 14px;\n        color: #000000;\n        width: 40%; }\n\n.customer-details > ul > li .rating {\n        font-size: 14px;\n        color: green;\n        width: 100%; }\n\n.text-grey {\n  color: #A7A7A7; }\n\n.text-danger {\n  color: #F83956; }\n\n.action-dd {\n  background: #A7CF46;\n  border: 1px solid #A7CF46;\n  color: #fff;\n  border-radius: 5px; }\n\n.action-btn {\n  margin-right: 10px;\n  margin-top: 5px;\n  display: inline-block; }\n\n.shortcut-icons {\n  position: absolute;\n  top: 10px;\n  right: 10px; }\n\n.shortcut-icons > li {\n    padding: 3px 4px !important; }\n\n.shortcut-icons > li > a {\n      border: 1px solid #D2D2D2;\n      padding: 5px 5px;\n      display: block;\n      min-width: 40px;\n      text-align: center;\n      background: #fff;\n      min-height: 28px; }\n\n.all-task-catagory {\n  white-space: nowrap;\n  overflow-x: scroll; }\n\n.all-task-catagory ul {\n    padding: 0;\n    margin: 0;\n    /* OLD - iOS 6-, Safari 3.1-6 */\n    /* OLD - Firefox 19- (buggy but mostly works) */\n    /* TWEENER - IE 10 */\n    /* NEW - Chrome */\n    display: flex; }\n\n.all-task-catagory ul li {\n      list-style: none;\n      margin: 0 2px; }\n\n.all-task-catagory ul li a {\n        font-size: 12px;\n        background: #E5E5E5;\n        color: #000;\n        padding: 6px 5px;\n        display: block;\n        text-decoration: none; }\n\n.all-task-catagory ul li.active a {\n        background: #A7CF46;\n        color: #fff; }\n\n.selectedFullSection {\n  position: relative; }\n\n.selectedFullSection .customer-details {\n    border: 1px solid rgba(175, 229, 238, 0.75);\n    background-color: rgba(175, 229, 238, 0.3); }\n\n.selected {\n  position: relative; }\n\n.selected .customer-details {\n    border: 1px solid rgba(175, 229, 238, 0.75);\n    background-color: rgba(175, 229, 238, 0.3); }\n\n.selected:after {\n    content: \"\";\n    background-image: url('check_icon_blue.svg');\n    background-repeat: no-repeat;\n    width: 28px;\n    height: 28px;\n    position: absolute;\n    top: 5px;\n    right: 5px; }\n\nlabel {\n  font-family: inherit;\n  line-height: normal;\n  font-size: 14px;\n  top: 15px; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 2px;\n  margin-bottom: 8px;\n  font-weight: 500;\n  line-height: 1.2; }\n\n.addtoCrt {\n  background: transparent;\n  position: relative;\n  border-radius: 5px;\n  background-color: green; }\n\n.star {\n  --min-height: 24px;\n  --transition: background-color 200ms linear;\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --border-color: var(--ion-color-step-150,#c8c7cc);\n  --highlight-height: 0;\n  font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YXAvRGVza3RvcC9Jb25pY19Qcm9qZWN0L2FyY2hpdmUgaW9uaWMgZlByb2plY3Qvb2xkIGFyY2hpdmUgMi9BcmNoaXZlIDIvc3JjL2FwcC9teS1yZXZpZXdzL215LXJldmlld3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBSnRCO0lBTVEsV0FBVztJQUNYLGNBQWMsRUFBQTs7QUFQdEI7SUFVUSxlQUFlO0lBQ2YsY0FBYztJQUNkLGFBQWEsRUFBQTs7QUFackI7SUFlUSxlQUFlO0lBQ2YsY0FBYztJQUNkLGFBQWEsRUFBQTs7QUFHckI7RUFDSSx5QkFBeUI7RUFDekIsa0JBQWtCLEVBQUE7O0FBRnRCO0lBSVEsVUFBVTtJQUNWLFNBQVMsRUFBQTs7QUFMakI7TUFPdUMsK0JBQUE7TUFDQSwrQ0FBQTtNQUNBLG9CQUFBO01BQ0EsaUJBQUE7TUFDM0IsYUFBYTtNQUNiLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsWUFBWSxFQUFBOztBQWR4QjtRQWdCZ0IsZUFBZTtRQUNmLGNBQWM7UUFDZCxVQUFVLEVBQUE7O0FBbEIxQjtRQXFCZ0IsZUFBZTtRQUNmLGNBQWM7UUFDZCxVQUFVLEVBQUE7O0FBdkIxQjtRQTBCZ0IsZUFBZTtRQUNmLFlBQVk7UUFDWixXQUFXLEVBQUE7O0FBSzNCO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVyxFQUFBOztBQUhmO0lBS1EsMkJBQTJCLEVBQUE7O0FBTG5DO01BT1kseUJBQXlCO01BQ3pCLGdCQUFnQjtNQUNoQixjQUFjO01BQ2QsZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixnQkFBZ0I7TUFDaEIsZ0JBQWdCLEVBQUE7O0FBSzVCO0VBQ0ksbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUZ0QjtJQUlRLFVBQVU7SUFDVixTQUFTO0lBQ2tCLCtCQUFBO0lBQ0EsK0NBQUE7SUFDQSxvQkFBQTtJQUNBLGlCQUFBO0lBQzNCLGFBQWEsRUFBQTs7QUFWckI7TUFZWSxnQkFBZ0I7TUFDaEIsYUFBYSxFQUFBOztBQWJ6QjtRQWVnQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLHFCQUFxQixFQUFBOztBQXBCckM7UUF3Qm9CLG1CQUFtQjtRQUNuQixXQUFXLEVBQUE7O0FBTy9CO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRHRCO0lBR1EsMkNBQTJDO0lBQzNDLDBDQUEyQyxFQUFBOztBQWNuRDtFQUNJLGtCQUFrQixFQUFBOztBQUR0QjtJQUdRLDJDQUEyQztJQUMzQywwQ0FBMkMsRUFBQTs7QUFKbkQ7SUFPUSxXQUFXO0lBQ1gsNENBQThEO0lBQzlELDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVSxFQUFBOztBQU1sQjtFQUNJLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFNBQVMsRUFBQTs7QUFJVDtFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdoQjtFQUNJLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHVCQUNKLEVBQUE7O0FBRUE7RUFDSSxrQkFBYTtFQUNiLDJDQUFhO0VBQ2Isb0JBQWdCO0VBQ2hCLHdCQUFvQjtFQUNwQixpREFBZTtFQUNmLHFCQUFtQjtFQUNuQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9teS1yZXZpZXdzL215LXJldmlld3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLXByaW1hcnl7XG4gICAgYmFja2dyb3VuZDogIzFCOThENTtcbn1cbi5jYXJkLWJveHtcbiAgICBiYWNrZ3JvdW5kOiAjQTdDRjQ2O1xuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaW1ne1xuICAgICAgICB3aWR0aDogNDRweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIGgze1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgIH1cbiAgICBoNHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgbWFyZ2luOiA1cHggMDsgXG4gICAgfVxufVxuLmN1c3RvbWVyLWRldGFpbHN7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0QyRDJEMjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgJj51bHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAmPmxpe1xuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7ICAgICAgLyogT0xEIC0gaU9TIDYtLCBTYWZhcmkgMy4xLTYgKi9cbiAgICAgICAgICAgIGRpc3BsYXk6IC1tb3otYm94OyAgICAgICAgIC8qIE9MRCAtIEZpcmVmb3ggMTktIChidWdneSBidXQgbW9zdGx5IHdvcmtzKSAqL1xuICAgICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7ICAgICAgLyogVFdFRU5FUiAtIElFIDEwICovXG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7ICAgICAvKiBORVcgLSBDaHJvbWUgKi9cbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAubGVmdHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM5Nzk3OTc7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yaWdodHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yYXRpbmd7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi50ZXh0LWdyZXl7XG4gICAgY29sb3I6ICNBN0E3QTc7XG59XG4udGV4dC1kYW5nZXJ7XG4gICAgY29sb3I6ICNGODM5NTY7XG59XG4uYWN0aW9uLWRke1xuICAgIGJhY2tncm91bmQ6ICNBN0NGNDY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0E3Q0Y0NjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uYWN0aW9uLWJ0bntcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5zaG9ydGN1dC1pY29uc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgICY+bGl7XG4gICAgICAgIHBhZGRpbmc6IDNweCA0cHggIWltcG9ydGFudDtcbiAgICAgICAgJj5he1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0QyRDJEMjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCA1cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1pbi13aWR0aDogNDBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAyOHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYWxsLXRhc2stY2F0YWdvcnl7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgdWx7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7ICAgICAgLyogT0xEIC0gaU9TIDYtLCBTYWZhcmkgMy4xLTYgKi9cbiAgICAgICAgZGlzcGxheTogLW1vei1ib3g7ICAgICAgICAgLyogT0xEIC0gRmlyZWZveCAxOS0gKGJ1Z2d5IGJ1dCBtb3N0bHkgd29ya3MpICovXG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94OyAgICAgIC8qIFRXRUVORVIgLSBJRSAxMCAqL1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7ICAgICAvKiBORVcgLSBDaHJvbWUgKi9cbiAgICAgICAgZGlzcGxheTogZmxleDsgIFxuICAgICAgICBsaXtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBtYXJnaW46IDAgMnB4O1xuICAgICAgICAgICAgYXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0U1RTVFNTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA2cHggNXB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYuYWN0aXZle1xuICAgICAgICAgICAgICAgIGF7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNBN0NGNDY7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnNlbGVjdGVkRnVsbFNlY3Rpb257XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5jdXN0b21lci1kZXRhaWxze1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE3NSwgMjI5LCAyMzgsIDAuNzUpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3NSwgMjI5LCAyMzgsIDAuMzApO1xuICAgIH1cbiAgICAvLyAmOmFmdGVye1xuICAgIC8vICAgICBjb250ZW50OiBcIlwiO1xuICAgIC8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaW1hZ2VzL2NoZWNrX2ljb25fYmx1ZS5zdmcnKTtcbiAgICAvLyAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAvLyAgICAgd2lkdGg6IDI4cHg7XG4gICAgLy8gICAgIGhlaWdodDogMjhweDtcbiAgICAvLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vICAgICB0b3A6IDE1cHg7XG4gICAgLy8gICAgIHJpZ2h0OiAxNXB4O1xuICAgIC8vIH1cbn1cblxuLnNlbGVjdGVke1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuY3VzdG9tZXItZGV0YWlsc3tcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNzUsIDIyOSwgMjM4LCAwLjc1KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzUsIDIyOSwgMjM4LCAwLjMwKTtcbiAgICB9XG4gICAgJjphZnRlcntcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvYXNzZXRzL2ltYWdlcy9jaGVja19pY29uX2JsdWUuc3ZnJyk7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgfVxufVxuXG5cblxubGFiZWx7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdG9wOiAxNXB4O1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogI0E3Q0Y0NjtcbiAgICB9XG5cbiAgICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgIH1cblxuICAgICAgICAuYWRkdG9DcnR7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6Z3JlZW5cbiAgICAgICAgfVxuXG4gICAgICAgIC5zdGFyIHtcbiAgICAgICAgICAgIC0tbWluLWhlaWdodDogMjRweDtcbiAgICAgICAgICAgIC0tdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDhweDtcbiAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsI2M4YzdjYyk7XG4gICAgICAgICAgICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9Il19 */"

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