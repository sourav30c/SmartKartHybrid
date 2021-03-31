import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, ActivatedRoute } from '@angular/router';
import { IonInfiniteScroll, MenuController, Events, NavController } from '@ionic/angular';
import { UtilityService } from '../api/utility.service';

@Component({
  selector: 'app-top-selling-product-list',
  templateUrl: './top-selling-product-list.page.html',
  styleUrls: ['./top-selling-product-list.page.scss'],
})
export class TopSellingProductListPage implements OnInit {
  pageDetails: any;
  data: any;
  productlist:any
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
  slugLocation: any
  pushedFrom:any
  slugProduct=""
  slugProductAny:any
  searchText = '';
  isSearch = false;
  pageSearch = 1;
  isProductList:boolean = true
  count2 = 1
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(private util: UtilityService, private menuCtrl: MenuController, public events: Events, private activeroute: ActivatedRoute, 
    private navCtrl: NavController,){
    this.events.publish('user:login')
    this.pushedFrom = this.activeroute.snapshot.paramMap.get("pushedFrom")
    //this.getProductListData()

    //console.log("pushed from", this.pushedFrom )

    if (this.pushedFrom == 'loginWishlist'){
      this.myWishlistWithoutCheck()
    }else if (this.pushedFrom == 'loginCartlist'){
      this.postDataAddtoCart(localStorage.getItem('tempListSlugCart'))
    }

  }
  ngOnInit(){
    throw new Error("Method not implemented.");
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true)
    this.pageDetails = { 'showMenu': true, 'showBack': false, 'showButtons': false, 'title': 'Product List', 'prevPage': '' };
    this.showMenu(this.pageDetails);

    this.getProductListData()
    if (localStorage.getItem('loginDataKKart') != null){
      if (this.pushedFrom != 'loginWishlist') {
        this.myWishlistWithoutCheck()
      }
      this.util.myCartlist()
    }
  }

  showMenu(pageDetails) {
    //console.log('User created!')
    this.events.publish('showMenu', pageDetails, Date.now());
  }

  getProductListData() {    
    var myData = JSON.stringify({
    });
    //console.log("Your myData: ", myData);
    //this.util.presentLoading();
    if (this.page == 1) {
      this.util.presentLoading();
    }
    this.util.getTypeDetails('sliders/todaydeal.json', myData).subscribe(result => {
      //this.util.dismissLoader();
      if (this.page == 1) {
        this.util.dismissLoader();
      }
      //console.log("Your top data: ", result);
      this.data = result;

      //console.log(this.data)
      if (this.data.success) {
        //this.productlist = this.data.data.product
        //console.log("Your list data: ", this.productlist);
        this.util.dismissLoader();
        this.productlist = this.data.data.adv.advertisement_items
        
        if (localStorage.getItem('loginDataKKart') != null){
          this.myWishlist()
        }
        

        //console.log("this.productlist" , this.productlist)

        if (this.productlist == null){
          this.isProductList = false
        }else if (this.productlist.length == 0){
          this.isProductList = false
        }else{
          this.isProductList = true
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

  loadImageProduct(i, productlist){
    productlist.product["isLoad"] = true
    //console.log('productlist:: ', productlist)
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
      console.log('Done Load Data Calling');
      event.target.complete();
      this.getProductListData();
    }, 500);
  }

  details(productListSingle){
    localStorage.setItem('singleProduct', JSON.stringify(productListSingle));
    //localStorage.setItem('singleProduct', productListSingle);
    //this.navCtrl.navigateRoot('/details')


    let navigationExtras: NavigationExtras = {
      state: {
        from: 'toplist',
        parms: productListSingle,
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
        this.wishListListsForId = this.data.data.wishlist

        //console.log("wishListListsForId final list", this.wishListListsForId)
        this.util.dismissLoader();
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

  myWishlist() {
    this.wishListCheck = []

    var myData = JSON.stringify({
    });
    //console.log("Your myData: ", myData);
    this.util.getTypeDetailsWithAuth('users/wishlist.json', myData).subscribe(result => {
      this.data = result;
      //console.log("wish list result", this.data)
      if (this.data.success) {
        this.wishlistLists = this.data.data.wishlist

        for (let i = 0; i < this.productlist.length; i++) {
          if (this.wishlistLists.length > 0) {
            for (let j = 0; j < this.wishlistLists.length; j++) {
              if (this.productlist[i].product_id == this.wishlistLists[j].product_id) {
                this.wishListCheck[i] = this.productlist[i].product_id
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
    //console.log("wishlist data check", singleproductlistslug, this.wishListCheck , i)
    let wishlistIdForDelete = ""
    if (localStorage.getItem('loginDataKKart') != null) {
      //console.log("this.wishlistLists.length ", this.wishListListsForId, Number(i + 1), this.wishListCheck)
      if (this.wishListCheck[i] == singleproductlistslug.product_id) {
        for (let k = 0; k < this.wishListListsForId.length; k++) {
          //console.log("delete ids", singleproductlistslug.id, this.wishListListsForId[k].product_id, i, k, this.wishListListsForId[k].id)
          if (this.wishListListsForId[k].product_id == singleproductlistslug.product_id) {
            wishlistIdForDelete = this.wishListListsForId[k].id
            break
          } else {
            continue
          }
        }
        //console.log("xxxxxx", wishlistIdForDelete)

        this.util.deleteFromWishlist(wishlistIdForDelete)
        this.wishListCheck.splice(i, 1, 0)
      } else if (this.wishListCheck[i] == false) {
        this.wishListCheck.splice(i, 1, singleproductlistslug.product_id);
        this.util.addToWishlist(singleproductlistslug.product.slug)
      }

      setTimeout(() => {
        this.myWishlistWithoutCheck()
      }, 2000);


    } else {
      localStorage.setItem("tempListSlug", JSON.stringify(singleproductlistslug))
      localStorage.setItem("tempListLocation", i)
      this.navCtrl.navigateForward(['/login', { pushedFrom: "topproductListWishlist" }])
    }
    this.util.dismissLoader()
  }

  addToCart(singleProduct) {
    //console.log('tempListSlugCart', singleProduct.product.slug)
    localStorage.setItem('tempListSlugCart', singleProduct.product.slug)
    if (localStorage.getItem('loginDataKKart') != null) {
      this.postDataAddtoCart(singleProduct.product.slug)
    } else {
      this.navCtrl.navigateForward(['/login', { pushedFrom: "topproductList" }])
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
        this.util.showToast(this.data.data);
        this.util.myCartlist()
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
