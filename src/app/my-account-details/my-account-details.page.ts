import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, Events, AlertController } from '@ionic/angular';
import { UtilityService } from '../api/utility.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-account-details',
  templateUrl: './my-account-details.page.html',
  styleUrls: ['./my-account-details.page.scss'],
})
export class MyAccountDetailsPage implements OnInit {
  firstname=''
  phone=''
  email=''
  user_state = ''
  city=''
  pin=''
  alternateNo=''
  data:any
  myAccountData:any
  stateId = ""
  stateName = ""
  allStates: any
  constructor(private menuCtrl: MenuController, private navCtrl: NavController, 
    private util: UtilityService, public events: Events, private route: ActivatedRoute,public alertCtrl: AlertController) { 
      if (localStorage.getItem('loginDataKKart') != null) {
        this.myAccountData = JSON.parse(localStorage.getItem('loginDataKKart'))
        //console.log("My Account Data",this.myAccountData)
        this.stateList()
        this.firstname = this.myAccountData.first_name ? this.myAccountData.first_name : ''
        this.email = this.myAccountData.email ? this.myAccountData.email : ''
        this.phone = this.myAccountData.mobile ? this.myAccountData.mobile : ''
        this.user_state = this.myAccountData.state ? this.myAccountData.state : ''
        this.city = this.myAccountData.city ? this.myAccountData.city : ''
        this.pin = this.myAccountData.pin ? this.myAccountData.pin : ''
      }
  }

  ngOnInit() {
  }

  submitAccountInfo() {
    if (this.firstname == '') {
      this.util.showAlert('Sorry', 'Please provide first name');
    } else if (this.phone == '') {
      this.util.showAlert('Sorry', 'Please provide phone');
    } else if (this.email == '') {
      this.util.showAlert('Sorry', 'Please provide email');
    } else if (this.user_state == '') {
      this.util.showAlert('Sorry', 'Please provide state');
    } else if (this.city == '') {
      this.util.showAlert('Sorry', 'Please provide city');
    } else if (this.pin == '') {
      this.util.showAlert('Sorry', 'Please provide pin');
    } else if (this.alternateNo == '') {
      this.util.showAlert('Sorry', 'Please provide alternate no.');
    } else {
      this.postData()
    }
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



  postData() {
    var myData = JSON.stringify({
      first_name: this.firstname,
      mobile: this.phone,
      email: this.email,
      state: this.user_state,
      city: this.city,
      pin: this.pin,
      alternate_phone: this.alternateNo
    });
    this.util.presentLoading()
    //console.log("Your changepassword myData: ", myData);
    this.util.getTypeDetailsWithAuth('users/myaccount.json', myData).subscribe(result => {
      this.util.dismissLoader()
      //console.log("Your data: ", result);
      this.data = result;
      if (this.data.success) {
        //console.log("Your success data: ", this.data.data);
        localStorage.setItem('loginDataKKart', JSON.stringify(this.data.data.data_list));
        this.events.publish('user:login')
        this.presentConfirm()
      } else {
        this.util.showAlert('Error!', this.data.status?this.data.status:"Please try again later");
      }
    },
      error => {
        this.util.dismissLoader();
        this.util.showAlert('Error!', 'Server error occured. Try again.');
      }
    );
  }

  async presentConfirm() {
    console.log("action present")
    //this.util.dismissLoader()
    let alert = this.alertCtrl.create({
      header: 'Thank You',
      message: 'Profile Updated Successfully',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log("befrore dashboard")
            this.navCtrl.navigateForward('/home')
          }
        }
      ]
    }).then(alert => alert.present());
  }


}
