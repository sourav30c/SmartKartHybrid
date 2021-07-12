(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-your-review-add-your-review-module"],{

/***/ "./src/app/add-your-review/add-your-review.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/add-your-review/add-your-review.module.ts ***!
  \***********************************************************/
/*! exports provided: AddYourReviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddYourReviewPageModule", function() { return AddYourReviewPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_your_review_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-your-review.page */ "./src/app/add-your-review/add-your-review.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _add_your_review_page__WEBPACK_IMPORTED_MODULE_5__["AddYourReviewPage"]
    }
];
var AddYourReviewPageModule = /** @class */ (function () {
    function AddYourReviewPageModule() {
    }
    AddYourReviewPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_your_review_page__WEBPACK_IMPORTED_MODULE_5__["AddYourReviewPage"]]
        })
    ], AddYourReviewPageModule);
    return AddYourReviewPageModule;
}());



/***/ }),

/***/ "./src/app/add-your-review/add-your-review.page.html":
/*!***********************************************************!*\
  !*** ./src/app/add-your-review/add-your-review.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button style=\"color: #FFCC23\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Write A Review</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"ion-text-center\" size=\"12\">\n        <ion-label> How do you rate this product? </ion-label>\n      </ion-col>\n\n      <ion-col class=\"ion-text-center\" size=\"12\">\n        <ion-item>\n\n          <ion-icon *ngIf=\"!isStar1\" name=\"star-outline\" (click)=\"Star1Pressed()\"></ion-icon>\n          <ion-icon *ngIf=\"isStar1\" name=\"star\" (click)=\"Star1Pressed()\" color=\"success\"></ion-icon>\n\n          <ion-icon *ngIf=\"!isStar2\" name=\"star-outline\" (click)=\"Star2Pressed()\"></ion-icon>\n          <ion-icon *ngIf=\"isStar2\" name=\"star\" (click)=\"Star2Pressed()\" color=\"success\"></ion-icon>\n\n          <ion-icon *ngIf=\"!isStar3\" name=\"star-outline\" (click)=\"Star3Pressed()\"></ion-icon>\n          <ion-icon *ngIf=\"isStar3\" name=\"star\" (click)=\"Star3Pressed()\" color=\"success\"></ion-icon>\n\n          <ion-icon *ngIf=\"!isStar4\" name=\"star-outline\" (click)=\"Star4Pressed()\"></ion-icon>\n          <ion-icon *ngIf=\"isStar4\" name=\"star\" (click)=\"Star4Pressed()\" color=\"success\"></ion-icon>\n\n          <ion-icon *ngIf=\"!isStar5\" name=\"star-outline\" (click)=\"Star5Pressed()\"></ion-icon>\n          <ion-icon *ngIf=\"isStar5\" name=\"star\" (click)=\"Star5Pressed()\" color=\"success\"></ion-icon>\n\n        </ion-item>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"ion-text-center\" size=\"12\">\n        <ion-label>Write Your Own Review</ion-label>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-textarea [(ngModel)]=\"comments\"></ion-textarea>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-button shape=\"round\" expand=\"full\" color=\"primary\" (click)=\"submitReview()\">Submit</ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/add-your-review/add-your-review.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/add-your-review/add-your-review.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-label {\n  font-size: 17px;\n  color: #008ED8;\n  font-weight: 400; }\n\nion-content ion-textarea {\n  border: 1px solid #CCCCCC;\n  padding: 5px;\n  height: 160px;\n  border-radius: 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWF2ZXJzd2ViL0Rlc2t0b3AvU21hcnRLYXJ0SHlicmlkL3NyYy9hcHAvYWRkLXlvdXItcmV2aWV3L2FkZC15b3VyLXJldmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxlQUFlO0VBQ2YsY0FBYTtFQUNiLGdCQUFnQixFQUFBOztBQUp4QjtFQU9RLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRkLXlvdXItcmV2aWV3L2FkZC15b3VyLXJldmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgY29sb3I6IzAwOEVEODtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG4gICAgaW9uLXRleHRhcmVhe1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGhlaWdodDogMTYwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/add-your-review/add-your-review.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/add-your-review/add-your-review.page.ts ***!
  \*********************************************************/
