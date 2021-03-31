import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../api/utility.service';
import { AlertController, Events, NavController, ModalController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.page.html',
  styleUrls: ['./order-tracking.page.scss'],
})
export class OrderTrackingPage implements OnInit {
  orderDetails:any
  orderProductDetails:any
  orderPosition:number
  data:any
  trackList:any
  trackListEvent:any
  isTrackList:boolean
  order_shyplite_details = []
  orderTrackTypePosition = 0
  returnType = ""
  constructor(private util: UtilityService, public alertController: AlertController,
    public events: Events, private navCtrl: NavController, private route: Router, public modalController: ModalController,
    private activeroute: ActivatedRoute, private menuCtrl: MenuController,) {
    this.returnType = this.route.getCurrentNavigation().extras.state.from
    this.orderDetails = this.route.getCurrentNavigation().extras.state.parms
    this.orderPosition = this.route.getCurrentNavigation().extras.state.parms2
    this.orderProductDetails = this.orderDetails.invoice_items[this.orderPosition]
    this.order_shyplite_details = this.orderProductDetails.shyplite_details
    //console.log("this.orderDetails", this.orderDetails, this.orderPosition , this.orderProductDetails , this.order_shyplite_details)

    if(this.order_shyplite_details.length> 0){
      this.isTrackList = true

      for(let i = 0; i<this.order_shyplite_details.length ; i++){
        if(this.order_shyplite_details[i].type == "1"){
          this.orderTrackTypePosition == i
          break
        }else{
          continue
        }
      }
      if (this.returnType == "orderDetails"){
        this.orderTrack()
      }else{
        this.returnOrderTrack()
      }      
    }else{
      this.isTrackList = false
    }

  }

  ngOnInit() {
  }

  orderTrack(){
    var myData = JSON.stringify({
      awb_no:this.order_shyplite_details[this.orderTrackTypePosition].awbNo
    });
    //console.log("Your track sending myData: ", myData);
    this.util.presentLoading();
    this.util.getTypeDetailsWithAuth('users/track.json', myData).subscribe(result => {
      this.util.dismissLoader();
      //console.log("Your order data: ", result);
      this.data = result;
      if (this.data.success) {
        this.trackList = this.data.data.tracking_list.data
        this.trackListEvent = this.trackList.events
        if (this.trackListEvent.length == 0) {
          this.isTrackList = true
        } else {
          this.isTrackList = true
        }
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


  returnOrderTrack(){ // Awbno send korte hobe (you will get from shyplite details table)
    let awbNo = this.order_shyplite_details[this.orderTrackTypePosition].awbNo
    if (awbNo == null){
      this.isTrackList = false
    }else{
      var myData = JSON.stringify({
        awb_no:this.order_shyplite_details[this.orderTrackTypePosition].awbNo
      });
      //console.log("Your track sending myData: ", myData);
      this.util.presentLoading();
      this.util.getTypeDetailsWithAuth('users/returntrack.json', myData).subscribe(result => {
        this.util.dismissLoader();
        //console.log("Your order data: ", result);
        this.data = result;
        if (this.data.success) {
          this.trackList = this.data.data.tracking_list.data
          this.trackListEvent = this.trackList.events
          if (this.trackListEvent.length == 0) {
            this.isTrackList = false
          } else {
            this.isTrackList = true
          }
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
