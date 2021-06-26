import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Events } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { AboutPage } from './about/about.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [];
  
  showBack: boolean;
  showMenu: boolean;
  showButtons: boolean;
  showButtonsAdd: boolean;
  showButtonsDelete: boolean;
  title = '';
  menuTitle = ''
  prevPage = '';
  showHeader: boolean;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar, public events: Events ,
    public menuCtrl: MenuController,
    protected deeplinks: Deeplinks,
  ) {
    this.initializeMenu();
    this.initializeApp();
    events.subscribe('user:login', () => {
      console.log('user login');
      this.initializeApp();
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log("Logiiiiin cheeeck",(localStorage.getItem('loginDataKKart') ))

      if (localStorage.getItem('loginDataKKart') != null) {        
        this.menuTitle = "Welcome," + JSON.parse(localStorage.getItem('loginDataKKart')).first_name.toString().split(' ')[0]
        
        this.appPages = [{title: 'Home',url: '/home',img: 'assets/images/Group 313.png'},
                        {title: 'Category',url: '/product-category',img: 'assets/images/Group 315.png'},
                        {title: 'Product list',url: '/list',img: 'assets/images/Group 316.png'},
                        {title: 'Todays offer',url: '/top-selling-product-list',img: 'assets/images/Group 326.png'},
                        {title: 'My Orders',url: '/order-list',img: 'assets/images/Group 239.png'},
                        {title: 'My Wishlist',url: '/wishlist',img: 'assets/images/Path 950.png'},
                        {title: 'My Cart',url: '/cart',img: 'assets/images/Group 327.png'},
                        {title: 'My Account',url: '/my-account-details',img: 'assets/images/Group 717.png'},
                        {title: 'My Reviews',url: '/my-reviews',img: 'assets/images/Group 717.png'},
                        {title: 'Address',url: '/add-address',img: 'assets/images/Group 717.png'},
                        {title: 'Change Password',url: '/change-password',img: 'assets/images/Group 717.png'},
                        {title: 'Terms & Conditions',url: '/terms-service',img: 'assets/images/Group 715.png'},
                        {title: 'About us',url: '/about',img: 'assets/images/Group 717.png'},
                        {title: 'Return Policy',url: '/return-policy',img: 'assets/images/Group 717.png'},
                        {title: 'Contact',url: '/contact',img: 'assets/images/Group 719.png'},
                        {title: 'Logout',url: '/logout',img: 'assets/images/Group 714.png'},
                       ]
      }else{
        this.menuTitle = "Welcome to Smartkarts"

                       this.appPages = [
                         {title: 'Home',url: '/home',img: 'assets/images/Group 313.png'},
                       {title: 'Category',url: '/product-category',img: 'assets/images/Group 315.png'},
                       {title: 'Product list',url: '/list',img: 'assets/images/Group 316.png'},
                       {title: 'Todays offer',url: '/top-selling-product-list',img: 'assets/images/Group 326.png'},
                       {title: 'Terms & Conditions',url: '/terms-service',img: 'assets/images/Group 715.png'},
                       {title: 'About us',url: '/about',img: 'assets/images/Group 717.png'},
                       {title: 'Return Policy',url: '/return-policy',img: 'assets/images/Group 717.png'},
                       {title: 'Contact',url: '/contact',img: 'assets/images/Group 719.png'},
                       {title: 'Login',url: '/login',img: 'assets/images/Group 714.png'},
                      ]

      }
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
      //this.listenToDeeplink()
    });
  }

  toggleMenu() {
    console.log("tooooooooooogle")
    this.menuCtrl.toggle(); //Add this method to your button click function
  }

  initializeMenu() {
    this.events.subscribe('showMenu', (pageDetails, time) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      //set the heder element as per user requirement
      console.log('Welcome', pageDetails, 'at', time);
      this.showBack = pageDetails.showBack;
      this.title = pageDetails.title;
      this.showMenu = pageDetails.showMenu;
      this.showButtons = pageDetails.showButtons;
      this.showHeader = true;
      this.prevPage = pageDetails.prevPage;
    });
  }

  listenToDeeplink(){

  console.log("Deeplink Route test", this.deeplinks.route)
 
   this.deeplinks.route({
      '/about-us': AboutPage,
     // '/universal-links-test': AboutPage,
     // '/products/:productId': ProductCategoryPage
   }).subscribe(match => {
     // match.$route - the route we matched, which is the matched entry from the arguments to route()
     // match.$args - the args passed in the link
     // match.$link - the full link data
     alert(JSON.stringify(match))
     console.log('Successfully matched route', match);
   }, nomatch => {
     // nomatch.$link - the full link data
     alert(JSON.stringify(nomatch));
     console.error('Got a deeplink that didn\'t match', nomatch);
   });
 
   // console.log("Deeplink Route test end end", this.deeplinks.route)
 
   // this.platform.ready().then(() => {
   //   console.log("platform is there")
 
   //   this.deeplinks.routeWithNavController(this.navCtrl, {
   //     '/about-us': AboutPage,
   
   //   }).subscribe((match) => {
   //     console.log("match", JSON.stringify(match))
   //        alert(JSON.stringify(match))
   //   }, (noMatch) =>{
   //     console.log("noMatch", JSON.stringify(noMatch))
   //     alert(JSON.stringify(noMatch));
   //     }
   //   )
   
   // })
 
 }


}
