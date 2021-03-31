import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../api/utility.service';
import { AlertController, Events, NavController, ModalController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-billing-address',
  templateUrl: './billing-address.page.html',
  styleUrls: ['./billing-address.page.scss'],
})
export class BillingAddressPage implements OnInit {
  data: any
  addressList: any
  isChecked: boolean
  isAddressAdded: boolean
  currentSelected = []
  addressSelected = []
  arrAddressSelectCheck = []
  totalCost = "0"
  cartInfoId = ""
  constructor(private util: UtilityService, public alertController: AlertController,
    public events: Events, private navCtrl: NavController, private route: Router, 
    public modalController: ModalController, private activeroute: ActivatedRoute, 
    private menuCtrl: MenuController,) {
    this.isChecked = false


    this.totalCost = this.route.getCurrentNavigation().extras.state.parmsTotal
    this.cartInfoId = this.route.getCurrentNavigation().extras.state.cartid
    console.log("total cost", this.totalCost)
    //this.billingAddressList()
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    console.log("viewwillentercalling")
    this.menuCtrl.enable(false)
    this.billingAddressList()
    //this.pageDetails = { 'showMenu': true, 'showBack': false, 'showButtons': false, 'title': 'My Wishlist', 'prevPage': '' };
    //this.showMenu(this.pageDetails);
  }

  showMenu(pageDetails) {
    console.log('User created!')
    this.events.publish('showMenu', pageDetails, Date.now());
  }

  billingAddressList() {
    var myData = JSON.stringify({
    });
    //console.log("Your myData: ", myData);
    this.util.presentLoading();
    this.util.getTypeDetailsWithAuth('carts/getDelivaryAdd.json', myData).subscribe(result => {
      this.util.dismissLoader();
      //console.log("Your data: ", result);
      this.data = result;

      if (this.data.success) {
        this.addressList = this.data.data
        if (this.addressList.length == 0) {
          this.isAddressAdded = false
        } else {
          this.isAddressAdded = true
        }

        for (let i = 0; i < this.addressList.length; i++) {
          this.arrAddressSelectCheck[i] = false
        }

        //console.log("address list", this.addressList, this.arrAddressSelectCheck)

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

  goBack() {
    this.navCtrl.navigateBack('/cart')
  }

  addAddress() {
    this.navCtrl.navigateForward('/add-billing-address')
  }

  editAddress(singleAddressList, i){
    let navigationExtras: NavigationExtras = {
      state: {
        from: 'billingList',
        parms: singleAddressList,
      }
    };
    this.navCtrl.navigateForward('/add-billing-address', navigationExtras);
  }

  
  onItemClicked(addressList, i) {
    for (let j = 0; j < this.arrAddressSelectCheck.length; j++) {
      if (i == j) {
        if (this.arrAddressSelectCheck[j] == false) {
          this.arrAddressSelectCheck.splice(j, 1, true);
        } else {
          this.arrAddressSelectCheck.splice(j, 1, false);
        }
      } else {
        this.arrAddressSelectCheck.splice(j, 1, false);
      }
    }
    //console.log("arrAddressSelectCheck", this.arrAddressSelectCheck)
  }

  toPayment() {
    for (let j = 0; j < this.arrAddressSelectCheck.length; j++) {
      if(this.arrAddressSelectCheck[j] == true){
        this.postAddress(j)
        break
      }else{
        if( j == (this.arrAddressSelectCheck.length - 1)){
          this.util.showToast("Please select/add an address for delivery")
        }else{
          continue
        }
      }
    }
  }

  postAddress(adrsPosition){
    var myData = JSON.stringify({
      info_id:String(this.cartInfoId),
      delivery_id:String(this.addressList[adrsPosition].id)
    });

    //console.log("Your myData: ", myData);
    this.util.presentLoading();
    this.util.getTypeDetailsWithAuth('carts/setDelivaryadd.json', myData).subscribe(result => {
      this.util.dismissLoader();
      
      //console.log("Your address data: ", result);
      this.data = result;
      this.util.showToast('Delivery Address is Selected');
      if (this.data.success == "1") {
        let navigationExtras: NavigationExtras = {
          state: {
            from: 'cartlist',
            parms: this.totalCost,
            parms1: this.cartInfoId,
          }
        };
        this.navCtrl.navigateForward('/payment-mode', navigationExtras);
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

}
