import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../api/utility.service';
import { NavController, MenuController, Events } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
@Component({
  selector: 'app-auto-search',
  templateUrl: './auto-search.page.html',
  styleUrls: ['./auto-search.page.scss'],
})
export class AutoSearchPage implements OnInit {
  searchlist = []
  searchText = ''
  data: any
  voiceSearchData: String
  isRecording = false;
  searchPattern = ''
  isProductFound = true
  constructor(private util: UtilityService, private menuCtrl: MenuController, private route: Router, public events: Events,
    private activeroute: ActivatedRoute, private navCtrl: NavController, private keyboard: Keyboard, private speechRecognition: SpeechRecognition) {
    this.searchPattern = this.activeroute.snapshot.paramMap.get("pushed")
    if (this.searchPattern == 'audio') {
      this.getPermission()
    }
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false)
  }
  ngOnInit() {
  }

  getItems(ev: any) {
    const val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      // this.items = this.items.filter((item) => {
      //   return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      // })
      console.log('val:: ', val);
    }
    if (val.length >= 2) {
      this.getSearchListData(val);
    }

  }

  submitSearch(ev: any) {
    // Reset items back to all of the items
    console.log('evev:: ', ev);
    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      // this.items = this.items.filter((item) => {
      //   return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      // })
      console.log('val:: ', val);
      this.navCtrl.navigateForward(['/list', { searchTxtHome: val, pushedFromSub: "autoSearch" }])
    }
  }

  onCancel(ev: any) {
    this.searchText = '';
  }

  getSearchListData(searchBy) {
    if (this.searchPattern != 'audio') {
      this.keyboard.show();
    } else {
      this.keyboard.hide();
      this.searchPattern = ''
    }

    var myData = JSON.stringify({
      search: searchBy
    });
    //console.log("Your myData search by: ", myData);
    //this.util.presentLoading();
    this.util.getTypeDetails('products/autoSuggestion.json', myData).subscribe(result => {
      //this.util.dismissLoader();
      // if (this.searchPattern != 'audio') {
      //   this.keyboard.show();
      // } else {
      //   this.keyboard.hide();
      // }

      //console.log("Your search data: ", result);
      this.data = result;

      console.log(this.data)
      if (this.data.success) {
        this.searchlist = this.data.data
        if (this.searchlist.length > 0) {
          this.isProductFound = true
        } else {
          this.isProductFound = false
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

  toList(singleSearch) {
    //console.log("singleSearch", singleSearch)

    let navigationExtras: NavigationExtras = {
      state: {
        from: 'autoSearch',
        parms: singleSearch,
      }
    };
    this.navCtrl.navigateForward('/details', navigationExtras);
  }

  getPermission() {
    //console.log("Grant Permission")
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        if (!hasPermission) {
          this.speechRecognition.requestPermission()
            .then(
              () => this.startListening(),//console.log('granted'),
              () => console.log('Denied')
            )
        } else {
          this.startListening()
        }
      });
  }


  startListening() {
    let options = {
      language: 'en-US'
    }
    this.util.presentLoading()
    this.speechRecognition.startListening().subscribe(matches => {
      this.util.dismissLoader()
      //console.log('start listening meeeee', matches)
      this.voiceSearchData = matches[0]
      //this.myInput = this.voiceSearchData
      //this.cd.detectChanges();
      //console.log("start listening matches", this.voiceSearchData)
      //this.getItems(this.voiceSearchData);
    });

    this.isRecording = true;

    setTimeout(() => {
      console.log('works')
      this.stopListening(this.voiceSearchData)
    }, 5000)
  }

  stopListening(vss) {
    this.speechRecognition.stopListening().then(() => {
      this.isRecording = false;
    });
    this.util.dismissLoader()
    //console.log("start listening matches after stop", vss)
    this.searchText = vss
    this.getSearchListData(vss);

  }

}
