import {Component} from '@angular/core';
import {Platform, ionicBootstrap, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {CameraTestPage} from './pages/camera-test/camera-test'
import {NetworkTestPage} from './pages/network-test/network-test'
import {NotificationTestPage} from './pages/notification-test/notification-test'
import {BarcodeTestPage} from './pages/barcode-test/barcode-test'
import {VibrationTestPage} from './pages/vibration-test/vibration-test'

@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {

  pages: Array<any>;
  rootPage: any = HomePage;
  

  constructor(platform: Platform, public menu: MenuController) {

  	this.pages = [
  		{component: HomePage, title: 'Home', icon: 'home'},
  		{component: CameraTestPage, title: 'Camera', icon: 'camera'},
      {component: NetworkTestPage, title: 'Network', icon: 'git-network'},
      {component: NotificationTestPage, title: 'Notification', icon: 'notifications'},
      {component: BarcodeTestPage , title: 'Barcode', icon: 'barcode'},
      {component: VibrationTestPage , title: 'Vibration', icon: 'disc'}
  		];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) : void {
  	this.rootPage = page.component;
  	this.menu.close();
  }


}

ionicBootstrap(MyApp);
