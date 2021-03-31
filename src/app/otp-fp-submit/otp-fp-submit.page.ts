import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Events, MenuController, NavController } from '@ionic/angular';
import { UtilityService } from '../api/utility.service';

@Component({
  selector: 'app-otp-fp-submit',
  templateUrl: './otp-fp-submit.page.html',
  styleUrls: ['./otp-fp-submit.page.scss'],
})
export class OtpFpSubmitPage implements OnInit {

  constructor(private menuCtrl: MenuController,
    private navCtrl: NavController,
    private util: UtilityService, public events: Events, private route: ActivatedRoute,) { }

  ngOnInit() {
  }

  submit(){
    this.navCtrl.navigateForward(['/change-password',{pushedFrom:"FP"}])
  }
}
