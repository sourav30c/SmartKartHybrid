import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, Events, AlertController } from '@ionic/angular';
import { UtilityService } from '../api/utility.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.page.html',
  styleUrls: ['./add-address.page.scss'],
})
export class AddAddressPage implements OnInit {
  homeaddress = ''
  workaddress = ''
  data:any
  myAccountData:any
  constructor(private menuCtrl: MenuController, private navCtrl: NavController, 
    private util: UtilityService, public events: Events, private route: ActivatedRoute,public alertCtrl: AlertController) { 
      if (localStorage.getItem('loginDataKKart') != null) {
        this.myAccountData = JSON.parse(localStorage.getItem('loginDataKKart'))
        this.homeaddress = this.myAccountData.address1 ? this.myAccountData.address1 : ''
        this.workaddress = this.myAccountData.address2 ? this.myAccountData.address2 : ''
      }

  }

  ngOnInit() {
  }

  submitAddress() {
    if (this.homeaddress == '') {
      this.util.showAlert('Sorry', 'Please provide home address');
    } else if (this.workaddress == '') {
      this.util.showAlert('Sorry', 'Please confirm work address');
    }  else {
      this.postData()
    }
  }

  postData() {
    var myData = JSON.stringify({
      address1: this.homeaddress,
      address2: this.workaddress,
    });
    this.util.presentLoading()
    //console.log("Your changepassword myData: ", myData);
    this.util.getTypeDetailsWithAuth('users/addressbook.json', myData).subscribe(result => {
      this.util.dismissLoader()
      //console.log("Your data: ", result);
      this.data = result;
      if (this.data.success) {
        //console.log("Your success data: ", this.data.data);
        localStorage.setItem('loginDataKKart', JSON.stringify(this.data.data.address));
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
      message: 'Address Updated Successfully',
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
