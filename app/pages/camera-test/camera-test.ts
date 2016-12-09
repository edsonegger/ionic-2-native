import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from 'ionic-native';

/*
  Generated class for the CameraTestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/camera-test/camera-test.html',
})
export class CameraTestPage {

	image: any;

  constructor(private nav: NavController) {}

  takePhoto() {
  	Camera.getPicture({
  		quality: 78,
  		cameraDirection: Camera.Direction.BACK,
  		destinationType: Camera.DestinationType.DATA_URL
  	}).then((imageData) => {
	 // imageData is either a base64 encoded string or a file URI
	 // If it's base64:
	 let base64Image = 'data:image/jpeg;base64,' + imageData;
	 this.image = base64Image;
	}, (err) => {
	 // Handle error
	 console.log(err);
	});
  }
}
