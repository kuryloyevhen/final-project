import { Component } from '@angular/core';
import { RouterGuard } from './services/router-guard';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private routerGuard: RouterGuard){}

  title = 'project2';

}
