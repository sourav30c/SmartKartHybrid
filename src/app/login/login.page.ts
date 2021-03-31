import { Component, OnInit } from '@angular/core';
import { NavController, Events, Platform, MenuController } from '@ionic/angular';
import { UtilityService } from 'src/app/api/utility.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username = ''
  password = ''
  data: any;
  userData: any;
  pageDetails: any;
  pushedFrom = ''
  pushedFromHtmlCheck = ''
  showPasswordId = "password"
  constructor(private menuCtrl: MenuController, 
    private navCtrl: NavController, 
    private util: UtilityService, public events: Events,private route: ActivatedRoute,) { 
      this.pushedFrom = this.route.snapshot.paramMap.get("pushedFrom")
      if (this.pushedFrom == "productDetailsCart" || this.pushedFrom == "productDetailsWishlist"){
        this.pushedFromHtmlCheck = "productDetails"
      }else if(this.pushedFrom == "productListWishlist" || this.pushedFrom == "productDetailsBuy"){
        this.pushedFromHtmlCheck = "productDetails"
      }else if(this.pushedFrom == "productList"){
        this.pushedFromHtmlCheck = "productDetails"
      }
      console.log("this.pushedFrom",this.pushedFrom)
    }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.logout();
    this.menuCtrl.enable(true)
    //this.pageDetails = { 'showMenu': false, 'showBack': false, 'showButtons': false, 'title': 'Login', 'prevPage': '' };
    //this.showMenu(this.pageDetails);
  }

  showMenu(pageDetails) {
    console.log('User created!')
    this.events.publish('showMenu', pageDetails, Date.now());
  }

  logout(){
    localStorage.removeItem('loginDataKKart');
  }

  showPassword(){
    console.log("show")
    this.showPasswordId = "text"
  }

  hidePassword(){
    console.log("hide")
    this.showPasswordId = "password"
  }

  login() {
    if (this.username == '') {
      this.util.showToast('Please provide username');
    } else if (this.password == '') {
      this.util.showToast('Please provide password');
    } else {
      this.postData()
    }
  }


  postData() {
    var myData = JSON.stringify({
      email: this.username,
      password: this.password,
    });
    console.log("Your myData: ", myData);
    this.util.presentLoading();
    this.util.getTypeDetails('users/token.json', myData).subscribe(result => {
      this.util.dismissLoader();
      //console.log("Your data login data testing: ", result);
      this.data = result;
      if (this.data.success == 1) {
        //console.log("Your success data: ", this.data.data);
        localStorage.setItem('loginDataKKart', JSON.stringify(this.data.data.userdetails));
        localStorage.setItem('userToken', JSON.stringify(this.data.data.token));
        this.events.publish('user:login')

        if (this.pushedFrom == 'productDetailsWishlist'){
          this.navCtrl.navigateForward(['/details', { pushedFrom: 'loginWishlist' }])
        }else if (this.pushedFrom == 'productDetailsCart'){
          this.navCtrl.navigateForward(['/details', { pushedFrom: 'loginCart' }])
        }else if (this.pushedFrom == 'detailsRelatedWishlist'){
          this.navCtrl.navigateForward(['/details', { pushedFrom: 'loginRelatedWishlist' }])
        }else if (this.pushedFrom == 'detailsRelatedCart'){
          this.navCtrl.navigateForward(['/details', { pushedFrom: 'loginRelatedCart' }])
        }else if (this.pushedFrom == 'productListWishlist'){
          this.navCtrl.navigateForward(['/list', { pushedFrom: 'loginWishlist' }])
        }else if (this.pushedFrom == 'topproductListWishlist'){
          this.navCtrl.navigateForward(['/top-selling-product-list', { pushedFrom: 'loginWishlist' }])
        }else if (this.pushedFrom == 'productDetailsBuy'){
          this.navCtrl.navigateForward('/cart')
        }else if (this.pushedFrom == 'productList'){
          this.navCtrl.navigateForward(['/list', { pushedFrom: 'loginCartlist' }])
        }else if (this.pushedFrom == 'topproductList'){
          this.navCtrl.navigateForward(['/top-selling-product-list', { pushedFrom: 'loginCartlist' }])
        }else if (this.pushedFrom == 'addReviewsList'){
          this.navCtrl.navigateForward(['/review-list', { pushedFrom: 'loginReviewlist' }])
        }else{
          this.navCtrl.navigateRoot('/home')
        }
      } else if (this.data.success == 2) {
        // localStorage.setItem('loginDataKKartTemp', JSON.stringify(this.data.data.userdetails));

        // localStorage.setItem('userToken', JSON.stringify(this.data.data.token));
        // localStorage.setItem('otp', JSON.stringify(this.data.otp));
        
        // //this.navCtrl.navigateForward(['/otp-registration', { pushedFrom: this.pushedFrom }])
        // localStorage.setItem('loginDataKKart', JSON.stringify(this.data.data.userdetails));
        // this.navCtrl.navigateRoot('/home')

        //console.log("Your success data: ", this.data.data);
        localStorage.setItem('loginDataKKart', JSON.stringify(this.data.data.userdetails));
        localStorage.setItem('userToken', JSON.stringify(this.data.data.token));
        this.events.publish('user:login')
        
        if (this.pushedFrom == 'productDetailsWishlist'){
          this.navCtrl.navigateForward(['/details', { pushedFrom: 'loginWishlist' }])
        }else if (this.pushedFrom == 'productDetailsCart'){
          this.navCtrl.navigateForward(['/details', { pushedFrom: 'loginCart' }])
        }else if (this.pushedFrom == 'detailsRelatedWishlist'){
          this.navCtrl.navigateForward(['/details', { pushedFrom: 'loginRelatedWishlist' }])
        }else if (this.pushedFrom == 'detailsRelatedCart'){
          this.navCtrl.navigateForward(['/details', { pushedFrom: 'loginRelatedCart' }])
        }else if (this.pushedFrom == 'productListWishlist'){
          this.navCtrl.navigateForward(['/list', { pushedFrom: 'loginWishlist' }])
        }else if (this.pushedFrom == 'topproductListWishlist'){
          this.navCtrl.navigateForward(['/top-selling-product-list', { pushedFrom: 'loginWishlist' }])
        }else if (this.pushedFrom == 'productDetailsBuy'){
          this.navCtrl.navigateForward('/cart')
        }else if (this.pushedFrom == 'productList'){
          this.navCtrl.navigateForward(['/list', { pushedFrom: 'loginCartlist' }])
        }else if (this.pushedFrom == 'topproductList'){
          this.navCtrl.navigateForward(['/top-selling-product-list', { pushedFrom: 'loginCartlist' }])
        }else if (this.pushedFrom == 'addReviewsList'){
          this.navCtrl.navigateForward(['/review-list', { pushedFrom: 'loginReviewlist' }])
        }else{
          this.navCtrl.navigateRoot('/home')
        }



      }else {
        console.log("is it errror ???????")
        this.util.showToast(this.data.data.message);
      }
    },
      error => {
        this.util.dismissLoader();
        this.util.showToast('Server error occured. Try again.');
      }
    );
  }

  toSingUp(){
    this.navCtrl.navigateForward(['/signup', { pushedFrom: this.pushedFrom }])
  }
  goBack(){
    //console.log(JSON.parse(localStorage.getItem('loginDataKKart')))
    this.events.publish('user:login')
    if (this.pushedFrom == 'productDetailsWishlist'){
      this.navCtrl.navigateBack('/details')
    }else if (this.pushedFrom == 'productDetailsCart'){
      this.navCtrl.navigateBack('/details')
    }else if (this.pushedFrom == 'detailsRelatedWishlist'){
      this.navCtrl.navigateBack('/details')
    }else if (this.pushedFrom == 'detailsRelatedCart'){
      this.navCtrl.navigateBack('/details')
    }else if (this.pushedFrom == 'productListWishlist'){
      this.navCtrl.navigateBack('/list')
    }else if (this.pushedFrom == 'topproductListWishlist'){
      this.navCtrl.navigateBack('/top-selling-product-list')
    }else if (this.pushedFrom == 'productDetailsBuy'){
      this.navCtrl.navigateBack('/details')
    }else if (this.pushedFrom == 'productList'){
      this.navCtrl.navigateBack('/list')
    }else if (this.pushedFrom == 'topproductList'){
      this.navCtrl.navigateBack('/top-selling-product-list')
    }else if (this.pushedFrom == 'addReviewsList'){
      this.navCtrl.navigateBack('/review-list')
    }else{
      this.navCtrl.navigateRoot('/home')
    } 
  }


}
