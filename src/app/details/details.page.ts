import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilityService } from '../api/utility.service';
import { Events, AlertController, NavController, ModalController, MenuController, AngularDelegate , Platform} from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { BackButtonEmitter } from '@ionic/angular/dist/providers/platform';
import { JsonPipe } from '@angular/common';
import { IonContent } from '@ionic/angular';
import { timeStamp } from 'console';
//import { Deeplinks } from '@ionic-native/deeplinks/ngx'
//import { Deeplinks } from '@ionic-native/deeplinks'
import { AboutPage } from '../about/about.page';
import { ProductCategoryPage } from '../product-category/product-category.page';
//import { DeeplinksOriginal } from '@ionic-native/deeplinks';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  productDetails: any
  productDetailsFromApi: any
  productSpecification: any;
  data: any
  pageDetails: any
  relatedProduct: any
  reviewListData: any
  discount_percentage: any
  rating_count_details: any
  ratingCount = 0
  ratingStar: Number
  reviewCount = 0
  isDelivery: Boolean
  productImage = []
  name = ''
  offer_price = ''
  actual_price = ''
  delivery_charge = ''
  introduction = ''
  slugProduct = ''
  totalReview = ''
  pushedFrom = ''
  previousPage = ''
  productPhoto = ''
  pincode = ''
  vendorId = ''
  isInStock: boolean
  subCategoryId = ""
  wishlistLists; any
  wishListListsForId: any
  wishListCheck = []
  isProductDetails = false
  slugLocation: any

  quantity = "1"
  quantityCheck = "0"

  total_quantity = ""
  arrVariationFilter = []
  arrColorName = []
  arrVariationFilter2 = []
  arrColorName2 = []
  varposition = 0
  arrfilterType1 = []
  arrfilterType2 = []
  isClick1: boolean=false;
  isClick2: boolean=false;
  buttonClicked1 = 0
  buttonClicked2 = 0
  productTag = ""
  @ViewChild(IonContent) content: IonContent;
  constructor(private util: UtilityService, public alertController: AlertController,
    public events: Events, private navCtrl: NavController, private route: Router, 
    public modalController: ModalController,
    private activeroute: ActivatedRoute, private menuCtrl: MenuController,
    //private deeplinks: DeeplinksOriginal,
    protected deeplinks: Deeplinks, protected platform: Platform
    ) {
    this.pushedFrom = this.activeroute.snapshot.paramMap.get("pushedFrom")
    if (this.pushedFrom == 'loginCart') {
      this.productDetails = JSON.parse(localStorage.getItem('singleProduct'))
      this.slugProduct = this.productDetails.slug
      this.postDataAddtoCart()
    } else if (this.pushedFrom == 'loginWishlist') {
      this.productDetails = JSON.parse(localStorage.getItem('singleProduct'))
      this.slugProduct = this.productDetails.slug
      this.addToWishlist()
    } else {
      if (this.route.getCurrentNavigation().extras.state) {
        this.pushedFrom = this.route.getCurrentNavigation().extras.state.from;
        this.productDetails = this.route.getCurrentNavigation().extras.state.parms ? this.route.getCurrentNavigation().extras.state.parms : ""
        this.subCategoryId = this.route.getCurrentNavigation().extras.state.parms2 ? this.route.getCurrentNavigation().extras.state.parms2 : ""

        //console.log("pdfffffff", this.productDetails, this.pushedFrom)

        if (this.pushedFrom == 'list') {
          this.slugProduct = this.productDetails.slug
          //this.vendorId = this.productDetails.user.vendor_id
        } else if (this.pushedFrom == 'Home') {
          this.slugProduct = this.productDetails.slug
          //this.vendorId = this.productDetails.user.vendor_id
        } else if (this.pushedFrom == 'wishlist') {
          this.slugProduct = this.productDetails.product.slug
          //this.vendorId = this.productDetails.vendor_id
        } else if (this.pushedFrom == 'toplist') {
          this.slugProduct = this.productDetails.slug
          //this.vendorId = this.productDetails.vendor_id
        } else if (this.pushedFrom == 'cartlist') {
          this.slugProduct = this.productDetails.Products.slug
        } else if (this.pushedFrom == 'add-review') {
          this.slugProduct = this.productDetails
        } else if (this.pushedFrom == 'autoSearch') {
          this.slugProduct = this.productDetails.slug
        }
        if (this.pushedFrom == 'loginRelatedWishlist') {
          //console.log("wishlist callingt", localStorage.getItem('tempListSlug'))
          this.slugProduct = localStorage.getItem('tempListSlug')
          this.slugLocation = localStorage.getItem('tempListLocation')
          this.addToWishlist2(this.slugProduct, this.slugLocation)
        }
      }
    }
    if (this.pushedFrom == 'loginRelatedCart') {
      this.postDataAddtoCart2(localStorage.getItem('tempListSlugCart'))
    }

    if (localStorage.getItem('loginDataKKart') != null) {
      this.vendorId = JSON.parse(localStorage.getItem('loginDataKKart')).id
    } else {
      this.vendorId = ""
    }

    console.log("pushed from check", this.pushedFrom)
    //console.log("product details", this.productDetails, this.slugProduct ,this.vendorId)

  }

  ionViewWillEnter() {
    //console.log("viewwillentercalling")
    //this.previousPage = '/home'
    this.menuCtrl.enable(false)

    //this.pageDetails = { 'showMenu': false, 'showBack': true, 'showButtons': false, 'title': 'Details', 'prevPage': 'list' };
    //this.showMenu(this.pageDetails);

    //this.productDetails = this.route.getCurrentNavigation().extras.state.parms;
    //console.log("product details in view will enter", this.productDetails)

    this.getProductDetailsData()

    //console.log("localStorage.getItem('loginDataKKart')", localStorage.getItem('loginDataKKart'))
    if (localStorage.getItem('loginDataKKart') != null) {
      this.util.myCartlist()
      this.myWishlistWithoutCheck()
    }
  }

  showMenu(pageDetails) {
    //console.log('User created!')
    this.events.publish('showMenu', pageDetails, Date.now());
  }

  ngOnInit() {
    //this.getProductDetailsData()
  }



  isClicked(){
   //return this.isClick;
  }
  
  // onClick(){
  //  this.isClick=!this.isClick;
  // }

