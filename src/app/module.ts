import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule } from 'ionic-angular';

import { HomePageComponent } from 'pages';
import { AppComponent } from './app.component';


@NgModule({
	declarations: [
		AppComponent,
		HomePageComponent
	],
	imports: [
		IonicModule.forRoot(AppComponent),
		FormsModule,
		HttpModule
	],
	providers: [],
	entryComponents: [HomePageComponent],
	bootstrap: [IonicApp]
})
export class AppModule { }
