import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../api/utility.service';
import { AlertController, Events, NavController, ModalController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx'

@Component({
  selector: 'app-payment-mode',
  templateUrl: './payment-mode.page.html',
  styleUrls: ['./payment-mode.page.scss'],
})
export class PaymentModePage implements OnInit {
  totalCost = ""
  subtotalCost = ""
  cartInfoId = ""
  iscodLimit: boolean
  isCode = "2"
  userToken: any
  data: any
  codLimitValue = 0
  delivryCharge = 0
  datares = 0
  idTime: Number
  countYes:Number = 0
  constructor(private util: UtilityService, public alertController: AlertController,
    public events: Events, private navCtrl: NavController, private route: Router,
    public modalController: ModalController, private activeroute: ActivatedRoute,
    private menuCtrl: MenuController, private iab: InAppBrowser) {

    this.totalCost = this.route.getCurrentNavigation().extras.state.parms
    this.subtotalCost = this.route.getCurrentNavigation().extras.state.parms
    this.cartInfoId = this.route.getCurrentNavigation().extras.state.parms1

    this.codLimitValue = Number(localStorage.getItem('codLimit'))
    this.delivryCharge = Number(localStorage.getItem('delivryCharge'))

    console.log("cod limit comparison", this.totalCost, this.codLimitValue)
    localStorage.setItem('this.datares', "0");
    localStorage.setItem('countYes', String(this.countYes));

    if (Number(this.totalCost) <= Number(this.codLimitValue)) {
      this.iscodLimit = true
    } else {
      this.iscodLimit = false
    }


    if (localStorage.getItem('userToken') != null) {
      this.userToken = JSON.parse(localStorage.getItem('userToken'))
      console.log("user token", this.userToken)
    } else {
      this.util.showToast('No User Token fetched. Try again.');
    }

  }

  ngOnInit() {
  }

  paymentMode(ev) {
    if (ev.detail.value == "1") {
      this.isCode = "1"
      this.totalCost = String(Number(this.subtotalCost) + this.delivryCharge)
    } else {
      this.isCode = "2"
      this.totalCost = this.subtotalCost
    }
    console.log("radio ev", ev.detail.value, this.isCode)
  }

  toPayment() {
    if (this.isCode == "1") {
      this.postDataCod()
    } else if (this.isCode == "2") {
      this.postDataOnline()
      //this.showFILE('https://www.smartkart.online/api/carts/ccavenuePayment/'+this.userToken)
    }
  }

  showFILE(url) {
    const browser = this.iab.create(url, '_blank', 'location=yes,toolbar=yes');
    //console.log("browser1", browser, url)
   // console.log('localstorage check:: ', localStorage.getItem('this.datares'));
    //console.log('localstorage check 22:: ', localStorage.getItem('countYes'), this.countYes);
    // browser.on('loadstop').subscribe(event => {
    //   console.log("loadstop -->", event);
    //   this.getStateSecondWindow(browser)
    //   //var id = setInterval(() => this.getStateSecondWindow(browser), 5000);

    //   //console.log("id = setInterval", id)
    //   //clearInterval(id)
    // }, err => {
    //   console.log("InAppbrowser loadstop Event Error: " + err);
    // });


    browser.on('loadstop').subscribe(function (event) {
      // this.countYes = Number(this.countYes) + 1
      // console.log('countYes', this.countYes);
      // localStorage.setItem('countYes', String(this.countYes));

      browser.executeScript({ code: "localStorage.getItem('isCloseSelf')" }).then((cookie) => {
        //console.log("cookie", cookie, localStorage.getItem('countYes'));

        // if (Number(localStorage.getItem('countYes')) != 1 && cookie == "yes") {
        //   localStorage.setItem('this.datares', "1");
        // } else {
        //   localStorage.setItem('this.datares', "0");
        // }

        if (cookie == "yes") {
          localStorage.setItem('this.datares', "1");
        } else {
          localStorage.setItem('this.datares', "0");
        }

      });
    });


    browser.on('loaderror').subscribe(event => {
      console.log("loaderror -->", event);
    }, err => {
      console.log("InAppbrowser loaderror Event Error: " + err);
    });

    browser.on('exit').subscribe(event => {
      console.log("exit -->", event);

      console.log('browser closed on exit localstorage:: ', localStorage.getItem('this.datares'));
      this.datares = Number(localStorage.getItem('this.datares'))
      console.log('browser closed on exit:: ', this.datares);

      if (this.datares == 1) {
        this.navCtrl.navigateForward('/thank-you')
      } else {
        //this.navCtrl.pop()
      }

    }, err => {
      console.log("InAppbrowser exit Event Error: " + err);
    });


    browser.show();
  }

  // getStateSecondWindow(browser) {
  //   console.log('call now');
  //   this.countYes = this.countYes + 1
  //   console.log('countYes', this.countYes);

  //   // browser.executeScript({ code: "localStorage.getItem('isCloseSelf')" }).then((data) => {
  //   //   //this.eventCheck()

  //   //   console.log("data ==" + data)
  //   //   if (data == 'yes') {
  //   //     console.log("transaction yes1", this.datares)
  //   //     this.datares = 1
  //   //     //console.log("transaction yes2", this.datares)
  //   //     //browser.close()
  //   //     // browser.on('exit').subscribe(() => {
  //   //     //   console.log('browser closed');
  //   //     //   this.navCtrl.navigateForward('/thank-you')

  //   //     // }, err => {
  //   //     //   console.error(err);
  //   //     // });
  //   //     // console.log('browser closed not executing');

  //   //     browser.close();
  //   //     this.navCtrl.navigateForward('/thank-you')
  //   //     //browser.close();
  //   //   } else if (data == 'failed') {
  //   //     this.util.showToast('Payment is unsuccessful. Please Try again.');
  //   //     console.log('transaction failed')
  //   //    // this.datares = 0
  //   //     browser.close();
  //   //     this.navCtrl.navigateForward('/cart')
  //   //   } else {
  //   //     // this.util.showToast('Payment is unsuccessful. Please Try again.');
  //   //     // console.log('transaction unsuccessful')
  //   //     // this.datares = 0
  //   //     // browser.close();
  //   //     // this.navCtrl.navigateForward('/cart')
  //   //   }
  //   // })

  //   browser.executeScript(
  //     {
  //       code: "localStorage.getItem('isCloseSelf')" //"localStorage.getItem('isCloseSelf')"
  //     },
  //     function (data) {
  //       console.log("data ==", data, this.countYes)
  //       if (this.countYes != 1 && data == 'yes') {
  //         localStorage.setItem('this.datares', "1");
  //       } else {
  //         localStorage.setItem('this.datares', "0");
  //       }
  //       console.log("localStorage", localStorage.getItem('this.datares'))
  //       // this.eventCheck()
  //       //this.events.publish('showMenuccv');
  //       //console.log("data.length ==", data.length)
  //       //alert(1)
  //       // console.log("transaction yes1")
  //       // this.datares = 1
  //       // //alert(2)
  //       // console.log("transaction yes2")
  //       //alert(this.datares)
  //       //console.log("transaction yes2" + this.datares)
  //       // console.log(this.datares)
  //       if (data == 'yes') {
  //         //console.log("transaction yes1", this.datares)
  //         //localStorage.setItem('this.datares', "1");
  //         //this.datares = 1
  //         //console.log("transaction yes2", this.datares)
  //         //browser.close()
  //         // browser.on('exit').subscribe(() => {
  //         //   console.log('browser closed');
  //         //   this.navCtrl.navigateForward('/thank-you')

  //         // }, err => {
  //         //   console.error(err);
  //         // });
  //         // console.log('browser closed not executing');

  //         //browser.close();
  //         //this.navCtrl.navigateForward('/thank-you')
  //         //browser.close();
  //       } else if (data == 'failed') {
  //         this.util.showToast('Payment is unsuccessful. Please Try again.');
  //         console.log('transaction failed')
  //         this.datares = 0
  //         browser.close();
  //         this.navCtrl.navigateForward('/cart')
  //       } else {
  //         this.util.showToast('Payment is unsuccessful. Please Try again.');
  //         console.log('transaction unsuccessful')
  //         this.datares = 0
  //         browser.close();
  //         this.navCtrl.navigateForward('/cart')
  //       }

  //     }

  //   );

  // }

  eventCheck() {
    console.log('user loginnnnnn');
    this.datares = 1
    console.log('user loginnnnnn this.datares', this.datares);
  }

  postDataOnline() {
    var myData = JSON.stringify({
      info_id: String(this.cartInfoId),
      delivary_mode: "1"
    });
    console.log("Your myData: ", myData); //carts/freePayment.json
    this.util.presentLoading();
    this.util.getTypeDetailsWithAuth('carts/setDelivaryMode.json', myData).subscribe(result => {
      this.util.dismissLoader();
      console.log("Your data: ", result);
      this.data = result;
      if (this.data.success) {
        this.showFILE('https://www.smartkart.online/api/carts/ccavenuePayment/' + this.userToken)
        //this.showFILE('https://www.google.co.in')
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

  postDataCod() {
    var myData = JSON.stringify({
      info_id: String(this.cartInfoId),
      delivary_mode: "2"
    });
    console.log("Your myData: ", myData); //carts/freePayment.json
    this.util.presentLoading();
    this.util.getTypeDetailsWithAuth('carts/setDelivaryMode.json', myData).subscribe(result => {
      this.util.dismissLoader();
      console.log("Your data: ", result);
      this.data = result;
      if (this.data.success) {
        //this.util.showAlert("Thank You", this.data.data)
        //this.showFILE('https://www.smartkart.online/api/carts/ccavenuePayment/'+this.userToken)
        this.postDataCodPost()
        //this.navCtrl.navigateForward('/thank-you')
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

  postDataCodPost() {
    var myData = JSON.stringify({
    });
    console.log("Your myData: ", myData);
    this.util.presentLoading();
    this.util.getTypeDetailsWithAuth('carts/freePayment.json', myData).subscribe(result => {
      this.util.dismissLoader();
      console.log("Your data: ", result);
      this.data = result;
      if (this.data.success) {
        //this.util.showAlert("Thank You", this.data.data)
        this.navCtrl.navigateForward('/thank-you')
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