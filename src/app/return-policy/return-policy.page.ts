import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, Events, MenuController, ModalController, NavController } from '@ionic/angular';
import { UtilityService } from '../api/utility.service';

@Component({
  selector: 'app-return-policy',
  templateUrl: './return-policy.page.html',
  styleUrls: ['./return-policy.page.scss'],
})
export class ReturnPolicyPage implements OnInit {
  data: any
  termsService: any
  description = ""
  constructor(private util: UtilityService, public alertController: AlertController,
    public events: Events, private navCtrl: NavController, private route: Router, public modalController: ModalController,
    private activeroute: ActivatedRoute, private menuCtrl: MenuController) { 
      this.myTermsService()
    }

  ngOnInit() {
  }

  myTermsService() {
    var myData = JSON.stringify({
    });
    //console.log("Your myData: ", myData);
    this.util.presentLoading();
    this.util.getTypeDetailsWithAuth('sliders/pages.json', myData).subscribe(result => {
      this.util.dismissLoader();
      //console.log("Your data: ", result);
      this.data = result;
      if (this.data.success) {
        this.termsService = this.data.data.pages
      
        this.description = this.termsService[3].description
        //console.log("this.termsService", this.termsService)
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
