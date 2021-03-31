import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../api/utility.service';
import { AlertController, Events, NavController, ModalController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  data: any
  cartList: any
  isCartList: boolean
  totalCart = 0
  totalCost: number = 0
  deliveryPrice: number = 0
  couponCode: string = ''
  couponId: string = ''
  discountAmount: number = 0
  quantityValue: string
  isCouponApplied: boolean = false
  quantity = 1
  arrQuantity = []
  constructor(private util: UtilityService, public alertController: AlertController,
    public events: Events, private navCtrl: NavController, private route: Router, public modalController: ModalController,
    private activeroute: ActivatedRoute, private menuCtrl: MenuController,) {

    if (localStorage.getItem('loginDataKKart') != null) {
      this.myCartlist()
    } else {
      this.isCartList = false
    }

  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    //console.log("viewwillentercalling")
    this.menuCtrl.enable(true)
    //this.pageDetails = { 'showMenu': true, 'showBack': false, 'showButtons': false, 'title': 'My Wishlist', 'prevPage': '' };
    //this.showMenu(this.pageDetails);
  }

  showMenu(pageDetails) {
    console.log('User created!')
    this.events.publish('showMenu', pageDetails, Date.now());
  }

  myCartlist() {

    var myData = JSON.stringify({
    });
    //console.log("Your myData: ", myData);
    this.util.presentLoading();
    this.util.getTypeDetailsWithAuth('carts/getcartitems.json', myData).subscribe(result => {
      this.util.dismissLoader();
      this.totalCost = 0
      this.deliveryPrice = 0
      this.arrQuantity = []
      console.log("Your cart data: ", result);
      this.data = result;

      if (this.data.success) {
        this.cartList = this.data.data
        this.totalCart = this.cartList.length
        if (this.data.coupon_id == "0") {
          this.isCouponApplied = false
        } else {
          this.isCouponApplied = true
          this.couponId = this.data.coupon_id
        }
        //console.log("this.cartList",this.cartList.length)

        if (this.cartList.length == 0 || this.data.success == "2") {
          this.isCartList = false
        } else {
          this.isCartList = true
        }

        //console.log("cart list coupon check", this.cartList , this.isCouponApplied)

        let cost: number = 0

        if (this.isCartList == true) {
          for (let i = 0; i < this.cartList.length; i++) {
            cost = cost + Number(this.cartList[i].CartItems.item_net_amount)
            //cost = cost + Number(this.cartList[i].UserProducts.offer_price)
            this.deliveryPrice = this.deliveryPrice + Number(this.cartList[i].UserProducts.delivery_charge * this.cartList[i].CartItems.quantity)
            this.discountAmount = Number(this.cartList[i].CartItems.discount_amt)
            //this.arrQuantity.push(1)
            this.arrQuantity.push(this.cartList[i].CartItems.quantity)
          }

          this.totalCost = cost + this.deliveryPrice
          //console.log("Total Cost", this.totalCost)
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

  async presentAlertConfirm(singleCart) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure to delete this record ?',
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
            this.removeCart(singleCart);
          }
        }
      ]
    });

    await alert.present();
  }


  removeCart(singleCart) {
    var myData = JSON.stringify({
      info_id: singleCart.CartItems.id
    });
    //console.log("Your myData: ", myData);
    this.util.presentLoading();
    this.util.getTypeDetailsWithAuth('carts/deletecartitem.json', myData).subscribe(result => {
      this.util.dismissLoader();
      //console.log("Your data: ", result);
      this.data = result;
      if (this.data.success) {
        //console.log("cart list", this.cartList)
        this.util.showToast(this.data.data);
        setTimeout(() => {
          this.myCartlist();
        }, 2000);
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

  continueShopping() {
    this.navCtrl.navigateRoot('/home')
  }


  decrement(pos, singleCart) {
    if (this.arrQuantity[pos] > 1) {
      this.arrQuantity[pos] = this.arrQuantity[pos] - 1
      this.postDataupdateCart(this.arrQuantity[pos], singleCart.CartItems.id)
    }

    // if (this.quantity > 1){
    //   this.quantity = this.quantity - 1
    // }

    //this.postDataupdateCart(this.arrQuantity[pos],singleCart.CartItems.id)
  }

  inrement(pos, singleCart) {
    this.arrQuantity[pos] = this.arrQuantity[pos] + 1

    //this.quantity = this.quantity + 1
    this.postDataupdateCart(this.arrQuantity[pos], singleCart.CartItems.id)
  }


  // updateCart(ev,singleCart){
  //   console.log(ev.detail.value,singleCart)
  //   this.postDataupdateCart(ev.detail.value,singleCart.CartItems.id)
  // }

  postDataupdateCart(value, productId) {
    console.log("To Add to Cart")
    var myData = JSON.stringify({
      info_id: productId,
      quantity: value
    });
    //console.log("Your myData: ", myData);
    this.util.presentLoading3();
    this.util.getTypeDetailsWithAuth('carts/updateItem.json', myData).subscribe(result => {
      this.util.dismissLoader();
      //console.log("Your Cart data: ", result);
      this.data = result;
      //console.log(this.data)
      if (this.data.success) {
        this.util.showToast(this.data.data);
        setTimeout(() => {
          this.myCartlist();
        }, 2000);
        //this.util.myCartlist()
      } else {
        this.util.showToast(this.data.data);
      }
    },
      error => {
        this.util.dismissLoader();
        this.util.showToast('Server error occured. Try again.');
      }
    );

    this.util.dismissLoader();
  }

  toBuy() {
    let navigationExtras: NavigationExtras = {
      state: {
        from: 'cartlist',
        parmsTotal: this.totalCost,
        cartid: this.cartList[0].CartItems.cart_id
      }
    };

    //console.log("navigationExtras",navigationExtras)

    this.navCtrl.navigateForward('/billing-address', navigationExtras);
  }

  redeemCoupon() {
    if (this.couponCode == '') {
      this.util.showToast('Please provide coupon code');
    } else {
      this.applyCoupon()
    }
  }

  applyCoupon() { // Awbno send korte hobe (you will get from shyplite details table)
    var myData = JSON.stringify({
      coupon_code: this.couponCode
    });
    //console.log("Your coupon code myData: ", myData);
    this.util.presentLoading();
    this.util.getTypeDetailsWithAuth('carts/checkcouponcode.json', myData).subscribe(result => {
      this.util.dismissLoader();
      //console.log("Your couponCode data: ", result);
      this.data = result;
      if (this.data.success) {
        this.util.showToast(this.data.data.msg);
        //this.isCouponApplied == true
        this.couponCode = ""
        this.myCartlist()
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

  deleteCoupon() {
    var myData = JSON.stringify({
      coupon_id: this.couponId
    });
    //console.log("Your coupon code myData: ", myData);
    this.util.presentLoading();
    this.util.getTypeDetailsWithAuth('carts/deletecouponcode.json', myData).subscribe(result => {
      this.util.dismissLoader();
      //console.log("Your delete couponCode data: ", result);
      this.data = result;
      if (this.data.success) {
        this.util.showToast(this.data.data);
        //this.isCouponApplied = false
        this.myCartlist()
      } else {
        this.util.showToast(this.data.data);
      }
    },
      error => {
        this.util.dismissLoader();
        this.util.showToast('Server error occured. Try again.');
      }
    );
  }

  details(cartList) {
    //localStorage.setItem('singleProduct', JSON.stringify(productListSingle));
    let navigationExtras: NavigationExtras = {
      state: {
        from: 'cartlist',
        parms: cartList,
      }
    };
    this.navCtrl.navigateForward('/details', navigationExtras);
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
