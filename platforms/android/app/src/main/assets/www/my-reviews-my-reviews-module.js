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

module.exports = ".bg-primary {\n  background: #1B98D5; }\n\n.card-box {\n  background: #A7CF46;\n  padding: 10px 5px;\n  text-align: center;\n  position: relative; }\n\n.card-box img {\n    width: 44px;\n    margin: 0 auto; }\n\n.card-box h3 {\n    font-size: 16px;\n    color: #000000;\n    margin: 5px 0; }\n\n.card-box h4 {\n    font-size: 18px;\n    color: #ffffff;\n    margin: 5px 0; }\n\n.customer-details {\n  border: 1px solid #D2D2D2;\n  position: relative; }\n\n.customer-details > ul {\n    padding: 0;\n    margin: 0; }\n\n.customer-details > ul > li {\n      /* OLD - iOS 6-, Safari 3.1-6 */\n      /* OLD - Firefox 19- (buggy but mostly works) */\n      /* TWEENER - IE 10 */\n      /* NEW - Chrome */\n      display: flex;\n      list-style: none;\n      width: 100%;\n      padding: 5px; }\n\n.customer-details > ul > li .left {\n        font-size: 14px;\n        color: #979797;\n        width: 40%; }\n\n.customer-details > ul > li .right {\n        font-size: 14px;\n        color: #000000;\n        width: 40%; }\n\n.customer-details > ul > li .rating {\n        font-size: 14px;\n        color: green;\n        width: 100%; }\n\n.text-grey {\n  color: #A7A7A7; }\n\n.text-danger {\n  color: #F83956; }\n\n.action-dd {\n  background: #A7CF46;\n  border: 1px solid #A7CF46;\n  color: #fff;\n  border-radius: 5px; }\n\n.action-btn {\n  margin-right: 10px;\n  margin-top: 5px;\n  display: inline-block; }\n\n.shortcut-icons {\n  position: absolute;\n  top: 10px;\n  right: 10px; }\n\n.shortcut-icons > li {\n    padding: 3px 4px !important; }\n\n.shortcut-icons > li > a {\n      border: 1px solid #D2D2D2;\n      padding: 5px 5px;\n      display: block;\n      min-width: 40px;\n      text-align: center;\n      background: #fff;\n      min-height: 28px; }\n\n.all-task-catagory {\n  white-space: nowrap;\n  overflow-x: scroll; }\n\n.all-task-catagory ul {\n    padding: 0;\n    margin: 0;\n    /* OLD - iOS 6-, Safari 3.1-6 */\n    /* OLD - Firefox 19- (buggy but mostly works) */\n    /* TWEENER - IE 10 */\n    /* NEW - Chrome */\n    display: flex; }\n\n.all-task-catagory ul li {\n      list-style: none;\n      margin: 0 2px; }\n\n.all-task-catagory ul li a {\n        font-size: 12px;\n        background: #E5E5E5;\n        color: #000;\n        padding: 6px 5px;\n        display: block;\n        text-decoration: none; }\n\n.all-task-catagory ul li.active a {\n        background: #A7CF46;\n        color: #fff; }\n\n.selectedFullSection {\n  position: relative; }\n\n.selectedFullSection .customer-details {\n    border: 1px solid rgba(175, 229, 238, 0.75);\n    background-color: rgba(175, 229, 238, 0.3); }\n\n.selected {\n  position: relative; }\n\n.selected .customer-details {\n    border: 1px solid rgba(175, 229, 238, 0.75);\n    background-color: rgba(175, 229, 238, 0.3); }\n\n.selected:after {\n    content: \"\";\n    background-image: url('check_icon_blue.svg');\n    background-repeat: no-repeat;\n    width: 28px;\n    height: 28px;\n    position: absolute;\n    top: 5px;\n    right: 5px; }\n\nlabel {\n  font-family: inherit;\n  line-height: normal;\n  font-size: 14px;\n  top: 15px; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 2px;\n  margin-bottom: 8px;\n  font-weight: 500;\n  line-height: 1.2; }\n\n.addtoCrt {\n  background: transparent;\n  position: relative;\n  border-radius: 5px;\n  background-color: green; }\n\n.star {\n  --min-height: 24px;\n  --transition: background-color 200ms linear;\n  --padding-start: 0px;\n  --inner-padding-end: 8px;\n  --border-color: var(--ion-color-step-150,#c8c7cc);\n  --highlight-height: 0;\n  font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWF2ZXJzd2ViL0Rlc2t0b3AvU21hcnRLYXJ0SHlicmlkL3NyYy9hcHAvbXktcmV2aWV3cy9teS1yZXZpZXdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUp0QjtJQU1RLFdBQVc7SUFDWCxjQUFjLEVBQUE7O0FBUHRCO0lBVVEsZUFBZTtJQUNmLGNBQWM7SUFDZCxhQUFhLEVBQUE7O0FBWnJCO0lBZVEsZUFBZTtJQUNmLGNBQWM7SUFDZCxhQUFhLEVBQUE7O0FBR3JCO0VBQ0kseUJBQXlCO0VBQ3pCLGtCQUFrQixFQUFBOztBQUZ0QjtJQUlRLFVBQVU7SUFDVixTQUFTLEVBQUE7O0FBTGpCO01BT3VDLCtCQUFBO01BQ0EsK0NBQUE7TUFDQSxvQkFBQTtNQUNBLGlCQUFBO01BQzNCLGFBQWE7TUFDYixnQkFBZ0I7TUFDaEIsV0FBVztNQUNYLFlBQVksRUFBQTs7QUFkeEI7UUFnQmdCLGVBQWU7UUFDZixjQUFjO1FBQ2QsVUFBVSxFQUFBOztBQWxCMUI7UUFxQmdCLGVBQWU7UUFDZixjQUFjO1FBQ2QsVUFBVSxFQUFBOztBQXZCMUI7UUEwQmdCLGVBQWU7UUFDZixZQUFZO1FBQ1osV0FBVyxFQUFBOztBQUszQjtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVcsRUFBQTs7QUFIZjtJQUtRLDJCQUEyQixFQUFBOztBQUxuQztNQU9ZLHlCQUF5QjtNQUN6QixnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLGVBQWU7TUFDZixrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLGdCQUFnQixFQUFBOztBQUs1QjtFQUNJLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFGdEI7SUFJUSxVQUFVO0lBQ1YsU0FBUztJQUNrQiwrQkFBQTtJQUNBLCtDQUFBO0lBQ0Esb0JBQUE7SUFDQSxpQkFBQTtJQUMzQixhQUFhLEVBQUE7O0FBVnJCO01BWVksZ0JBQWdCO01BQ2hCLGFBQWEsRUFBQTs7QUFiekI7UUFlZ0IsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxxQkFBcUIsRUFBQTs7QUFwQnJDO1FBd0JvQixtQkFBbUI7UUFDbkIsV0FBVyxFQUFBOztBQU8vQjtFQUNJLGtCQUFrQixFQUFBOztBQUR0QjtJQUdRLDJDQUEyQztJQUMzQywwQ0FBMkMsRUFBQTs7QUFjbkQ7RUFDSSxrQkFBa0IsRUFBQTs7QUFEdEI7SUFHUSwyQ0FBMkM7SUFDM0MsMENBQTJDLEVBQUE7O0FBSm5EO0lBT1EsV0FBVztJQUNYLDRDQUE4RDtJQUM5RCw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVUsRUFBQTs7QUFNbEI7RUFDSSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixTQUFTLEVBQUE7O0FBSVQ7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFHaEI7RUFDSSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix1QkFDSixFQUFBOztBQUVBO0VBQ0ksa0JBQWE7RUFDYiwyQ0FBYTtFQUNiLG9CQUFnQjtFQUNoQix3QkFBb0I7RUFDcEIsaURBQWU7RUFDZixxQkFBbUI7RUFDbkIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbXktcmV2aWV3cy9teS1yZXZpZXdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1wcmltYXJ5e1xuICAgIGJhY2tncm91bmQ6ICMxQjk4RDU7XG59XG4uY2FyZC1ib3h7XG4gICAgYmFja2dyb3VuZDogI0E3Q0Y0NjtcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDQ0cHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICBoM3tcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICB9XG4gICAgaDR7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7IFxuICAgIH1cbn1cbi5jdXN0b21lci1kZXRhaWxze1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEMkQyRDI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICY+dWx7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgJj5saXtcbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94OyAgICAgIC8qIE9MRCAtIGlPUyA2LSwgU2FmYXJpIDMuMS02ICovXG4gICAgICAgICAgICBkaXNwbGF5OiAtbW96LWJveDsgICAgICAgICAvKiBPTEQgLSBGaXJlZm94IDE5LSAoYnVnZ3kgYnV0IG1vc3RseSB3b3JrcykgKi9cbiAgICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94OyAgICAgIC8qIFRXRUVORVIgLSBJRSAxMCAqL1xuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4OyAgICAgLyogTkVXIC0gQ2hyb21lICovXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgLmxlZnR7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTc5Nzk3O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmlnaHR7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmF0aW5ne1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4udGV4dC1ncmV5e1xuICAgIGNvbG9yOiAjQTdBN0E3O1xufVxuLnRleHQtZGFuZ2Vye1xuICAgIGNvbG9yOiAjRjgzOTU2O1xufVxuLmFjdGlvbi1kZHtcbiAgICBiYWNrZ3JvdW5kOiAjQTdDRjQ2O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNBN0NGNDY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmFjdGlvbi1idG57XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uc2hvcnRjdXQtaWNvbnN7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICByaWdodDogMTBweDtcbiAgICAmPmxpe1xuICAgICAgICBwYWRkaW5nOiAzcHggNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICY+YXtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEMkQyRDI7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggNXB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgbWluLWhlaWdodDogMjhweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmFsbC10YXNrLWNhdGFnb3J5e1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIHVse1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94OyAgICAgIC8qIE9MRCAtIGlPUyA2LSwgU2FmYXJpIDMuMS02ICovXG4gICAgICAgIGRpc3BsYXk6IC1tb3otYm94OyAgICAgICAgIC8qIE9MRCAtIEZpcmVmb3ggMTktIChidWdneSBidXQgbW9zdGx5IHdvcmtzKSAqL1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDsgICAgICAvKiBUV0VFTkVSIC0gSUUgMTAgKi9cbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4OyAgICAgLyogTkVXIC0gQ2hyb21lICovXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7ICBcbiAgICAgICAgbGl7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDJweDtcbiAgICAgICAgICAgIGF7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNFNUU1RTU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNnB4IDVweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLmFjdGl2ZXtcbiAgICAgICAgICAgICAgICBhe1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjQTdDRjQ2O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zZWxlY3RlZEZ1bGxTZWN0aW9ue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuY3VzdG9tZXItZGV0YWlsc3tcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNzUsIDIyOSwgMjM4LCAwLjc1KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzUsIDIyOSwgMjM4LCAwLjMwKTtcbiAgICB9XG4gICAgLy8gJjphZnRlcntcbiAgICAvLyAgICAgY29udGVudDogXCJcIjtcbiAgICAvLyAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvYXNzZXRzL2ltYWdlcy9jaGVja19pY29uX2JsdWUuc3ZnJyk7XG4gICAgLy8gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgLy8gICAgIHdpZHRoOiAyOHB4O1xuICAgIC8vICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyAgICAgdG9wOiAxNXB4O1xuICAgIC8vICAgICByaWdodDogMTVweDtcbiAgICAvLyB9XG59XG5cbi5zZWxlY3RlZHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmN1c3RvbWVyLWRldGFpbHN7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTc1LCAyMjksIDIzOCwgMC43NSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc1LCAyMjksIDIzOCwgMC4zMCk7XG4gICAgfVxuICAgICY6YWZ0ZXJ7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjL2Fzc2V0cy9pbWFnZXMvY2hlY2tfaWNvbl9ibHVlLnN2ZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICB3aWR0aDogMjhweDtcbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNXB4O1xuICAgICAgICByaWdodDogNXB4O1xuICAgIH1cbn1cblxuXG5cbmxhYmVse1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRvcDogMTVweDtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICNBN0NGNDY7XG4gICAgfVxuXG4gICAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFkZHRvQ3J0e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyZWVuXG4gICAgICAgIH1cblxuICAgICAgICAuc3RhciB7XG4gICAgICAgICAgICAtLW1pbi1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAtLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiA4cHg7XG4gICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCNjOGM3Y2MpO1xuICAgICAgICAgICAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfSJdfQ== */"

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