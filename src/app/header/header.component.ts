import { Component, OnInit } from '@angular/core';
import { GatewayService } from '../gateway.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private gateway: GatewayService) { }

  ngOnInit() {
  }

  showNav(elem){
    elem.classList.toggle('list--visible');
  }

}
