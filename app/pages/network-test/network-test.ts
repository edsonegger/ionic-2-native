import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Network, Connection } from 'ionic-native';

/*
  Generated class for the NetworkTestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/network-test/network-test.html',
})
export class NetworkTestPage {

connectionType: any;

  constructor(private nav: NavController) {}

  check() {
  	this.connectionType = Network.connection;
  }
}
