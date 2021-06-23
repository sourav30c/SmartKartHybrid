import { Component, ViewChild } from '@angular/core';
import { UtilityService } from '../api/utility.service';
import { MenuController, Events, NavController, IonInfiniteScroll, Platform } from '@ionic/angular';
import { NavigationExtras, ActivatedRoute, Router } from '@angular/router';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {
  pageDetails: any;
  data: any;
  productlist = []
  wishlistLists; any
  wishListListsForId: any
  wishListCheck = []
  sliderData = [];
  topsellData = [];
  recentProductData = [];
  categoryData = [];
  page = 1
  productTotal = 0;
  fixedSectionDelete = false
  pushedFrom: any
  slugProduct = ""
  slugProductAny:any
  slugLocation: any
  isWishlist: boolean = false
  subCategory:any
  subCategoryId = ""
  categoryId = ""
  type_id = ""
  isProductList:boolean = true
  pushedFromSubCat = ""
  searchText = '';
  isSearch = false;
  pageSearch = 1;
  count1 = 1
  count2 = 1
  subscribe: any
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(private util: UtilityService, private menuCtrl: MenuController, private route: Router, public events: Events, 
    private activeroute: ActivatedRoute, private navCtrl: NavController,private platform: Platform ) {
    this.events.publish('user:login')
    this.pushedFrom = this.activeroute.snapshot.paramMap.get("pushedFrom")
    //this.getProductListData()

    console.log("pushed from", this.pushedFrom)

    if (this.pushedFrom == 'loginWishlist') {
      //this.slugProduct = localStorage.getItem('tempListSlug')
      //this.slugLocation = localStorage.getItem('tempListLocation')
      this.myWishlistWithoutCheck()
      //this.myWishlist()
      //this.addToWishlist(this.slugProduct, this.slugLocation)
    }else if (this.pushedFrom == 'loginCartlist'){
      this.postDataAddtoCart(localStorage.getItem('tempListSlugCart'))
    }

    //this.subCategoryId = this.activeroute.snapshot.paramMap.get("subCat") ?this.activeroute.snapshot.paramMap.get("subCat") : ""
  }

  // ionViewDidEnter() {

  //   this.subscribe = this.platform.backButton.subscribeWithPriority(666, () => {
  //     if (this.constructor.name == "HomePage"){
  //       if(window.confirm("Do you want to exit app")){
  //         navigator["app"].exitApp();
  //       }
  //     }
  //   })
  // }


  ionViewWillEnter() {
    this.menuCtrl.enable(true)
    this.pageDetails = { 'showMenu': true, 'showBack': false, 'showButtons': false, 'title': 'Product List', 'prevPage': '' };
    this.showMenu(this.pageDetails);

    
    if (localStorage.getItem('loginDataKKart') != null) {
      if (this.pushedFrom != 'loginWishlist') {
        this.myWishlistWithoutCheck()
      }
      this.util.myCartlist()
    }
    
    //this.subCategoryId = localStorage.getItem("productType")

    this.subCategoryId = this.activeroute.snapshot.paramMap.get("subCat") ? this.activeroute.snapshot.paramMap.get("subCat") : ""
    this.categoryId = this.activeroute.snapshot.paramMap.get("cat") ? this.activeroute.snapshot.paramMap.get("cat") : ""
    this.type_id = this.activeroute.snapshot.paramMap.get("type") ? this.activeroute.snapshot.paramMap.get("type") : ""

    this.pushedFromSubCat = this.activeroute.snapshot.paramMap.get("pushedFromSub") ? this.activeroute.snapshot.paramMap.get("pushedFromSub") : ""

    //console.log("From Home", this.pushedFromSubCat)
    this.searchText = this.activeroute.snapshot.paramMap.get("searchTxtHome") ? this.activeroute.snapshot.paramMap.get("searchTxtHome") : "" 
    if(this.searchText == ""){
      this.getProductListData()
    }else{
      this.getSearchProductListData()
    }
  }

  showMenu(pageDetails) {
    //console.log('User created!')
    this.events.publish('showMenu', pageDetails, Date.now());
  }
  getProductListData() {
    var myData = JSON.stringify({
      "category_id": this.categoryId,
      "sub_category_id": this.subCategoryId,
      "type_id": this.type_id,
      "search":""
    });
    //console.log("Your myData product list: ", myData);
    //this.util.presentLoading();
    if (this.page == 1) {
      this.util.presentLoading();
    }
    this.util.getTypeDetails('products/productList.json?page='+this.page, myData).subscribe(result => {
      this.util.dismissLoader();
      if (this.page == 1) {
        this.util.dismissLoader();
      }
      this.data = result;
      //console.log("ProductListData",this.data)
      if (this.data.success) {
        this.util.dismissLoader();
        if (localStorage.getItem('loginDataKKart') != null) {
          this.myWishlist()
        }
        
        if (this.page == 1) {
          this.productlist = this.data.data.product
        } else {
          let arrNewRecord = this.data.data.product
          let otherWay = this.productlist.concat(arrNewRecord);
          //console.log(otherWay);
          this.productlist = otherWay;
        }

        if (this.productlist.length == 0){
          this.isProductList = false
        }else{
          this.isProductList = true
        }

        this.productTotal = this.data.paging.count;
        if (this.productlist.length == this.productTotal) {
          this.infiniteScroll.disabled = true;
        }
        this.page += 1;

        if (this.productlist.length > 0) {
          for (var i = 0; i < this.productlist.length; i++) {
            //console.log("isLoadisLoad: ", this.productlist[i]["isLoad"]);
            if (this.productlist[i]["isLoad"] != true) {
              this.productlist[i]["isLoad"] = false
            }
          }
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


  loadImageProduct(i, productlist) {
    productlist["isLoad"] = true
  }

  scroll(ev) {
    if (ev.detail.scrollTop > 123) {
      this.fixedSectionDelete = true
    } else {
      this.fixedSectionDelete = false
    }
  }

  loadData(event) {
    setTimeout(() => {
      //console.log('Done Load Data Calling');
      event.target.complete();
      //this.getProductListData();
      if(this.searchText == ""){
        this.getProductListData()
      }else{
        this.getSearchProductListData()
      }
    }, 500);
  }

  details(productListSingle) {
    localStorage.setItem('singleProduct', JSON.stringify(productListSingle));
    let navigationExtras: NavigationExtras = {
      state: {
        from: 'list',
        parms: productListSingle,
        parms2: this.subCategoryId
      }
    };
    this.navCtrl.navigateForward('/details', navigationExtras);
  }

  myWishlistWithoutCheck() {
    //this.wishListListsForId = []
    var myData = JSON.stringify({
    });
    //this.util.presentLoading();
    this.util.getTypeDetailsWithAuth('users/wishlist.json', myData).subscribe(result => {
      this.util.dismissLoader();
      //console.log("Your data: ", result);
      this.data = result;

      if (this.data.success) {
        this.util.dismissLoader();
        this.wishListListsForId = this.data.data.wishlist
        //console.log("wishListListsForId final list", this.wishListListsForId)
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

  myWishlist() { // check user have which product in wishlist
    this.wishListCheck = []

    var myData = JSON.stringify({
    });
    this.util.getTypeDetailsWithAuth('users/wishlist.json', myData).subscribe(result => {
      this.data = result;
      if (this.data.success) {
        this.wishlistLists = this.data.data.wishlist
        for (let i = 0; i < this.productlist.length; i++) {
          if (this.wishlistLists.length > 0) {
            for (let j = 0; j < this.wishlistLists.length; j++) {
              if (this.productlist[i].id == this.wishlistLists[j].product_id) {
                this.wishListCheck[i] = this.productlist[i].id
                break
              } else {
                this.wishListCheck[i] = 0
              }
            }
          } else {
            this.wishListCheck[i] = 0
          }
        }

        this.util.dismissLoader();

        //console.log("this.wishListCheck", this.wishListCheck, this.wishlistLists)

        if (this.pushedFrom == 'loginWishlist' && this.count2 == 1) {
          this.count2 = this.count2 + 1
          this.slugProductAny = JSON.parse(localStorage.getItem('tempListSlug'))
          this.slugLocation = localStorage.getItem('tempListLocation')
          //console.log("wishlist callingt", localStorage.getItem('tempListSlug') , this.slugProductAny.slug , this.slugLocation)
          this.addToWishlist(this.slugProductAny, this.slugLocation)
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

  addToWishlist(singleproductlistslug, i) {
    let wishlistIdForDelete = ""
    if (localStorage.getItem('loginDataKKart') != null) {
      //console.log("this.wishlistLists.length ", this.wishListListsForId, Number(i + 1), this.wishListCheck)
      if (this.wishListCheck[i] == singleproductlistslug.id) {
        for (let k = 0; k < this.wishListListsForId.length; k++) {
          //console.log("delete ids", singleproductlistslug.id, this.wishListListsForId[k].product_id, i, k, this.wishListListsForId[k].id)
          if (this.wishListListsForId[k].product_id == singleproductlistslug.id) {
            wishlistIdForDelete = this.wishListListsForId[k].id
            break
          } else {
            continue
          }
        }
        //console.log("delete from wishlist", wishlistIdForDelete)

        this.util.deleteFromWishlist(wishlistIdForDelete) //delete from wishlist
        this.wishListCheck.splice(i, 1, 0)
      } else if (this.wishListCheck[i] == false) {
        this.wishListCheck.splice(i, 1, singleproductlistslug.id);
        this.util.addToWishlist(singleproductlistslug.slug) //ad to wishlist
        //console.log("added to wislist")
      }

      setTimeout(() => {
        this.myWishlistWithoutCheck()
      }, 2000);


    } else {
      localStorage.setItem("tempListSlug", JSON.stringify(singleproductlistslug))
      localStorage.setItem("tempListLocation", i)
      //console.log("tempListSlug",localStorage.getItem("tempListSlug") , singleproductlistslug)
      this.navCtrl.navigateForward(['/login', { pushedFrom: "productListWishlist" }])
    }
    this.util.dismissLoader()
  }


  addToCart(singleProduct) {
    //console.log('tempListSlugCart', singleProduct.slug)
    localStorage.setItem('tempListSlugCart', singleProduct.slug)
    if (localStorage.getItem('loginDataKKart') != null) {
      this.postDataAddtoCart(singleProduct.slug)
    } else {
      this.navCtrl.navigateForward(['/login', { pushedFrom: "productList" }])
    }
  }

  postDataAddtoCart(singleProductSlug){
    //console.log("To Add to Cart")
    var myData = JSON.stringify({
      slug: singleProductSlug,
      quentity: 1
    });
    //console.log("Your myData: ", myData);
    this.util.presentLoading3();
    this.util.getTypeDetailsWithAuth('carts/addtocart.json', myData).subscribe(result => {
      this.util.dismissLoader();
      //console.log("Your Cart data: ", result);
      this.data = result;
      //console.log(this.data)
      if (this.data.success) {
        this.util.myCartlist()
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

  getItems(ev: any) {
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      // this.items = this.items.filter((item) => {
      //   return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      // })
     //console.log('val:: ', val);
    }
  }

  submitSearch(ev: any) {
    // Reset items back to all of the items
    //console.log('evev:: ', ev);
    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      // this.items = this.items.filter((item) => {
      //   return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      // })
      //console.log('val:: ', val);
      this.pageSearch = 1;
      this.productlist = [];
      this.getSearchProductListData();
    }
  }

  getSearchProductListData() {
    var myData = JSON.stringify({
      "category_id": this.categoryId,
      "sub_category_id": this.subCategoryId,
      "type_id": this.type_id,
      "search": this.searchText
    });
    //console.log("Your myData: ", myData);
    if (this.pageSearch == 1) {
      this.util.presentLoading();
    }
    this.util.getTypeDetails('products/productList.json?page='+this.pageSearch, myData).subscribe(result => {
      this.util.dismissLoader();
      if (this.pageSearch == 1) {
        this.util.dismissLoader();
      }
      this.data = result;
      //console.log(this.data)
      if (this.data.success) {
        this.util.dismissLoader();
        if (localStorage.getItem('loginDataKKart') != null) {
          this.myWishlist()
        }
        
        if (this.pageSearch == 1) {
          this.productlist = this.data.data.product
        } else {
          let arrNewRecord = this.data.data.product
          let otherWay = this.productlist.concat(arrNewRecord);
          this.productlist = otherWay;
        }

        if (this.productlist.length == 0){
          this.isProductList = false
        }else{
          this.isProductList = true
        }

        //console.log("searched product list", this.productlist, this.isProductList)
        
        this.productTotal = this.data.paging.count;
        if (this.productlist.length == this.productTotal) {
          this.infiniteScroll.disabled = true;
        }
        this.pageSearch += 1;

        if (this.productlist.length > 0) {
          for (var i = 0; i < this.productlist.length; i++) {
            //console.log("isLoadisLoad: ", this.productlist[i]["isLoad"]);
            if (this.productlist[i]["isLoad"] != true) {
              this.productlist[i]["isLoad"] = false
            }
          }
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


  onCancel(ev: any) {
    this.searchText = '';
    this.isSearch = false;
    this.pageSearch = 1;
    this.page = 1;
    this.productlist = [];
    this.getProductListData();
  }

  toCart(){
    if (localStorage.getItem('loginDataKKart') != null) {
      this.navCtrl.navigateForward('/cart')
    }else{
      this.navCtrl.navigateForward(['/login', { pushedFrom: "CartIcon" }])
    }
  }

  goBack(){
    if(this.pushedFromSubCat == "Home"){
      this.navCtrl.navigateBack('/home')
    }else if (this.pushedFromSubCat == "Category"){
      this.navCtrl.navigateBack('/product-category')
    }else if (this.pushedFromSubCat == "autoSearch"){
      this.navCtrl.navigateBack('/auto-search')
    }else{
      this.navCtrl.navigateBack('/home')
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
