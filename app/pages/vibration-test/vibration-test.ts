import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Vibration } from 'ionic-native';

/*
  Generated class for the VibrationTestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/vibration-test/vibration-test.html',
})
export class VibrationTestPage {
  constructor(private nav: NavController) {}

  vibrate() {
  	Vibration.vibrate([2000,1000,2000]);
  }
}
