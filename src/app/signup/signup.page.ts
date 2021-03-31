import { Component, OnInit } from '@angular/core';
import { NavController, Events, Platform, MenuController } from '@ionic/angular';
import { UtilityService } from 'src/app/api/utility.service';
import { ActivatedRoute, Router } from '@angular/router';
//import { FileTransfer, FileUploadOptions, FileTransferObject, FileUploadResult } from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  name = ''
  email = ''
  phoneno = ''
  password = ''
  cpassword = ''
  fileUrl = ''
  data: any;
  userData: any;
  pageDetails: any
  pushedFrom = ""
  isAcceptCheck = true
  showPasswordId = "password"
  constructor(private menuCtrl: MenuController,
    private navCtrl: NavController,
    private util: UtilityService, public events: Events, private route: Router,private activeroute: ActivatedRoute,) { 
      this.pushedFrom = this.activeroute.snapshot.paramMap.get("pushedFrom")
    }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true)
    //this.pageDetails = { 'showMenu': false, 'showBack': false, 'showButtons': false, 'title': 'Register', 'prevPage': '/login' };
    //this.showMenu(this.pageDetails);
  }

  showMenu(pageDetails) {
    console.log('User created!')
    this.events.publish('showMenu', pageDetails, Date.now());
  }

  signup() {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (this.name == '') {
      this.util.showToast('Please provide name');
    } else if (this.email == '') {
      this.util.showToast('Please provide email');
    } else if (!re.test(this.email)) {
      this.util.showAlert('Sorry', 'Please provide valid email address!');
    } else if (this.phoneno == '') {
      this.util.showToast('Please provide phone no');
    } else if (String(this.phoneno).length<10) {
      this.util.showAlert('Sorry', 'Please provide valid contact number');
    }else if (this.password == '') {
      this.util.showToast('Please provide password');
    } else if (this.cpassword == '') {
      this.util.showToast('Please provide confirm password');
    } else if (this.password != this.cpassword) {
      this.util.showToast('Password mismatch');
    } else {
      this.postData()
    }
  }

  acceptCheck(e: any) {
    //console.log("remember me check", e.detail.checked)
    this.isAcceptCheck = e.detail.checked
  }

  showPassword(){
    //console.log("show")
    this.showPasswordId = "text"
  }

  hidePassword(){
    //console.log("hide")
    this.showPasswordId = "password"
  }
  postData() {
    //first_name,last_name,email,phone,password
    var myData = {
      first_name: this.name,
      last_name: this.name,
      email: this.email,
      mobile: this.phoneno,
      password: this.password,
    }
    //console.log("Your myData: ", myData);
    this.util.presentLoading();
    this.util.getTypeDetails('users/add.json', myData).subscribe(result => {
      this.util.dismissLoader();
      //console.log("Your data: ", result);
      this.data = result;
      if (this.data.success) {
        //console.log("Your success data: ", this.data.data);
        //localStorage.setItem('loginDataKKartTemp', JSON.stringify(this.data.data.userdetails));
        //localStorage.setItem('userTokenTemp', JSON.stringify(this.data.data.token));
        localStorage.setItem('userToken', JSON.stringify(this.data.data.token));
        //localStorage.setItem('otp', JSON.stringify(this.data.data.otp));
        this.util.showToast("Registration is successful");
        this.navCtrl.navigateRoot('/login')
        //this.navCtrl.navigateForward(['/otp-registration', { pushedFrom: this.pushedFrom }])
      } else {
        this.util.showToast("The email id is already in use");
      }
    },
      error => {
        this.util.dismissLoader();
        //this.util.showToast('Server error occured. Try again.');
        this.util.showToast("The email id is already in use");
      }
    );
  }

}
