import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../api/utility.service';
import { AlertController, Events, NavController, ModalController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-return-details',
  templateUrl: './return-details.page.html',
  styleUrls: ['./return-details.page.scss'],
})
export class ReturnDetailsPage implements OnInit {
  orderDetails: any
  orderProductDetails: any
  orderProductPosition = 0
  accName = ""
  bankName = ""
  accNo = ""
  ifscCode = ""
  branchName = ""
  returnStatus = ""
  returnReason = ""
  isReturnPlace:Boolean = false
  data: any
  constructor(private util: UtilityService, public alertController: AlertController,
    public events: Events, private navCtrl: NavController, private route: Router, public modalController: ModalController,
    private activeroute: ActivatedRoute, private menuCtrl: MenuController,) {
    this.orderDetails = this.route.getCurrentNavigation().extras.state.parms;
    this.orderProductPosition = this.route.getCurrentNavigation().extras.state.params2;
    this.orderProductDetails = this.orderDetails.invoice_items[this.orderProductPosition]
    this.returnStatus = this.orderDetails.invoice_items[0].return_status
    //this.returnStatus = "2"
    console.log("this.orderDetails", this.orderDetails)
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false)
  }

  submitReturn() {
    if (this.returnReason == '') {
      this.util.showToast('Please mention the reason for return');
    } else {
      this.returnOrderPost()
    }
  }

  returnOrderPost() {
    var myData = JSON.stringify({
      id: this.orderProductDetails.id,
      return_reason: this.returnReason
    });
    this.util.presentLoading()
    console.log("Your return request myData: ", myData);
    this.util.getTypeDetailsWithAuth('users/returnorder.json', myData).subscribe(result => {
      this.util.dismissLoader()
      console.log("Your data: ", result);
      this.data = result;
      if (this.data.success) {
        this.returnStatus = this.data.data.status
        this.isReturnPlace = true
        this.navCtrl.navigateForward('/order-list');
        //this.bankDetailsSubmit()
      } else {
        this.util.showAlert('Error!', this.data.status ? this.data.status : "Please try again later");
      }
    },
      error => {
        this.util.dismissLoader();
        this.util.showAlert('Error!', 'Server error occured. Try again.');
      }
    );
  }

  submitBankDetails() { //return_status hobe 2 then customer tar bank details debe
    if (this.accName == '') {
      this.util.showToast('Please enter your account name');
    } else if (this.bankName == '') {
      this.util.showToast('Please enter your bank name');
    } else if (this.accNo == '') {
      this.util.showToast('Please enter account no');
    } else if (this.ifscCode == '') {
      this.util.showToast('Please enter Ifsc code');
    } else if (this.branchName == '') {
      this.util.showToast('Please enter branch name');
    } else {
      this.bankDetailsSubmit()
    }
  }

  bankDetailsSubmit() {
    var myData = JSON.stringify({
      id: this.orderDetails.id,
      account_name: this.accName,
      bank_name: this.bankName,
      account_no: this.accNo,
      ifsc_code: this.ifscCode,
      branch_name: this.branchName
    });
    this.util.presentLoading()
    console.log("Your bankDetails myData: ", myData);
    this.util.getTypeDetailsWithAuth('users/bankdetails.json', myData).subscribe(result => {
      this.util.dismissLoader()
      console.log("Your data: ", result);
      this.data = result;
      if (this.data.success) {
        this.util.showToast(this.data.status)
        this.navCtrl.navigateForward('/order-list');
        //localStorage.setItem('loginDataKKart', JSON.stringify(this.data.data.address));
        //this.events.publish('user:login')
      } else {
        this.util.showAlert('Error!', this.data.status ? this.data.status : "Please try again later");
      }
    },
      error => {
        this.util.dismissLoader();
        this.util.showAlert('Error!', 'Server error occured. Try again.');
      }
    );
  }



}
