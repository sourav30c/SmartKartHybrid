import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../api/utility.service';
import { MenuController, Events, NavController, AlertController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {
  isWishlist: Boolean
  data: any
  wishlistLists: any
  pageDetails: any
  constructor(private util: UtilityService, private menuCtrl: MenuController, public events: Events, private navCtrl: NavController, public alertController: AlertController, ) {
    if (localStorage.getItem('loginDataKKart') != null) {
      this.isWishlist = true
      this.myWishlist()
    } else {
      this.isWishlist = false
    }
  }

  ionViewWillEnter() {
    console.log("viewwillentercalling")
    this.menuCtrl.enable(true)
    //this.pageDetails = { 'showMenu': true, 'showBack': false, 'showButtons': false, 'title': 'My Wishlist', 'prevPage': '' };
    //this.showMenu(this.pageDetails);
  }

  showMenu(pageDetails) {
    console.log('User created!')
    this.events.publish('showMenu', pageDetails, Date.now());
  }

  ngOnInit() {
  }

  myWishlist() {
    var myData = JSON.stringify({
    });
    console.log("Your myData: ", myData);
    this.util.presentLoading();
    this.util.getTypeDetailsWithAuth('users/wishlist.json', myData).subscribe(result => {
      this.util.dismissLoader();
      console.log("Your data: ", result);
      this.data = result;

      console.log(this.data.data.wishlist)
      if (this.data.success) {
        this.wishlistLists = this.data.data.wishlist
        if (this.wishlistLists.length == 0) {
          this.isWishlist = false
        } else {
          this.isWishlist = true
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

  async presentAlertConfirm(singleWishlist) {
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
            //this.deleteFromWishlist(singleWishlist);
            this.util.deleteFromWishlist(singleWishlist.id)
            setTimeout(() => {
              this.myWishlist();
            }, 2000);

          }
        }
      ]
    });

    await alert.present();
  }

  postDataAddtoCart(singleWishlist){
    console.log("To Add to Cart",singleWishlist)
    var myData = JSON.stringify({
      slug: singleWishlist.product.slug,
      quentity: 1
    });
    console.log("Your myData: ", myData);
    this.util.presentLoading3();
    this.util.getTypeDetailsWithAuth('carts/addtocart.json', myData).subscribe(result => {
      this.util.dismissLoader();
      console.log("Your Cart data: ", result);
      this.data = result;
      //console.log(this.data)
      if (this.data.success) {
        this.util.showToast(this.data.data);
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

  continueShopping(){
    this.navCtrl.navigateRoot('/home')
  }

  details(productListSingle){
    localStorage.setItem('singleProduct', JSON.stringify(productListSingle));
    let navigationExtras: NavigationExtras = {
      state: {
        from: 'wishlist',
        parms: productListSingle,
      }
    };
    this.navCtrl.navigateForward('/details', navigationExtras);
  }
}