sharePageDeeplink(){
  
}


  changeProduct(i) {
    //console.log(i)
    this.buttonClicked1 = i
    this.isClick1=!this.isClick1;
    this.varposition = i
    this.slugProduct = this.arrVariationFilter[i].slug

    this.getProductDetailsData()
  }

  changeProduct2(i) {
    this.buttonClicked2 = i
    this.isClick2=!this.isClick2;
    //console.log(i)
    this.slugProduct = this.arrVariationFilter2[0][i].slug
    this.getProductDetailsData()
  }

  getProductDetailsData() {
    var myData = JSON.stringify({
      slug: this.slugProduct ? this.slugProduct : "renew-honor-4a-smartphone-champagne-gold-8gb-internal-memory-2gb-ram-screen-size-5-inches-2200-mah-battery"
    });
    //console.log("Your myData: ", myData);
    //this.util.presentLoading3();
    this.util.presentLoading();
    this.util.getTypeDetails('products/productDetails.json', myData).subscribe(result => {
      this.util.dismissLoader();
      //console.log("Your data: ", result);
      this.data = result;
      this.arrColorName = []
      this.arrVariationFilter = []
      this.arrVariationFilter2 = []
      this.arrColorName2 = []
      this.productImage = []
      console.log("ProductDetails", this.data)
      if (this.data.success) {
        this.isProductDetails = true
        this.productDetailsFromApi = this.data.data.product
        this.total_quantity = this.productDetailsFromApi.total_quantity
        this.reviewListData = this.data.data.review_list
        this.rating_count_details = this.data.data.count_rating_1_2_3_4_5

        //console.log("this.productDetailsFromApi.discount_percentage" , this.productDetailsFromApi.discount_percentage)

        if (this.productDetailsFromApi.discount_percentage != 'inf'){
          this.discount_percentage = this.productDetailsFromApi.discount_percentage
        }else{
          this.discount_percentage = 0
        }
        
        if (this.productDetailsFromApi.product_tag != null){
          this.productTag = this.productDetailsFromApi.product_tag
        }else{
          this.productTag = ""
        }
        
        
        this.name = this.productDetailsFromApi.name
        this.productImage.push(this.productDetailsFromApi.photo)
        this.quantityCheck = this.productDetailsFromApi.minimum_order

        if (this.data.data.product.single != null) {
          this.arrVariationFilter = this.data.data.product.single
          //console.log("this.arrVariationFilter", this.arrVariationFilter)
          for (let i = 0; i < this.arrVariationFilter.length; i++) {
            this.arrColorName.push(this.arrVariationFilter[i].filter_option.name)
            this.arrfilterType1.push(this.arrVariationFilter[i].filter.name)
          }

        }

        //console.log("this.arrVariationFilter", this.arrVariationFilter)

        if (this.arrVariationFilter.length != 0 && this.arrVariationFilter[this.varposition].double != null) {
            this.arrVariationFilter2.push(this.arrVariationFilter[this.varposition].double)
        }

        //console.log("this.arrVariationFilter2", this.arrVariationFilter2)

        if (this.arrVariationFilter2.length != 0) {

          //console.log("this.arrVariationFilter2 varposition",this.varposition, this.arrVariationFilter2[0])

          for (let i = 0; i < this.arrVariationFilter2[0].length; i++) {
            //console.log("this.arrVariationFilter", this.arrVariationFilter2[0][i].filter_option)
            this.arrColorName2.push(this.arrVariationFilter2[0][i].filter_option_news.name)
            this.arrfilterType2.push(this.arrVariationFilter2[0][i].filter_news.name)
          }
        }


        
        

        for (let i = 0; i < this.productDetailsFromApi.product_images.length; i++) {
          //console.log("i",this.productDetailsFromApi.product_images[i])
          this.productImage.push(this.productDetailsFromApi.product_images[i].image)
        }

        //this.productImage.push(this.productDetailsFromApi.product_images)

        //this.productImage = this.productDetailsFromApi.product_images

        //console.log("Product Image", this.productImage , this.productDetailsFromApi.product_images.length)
        this.offer_price = this.productDetailsFromApi.offer_price
        this.actual_price = this.productDetailsFromApi.actual_price ? this.productDetailsFromApi.actual_price : ''
        this.delivery_charge = this.productDetailsFromApi.delivery_charge
        this.relatedProduct = this.data.data.related_products
        this.introduction = this.productDetailsFromApi.introduction
        this.productSpecification = this.data.data.product_specification
        //this.totalReview = this.data.data.total_review
        this.productPhoto = this.productDetailsFromApi.photo
        if (this.productDetailsFromApi.in_stock == false || this.productDetailsFromApi.total_quantity == '0') {
          this.isInStock = false
        } else {
          this.isInStock = true
        }
        //this.isInStock = this.productDetailsFromApi.in_stock

        //console.log("this.rating_count_details.length", this.rating_count_details.length)

        if (this.rating_count_details.length > 0) {
          this.ratingCount = this.rating_count_details.length
          let sum = 0
          for (let i = 0; i < this.rating_count_details.length; i++) {
            sum = sum + Number(this.rating_count_details[i].rating)
          }
          this.ratingStar = Number(sum) / Number(this.ratingCount)
        } else {
          this.ratingCount = 0
          this.ratingStar = 0
        }

        if (this.reviewListData.length > 0) {
          this.reviewCount = this.reviewListData.length
        } else {
          this.reviewCount = 0
        }

        //console.log("this.ratingStar",this.ratingStar)

        if (localStorage.getItem('loginDataKKart') != null) {
          this.myWishlist()
        }
        //console.log("ratiing check", this.ratingCount , sum, this.ratingStar)
      } else {
        //this.util.showToast(this.data.message);
      }
    },
      error => {
        this.util.dismissLoader();
        this.util.showToast('Product is not available in server. Please try again.');
      }
    );

    //this.util.dismissLoader();
  }

  loadImageSlider(i) {
    this.productImage[i]["isLoad"] = true
  }

  checkPincode() {
    // if (localStorage.getItem('loginDataKKart') == null) {
    //   this.util.showToast('Please login first to check your pincode availability');
    // } else if (this.pincode == '') {
    //   this.util.showToast('Please enter your pincode');
    // } else {
    //   this.checkPincodePostData()
    // }
    this.sharePageDeeplink()
  }

  checkPincodePostData() {
    var myData = JSON.stringify({
      pincode: this.pincode,
      vendor_id: this.vendorId
    });
    //console.log("Your myData: ", myData);
    this.util.presentLoading3();
    this.util.getTypeDetails('products/checkpin.json', myData).subscribe(result => {
      this.util.dismissLoader();
      //console.log("Your data: ", result);
      this.data = result;

      //console.log(this.data)
      if (this.data.success) {
        this.isDelivery = true
      } else {
        this.isDelivery = false
        this.util.showToast(this.data.message);
      }
    },
      error => {
        this.util.dismissLoader();
        this.util.showToast('Server error occured. Try again.');
      }
    );
  }

  addToWishlist() {
    if (localStorage.getItem('loginDataKKart') != null) {
      this.util.addToWishlist(this.productDetails.slug)
    } else {
      this.navCtrl.navigateForward(['/login', { pushedFrom: "productDetailsWishlist" }])
    }
  }

  relateProductToDetails(singleRelatedProduct) {
    //console.log(singleRelatedProduct)
    this.slugProduct = singleRelatedProduct.product.slug
    setTimeout(() => {
      this.getProductDetailsData();
      this.content.scrollToTop(400);
    }, 1000);
  }

  addToCart() {
    if (localStorage.getItem('loginDataKKart') != null) {
      this.postDataAddtoCart()
    } else {
      this.navCtrl.navigateForward(['/login', { pushedFrom: "productDetailsCart" }])
    }
  }

  buyNow() {
    if (localStorage.getItem('loginDataKKart') != null) {
      this.postDataAddtoCartBuyNow()
    } else {
      this.navCtrl.navigateForward(['/login', { pushedFrom: "productDetailsBuy" }])
    }
  }

  postDataAddtoCart() {
    //console.log("quantity Check", this.quantityCheck)

    if (Number(this.quantity) >= Number(this.quantityCheck)) {
      var myData = JSON.stringify({
        slug: this.slugProduct,
        quentity: this.quantity
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
    } else {
      this.util.showToast("Please purchase minimum quantity-" + this.quantityCheck);
    }

  }

  postDataAddtoCartBuyNow() {
    var myData = JSON.stringify({
      slug: this.slugProduct,
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
        //this.util.showToast(this.data.data);
        this.navCtrl.navigateForward('/cart')
      } else {
        //this.util.showToast(this.data.data);
        //if (this.util.data == "Already in your cart."){
        this.navCtrl.navigateForward('/cart')
        //}
      }
    },
      error => {
        this.util.dismissLoader();
        this.util.showToast('Server error occured. Try again.');
      }
    );

    this.util.dismissLoader();
  }

  toRatingPage() {
    let navigationExtras: NavigationExtras = {
      state: {
        from: 'details',
        parms: this.reviewListData,
        params2: this.slugProduct,
        params3: this.vendorId
      }
    };
    if (localStorage.getItem('loginDataKKart') == null) {
      localStorage.setItem('reviewProdDetails', JSON.stringify(navigationExtras));
    }
    this.navCtrl.navigateForward('/review-list', navigationExtras);
  }

  goBack() {
    //console.log(JSON.parse(localStorage.getItem('loginDataKKart')))
    this.events.publish('user:login')
    if (this.pushedFrom == "list") {
      //this.navCtrl.navigateBack('/list')
      this.navCtrl.navigateBack(['/list', { subCat: this.subCategoryId }])
    } else if (this.pushedFrom == "toplist") {
      this.navCtrl.navigateBack('/top-selling-product-list')
    } else if (this.pushedFrom == "wishlist") {
      this.navCtrl.navigateBack('/wishlist')
    } else if (this.pushedFrom == "cartlist") {
      this.navCtrl.navigateBack('/cart')
    } else if (this.pushedFrom == "Home") {
      this.navCtrl.navigateBack('/home')
    } else if (this.pushedFrom == "autoSearch") {
      //this.navCtrl.navigateBack('/auto-search')
      this.navCtrl.navigateBack('/home')
    } else {
      this.navCtrl.navigateBack('/list')
    }
  }

  toCart() {
    if (localStorage.getItem('loginDataKKart') != null) {
      this.navCtrl.navigateForward('/cart')
    } else {
      this.navCtrl.navigateForward(['/login', { pushedFrom: "CartIcon" }])
    }
  }


  /*Related product AddToCart n Wishlist work*/
  myWishlist() {
    this.wishListCheck = []

    var myData = JSON.stringify({
    });
    this.util.getTypeDetailsWithAuth('users/wishlist.json', myData).subscribe(result => {
      this.data = result;
      //console.log("wish list result", this.data)
      if (this.data.success) {
        this.wishlistLists = this.data.data.wishlist

        for (let i = 0; i < this.relatedProduct.length; i++) {
          if (this.wishlistLists.length > 0) {
            for (let j = 0; j < this.wishlistLists.length; j++) {
              if (this.relatedProduct[i].product_id == this.wishlistLists[j].product_id) {
                this.wishListCheck[i] = this.relatedProduct[i].product_id
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

  addToWishlist2(singleproductlistslug, i) {
    //console.log("wishlist data check", singleproductlistslug, this.wishListCheck, i)
    let wishlistIdForDelete = ""
    localStorage.setItem("tempListSlug", singleproductlistslug)
    localStorage.setItem("tempListLocation", i)
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
      this.navCtrl.navigateForward(['/login', { pushedFrom: "detailsRelatedWishlist" }])
    }
    this.util.dismissLoader()
  }

  addToCart2(singleProduct) {
    //console.log('tempListSlugCart', singleProduct.product.slug)
    localStorage.setItem('tempListSlugCart', singleProduct.product.slug)
    if (localStorage.getItem('loginDataKKart') != null) {
      this.postDataAddtoCart2(singleProduct.product.slug)
    } else {
      this.navCtrl.navigateForward(['/login', { pushedFrom: "detailsRelatedCart" }])
    }
  }

  postDataAddtoCart2(singleProductSlug) {
    //console.log("To Add to Cart", singleProductSlug)
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
