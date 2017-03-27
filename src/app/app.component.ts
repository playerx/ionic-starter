import { Component } from '@angular/core';
import { HomePage } from 'pages';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.ts.html',
  styleUrls: ['app.component.ts.css']
})
export class AppComponent {
  title = 'app works!';

  rootPage = HomePage
}
