import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from 'ionic-native';

/*
  Generated class for the BarcodeTestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/barcode-test/barcode-test.html',
})
export class BarcodeTestPage {

	barcodeData: any;

  constructor(private nav: NavController) {}

  scan() {
  	BarcodeScanner.scan().then((barcodeData) => {
	 // Success! Barcode data is here
	 this.barcodeData = barcodeData;
	}, (err) => {
	    // An error occurred
	    console.log(err);
	});
  }
}
