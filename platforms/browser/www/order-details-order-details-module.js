(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-details-order-details-module"],{

/***/ "./src/app/order-details/order-details.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/order-details/order-details.module.ts ***!
  \*******************************************************/
/*! exports provided: OrderDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsPageModule", function() { return OrderDetailsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _order_details_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-details.page */ "./src/app/order-details/order-details.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _order_details_page__WEBPACK_IMPORTED_MODULE_5__["OrderDetailsPage"]
    }
];
var OrderDetailsPageModule = /** @class */ (function () {
    function OrderDetailsPageModule() {
    }
    OrderDetailsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_order_details_page__WEBPACK_IMPORTED_MODULE_5__["OrderDetailsPage"]]
        })
    ], OrderDetailsPageModule);
    return OrderDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/order-details/order-details.page.html":
/*!*******************************************************!*\
  !*** ./src/app/order-details/order-details.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button style=\"color: #FFCC23\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Order Details\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"cartItem\">\n      <ion-col size=\"12\">\n        <h4 class=\"cName\">Order Details</h4>\n        <div class=\"Pprice\">\n          <span class=\"crPrice\">Order Id- {{orderDetails.order_id}}</span>\n        </div>\n        <div class=\"Pprice\">\n          <span class=\"crPrice\">Invoice No - {{orderDetails.invoice_no}}</span>\n        </div>\n        <ion-grid>\n          <div class=\"Pprice\">\n            <span class=\"crPrice\">Order Amount - ??? {{orderDetails.gross_amt}}</span>\n          </div>\n          <div class=\"Pprice\" *ngIf=\"codAmount != 0\">\n            <span class=\"crPrice\">COD Charge - ??? {{codAmount}}</span>\n          </div>\n          <div class=\"Pprice\" *ngIf=\"deliveryCharge != 0\">\n            <span class=\"crPrice\">Delivery Charge - ??? {{deliveryCharge}}</span>\n          </div>\n          <div class=\"Pprice\">\n            <span class=\"crPrice\">Total Amount - ??? {{totalAmount}}</span>\n          </div>\n        </ion-grid>\n        \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row class=\"cartItem\" *ngFor=\"let orderProductDetails of orderProductDetails; let i = index\">\n\n      <ion-col size=\"4\">\n        <div class=\"imgwrp\">\n          <ion-img [src]=\"orderProductDetails.product.photo\"></ion-img>\n        </div>\n      </ion-col>\n      <ion-col size=\"8\">\n        <h2 class=\"cName\">{{orderProductDetails.product.name}} </h2>\n        <div class=\"Pprice\">\n          <span class=\"crPrice\">Quantity - {{orderProductDetails.quantity}}</span>\n        </div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"Pprice\">\n          <span class=\"crPrice\" *ngIf=\"orderProductDetails.order_status == 4\">Delivered By - {{orderProductDetails.carrierName}}</span>\n          <span class=\"crPrice\" *ngIf=\"orderProductDetails.order_status == 0\">Order Status - <span style=\"color:dodgerblue;font-weight: bold;\"> Processing </span> </span>\n          <span class=\"crPrice\" *ngIf=\"orderProductDetails.order_status == 1\">Order Status - <span style=\"color:dodgerblue;font-weight: bold;\"> On Hold </span> </span>\n          <span class=\"crPrice\" *ngIf=\"orderProductDetails.order_status == 2\">Order Status - <span style=\"color:green;font-weight: bold;\"> Delivered </span> </span>\n          <span class=\"crPrice\" *ngIf=\"orderProductDetails.order_status == 3\">Order Status - <span style=\"color: red;font-weight: bold;\"> Cancelled </span> </span>\n          <span class=\"crPrice\" *ngIf=\"orderProductDetails.order_status == 4\">Order Status - <span style=\"color:green;font-weight: bold;\"> Confirmed </span> </span>\n          <span class=\"crPrice\" *ngIf=\"orderProductDetails.order_status == 4\">Delivered within {{orderProductDetails.product.day_of_delivary}} days</span>\n          <span class=\"crPrice\" *ngIf=\"orderProductDetails.order_status == 2\">Delivered On -{{orderProductDetails.order_completed_date.toString().split('T')[0]}}</span>\n          <span class=\"crPrice\" *ngIf=\"orderProductDetails.order_status == 3\">Cancelled On - {{orderProductDetails.order_cancell_date.toString().split('T')[0]}} </span>\n        </div>\n      </ion-col>\n      <ion-col size=\"12\" *ngIf=\"orderProductDetails.return_status != '2' && orderProductDetails.order_status != 3\">\n        <ion-button shape=\"round\" fill=\"outline\" expand=\"full\" (click)=\"trackOrder(orderProductDetails,i)\">\n          Track Order\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"12\" *ngIf=\"orderProductDetails.return_status == '2'\">\n        <ion-button shape=\"round\" fill=\"outline\" expand=\"full\" (click)=\"trackReturnOrder(orderProductDetails,i)\">\n          Track Order Return\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"12\" *ngIf=\"arrIsCancel[i]\">\n        <ion-button shape=\"round\" fill=\"outline\" expand=\"full\" (click)=\"cancelOrder(orderProductDetails,i)\">\n          Cancel Order\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"12\" *ngIf=\"arrIsReturn[i] && orderProductDetails.return_status == '0' \">\n        <ion-button shape=\"round\" fill=\"outline\" expand=\"full\" (click)=\"returnOrder(i)\">\n          Return Order\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"12\" *ngIf=\"arrIsReturn[i] && orderProductDetails.return_status == '1' \">\n        <span style=\"color:red\">Return process is waiting for approval</span>\n      </ion-col>\n      <ion-col size=\"12\" *ngIf=\"arrIsBanksubmit[i]\">\n        <ion-button shape=\"round\" fill=\"outline\" expand=\"full\" (click)=\"returnOrder(i)\">\n          Submit Bank Details For Return\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/order-details/order-details.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/order-details/order-details.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cartItem {\n  border-bottom: 5px solid rgba(0, 0, 0, 0.08);\n  padding-top: 7px; }\n\n.cName {\n  margin: 0 0 5px;\n  font-size: 22px; }\n\n.Pprice {\n  margin: 10px 0; }\n\n.crPrice {\n  font-size: 18px;\n  display: inline-block;\n  margin-right: 10px; }\n\n.oldPrice {\n  text-decoration: line-through;\n  color: rgba(0, 0, 0, 0.6);\n  display: inline-block;\n  margin-right: 15px; }\n\n.offPrice {\n  color: green; }\n\n.unitP {\n  font-size: 14px;\n  float: right;\n  width: 50px;\n  padding: 4px; }\n\n.qty {\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.24);\n  margin-top: 9px;\n  border-radius: 5px;\n  max-width: 70px;\n  margin: 10px auto 3px; }\n\n.imgwrp {\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.35);\n  padding: 1px; }\n\n.tAmnt {\n  margin-top: 13px; }\n\n.rmvBtn.button-outline {\n  --border-width: 1px;\n  --border-color: rgba(0, 0, 0, 0.35);\n  height: 30px;\n  width: 120px; }\n\n.infoC {\n  text-align: right;\n  margin: 10px 0; }\n\n.PdActins {\n  text-align: center;\n  margin-top: 30px; }\n\n.PdActins ion-button {\n  width: 48%;\n  margin: 0 2px; }\n\nion-content ion-label {\n  font-size: 17px;\n  font-weight: 400; }\n\nion-content ion-textarea {\n  border: 1px solid #CCCCCC;\n  padding: 5px;\n  height: 160px;\n  border-radius: 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YXAvRGVza3RvcC9pb25pYyBQcm9qZWN0L3BwL1NtYXJ0LUNhcnQgMi9zcmMvYXBwL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0Q0FBNEM7RUFDNUMsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFFbkI7RUFBUyxjQUFjLEVBQUE7O0FBQ3ZCO0VBQ0ksZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFBVSxZQUFZLEVBQUE7O0FBQ3RCO0VBQ0ksZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUVoQjtFQUNJLHVDQUF1QztFQUN2QyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSx1Q0FBdUM7RUFDdkMsWUFBWSxFQUFBOztBQUVoQjtFQUFXLGdCQUFnQixFQUFBOztBQUUzQjtFQUNJLG1CQUFlO0VBQ2YsbUNBQWU7RUFDZixZQUFXO0VBQ1gsWUFBVyxFQUFBOztBQUdmO0VBQ0ksaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksVUFBVTtFQUNWLGFBQWEsRUFBQTs7QUFHakI7RUFFUSxlQUFlO0VBRWYsZ0JBQWdCLEVBQUE7O0FBSnhCO0VBT1EseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcnRJdGVte1xuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgIHBhZGRpbmctdG9wOiA3cHg7XG59XG4uY05hbWV7XG4gICAgbWFyZ2luOiAwIDAgNXB4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5QcHJpY2V7IG1hcmdpbjogMTBweCAwO31cbi5jclByaWNle1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLm9sZFByaWNle1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5vZmZQcmljZXtjb2xvcjogZ3JlZW47fVxuLnVuaXRQe1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgcGFkZGluZzogNHB4O1xufVxuLnF0eXtcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgbWFyZ2luLXRvcDogOXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXgtd2lkdGg6IDcwcHg7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gM3B4O1xufVxuLmltZ3dycHtcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gICAgcGFkZGluZzogMXB4O1xufVxuLnRBbW50eyAgICBtYXJnaW4tdG9wOiAxM3B4O31cblxuLnJtdkJ0bi5idXR0b24tb3V0bGluZSB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICAtLWJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgICBoZWlnaHQ6MzBweDtcbiAgICB3aWR0aDoxMjBweDtcbn1cblxuLmluZm9De1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbjogMTBweCAwO1xufVxuLlBkQWN0aW5ze1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLlBkQWN0aW5zIGlvbi1idXR0b257XG4gICAgd2lkdGg6IDQ4JTtcbiAgICBtYXJnaW46IDAgMnB4O1xufVxuXG5pb24tY29udGVudHtcbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgLy9jb2xvcjogI0E3Q0Y0NjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG4gICAgaW9uLXRleHRhcmVhe1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGhlaWdodDogMTYwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICB9XG59XG5cbi8vIC5pdGVtLWlucHV0IHtcbi8vICAgICBwYWRkaW5nOiA1cHg7XG4vLyAgICAgYm9yZGVyOiBzb2xpZCAuNXB4IGdyZXk7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuLy8gfSJdfQ== */"

