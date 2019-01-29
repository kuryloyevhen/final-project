import { Component } from '@angular/core';
import { GatewayService } from './gateway.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private gateway: GatewayService){}

  title = 'project2';

  showNav(elem){
    elem.classList.toggle('list--hidden');
  }





}
