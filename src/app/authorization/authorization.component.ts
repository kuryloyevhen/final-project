import { Component, OnInit } from '@angular/core';
import { GatewayService } from '../gateway.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  constructor(private gateway: GatewayService) { }

  ngOnInit() {
  }

  hidePanel(name: string){
    this.gateway.hide = name;
  }

}
