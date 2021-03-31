import { Component, OnInit } from '@angular/core';
import { NavController, Events } from '@ionic/angular';
import { utils } from 'protractor';
import { UtilityService } from '../api/utility.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private navCtrl:NavController,public events: Events,private util: UtilityService,) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    localStorage.clear()
    this.util.cartCount = 0
    
    console.log("Logiiiiin cheeeck",(localStorage.getItem('loginDataKKart') ))
    //this.events.publish('user:logout_home')
    this.events.publish('user:login')
    this.navCtrl.navigateRoot('/home')
  }
}
