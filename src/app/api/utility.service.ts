import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { LoadingController, AlertController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  data:any
  userToken:any
  codLimit = ""
  public baseURL: string = "https://www.smartkart.online/api/" ; //"https://www.kkcarts.com/api/";

  //"https://www.smart.analyticsmind.in/api/"
  public loader;
  isLoading = false;
  cartList:any
  cartCount:Number = 0
  constructor(public http: Http, private loadingController: LoadingController, private alertCtrl: AlertController, public toastCtrl: ToastController) {
    //this.userdata = JSON.parse(localStorage.getItem('loginDataKKart'))
    //console.log("this.userdata",this.userdata)
  }

  async presentLoading() {
    this.loader = await this.loadingController.create({
      message: 'Please wait...',
      //duration: 2000
    });
    await this.loader.present();

    // const { role, data } = await loading.onDidDismiss();

    // console.log('Loading dismissed!');
  }

  async presentLoading3() {
    this.isLoading = true;
    return await this.loadingController.create({
      duration: 200,
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }


  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

  // presentLoader() {
  //   this.loader = this.loading.create({
  //     message: 'Loading...',
  //   });
  //   this.loader.present();
  // }

  dismissLoader() {
    this.loader.dismiss();
  }

  showAlert($title, $subTitle) {
    let alert = this.alertCtrl.create({
      header: $title,
      subHeader: $subTitle,
      buttons: ['OK']
    }).then(alert => alert.present());;
    //alert.present();
  }

  /* toast */

  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: "bottom"
    }).then(alert => alert.present());;

    // toast.present(toast);
  }

  showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: 'Your files were successfully saved',
      showCloseButton: true,
      closeButtonText: 'Ok'
    }).then(alert => alert.present());;
    //toast.present();
  }

  showLongToast() {
    let toast = this.toastCtrl.create({
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptatibus quibusdam eum nihil optio, ullam accusamus magni, nobis suscipit reprehenderit, sequi quam amet impedit. Accusamus dolorem voluptates laborum dolor obcaecati.',
      duration: 2000,
    }).then(alert => alert.present());;
    //toast.present();
  }

  /* toast */


  /*-----post data-----*/

  getTypeDetails($apiFunc, $postDate) {
    let favoritesURL = this.baseURL + $apiFunc;
    console.log("Api heating",this.baseURL + $apiFunc);
    let myData = $postDate;

    let headers = new Headers({ 
      'Content-Type': 'application/json',
      //'authorization': this.userdata.token, 
    });
    //console.log("Header is",headers)

    let options = new RequestOptions({ headers: headers });

    return this.http.post(favoritesURL, myData, options)
      //.pipe (.map(res => res.json()))
      .map(res => res.json())
      .catch(this.handleError);
  }

  /*-----post data-----*/

  getTypeDetailsWithAuth($apiFunc, $postDate) {
    let favoritesURL = this.baseURL + $apiFunc;
    console.log("Api heating",this.baseURL + $apiFunc);
    let myData = $postDate;
    if (localStorage.getItem('userToken') != null) {
      this.userToken = JSON.parse(localStorage.getItem('userToken'))
      //console.log(this.userToken)
    }
    
    let headers = new Headers({ 
      'Content-Type': 'application/json',
      'authorization': this.userToken, 
    });
    //console.log("Header is",headers)

    let options = new RequestOptions({ headers: headers });

    return this.http.post(favoritesURL, myData, options)
      //.pipe (.map(res => res.json()))
      .map(res => res.json())
      .catch(this.handleError);
  }
  /*-----get data-----*/
  
  getTypeDetailsGet($apiFunc, $postDate) {
    let favoritesURL = this.baseURL + $apiFunc;
    console.log("Api heating",this.baseURL + $apiFunc);
    let myData = $postDate;

    let headers = new Headers({ 
      'Content-Type': 'application/json',
    });
    //console.log("Header is",headers)
    let options = new RequestOptions({ headers: headers });

    return this.http.get(favoritesURL,options)
       .map(res => res.json())
       .catch(this.handleError);
  }

  handleError(error) {
    console.error(error);
    this.dismissLoader();
    return Observable.throw(error.json().error || 'Server error');
  }

  /*-----wishlist data-----*/

  addToWishlist(productSlug){
    //console.log("product slug", productSlug)
    var myData = JSON.stringify({
      slug:productSlug
    });
    //console.log("Your myData: ", myData);
    this.presentLoading();
    this.getTypeDetailsWithAuth('users/addtowishlist.json', myData).subscribe(result => {
      this.dismissLoader();
      //console.log("Your data: ", result);
      this.data = result;

      //console.log(this.data)
      if (this.data.success) {
        this.showToast(this.data.data.status);
      } else {
        this.showToast(this.data.message);
      }
    },
      error => {
        this.dismissLoader();
        this.showToast('Server error occured. Try again.');
      }
    );
  }

  deleteFromWishlist(singleWishlistId) {
    //console.log("singleWishlistId", singleWishlistId)
    var myData = JSON.stringify({
      id: singleWishlistId
    });
    //console.log("Your delete wishlist myData: ", myData);
    this.presentLoading();
    this.getTypeDetailsWithAuth('users/wishlistdelete.json', myData).subscribe(result => {
      this.dismissLoader();
      //console.log("Your data: ", result);
      this.data = result;
      if (this.data.success) {
        this.showToast(this.data.data.wishlist);
      } else {
        this.showToast(this.data.message);
      }
    },
      error => {
        this.dismissLoader();
        this.showToast('Server error occured. Try again.');
      }
    );
  }

  myCartlist() {
    var myData = JSON.stringify({
    });
    //console.log("Your myData: ", myData);
    //this.presentLoading();
    this.getTypeDetailsWithAuth('carts/getcartitems.json', myData).subscribe(result => {
      //this.dismissLoader();
      //console.log("Your Cart data: ", result);
      this.data = result;

      if (this.data.success) {
        this.cartList = this.data.data
        if (this.cartList != "no data found"){
          this.cartCount = this.cartList.length
        }else{
          this.cartCount = 0
        }
        
        //console.log("this.cartList util",this.cartList,  this.cartList.length)
        
        //this.dismissLoader()

      } else {
        this.showToast(this.data.message);
      }
    },
      error => {
        //this.dismissLoader();
        this.showToast('Server error occured. Try again.');
      }
    );
  }




}
