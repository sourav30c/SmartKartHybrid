import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../api/utility.service';
import { MenuController, Events, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-sub-category',
  templateUrl: './product-sub-category.page.html',
  styleUrls: ['./product-sub-category.page.scss'],
})
export class ProductSubCategoryPage implements OnInit {
  subCategory:any
  constructor(private util: UtilityService, private menuCtrl: MenuController, public events: Events ,private navCtrl: NavController, private route: Router,) { 
    this.subCategory = this.route.getCurrentNavigation().extras.state.parms;
    //console.log(this.subCategory)
  }

  ngOnInit() {
  }

  loadImageProduct(i, singleCategoryData){
    singleCategoryData["isLoad"] = true
    //console.log('productlist:: ', singleCategoryData)
  }
}
