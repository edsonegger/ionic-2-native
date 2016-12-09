import {Component} from '@angular/core';
import {Platform, ionicBootstrap, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {CameraTestPage} from './pages/camera-test/camera-test'
import {NetworkTestPage} from './pages/network-test/network-test'

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
      {component: NetworkTestPage, title: 'Network', icon: 'git-network'}

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
