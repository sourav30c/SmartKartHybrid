import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, Events, AlertController } from '@ionic/angular';
import { UtilityService } from '../api/utility.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  oldpassword='';
  newpassword='';
  cnfpassword='';
  data:any;
  pageDetails:any;
  pushedFrom = '';
  constructor(private menuCtrl: MenuController, private navCtrl: NavController, 
    private util: UtilityService, public events: Events, private route: ActivatedRoute,public alertCtrl: AlertController) { 
      this.pushedFrom = this.route.snapshot.paramMap.get("pushedFrom")
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true)
    this.pageDetails = { 'showMenu': true, 'showBack': false, 'showButtons': false, 'title': 'Change Password', 'prevPage': '' };
    this.showMenu(this.pageDetails);
  }

  showMenu(pageDetails) {
    console.log('User created!')
    this.events.publish('showMenu', pageDetails, Date.now());
  }

  toLogin() {
    // if (this.oldpassword == '') {
    //   this.util.showAlert('Sorry', 'Please provide old password');
    // } else if (this.oldpassword.length<8) {
    //   this.util.showAlert('Sorry', 'Password length must be of 8 digits');
    // } else 
    if (this.newpassword == '') {
      this.util.showAlert('Sorry', 'Please provide new password');
    } else if (this.cnfpassword == '') {
      this.util.showAlert('Sorry', 'Please confirm new password');
    } else if (this.cnfpassword != this.newpassword) {
      this.util.showAlert('Sorry', 'Please provide same password');
    } else {
      this.postData()
    }
  }

  postData() {
    var myData = JSON.stringify({
      password: this.newpassword,
      confirm_password: this.cnfpassword,
    });
    this.util.presentLoading()
    //console.log("Your changepassword myData: ", myData);
    this.util.getTypeDetailsWithAuth('users/changepswd.json', myData).subscribe(result => {
      this.util.dismissLoader()
      //console.log("Your data: ", result);
      this.data = result;
      if (this.data.success) {
        //console.log("Your success data: ", this.data.data);
        this.presentConfirm()
      } else {
        this.oldpassword = ''
        this.newpassword = ''
        this.cnfpassword = ''
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
    let alert = this.alertCtrl.create({
      header: 'Thank You',
      message: 'Password Changed Successfully.Please Login to continue',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.navCtrl.navigateForward('/login')
          }
        }
      ]
    }).then(alert => alert.present());
  }

}
