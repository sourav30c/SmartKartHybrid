import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, Events } from '@ionic/angular';
import { UtilityService } from '../api/utility.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {

  email_id = '';
  data: any;

  constructor(private menuCtrl: MenuController,
    private navCtrl: NavController,
    private util: UtilityService, public events: Events, private route: ActivatedRoute,) {

  }

  ngOnInit() {
  }

  submit() {
    if (this.email_id == '') {
      this.util.showAlert('Sorry', 'Please provide your email id');
    }else{
      var myData = JSON.stringify({
        email: this.email_id
      });
      console.log("Your myData: ", myData);
      this.util.presentLoading();
      this.util.getTypeDetails('users/forgetpasswordwithotp.json', myData).subscribe(result => {
        this.util.dismissLoader();
        console.log("Your data: ", result);
        this.data = result;
  
        if (this.data.success) {
          this.util.showToast(this.data.data.status);
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

}
