import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule } from 'ionic-angular';

import { HomePage } from 'pages';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(AppComponent),
    FormsModule,
    HttpModule
  ],
  providers: [],
  entryComponents: [HomePage],
  bootstrap: [IonicApp]
})
export class AppModule { }
