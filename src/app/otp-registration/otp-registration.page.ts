import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, Events } from '@ionic/angular';
import { UtilityService } from '../api/utility.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-otp-registration',
  templateUrl: './otp-registration.page.html',
  styleUrls: ['./otp-registration.page.scss'],
})
export class OtpRegistrationPage implements OnInit {

  otp='';
  data:any;
  otpCheck=''
  pushedFrom = ""
  constructor(private menuCtrl: MenuController, private navCtrl: NavController, private util: UtilityService, public events: Events,
    private route: Router,private activeroute: ActivatedRoute,) { 
    //this.otpCheck = JSON.parse(localStorage.getItem('otp'))
    this.pushedFrom = this.activeroute.snapshot.paramMap.get("pushedFrom")

    console.log("PushedFrom", this.pushedFrom)
    }

  ngOnInit() {
  }

  submitOtp(){
    console.log("otp verify", this.otp, this.otpCheck)
    //alert(1)
    if (this.otp != this.otpCheck){
      this.util.showToast('Please provide right otp');
    }else{
      var myData = JSON.stringify({
        otp:this.otp
      });
      console.log("Your myData: ", myData);
      this.util.presentLoading();
      this.util.getTypeDetailsWithAuth('users/sendotp.json', myData).subscribe(result => {
        //alert(2)
        this.util.dismissLoader();
        console.log("Your otp response: ", JSON.stringify(result));
        this.data = result;
        
        console.log(this.data)
        if (this.data.success) {
          this.events.publish('user:login')
          var userData = JSON.parse(localStorage.getItem('loginDataKKartTemp'))
          localStorage.setItem('loginDataKKart', JSON.stringify(userData));
          //var userToken = JSON.parse(localStorage.getItem('userTokenTemp'))
          //localStorage.setItem('userToken', JSON.stringify(userToken));

          if (this.pushedFrom == null){
            this.navCtrl.navigateRoot('/home')
          }else if (this.pushedFrom == 'productDetailsWishlist'){
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
        } else {
          //alert(3)

          this.util.showToast(this.data.message);
        }
      },
        error => {
          this.util.dismissLoader();
          //alert(4)
          this.util.showToast('Server error occured. Try again.');
        }
      );
    }
  }

  resendOtp(){
    var myData = JSON.stringify({
    });
    console.log("Your myData: ", myData);
    this.util.presentLoading();
    this.util.getTypeDetailsWithAuth('users/resendotp.json', myData).subscribe(result => {
      this.util.dismissLoader();
      console.log("Your data: ", result);
      this.data = result;
      console.log(this.data)
      if (this.data.success) {
        this.util.showToast('Otp has been sent');
        localStorage.setItem('otp', JSON.stringify(this.data.otp));
        this.otpCheck = this.data.otp
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