/***/ }),

/***/ "./src/app/order-details/order-details.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/order-details/order-details.page.ts ***!
  \*****************************************************/
/*! exports provided: OrderDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsPage", function() { return OrderDetailsPage; });
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var OrderDetailsPage = /** @class */ (function () {
    function OrderDetailsPage(util, alertController, events, navCtrl, route, modalController, activeroute, menuCtrl) {
        this.util = util;
        this.alertController = alertController;
        this.events = events;
        this.navCtrl = navCtrl;
        this.route = route;
        this.modalController = modalController;
        this.activeroute = activeroute;
        this.menuCtrl = menuCtrl;
        this.arrIsReturn = [];
        this.arrIsCancel = [];
        this.arrIsBanksubmit = [];
        this.codAmount = 0;
        this.deliveryCharge = 0;
        this.orderDetails = this.route.getCurrentNavigation().extras.state.parms;
        this.orderProductDetails = this.orderDetails.invoice_items;
        if (this.orderDetails.cod_amt != null) {
            this.codAmount = this.orderDetails.cod_amt;
        }
        else {
            this.codAmount = 0;
        }
        if (this.orderDetails.total_delivery_charge != null) {
            this.deliveryCharge = this.orderDetails.total_delivery_charge;
        }
        else {
            this.deliveryCharge = 0;
        }
        //console.log("this.orderDetails amount break", this.codAmount, this.deliveryCharge, this.orderDetails.gross_amt)
        this.totalAmount = Number(this.orderDetails.gross_amt) + Number(this.codAmount) + Number(this.deliveryCharge);
        //console.log("this.orderDetails", this.orderDetails, this.orderProductDetails)
        this.orderStatusCancelReturnDecide();
    }
    OrderDetailsPage.prototype.ngOnInit = function () {
    };
    OrderDetailsPage.prototype.trackOrder = function (orderDetailsSingle, i) {
        var navigationExtras = {
            state: {
                from: 'orderDetails',
                parms: this.orderDetails,
                parms2: i,
            }
        };
        this.navCtrl.navigateForward('/order-tracking', navigationExtras);
    };
    OrderDetailsPage.prototype.trackReturnOrder = function (orderDetailsSingle, i) {
        var navigationExtras = {
            state: {
                from: 'orderDetailsReturnTrack',
                parms: this.orderDetails,
                parms2: i,
            }
        };
        this.navCtrl.navigateForward('/order-tracking', navigationExtras);
    };
    OrderDetailsPage.prototype.cancelOrder = function (orderSingleProduct, i) {
        //console.log("orderSingleProduct",orderSingleProduct)
        this.presentAlertConfirm(orderSingleProduct, i);
    };
    OrderDetailsPage.prototype.presentAlertConfirm = function (orderSingleProduct, i) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: 'Are you sure you want cancel order ?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Yes',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.cancelOrderPostData(orderSingleProduct, i);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrderDetailsPage.prototype.cancelOrderPostData = function (orderSingleProduct, i) {
        var _this = this;
        var myData = JSON.stringify({
            id: orderSingleProduct.id
        });
        //console.log("Your track sending myData: ", myData);
        this.util.presentLoading();
        this.util.getTypeDetailsWithAuth('users/ordercancell.json', myData).subscribe(function (result) {
            _this.util.dismissLoader();
            //console.log("Your cancel data: ", result);
            _this.data = result;
            if (_this.data.success) {
                _this.navCtrl.navigateForward('/order-list');
            }
            else {
                _this.util.showToast(_this.data.message);
            }
        }, function (error) {
            _this.util.dismissLoader();
            _this.util.showToast('Server error occured. Try again.');
        });
    };
    OrderDetailsPage.prototype.returnOrder = function (i) {
        var navigationExtras = {
            state: {
                from: 'orderList',
                parms: this.orderDetails,
                params2: i
            }
        };
        this.navCtrl.navigateForward('/return-details', navigationExtras);
    };
    OrderDetailsPage.prototype.orderStatusCancelReturnDecide = function () {
        //console.log("this.orderProductDetails", this.orderProductDetails, this.orderProductDetails.length)
        var onlyDateTemp = new Date().toISOString().split('T')[0].toString().split('-'); //["2020", "06", "29"]
        for (var i = 0; i < this.orderProductDetails.length; i++) {
            if (this.orderProductDetails[i].order_status == "0") { //order_status jodi 0 thake customer order ta cancell korte parbe
                this.arrIsCancel[i] = true;
            }
            else {
                this.arrIsCancel[i] = false;
            }
            if (this.orderProductDetails[i].order_status == "2") { // r jodi order_status 2 hoy,order delivered date theke 7 din porjonto return reques
                if (this.orderProductDetails[i].order_completed_date != null) {
                    //let orderDate = this.orderProductDetails[i].order_completed_date.toString().split('T')[0].toString().split('-')
                    var dateDifference = (Math.abs(Date.parse(this.orderProductDetails[i].order_completed_date.toString().split('T')[0]) - Date.parse(new Date().toISOString().split('T')[0].toString()))) / (3600000 * 24);
                    //console.log("onlyDateTemp" , onlyDateTemp , orderDate ) // ["2020", "08", "29"] ["2019", "12", "29"]
                    //console.log("Date difference" , (Math.abs(Date.parse(this.orderProductDetails[i].order_completed_date.toString().split('T')[0]) - Date.parse(new Date().toISOString().split('T')[0].toString()))) / (3600000 * 24)  )
                    if (dateDifference <= 7) {
                        this.arrIsReturn[i] = true;
                    }
                    else {
                        this.arrIsReturn[i] = false;
                    }
                }
                else {
                    this.arrIsReturn[i] = false;
                }
            }
            else {
                this.arrIsReturn[i] = false;
            }
            if (this.orderProductDetails[i].return_status == "2") { //order_status jodi 0 thake customer order ta cancell korte parbe
                //let orderDate = this.orderProductDetails[i].return_approve_date.toString().split('T')[0].toString().split('-')
                var dateDifference = (Math.abs(Date.parse(this.orderProductDetails[i].return_approve_date.toString().split('T')[0]) - Date.parse(new Date().toISOString().split('T')[0].toString()))) / (3600000 * 24);
                //console.log("bank submit date difference",dateDifference)
                if (dateDifference <= 7) {
                    this.arrIsBanksubmit[i] = true;
                }
                else {
                    this.arrIsBanksubmit[i] = false;
                }
            }
            else {
                this.arrIsBanksubmit[i] = false;
            }
        } // End of loop
        //console.log("this.arrIsCancel , this.arrIsReturn", this.arrIsCancel, this.arrIsReturn)
    };
    OrderDetailsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-details',
            template: __webpack_require__(/*! ./order-details.page.html */ "./src/app/order-details/order-details.page.html"),
            styles: [__webpack_require__(/*! ./order-details.page.scss */ "./src/app/order-details/order-details.page.scss")]
        }),
        __metadata("design:paramtypes", [_api_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], OrderDetailsPage);
    return OrderDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=order-details-order-details-module.js.map