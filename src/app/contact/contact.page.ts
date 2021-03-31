import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../api/utility.service';
import { AlertController, Events, NavController, ModalController, MenuController, Platform } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  yourName = ""
  email = ""
  phoneNo = ""
  message = ""
  data:any
  subscribe: any
  constructor(private util: UtilityService, public alertController: AlertController,
    public events: Events, private navCtrl: NavController, private route: Router, public modalController: ModalController,
    private activeroute: ActivatedRoute, private menuCtrl: MenuController, private platform: Platform ) { 

    }

  ngOnInit() {
  }

  // ionViewDidEnter() {
  //   alert(this.constructor.name)
  //   this.subscribe = this.platform.backButton.subscribeWithPriority(666, () => {
  //     if (this.constructor.name == "HomePage"){
  //       if(window.confirm("Do you want to exit app")){
  //         navigator["app"].exitApp();
  //       }
  //     }else{}
  //   })
  // }

  submitAddress() {
    if (this.yourName == '') {
      this.util.showToast('Please enter your name');
    } else if (this.email == '') {
      this.util.showToast('Please enter your email');
    } else if (this.phoneNo == '') {
      this.util.showToast('Please enter your phone no');
    } else if (this.message == '') {
      this.util.showToast('Please enter your message');
    } else {
      this.contactSubmit()
    }
  }

  contactSubmit() {
    var myData = JSON.stringify({
      name: this.yourName,
      email: this.email,
      mobile: this.phoneNo,
      message: this.message,
    });
    console.log("Your myData: ", JSON.parse(myData));
    this.util.presentLoading();
    this.util.getTypeDetailsWithAuth('sliders/contact.json', myData).subscribe(result => {
      this.util.dismissLoader();
      console.log("Your data: ", result);
      this.data = result;
      if (this.data.success) {
        this.util.showToast(this.data.msg);
        //this.util.showAlert("Thank You",this.data.msg)
        this.navCtrl.navigateForward('/home')
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
