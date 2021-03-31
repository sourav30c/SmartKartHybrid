import { Component } from '@angular/core';
import { NavController, Events, Platform, MenuController } from '@ionic/angular';
import { UtilityService } from 'src/app/api/utility.service';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pageDetails: any;
  data: any;
  sliderData = [];
  topsellData = [];
  recentProductData = [];
  categoryData = [];
  advData = [];
  searchText = '';
  isSearch = false;
  pageSearch = 1;
  homeProductList = []
  subscribe: any
  constructor(private util: UtilityService, private menuCtrl: MenuController, public events: Events, private navCtrl: NavController, private platform: Platform) {
    this.events.publish('user:login')
    this.getHomeSliderTopsellRProCategoriData()
    //this.getHomeProductNew()
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true)
    if (localStorage.getItem('loginDataKKart') != null) {
      this.util.myCartlist()
    }
    this.searchText = '';
    this.isSearch = false;
  }

  ionViewDidEnter() {
    this.subscribe = this.platform.backButton.subscribeWithPriority(666, () => {
      if (this.constructor.name == "HomePage") {
        if (window.confirm("Do you want to exit app")) {
          navigator["app"].exitApp();
        }
      }
    })
  }

  ionViewWillLeave() {
    this.subscribe.unsubscribe();
  }

  showMenu(pageDetails) {
    console.log('User created!')
    this.events.publish('showMenu', pageDetails, Date.now());
  }

  loadImageSlider(i) {
    this.sliderData[i]["isLoad"] = true
  }

  loadImageAllCategory(i) {
    this.categoryData[i]["isLoad"] = true
  }

  loadImageTopsell(i) {
    this.topsellData[i]["isLoad"] = true
  }

  loadImageRecentProduct(i) {
    this.recentProductData[i]["isLoad"] = true
  }

  loadImageAdv(i) {
    this.advData[i]["isLoad"] = true
  }

  getHomeSliderTopsellRProCategoriData() {
    var myData = JSON.stringify({
      "appcall": "1"
    });
    //console.log("Your myData: ", myData);
    //this.util.presentLoading();
    //this.util.presentLoader3()
    this.util.getTypeDetails('sliders/homeSlider.json', myData).subscribe(result => {
      //this.util.dismissLoader();
      //console.log("Your data sliders/homeSlider.json: ", result);
      this.data = result;
      if (this.data.success) {
        this.sliderData = this.data.data.slider
        var Limit = this.data.data.maximum_cod_amount
        localStorage.setItem('codLimit', Limit);
        var delivryCharge = this.data.data.cod_charge
        localStorage.setItem('delivryCharge', delivryCharge);
        for (var i = 0; i < this.sliderData.length; i++) {
          this.sliderData[i]["isLoad"] = false
        }
        //console.log("this.sliderData: ", this.sliderData);

        this.topsellData = this.data.data.feature_products
        for (var i = 0; i < this.topsellData.length; i++) {
          this.topsellData[i]["isLoad"] = false
        }
        //console.log("this.topsellData: ", this.topsellData, this.util.codLimit);

        this.recentProductData = this.data.data.recent_product
        for (var i = 0; i < this.recentProductData.length; i++) {
          this.recentProductData[i]["isLoad"] = false
        }
        //console.log("this.recentProductData: ", this.recentProductData);

        this.categoryData = this.data.data.category
        //console.log("this.categoryData", this.categoryData)
        for (var i = 0; i < this.categoryData.length; i++) {
          this.categoryData[i]["isLoad"] = false
        }

        //this.getHomeAdvSliderData()


      } else {
        this.util.showToast(this.data.message);
      }
    },
      error => {
        //this.util.dismissLoader();
        this.util.showToast('Server error occured. Try again.');
      }
    );
  }

  getHomeProductNew() {
    var myData = JSON.stringify({
    });
    //console.log("Your myData: ", myData);
    //this.util.presentLoading();
    //this.util.presentLoader3()
    this.util.getTypeDetails('sliders/homeProduct.json', myData).subscribe(result => {
      //this.util.dismissLoader();
      //console.log("Your data sliders/homeProduct.json ", result);
      this.data = result;
      if (this.data.success) {
        this.homeProductList = this.data.data.home_products
        // this.advData = this.data.data.last_section
        // for (var i = 0; i < this.advData.length; i++) {
        //   this.advData[i]["isLoad"] = false
        // }
        //console.log("this.homeProductList",this.homeProductList)
        //console.log("this.advData",this.advData)

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


  getHomeAdvSliderData() {
    var myData = JSON.stringify({
      "appcall": "1"
    });
    console.log("Your myData: ", myData);
    //this.util.presentLoading();
    //this.util.presentLoader3()https://www.kkcarts.com/api/sliders/adv.json
    this.util.getTypeDetails('sliders/adv.json', myData).subscribe(result => {
      //this.util.dismissLoader();
      //console.log("Your data: ", result);
      this.data = result;
      if (this.data.success) {
        this.advData = this.data.data.adv
        for (var i = 0; i < this.advData.length; i++) {
          this.advData[i]["isLoad"] = false
        }
        //console.log("this.advData: ", this.advData);
      } else {
        this.util.showToast(this.data.message);
      }
    },
      error => {
        //this.util.dismissLoader();
        this.util.showToast('Server error occured. Try again.');
      }
    );
  }

  viewAll() {
    //this.util.showToast("will come soon")
    this.navCtrl.navigateForward(['/list', { pushedFromSub: "Home" }])
  }

  viewAllByCat(singleSubCat) {
    //console.log("Sub Cat", singleSubCat , singleSubCat.id)
    localStorage.setItem("productType", singleSubCat.sub_category_id)
    this.navCtrl.navigateForward(['/list', {
      cat: singleSubCat.advertisement_items[0].category_id,
      subCat: "",
      type: "",
      pushedFromSub: "Home"
    }])
  }


  details(productListSingle) {
    //console.log("productListSingle",productListSingle)
    localStorage.setItem('singleProduct', JSON.stringify(productListSingle));

    let navigationExtras: NavigationExtras = {
      state: {
        from: 'Home',
        parms: productListSingle,
      }
    };

    this.navCtrl.navigateForward('/details', navigationExtras);
  }

  viewAllCategory() {
    this.navCtrl.navigateForward('/product-category')
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

  toCartPage() {
    if (localStorage.getItem('loginDataKKart') != null) {
      this.navCtrl.navigateForward('/cart')
    } else {
      this.navCtrl.navigateForward(['/login', { pushedFrom: "CartIcon" }])

    }
  }

  addToProductList(singleSliderData) {
    //console.log("add", singleSliderData)
    this.navCtrl.navigateForward(['/list', {
      cat: singleSliderData.advertisement_items[0].category_id ? singleSliderData.advertisement_items[0].category_id : "",
      subCat: singleSliderData.advertisement_items[0].sub_category_id ? singleSliderData.advertisement_items[0].sub_category_id : "",
      type: singleSliderData.advertisement_items[0].type_id ? singleSliderData.advertisement_items[0].type_id : "",
      pushedFromSub: "Home"
    }])

  }

  sliderToProductList(singleSliderData) {
    //console.log("singleSliderData", singleSliderData)
    this.navCtrl.navigateForward(['/list', { cat: "", subCat: "", type: singleSliderData.txt_caption_1, pushedFromSub: "Home" }])
    //this.navCtrl.navigateForward(['/list', { cat:"", subCat:"", type:"147",pushedFromSub:"Home"}])
  }

  getItems(ev: any) {
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      // this.items = this.items.filter((item) => {
      //   return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      // })
      console.log('val:: ', val);
    }
  }

  submitSearch(ev: any) {
    // Reset items back to all of the items
    console.log('evev:: ', ev);
    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      // this.items = this.items.filter((item) => {
      //   return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      // })
      console.log('val:: ', val);
      this.navCtrl.navigateForward(['/list', { searchTxtHome: val }])
    }
  }

  onCancel(ev: any) {
    this.searchText = '';
    this.isSearch = false;
    this.pageSearch = 1;
  }

  viewSingleCategory(singleAllCategory) {
    //console.log("singleAllCategory",singleAllCategory)
    this.navCtrl.navigateForward(['/list', { cat: singleAllCategory.id, subCat: "", type: "", pushedFromSub: "Home" }])
  }

  toAutoSearch() {
    this.navCtrl.navigateForward(['/auto-search', { pushed: "manual" }])
  }

  toRecord() {
    console.log("comming")
    this.navCtrl.navigateForward(['/auto-search', { pushed: "audio" }])
  }
}

