import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../api/utility.service';
import { AlertController, Events, NavController, ModalController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {
  orderDetails: any
  orderProductDetails: any
  arrIsReturn = []
  arrIsCancel = []
  arrIsBanksubmit = []
  data:any
  codAmount = 0
  deliveryCharge = 0
  totalAmount:Number
  constructor(private util: UtilityService, public alertController: AlertController,
    public events: Events, private navCtrl: NavController, private route: Router, public modalController: ModalController,
    private activeroute: ActivatedRoute, private menuCtrl: MenuController,) {
    this.orderDetails = this.route.getCurrentNavigation().extras.state.parms;
    this.orderProductDetails = this.orderDetails.invoice_items
    if (this.orderDetails.cod_amt != null){
      this.codAmount = this.orderDetails.cod_amt
    }else{
      this.codAmount = 0
    }
    if (this.orderDetails.total_delivery_charge != null){
      this.deliveryCharge = this.orderDetails.total_delivery_charge
    }else{
      this.deliveryCharge = 0
    }

    //console.log("this.orderDetails amount break", this.codAmount, this.deliveryCharge, this.orderDetails.gross_amt)

    this.totalAmount = Number(this.orderDetails.gross_amt) + Number(this.codAmount) + Number(this.deliveryCharge)
    //console.log("this.orderDetails", this.orderDetails, this.orderProductDetails)

    this.orderStatusCancelReturnDecide()
  }

  ngOnInit() {
  }

  trackOrder(orderDetailsSingle,i) {
    let navigationExtras: NavigationExtras = {
      state: {
        from: 'orderDetails',
        parms: this.orderDetails,
        parms2: i,
      }
    };
    this.navCtrl.navigateForward('/order-tracking', navigationExtras);
  }

  trackReturnOrder(orderDetailsSingle,i){
    let navigationExtras: NavigationExtras = {
      state: {
        from: 'orderDetailsReturnTrack',
        parms: this.orderDetails,
        parms2: i,
      }
    };
    this.navCtrl.navigateForward('/order-tracking', navigationExtras);
  }


  cancelOrder(orderSingleProduct,i) {
    //console.log("orderSingleProduct",orderSingleProduct)
    this.presentAlertConfirm(orderSingleProduct,i)
  }


  async presentAlertConfirm(orderSingleProduct,i) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure you want cancel order ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('Confirm Okay');
            this.cancelOrderPostData(orderSingleProduct,i);
          }
        }
      ]
    });
    await alert.present();
  }

  cancelOrderPostData(orderSingleProduct,i){
    var myData = JSON.stringify({
      id:orderSingleProduct.id
    });
    //console.log("Your track sending myData: ", myData);
    this.util.presentLoading();
    this.util.getTypeDetailsWithAuth('users/ordercancell.json', myData).subscribe(result => {
      this.util.dismissLoader();
      //console.log("Your cancel data: ", result);
      this.data = result;
      if (this.data.success) {
        this.navCtrl.navigateForward('/order-list');
      } else {
        this.util.showToast(this.data.message);
      }
    },
      error => {
        this.util.dismissLoader();
        this.util.showToast('Server error occured. Try again.');
      }
    );
  }


  returnOrder(i) {
    let navigationExtras: NavigationExtras = {
      state: {
        from: 'orderList',
        parms: this.orderDetails,
        params2: i
      }
    };
    this.navCtrl.navigateForward('/return-details', navigationExtras);
  }

  orderStatusCancelReturnDecide() {
    //console.log("this.orderProductDetails", this.orderProductDetails, this.orderProductDetails.length)

    let onlyDateTemp = new Date().toISOString().split('T')[0].toString().split('-')  //["2020", "06", "29"]

    for (let i = 0; i < this.orderProductDetails.length; i++) {

      if (this.orderProductDetails[i].order_status == "0") { //order_status jodi 0 thake customer order ta cancell korte parbe
        this.arrIsCancel[i] = true
      } else {
        this.arrIsCancel[i] = false
      }

      if (this.orderProductDetails[i].order_status == "2") { // r jodi order_status 2 hoy,order delivered date theke 7 din porjonto return reques

        if (this.orderProductDetails[i].order_completed_date != null) {

          //let orderDate = this.orderProductDetails[i].order_completed_date.toString().split('T')[0].toString().split('-')
          let dateDifference = (Math.abs(Date.parse(this.orderProductDetails[i].order_completed_date.toString().split('T')[0]) - Date.parse(new Date().toISOString().split('T')[0].toString()))) / (3600000 * 24) 
          //console.log("onlyDateTemp" , onlyDateTemp , orderDate ) // ["2020", "08", "29"] ["2019", "12", "29"]
          //console.log("Date difference" , (Math.abs(Date.parse(this.orderProductDetails[i].order_completed_date.toString().split('T')[0]) - Date.parse(new Date().toISOString().split('T')[0].toString()))) / (3600000 * 24)  )

          
          if (dateDifference <= 7){
            this.arrIsReturn[i] = true
          }else{
            this.arrIsReturn[i] = false
          }

        } else {
          this.arrIsReturn[i] = false
        }
      } else {
        this.arrIsReturn[i] = false
      }

      if (this.orderProductDetails[i].return_status == "2") { //order_status jodi 0 thake customer order ta cancell korte parbe
        //let orderDate = this.orderProductDetails[i].return_approve_date.toString().split('T')[0].toString().split('-')
        let dateDifference = (Math.abs(Date.parse(this.orderProductDetails[i].return_approve_date.toString().split('T')[0]) - Date.parse(new Date().toISOString().split('T')[0].toString()))) / (3600000 * 24) 
        //console.log("bank submit date difference",dateDifference)
        if (dateDifference <= 7){
          this.arrIsBanksubmit[i] = true
        }else{
          this.arrIsBanksubmit[i] = false
        }
      } else {
        this.arrIsBanksubmit[i] = false
      }

    } // End of loop

    //console.log("this.arrIsCancel , this.arrIsReturn", this.arrIsCancel, this.arrIsReturn)

  }











}
