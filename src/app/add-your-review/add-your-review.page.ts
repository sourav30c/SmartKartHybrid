import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, Events } from '@ionic/angular';
import { UtilityService } from '../api/utility.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-add-your-review',
  templateUrl: './add-your-review.page.html',
  styleUrls: ['./add-your-review.page.scss'],
})
export class AddYourReviewPage implements OnInit {
  isStar1:boolean=false
  isStar2:boolean=false
  isStar3:boolean=false
  isStar4:boolean=false
  isStar5:boolean=false
  rating = "0"
  comments = ""
  data:any
  slugPush = ""
  vendorIdPush = ""
  pushedFrom = ""
  reviewId = ""
  constructor(private menuCtrl: MenuController, 
    private navCtrl: NavController, 
    private util: UtilityService, public events: Events,private route: Router) { 
      this.slugPush = this.route.getCurrentNavigation().extras.state.parms;
      this.vendorIdPush = this.route.getCurrentNavigation().extras.state.params2;
      this.pushedFrom = this.route.getCurrentNavigation().extras.state.from;
      this.comments = this.route.getCurrentNavigation().extras.state.params3 ? this.route.getCurrentNavigation().extras.state.params3 : ""
      this.reviewId = this.route.getCurrentNavigation().extras.state.params4 ? this.route.getCurrentNavigation().extras.state.params4 : ""
    }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false)
    //this.pageDetails = { 'showMenu': false, 'showBack': false, 'showButtons': false, 'title': 'Login', 'prevPage': '' };
    //this.showMenu(this.pageDetails);
  }

  showMenu(pageDetails) {
    console.log('User created!')
    this.events.publish('showMenu', pageDetails, Date.now());
  }

  Star1Pressed(){
    this.isStar2 = false
    this.isStar3 = false
    this.isStar4 = false
    this.isStar5 = false
    if (this.isStar1 == true){
      this.isStar1 = false
      this.rating = "0"
    }else{
      this.isStar1 = true
      this.rating = "1"
    }

    //console.log("1 Star",this.isStar1, this.isStar2,this.isStar3, this.isStar4, this.isStar5)
  }

  Star2Pressed(){
    //console.log("2")
    this.isStar1 = true
    this.isStar3 = false
    this.isStar4 = false
    this.isStar5 = false
    if (this.isStar2 == true){
      this.isStar2 = false
      this.rating = "1"
    }else{
      this.isStar2 = true
      this.rating = "2"
    }

    //console.log("2 Star",this.isStar1, this.isStar2,this.isStar3, this.isStar4, this.isStar5)
  }

  Star3Pressed(){
    //console.log("3")
    this.isStar1 = true
    this.isStar2 = true
    this.isStar4 = false
    this.isStar5 = false
    if (this.isStar3 == true){
      this.isStar3 = false
      this.rating = "2"
    }else{
      this.isStar3 = true
      this.rating = "3"
    }

    //console.log("3 Star",this.isStar1, this.isStar2,this.isStar3, this.isStar4, this.isStar5)
  }

  Star4Pressed(){
    //console.log("4")
    this.isStar1 = true
    this.isStar2 = true
    this.isStar3 = true
    this.isStar5 = false
    if (this.isStar4 == true){
      this.isStar4 = false
      this.rating = "3"
    }else{
      this.isStar4 = true
      this.rating = "4"
    }

    //console.log("4 Star",this.isStar1, this.isStar2,this.isStar3, this.isStar4, this.isStar5)
  }

  Star5Pressed(){
    this.isStar1 = true
    this.isStar2 = true
    this.isStar3 = true
    this.isStar4 = true
    if (this.isStar5 == true){
      this.isStar5 = false
      this.rating = "4"
    }else{
      this.isStar5 = true
      this.rating = "5"
    }

    //console.log("5 Star",this.isStar1, this.isStar2,this.isStar3, this.isStar4, this.isStar5)
  }

  submitReview(){
    if(this.pushedFrom == "myreviewlist"){
      this.postMyReviewEdit()
    }else{
      this.postReviewData()
    }
  }
  postReviewData() {
    var myData = JSON.stringify({
      rating: this.rating,
      comment: this.comments,
      slug: this.slugPush//this.reviewListPush[0].slug
    });
    this.util.presentLoading()
    //console.log("Your reviews: ", myData );
    this.util.getTypeDetailsWithAuth('products/addreview.json', myData).subscribe(result => {
      this.util.dismissLoader()
      //console.log("Your data: ", result);
      this.data = result;
      if (this.data.success) {
        this.util.showToast(this.data.data.Review_status);
        this.toReviewListPage()
      } else {
        this.util.showToast(this.data.status?this.data.status:"Please try again later");
      }
    },
      error => {
        this.util.dismissLoader();
        this.util.showAlert('Error!', 'Server error occured. Try again.');
      }
    );
  }
  toReviewListPage(){
    let navigationExtras: NavigationExtras = {
      state: {
        from: 'add-review',
        parms: this.slugPush,
        params2: this.vendorIdPush
      }
    };
    this.navCtrl.navigateForward('/details', navigationExtras);
  }

  postMyReviewEdit(){
    var myData = JSON.stringify({
      rating: this.rating,
      comment: this.comments,
      id: this.reviewId
    });
    this.util.presentLoading()
    //console.log("Your reviews: ", myData );
    this.util.getTypeDetailsWithAuth('users/editreview.json', myData).subscribe(result => {
      this.util.dismissLoader()
      //console.log("Your data: ", result);
      this.data = result;
      if (this.data.success) {
        this.util.showToast(this.data.data.Review_status);
        this.navCtrl.navigateBack('/my-reviews');
      } else {
        this.util.showToast(this.data.status?this.data.status:"Please try again later");
      }
    },
      error => {
        this.util.dismissLoader();
        this.util.showAlert('Error!', 'Server error occured. Try again.');
      }
    );
  }

}
