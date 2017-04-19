import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/module';
import { environment } from './environments/environment';


if (environment.redirectUrl && document.location.toString().indexOf(environment.redirectUrl) === -1) {
	document.location.assign(environment.redirectUrl);
}

if (environment.production) {
	enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
