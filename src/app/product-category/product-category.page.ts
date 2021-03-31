import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../api/utility.service';
import { MenuController, Events, NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.page.html',
  styleUrls: ['./product-category.page.scss'],
})
export class ProductCategoryPage implements OnInit {
  pageDetails: any;
  data: any;
  sliderData = [];
  topsellData = [];
  categoryData = [];
  subCategoryData = []
  subCatType = []
  advData = [];
  categoryName:string
  subCategoryName:string
  isCategoryTapped:boolean = false
  isCategoryTappedArr = []
  isSubCategoryTapped:boolean = false
  isSubCategoryTappedArr = []
  constructor(private util: UtilityService, private menuCtrl: MenuController, public events: Events ,private navCtrl: NavController) { 
    this.getProductCategory()
  }

  ionViewWillEnter() {
    //console.log("viewwillentercalling")
    this.menuCtrl.enable(true)

    //this.pageDetails = { 'showMenu': false, 'showBack': true, 'showButtons': false, 'title': 'Details', 'prevPage': 'list' };
    //this.showMenu(this.pageDetails);

    //this.productDetails = this.route.getCurrentNavigation().extras.state.parms;
    //console.log("product details in view will enter", this.productDetails)

  }

  showMenu(pageDetails) {
    console.log('User created!')
    this.events.publish('showMenu', pageDetails, Date.now());
  }

  ngOnInit() {
    //this.getProductDetailsData()
  }

  getProductCategory() {
    var myData = JSON.stringify({
    });
    console.log("Your myData: ", myData);
    this.util.presentLoading();
    //this.util.presentLoader3()
    this.util.getTypeDetails('sliders/category.json', myData).subscribe(result => {
      this.util.dismissLoader();
      console.log("Your category data: ", result);
      this.data = result;
      if (this.data.success) {
        this.categoryData = this.data.data.cat
        //console.log("this.categoryData",this.categoryData)
        for(var i = 0; i< this.categoryData.length; i++){
          this.isCategoryTappedArr[i] = false
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

  loadImageProduct(i, singleCategoryData){
    singleCategoryData["isLoad"] = true
    //console.log('productlist:: ', singleCategoryData)
  }

  subCategory(singleSubCategory){    
    let navigationExtras: NavigationExtras = {
      state: {
        from: 'list',
        parms: singleSubCategory,
      }
    };
    this.navCtrl.navigateForward('/product-sub-category', navigationExtras);
  }

  expandCategory(singleCategory,i){
    //console.log("category tapped",singleCategory)
    //console.log("this.isCategoryTappedArr begining", this.isCategoryTappedArr)
    this.categoryName = singleCategory.slug
    this.subCategory = singleCategory.sub_categories
    this.isSubCategoryTapped = false

    for(var j = 0; j< this.categoryData.length; j++){
      if(j != i){
        this.isCategoryTappedArr[j] = false
      }else{
        if (this.isCategoryTappedArr[i] == false){
          this.isCategoryTappedArr.splice(i,1,true)
        }else{
          this.isCategoryTappedArr.splice(i,1,false)
        }
      }
    }

    for(var j = 0; j< this.subCategory.length; j++){
      this.isSubCategoryTappedArr[j] = false
    }
    //console.log("this.isCategoryTappedArr", this.isCategoryTappedArr)
  }

  expandSubCategory(singleSubCategory,i){
    this.subCategoryName = singleSubCategory.slug
    this.subCatType = singleSubCategory.types

    for(var j = 0; j< this.categoryData.length; j++){
      if(j != i){
        this.isSubCategoryTappedArr[j] = false
      }else{
        if (this.isSubCategoryTappedArr[i] == false){
          this.isSubCategoryTappedArr.splice(i,1,true)
        }else{
          this.isSubCategoryTappedArr.splice(i,1,false)
        }
      }
    }
  }

  productsList(singleSubCat){
    //console.log("Sub Cat", singleSubCat)
    //localStorage.setItem("productType", singleSubCat.sub_category_id)
    this.navCtrl.navigateForward(['/list', { cat:singleSubCat.category_id ? singleSubCat.category_id : "" , 
    subCat: singleSubCat.sub_category_id ? singleSubCat.sub_category_id : "", 
    type:singleSubCat.id ? singleSubCat.id : "", 
    pushedFromSub:"Category"}])
  }

  toCart(){
    if (localStorage.getItem('loginDataKKart') != null) {
      this.navCtrl.navigateForward('/cart')
    }else{
      this.navCtrl.navigateForward(['/login', { pushedFrom: "CartIcon" }])
    }
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
