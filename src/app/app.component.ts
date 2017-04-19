import { Component, OnInit } from '@angular/core';
import { HomePageComponent } from 'pages';
import { Platform, AlertController } from 'ionic-angular';
import { environment } from 'environments/environment';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.ts.html',
	styleUrls: ['app.component.ts.css']
})
export class AppComponent implements OnInit {
	title = 'app works!';

	rootPage = HomePageComponent;


	constructor(private platform: Platform, private alert: AlertController) {

	}

	async ngOnInit() {
		await this.platform.ready();
	}
}
