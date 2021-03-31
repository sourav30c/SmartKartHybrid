import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../api/utility.service';
import { AlertController, ModalController, NavController, Events, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.page.html',
  styleUrls: ['./order-list.page.scss'],
})
export class OrderListPage implements OnInit {
  isOrderList: boolean = true
  data: any
  orderList: any
  couponCode: string
  quantityValue: string
  constructor(private util: UtilityService, public alertController: AlertController,
    public events: Events, private navCtrl: NavController, private route: Router, public modalController: ModalController,
    private activeroute: ActivatedRoute, private menuCtrl: MenuController,) {

    // if (localStorage.getItem('loginDataKKart') != null) {
    //   this.myOrderlist()
    // } else {
    //   this.isOrderList = false
    // }

    //this.recruiteddate.toString().split('T')
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    //console.log("viewwillentercalling")
    this.menuCtrl.enable(true)
    //this.pageDetails = { 'showMenu': true, 'showBack': false, 'showButtons': false, 'title': 'My Wishlist', 'prevPage': '' };
    //this.showMenu(this.pageDetails);

    if (localStorage.getItem('loginDataKKart') != null) {
      this.myOrderlist()
    } else {
      this.isOrderList = false
    }
  }

  showMenu(pageDetails) {
    console.log('User created!')
    this.events.publish('showMenu', pageDetails, Date.now());
  }

  myOrderlist() {
    var myData = JSON.stringify({
    });
    //console.log("Your myData: ", myData);
    this.util.presentLoading();
    this.util.getTypeDetailsWithAuth('users/myorders.json', myData).subscribe(result => {
      this.util.dismissLoader();
      //console.log("Your order data: ", result);
      this.data = result;
      if (this.data.success) {
        this.orderList = this.data.data.order_list
        if (this.orderList.length == 0) {
          this.isOrderList = false
        } else {
          this.isOrderList = true
        }
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

  details(orderListSingle){
    //console.log("orderListSingle",orderListSingle)

    let navigationExtras: NavigationExtras = {
      state: {
        from: 'orderList',
        parms: orderListSingle,
      }
    };
    this.navCtrl.navigateForward('/order-details', navigationExtras);
    
  }

  tabBarList() {
    this.navCtrl.navigateRoot('/list')
  }

  tabBarHome() {
    this.navCtrl.navigateRoot('/home')
  }

  tabBarPolicy() {
    this.navCtrl.navigateRoot('/privacy-policy')
  }

  tabBarContacts() {
    this.navCtrl.navigateRoot('/contact')
  }
  
}
