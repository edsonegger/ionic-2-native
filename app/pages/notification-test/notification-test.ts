import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocalNotifications } from 'ionic-native'

/*
  Generated class for the NotificationTestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/notification-test/notification-test.html',
})
export class NotificationTestPage {

	notification: any;

  constructor(private nav: NavController) {

  	LocalNotifications.on('click', (notification, state) =>{
  		this.notification = notification;
  	});
  }

  send() {
  	LocalNotifications.schedule({
  		id: 1,
  		text: 'Single Notification'
  		// sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
  		// data: { secret: key }
	});
  }
}
