(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-list-order-list-module"],{

/***/ "./src/app/order-list/order-list.module.ts":
/*!*************************************************!*\
  !*** ./src/app/order-list/order-list.module.ts ***!
  \*************************************************/
/*! exports provided: OrderListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListPageModule", function() { return OrderListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _order_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-list.page */ "./src/app/order-list/order-list.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _order_list_page__WEBPACK_IMPORTED_MODULE_5__["OrderListPage"]
    }
];
var OrderListPageModule = /** @class */ (function () {
    function OrderListPageModule() {
    }
    OrderListPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_order_list_page__WEBPACK_IMPORTED_MODULE_5__["OrderListPage"]]
        })
    ], OrderListPageModule);
    return OrderListPageModule;
}());



/***/ }),

/***/ "./src/app/order-list/order-list.page.html":
/*!*************************************************!*\
  !*** ./src/app/order-list/order-list.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: #FFCC23\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      My Orders\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid *ngIf=\"isOrderList===true\">\n    <ion-row class=\"cartItem\" *ngFor=\"let orderList of orderList; let i = index\">\n      <!-- <ion-col size=\"12\" (click)=\"details(orderList)\">\n        <h6>Order Id - {{orderList.order_id}}</h6>\n        <h6>Order Date - {{orderList.creation_date.toString().split('T')[0]}}</h6>\n        <h6 *ngIf=\"orderList.invoice_items[0].order_status == 0\">Order Status - <span\n            style=\"color:dodgerblue;font-weight: bold;\">Processing</span> </h6>\n        <h6 *ngIf=\"orderList.invoice_items[0].order_status == 1\">Order Status - <span\n            style=\"color:dodgerblue;font-weight: bold;\">On Hold</span></h6>\n        <h6 *ngIf=\"orderList.invoice_items[0].order_status == 2 && orderList.invoice_items[0].return_status == 0\">Order\n          Status - <span style=\"color:green;font-weight: bold;\">Delivered</span></h6>\n        <h6 *ngIf=\"orderList.invoice_items[0].order_status == 2 && orderList.invoice_items[0].return_status == 1\">Order\n          Status - <span style=\"color:green;font-weight: bold;\">Delivered</span> | <span\n            style=\"color:dodgerblue;font-weight: bold;\">Return Processing</span> </h6>\n        <h6 *ngIf=\"orderList.invoice_items[0].order_status == 2 && orderList.invoice_items[0].return_status == 2\">Order\n          Status - <span style=\"color:green;font-weight: bold;\">Delivered</span> | <span\n            style=\"color:dodgerblue;font-weight: bold;\">Return Processing</span> </h6>\n        <h6 *ngIf=\"orderList.invoice_items[0].order_status == 3\">Order Status - <span\n            style=\"color: red;font-weight: bold;\">Cancelled</span></h6>\n        <h6 *ngIf=\"orderList.invoice_items[0].order_status == 4\">Order Status - <span\n            style=\"color:green;font-weight: bold;\">Confirmed</span></h6>\n        <h6 *ngIf=\"orderList.invoice_items[0].order_status == 4\">Delivered within - <span\n            style=\"color:green;\">{{orderList.invoice_items[0].product.day_of_delivary}} days </span></h6>\n      </ion-col> -->\n      <ion-col size=\"4\" (click)=\"details(orderList)\">\n        <div class=\"imgwrp\">\n          <ion-img [src]=\"orderList.invoice_items[0].product.photo\"></ion-img>\n        </div>\n      </ion-col>\n      <ion-col size=\"8\" (click)=\"details(orderList)\">\n        <h4 class=\"cName\">{{orderList.invoice_items[0].product.name | slice:0:20}}</h4>\n        <div class=\"Pprice\">\n          <!-- <span class=\"crPrice\">Price- {{orderList.net_amt}}</span> -->\n          <span class=\"crPrice\">\n            <h6 *ngIf=\"orderList.invoice_items[0].order_status == 0\">Order Status - <span\n                style=\"color:dodgerblue;font-weight: bold;\">Processing</span> </h6>\n            <h6 *ngIf=\"orderList.invoice_items[0].order_status == 1\">Order Status - <span\n                style=\"color:dodgerblue;font-weight: bold;\">On Hold</span></h6>\n            <h6 *ngIf=\"orderList.invoice_items[0].order_status == 2 && orderList.invoice_items[0].return_status == 0\">\n              Order Status - <span style=\"color:green;font-weight: bold;\">Delivered</span></h6>\n            <h6 *ngIf=\"orderList.invoice_items[0].order_status == 2 && orderList.invoice_items[0].return_status == 1\">\n              Order Status - <span style=\"color:green;font-weight: bold;\">Delivered</span> | <span\n                style=\"color:dodgerblue;font-weight: bold;\">Return Processing</span> </h6>\n            <h6 *ngIf=\"orderList.invoice_items[0].order_status == 2 && orderList.invoice_items[0].return_status == 2\">\n              Order Status - <span style=\"color:green;font-weight: bold;\">Delivered</span> | <span\n                style=\"color:dodgerblue;font-weight: bold;\">Return Processing</span> </h6>\n            <h6 *ngIf=\"orderList.invoice_items[0].order_status == 3\">Order Status - <span\n                style=\"color: red;font-weight: bold;\">Cancelled</span></h6>\n            <h6 *ngIf=\"orderList.invoice_items[0].order_status == 4\">Order Status - <span\n                style=\"color:green;font-weight: bold;\">Confirmed</span></h6>\n            <h6 *ngIf=\"orderList.invoice_items[0].order_status == 4\">Delivered within - <span\n                style=\"color:green;\">{{orderList.invoice_items[0].product.day_of_delivary}} days </span></h6>\n          </span>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card style=\"text-align:center;margin-top:50% \" *ngIf=\"isOrderList===false\">\n    <ion-card-content>\n      You have not ordered anything yet\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/order-list/order-list.page.scss":
/*!*************************************************!*\
  !*** ./src/app/order-list/order-list.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cartItem {\n  border-bottom: 8px solid rgba(0, 0, 0, 0.08);\n  padding-top: 0px; }\n\n.cName {\n  margin: 0 0 5px;\n  font-size: 18px; }\n\n.Pprice {\n  margin: 10px 0; }\n\n.crPrice {\n  font-size: 18px;\n  display: inline-block;\n  margin-right: 10px; }\n\n.oldPrice {\n  text-decoration: line-through;\n  color: rgba(0, 0, 0, 0.6);\n  display: inline-block;\n  margin-right: 15px; }\n\n.offPrice {\n  color: green; }\n\n.unitP {\n  font-size: 14px;\n  float: right;\n  width: 50px;\n  padding: 4px; }\n\n.qty {\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.24);\n  margin-top: 9px;\n  border-radius: 5px;\n  max-width: 70px;\n  margin: 10px auto 3px; }\n\n.imgwrp {\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.35);\n  padding: 1px; }\n\n.tAmnt {\n  margin-top: 13px; }\n\n.rmvBtn.button-outline {\n  --border-width: 1px;\n  --border-color: rgba(0, 0, 0, 0.35);\n  height: 30px;\n  width: 120px; }\n\n.infoC {\n  text-align: right;\n  margin: 10px 0; }\n\n.PdActins {\n  text-align: center;\n  margin-top: 30px; }\n\n.PdActins ion-button {\n  width: 48%;\n  margin: 0 2px; }\n\nion-content ion-label {\n  font-size: 17px;\n  font-weight: 400; }\n\nion-content ion-textarea {\n  border: 1px solid #CCCCCC;\n  padding: 5px;\n  height: 160px;\n  border-radius: 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWF2ZXJzd2ViL0Rlc2t0b3AvU21hcnRLYXJ0SHlicmlkL3NyYy9hcHAvb3JkZXItbGlzdC9vcmRlci1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRDQUE0QztFQUM1QyxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUVuQjtFQUFTLGNBQWMsRUFBQTs7QUFDdkI7RUFDSSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGtCQUFrQixFQUFBOztBQUV0QjtFQUFVLFlBQVksRUFBQTs7QUFDdEI7RUFDSSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksdUNBQXVDO0VBQ3ZDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLHVDQUF1QztFQUN2QyxZQUFZLEVBQUE7O0FBRWhCO0VBQVcsZ0JBQWdCLEVBQUE7O0FBRTNCO0VBQ0ksbUJBQWU7RUFDZixtQ0FBZTtFQUNmLFlBQVc7RUFDWCxZQUFXLEVBQUE7O0FBR2Y7RUFDSSxpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxVQUFVO0VBQ1YsYUFBYSxFQUFBOztBQUdqQjtFQUVRLGVBQWU7RUFFZixnQkFBZ0IsRUFBQTs7QUFKeEI7RUFPUSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL29yZGVyLWxpc3Qvb3JkZXItbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FydEl0ZW17XG4gICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbn1cbi5jTmFtZXtcbiAgICBtYXJnaW46IDAgMCA1cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuLlBwcmljZXsgbWFyZ2luOiAxMHB4IDA7fVxuLmNyUHJpY2V7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ub2xkUHJpY2V7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLm9mZlByaWNle2NvbG9yOiBncmVlbjt9XG4udW5pdFB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBwYWRkaW5nOiA0cHg7XG59XG4ucXR5e1xuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICBtYXJnaW4tdG9wOiA5cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1heC13aWR0aDogNzBweDtcbiAgICBtYXJnaW46IDEwcHggYXV0byAzcHg7XG59XG4uaW1nd3Jwe1xuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgICBwYWRkaW5nOiAxcHg7XG59XG4udEFtbnR7ICAgIG1hcmdpbi10b3A6IDEzcHg7fVxuXG4ucm12QnRuLmJ1dHRvbi1vdXRsaW5lIHtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICAgIGhlaWdodDozMHB4O1xuICAgIHdpZHRoOjEyMHB4O1xufVxuXG4uaW5mb0N7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG59XG4uUGRBY3RpbnN7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG4uUGRBY3RpbnMgaW9uLWJ1dHRvbntcbiAgICB3aWR0aDogNDglO1xuICAgIG1hcmdpbjogMCAycHg7XG59XG5cbmlvbi1jb250ZW50e1xuICAgIGlvbi1sYWJlbHtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAvL2NvbG9yOiAjQTdDRjQ2O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cbiAgICBpb24tdGV4dGFyZWF7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIH1cbn1cblxuLy8gLml0ZW0taW5wdXQge1xuLy8gICAgIHBhZGRpbmc6IDVweDtcbi8vICAgICBib3JkZXI6IHNvbGlkIC41cHggZ3JleTtcbi8vICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4vLyB9Il19 */"

