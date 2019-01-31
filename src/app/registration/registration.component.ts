import { Component, OnInit } from '@angular/core';
import { GatewayService } from '../gateway.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private gateway: GatewayService) { }

  ngOnInit() {
  }

  hidePanel(name: string){
    this.gateway.hide = name;
  }

}
