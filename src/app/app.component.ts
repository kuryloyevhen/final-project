import { Component, HostBinding } from '@angular/core';
import { RouterGuard } from './services/router-guard';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private routerGuard: RouterGuard,
              private location: Location) { }

  title = 'project2';

  currentPath() {
    if( window.location.pathname == '/authorization' || window.location.pathname == '/registration') return false;
    else return true;
  }
}
