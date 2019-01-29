import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { GatewayService } from '../gateway.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  constructor(private server: HttpService,
              private gateway: GatewayService) { }


  hide: string = 'registration';

  confirmUser(name: string, password: string){
    this.server.getUser()
      .subscribe( (response) => {
        for(let user of response){
          if(user.fullname == name && user.password == password) this.gateway.authorized = true;
          if(user.fullname == 'Kurylo Yevhen' && user.password == 'admin') this.gateway.adminRoot = true;
        }
      } );
  }

  registerUser(firstname: string, lastname: string, newEmail: string, newPassword: string){

    this.server.addUser(firstname, lastname, newEmail, newPassword)
      .subscribe( (response) => this.gateway.authorized = true);
  }

  hidePanel(name: string){
    this.hide = name;
  }




}
