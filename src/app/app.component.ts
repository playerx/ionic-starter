import { Component } from '@angular/core';
import { HomePage } from 'pages';
import { Platform, AlertController } from 'ionic-angular'

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.ts.html',
	styleUrls: ['app.component.ts.css']
})
export class AppComponent {
	title = 'app works!';

	rootPage = HomePage


	constructor(private platform: Platform, private alert: AlertController) {

	}

	async ngOnInit() {

		this.alert.create({
			title: 'Platform is not ready yet',
			buttons: ['Okey']
		}).present();

		await this.platform.ready();


		this.alert.create({
			title: 'Platform is Ready!',
			buttons: ['Cool']
		}).present();
	}
}
