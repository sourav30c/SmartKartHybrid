import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../api/utility.service';
import { AlertController, Events, NavController, ModalController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-billing-address',
  templateUrl: './add-billing-address.page.html',
  styleUrls: ['./add-billing-address.page.scss'],
})
export class AddBillingAddressPage implements OnInit {
  data: any
  userdata: any
  user_name = ''
  user_mobile = ''
  user_email = ''
  user_address = ''
  user_country = ''
  user_state = ''
  user_city = ''
  user_zip = ''
  isHomeAddress = "1"
  billingAddressData: any
  addressId = ""
  stateId = ""
  stateName = ""
  allStates: any
  constructor(private util: UtilityService, public alertController: AlertController,
    public events: Events, private navCtrl: NavController, private route: Router, public modalController: ModalController,
    private activeroute: ActivatedRoute, private menuCtrl: MenuController,) {
    this.userdata = JSON.parse(localStorage.getItem('loginDataKKart'))
    //console.log("this.userdata", JSON.parse(localStorage.getItem('loginDataKKart')))
    this.stateList()

    if (this.route.getCurrentNavigation().extras.state) {
      this.billingAddressData = this.route.getCurrentNavigation().extras.state.parms;
      this.user_name = this.billingAddressData.name
      this.user_mobile = this.billingAddressData.mobile
      this.user_email = this.billingAddressData.email
      this.user_country = this.billingAddressData.country
      this.user_state = this.billingAddressData.state
      this.user_city = this.billingAddressData.city
      this.user_zip = this.billingAddressData.pin
      this.isHomeAddress = this.billingAddressData.address_type
      if (this.isHomeAddress == "1") {
        this.user_address = this.billingAddressData.home_address
      } else {
        this.user_address = this.billingAddressData.home_address
      }
      this.addressId = this.billingAddressData.id
      //console.log("this.billingAddressData", this.billingAddressData)
    } else {
      this.addressId = ""
    }
  }

  ngOnInit() {
  }

  addressTypeRadio(ev) {
    //console.log("radio ev", ev.detail.value)
    this.isHomeAddress = ev.detail.value
  }


  submitAddress() {
    if (this.user_name == '') {
      this.util.showToast('Please enter your name');
    } else if (this.user_mobile == '') {
      this.util.showToast('Please enter your phone number');
    } else if (this.user_email == '') {
      this.util.showToast('Please enter your email');
    } else if (this.user_address == '') {
      this.util.showToast('Please enter your address');
    } else if (this.user_country == '') {
      this.util.showToast('Please enter your country');
    } else if (this.user_state == '') {
      this.util.showToast('Please enter your state');
    } else if (this.user_city == '') {
      this.util.showToast('Please enter your city');
    } else if (this.user_zip == '') {
      this.util.showToast('Please enter your zip');
    } else {
      this.billingAddressSubmit()
    }
  }

  billingAddressSubmit() {
    var myData = JSON.stringify({
      "id": this.addressId,
      "postData": {
        "id": this.addressId,
        "name": this.user_name,
        "mobile": this.user_mobile,
        "email": this.user_email,
        "home_address": this.user_address,
        "country": this.user_country,
        "state": this.user_state,
        "city": this.user_city,
        "pin": this.user_zip,
        "address_type": this.isHomeAddress
      }
    });
    //console.log("Your myData: ", JSON.parse(myData));
    this.util.presentLoading();
    this.util.getTypeDetailsWithAuth('carts/addDelivaryAddress.json', myData).subscribe(result => {
      this.util.dismissLoader();
      //console.log("Your data: ", result);
      this.data = result;
      if (this.data.success) {
        this.util.showToast(this.data.msg);
        this.navCtrl.navigateForward('/billing-address')
      } else {
        this.util.showToast(this.data.msg);
      }
    },
      error => {
        this.util.dismissLoader();
        this.util.showToast('Server error occured. Try again.');
      }
    );
  }

  selectState(ev: any) {
    //console.log("store id check in select store", ev, ev.detail, this.user_state);
    this.user_state = ev.detail.value
    for (let i = 0; i < this.allStates.length; i++) {
      if (this.allStates[i].id == this.user_state) {
        this.stateName = this.allStates[i].name
        break
      } else {
        continue
      }
    }
  }


  stateList() {
    var myData = JSON.stringify({
    });
    //console.log("Your myData: ", JSON.parse(myData));
    this.util.presentLoading();
    this.util.getTypeDetailsWithAuth('carts/statelist.json', myData).subscribe(result => {
      this.util.dismissLoader();
      //console.log("Your state data: ", result);
      this.data = result;
      if (this.data.success) {
        this.allStates = this.data.data
        for (let i = 0; i < this.allStates.length; i++) {
          if (this.allStates[i].id == this.user_state) {
            this.stateName = this.allStates[i].name
            break
          } else {
            continue
          }
        }
      } else {
        this.util.showToast(this.data.msg);
      }
    },
      error => {
        this.util.dismissLoader();
        this.util.showToast('Server error occured. Try again.');
      }
    );
  }
}
