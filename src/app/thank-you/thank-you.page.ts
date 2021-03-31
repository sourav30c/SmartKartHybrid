import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../api/utility.service';
import { AlertController, Events, NavController, ModalController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.page.html',
  styleUrls: ['./thank-you.page.scss'],
})
export class ThankYouPage implements OnInit {

  constructor(private util: UtilityService, public alertController: AlertController,
    public events: Events, private navCtrl: NavController, private route: Router, public modalController: ModalController,
    private activeroute: ActivatedRoute, private menuCtrl: MenuController,) { }

  ngOnInit() {
  }

  toHomePage(){
    this.navCtrl.navigateRoot('/home')
  }
}