/***/ }),

/***/ "./src/app/order-list/order-list.page.ts":
/*!***********************************************!*\
  !*** ./src/app/order-list/order-list.page.ts ***!
  \***********************************************/
/*! exports provided: OrderListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListPage", function() { return OrderListPage; });
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




var OrderListPage = /** @class */ (function () {
    function OrderListPage(util, alertController, events, navCtrl, route, modalController, activeroute, menuCtrl) {
        // if (localStorage.getItem('loginDataKKart') != null) {
        //   this.myOrderlist()
        // } else {
        //   this.isOrderList = false
        // }
        this.util = util;
        this.alertController = alertController;
        this.events = events;
        this.navCtrl = navCtrl;
        this.route = route;
        this.modalController = modalController;
        this.activeroute = activeroute;
        this.menuCtrl = menuCtrl;
        this.isOrderList = true;
        //this.recruiteddate.toString().split('T')
    }
    OrderListPage.prototype.ngOnInit = function () {
    };
    OrderListPage.prototype.ionViewWillEnter = function () {
        //console.log("viewwillentercalling")
        this.menuCtrl.enable(true);
        //this.pageDetails = { 'showMenu': true, 'showBack': false, 'showButtons': false, 'title': 'My Wishlist', 'prevPage': '' };
        //this.showMenu(this.pageDetails);
        if (localStorage.getItem('loginDataKKart') != null) {
            this.myOrderlist();
        }
        else {
            this.isOrderList = false;
        }
    };
    OrderListPage.prototype.showMenu = function (pageDetails) {
        console.log('User created!');
        this.events.publish('showMenu', pageDetails, Date.now());
    };
    OrderListPage.prototype.myOrderlist = function () {
        var _this = this;
        var myData = JSON.stringify({});
        //console.log("Your myData: ", myData);
        this.util.presentLoading();
        this.util.getTypeDetailsWithAuth('users/myorders.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            //console.log("Your order data: ", result);
            _this.data = result;
            if (_this.data.success) {
                _this.orderList = _this.data.data.order_list;
                if (_this.orderList.length == 0) {
                    _this.isOrderList = false;
                }
                else {
                    _this.isOrderList = true;
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
    OrderListPage.prototype.details = function (orderListSingle) {
        //console.log("orderListSingle",orderListSingle)
        var navigationExtras = {
            state: {
                from: 'orderList',
                parms: orderListSingle,
            }
        };
        this.navCtrl.navigateForward('/order-details', navigationExtras);
    };
    OrderListPage.prototype.tabBarList = function () {
        this.navCtrl.navigateRoot('/list');
    };
    OrderListPage.prototype.tabBarHome = function () {
        this.navCtrl.navigateRoot('/home');
    };
    OrderListPage.prototype.tabBarPolicy = function () {
        this.navCtrl.navigateRoot('/privacy-policy');
    };
    OrderListPage.prototype.tabBarContacts = function () {
        this.navCtrl.navigateRoot('/contact');
    };
    OrderListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-list',
            template: __webpack_require__(/*! ./order-list.page.html */ "./src/app/order-list/order-list.page.html"),
            styles: [__webpack_require__(/*! ./order-list.page.scss */ "./src/app/order-list/order-list.page.scss")]
        }),
        __metadata("design:paramtypes", [_api_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], OrderListPage);
    return OrderListPage;
}());



/***/ })

}]);
//# sourceMappingURL=order-list-order-list-module.js.map