/*! exports provided: AddYourReviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddYourReviewPage", function() { return AddYourReviewPage; });
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




var AddYourReviewPage = /** @class */ (function () {
    function AddYourReviewPage(menuCtrl, navCtrl, util, events, route) {
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.util = util;
        this.events = events;
        this.route = route;
        this.isStar1 = false;
        this.isStar2 = false;
        this.isStar3 = false;
        this.isStar4 = false;
        this.isStar5 = false;
        this.rating = "0";
        this.comments = "";
        this.slugPush = "";
        this.vendorIdPush = "";
        this.pushedFrom = "";
        this.reviewId = "";
        this.slugPush = this.route.getCurrentNavigation().extras.state.parms;
        this.vendorIdPush = this.route.getCurrentNavigation().extras.state.params2;
        this.pushedFrom = this.route.getCurrentNavigation().extras.state.from;
        this.comments = this.route.getCurrentNavigation().extras.state.params3 ? this.route.getCurrentNavigation().extras.state.params3 : "";
        this.reviewId = this.route.getCurrentNavigation().extras.state.params4 ? this.route.getCurrentNavigation().extras.state.params4 : "";
    }
    AddYourReviewPage.prototype.ngOnInit = function () {
    };
    AddYourReviewPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
        //this.pageDetails = { 'showMenu': false, 'showBack': false, 'showButtons': false, 'title': 'Login', 'prevPage': '' };
        //this.showMenu(this.pageDetails);
    };
    AddYourReviewPage.prototype.showMenu = function (pageDetails) {
        console.log('User created!');
        this.events.publish('showMenu', pageDetails, Date.now());
    };
    AddYourReviewPage.prototype.Star1Pressed = function () {
        this.isStar2 = false;
        this.isStar3 = false;
        this.isStar4 = false;
        this.isStar5 = false;
        if (this.isStar1 == true) {
            this.isStar1 = false;
            this.rating = "0";
        }
        else {
            this.isStar1 = true;
            this.rating = "1";
        }
        //console.log("1 Star",this.isStar1, this.isStar2,this.isStar3, this.isStar4, this.isStar5)
    };
    AddYourReviewPage.prototype.Star2Pressed = function () {
        //console.log("2")
        this.isStar1 = true;
        this.isStar3 = false;
        this.isStar4 = false;
        this.isStar5 = false;
        if (this.isStar2 == true) {
            this.isStar2 = false;
            this.rating = "1";
        }
        else {
            this.isStar2 = true;
            this.rating = "2";
        }
        //console.log("2 Star",this.isStar1, this.isStar2,this.isStar3, this.isStar4, this.isStar5)
    };
    AddYourReviewPage.prototype.Star3Pressed = function () {
        //console.log("3")
        this.isStar1 = true;
        this.isStar2 = true;
        this.isStar4 = false;
        this.isStar5 = false;
        if (this.isStar3 == true) {
            this.isStar3 = false;
            this.rating = "2";
        }
        else {
            this.isStar3 = true;
            this.rating = "3";
        }
        //console.log("3 Star",this.isStar1, this.isStar2,this.isStar3, this.isStar4, this.isStar5)
    };
    AddYourReviewPage.prototype.Star4Pressed = function () {
        //console.log("4")
        this.isStar1 = true;
        this.isStar2 = true;
        this.isStar3 = true;
        this.isStar5 = false;
        if (this.isStar4 == true) {
            this.isStar4 = false;
            this.rating = "3";
        }
        else {
            this.isStar4 = true;
            this.rating = "4";
        }
        //console.log("4 Star",this.isStar1, this.isStar2,this.isStar3, this.isStar4, this.isStar5)
    };
    AddYourReviewPage.prototype.Star5Pressed = function () {
        this.isStar1 = true;
        this.isStar2 = true;
        this.isStar3 = true;
        this.isStar4 = true;
        if (this.isStar5 == true) {
            this.isStar5 = false;
            this.rating = "4";
        }
        else {
            this.isStar5 = true;
            this.rating = "5";
        }
        //console.log("5 Star",this.isStar1, this.isStar2,this.isStar3, this.isStar4, this.isStar5)
    };
    AddYourReviewPage.prototype.submitReview = function () {
        if (this.pushedFrom == "myreviewlist") {
            this.postMyReviewEdit();
        }
        else {
            this.postReviewData();
        }
    };
    AddYourReviewPage.prototype.postReviewData = function () {
        var _this = this;
        var myData = JSON.stringify({
            rating: this.rating,
            comment: this.comments,
            slug: this.slugPush //this.reviewListPush[0].slug
        });
        this.util.presentLoading();
        //console.log("Your reviews: ", myData );
        this.util.getTypeDetailsWithAuth('products/addreview.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            //console.log("Your data: ", result);
            _this.data = result;
            if (_this.data.success) {
                _this.util.showToast(_this.data.data.Review_status);
                _this.toReviewListPage();
            }
            else {
                _this.util.showToast(_this.data.status ? _this.data.status : "Please try again later");
            }
        }, function (error) {
            _this.util.dismissLoader();
            _this.util.showAlert('Error!', 'Server error occured. Try again.');
        });
    };
    AddYourReviewPage.prototype.toReviewListPage = function () {
        var navigationExtras = {
            state: {
                from: 'add-review',
                parms: this.slugPush,
                params2: this.vendorIdPush
            }
        };
        this.navCtrl.navigateForward('/details', navigationExtras);
    };
    AddYourReviewPage.prototype.postMyReviewEdit = function () {
        var _this = this;
        var myData = JSON.stringify({
            rating: this.rating,
            comment: this.comments,
            id: this.reviewId
        });
        this.util.presentLoading();
        //console.log("Your reviews: ", myData );
        this.util.getTypeDetailsWithAuth('users/editreview.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            //console.log("Your data: ", result);
            _this.data = result;
            if (_this.data.success) {
                _this.util.showToast(_this.data.data.Review_status);
                _this.navCtrl.navigateBack('/my-reviews');
            }
            else {
                _this.util.showToast(_this.data.status ? _this.data.status : "Please try again later");
            }
        }, function (error) {
            _this.util.dismissLoader();
            _this.util.showAlert('Error!', 'Server error occured. Try again.');
        });
    };
    AddYourReviewPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-your-review',
            template: __webpack_require__(/*! ./add-your-review.page.html */ "./src/app/add-your-review/add-your-review.page.html"),
            styles: [__webpack_require__(/*! ./add-your-review.page.scss */ "./src/app/add-your-review/add-your-review.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _api_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddYourReviewPage);
    return AddYourReviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=add-your-review-add-your-review-module.js.map