import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, Events } from '@ionic/angular';
import { UtilityService } from '../api/utility.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.page.html',
  styleUrls: ['./review-list.page.scss'],
})
export class ReviewListPage implements OnInit {
  reviewList: any
  slug=""
  vendorId=""
  pushedFrom = ""
  reviewwdProductData:any
  
  constructor(private menuCtrl: MenuController,
    private navCtrl: NavController, private util: UtilityService, public events: Events, private route: Router,
    private activeroute: ActivatedRoute,) {
      this.pushedFrom = this.activeroute.snapshot.paramMap.get("pushedFrom")
      if (this.pushedFrom == "loginReviewlist") {
        this.reviewwdProductData = JSON.parse(localStorage.getItem('reviewProdDetails'))
        this.reviewList = this.reviewwdProductData.state.parms
        this.slug = this.reviewwdProductData.state.params2
        this.vendorId = this.reviewwdProductData.state.params3
        console.log("reviewProdDetails", this.reviewwdProductData)
      }else{
        this.reviewList = this.route.getCurrentNavigation().extras.state.parms;
        this.slug = this.route.getCurrentNavigation().extras.state.params2;
        this.vendorId = this.route.getCurrentNavigation().extras.state.params3;
      }
    

    //console.log("this.route.getCurrentNavigation().extras.state",this.route.getCurrentNavigation().extras.state)
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false)
    //this.reviewList = this.route.getCurrentNavigation().extras.state.parms;
    //this.pageDetails = { 'showMenu': false, 'showBack': false, 'showButtons': false, 'title': 'Login', 'prevPage': '' };
    //this.showMenu(this.pageDetails);
  }

  showMenu(pageDetails) {
    console.log('User created!')
    this.events.publish('showMenu', pageDetails, Date.now());
  }

  addReview() {
    let navigationExtras: NavigationExtras = {
      state: {
        from: 'reviewlist',
        parms: this.slug,
        params2: this.vendorId
      }
    };
    if (localStorage.getItem('loginDataKKart') != null) {
      this.navCtrl.navigateForward('/add-your-review', navigationExtras);
    }else{
      this.navCtrl.navigateForward(['/login', { pushedFrom: "addReviewsList" }])
    }
    
  }
}
