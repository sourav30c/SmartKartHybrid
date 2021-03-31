import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, Events } from '@ionic/angular';
import { UtilityService } from '../api/utility.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-my-reviews',
  templateUrl: './my-reviews.page.html',
  styleUrls: ['./my-reviews.page.scss'],
})
export class MyReviewsPage implements OnInit {
  data:any
  reviewList:any
  isReviewList:boolean = true
  constructor(private menuCtrl: MenuController,
    private navCtrl: NavController, private util: UtilityService, public events: Events, private route: Router,
    private activeroute: ActivatedRoute,) { 
    }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true)
    if (localStorage.getItem('loginDataKKart') != null) {
      this.myReviewlist()
    } else {
      this.isReviewList = false
    }
  }
  myReviewlist() {
    var myData = JSON.stringify({
    });
    console.log("Your myData: ", myData);
    this.util.presentLoading();
    this.util.getTypeDetailsWithAuth('users/myreviews.json', myData).subscribe(result => {
      this.util.dismissLoader();
      console.log("Your review data: ", result);
      this.data = result;
      if (this.data.success) {
        this.reviewList = this.data.data.review_list
        if (this.reviewList.length == 0) {
          this.isReviewList = false
        } else {
          this.isReviewList = true
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

  editReview(reviewProduct,i){
    console.log("editreviewProduct",reviewProduct)
    let navigationExtras: NavigationExtras = {
      state: {
        from: 'myreviewlist',
        parms: reviewProduct.slug,
        params2: reviewProduct.id,
        params3: reviewProduct.comment,
        params4: reviewProduct.id
      }
    };
    this.navCtrl.navigateForward('/add-your-review', navigationExtras);
    
  }

  deleteReview(reviewProduct){
    console.log("deletereviewProduct",reviewProduct)
    var myData = JSON.stringify({
      id: reviewProduct.id
    });
    console.log("Your myData: ", myData);
    this.util.presentLoading();
    this.util.getTypeDetailsWithAuth('users/deletereview.json', myData).subscribe(result => {
      this.util.dismissLoader();
      console.log("Your order data: ", result);
      this.data = result;
      if (this.data.success) {
        this.util.showToast(this.data.data.status);
        this.myReviewlist()
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
