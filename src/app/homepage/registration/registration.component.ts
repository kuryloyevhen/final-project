import { Component, OnInit } from '@angular/core';
import { GatewayService } from '../../services/gateway.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private gateway: GatewayService,
              private auth: AuthService) { }

  ngOnInit() {
  }

  hidePanel(name: string){
    this.gateway.hide = name;
  }

  signUp(name: string, sirname: string, email: string, password: string){
    let data = {
      "fullName": name + ' ' + sirname,
      "email": email,
      "password": password
    };
    this.auth.signUp(data)
      .subscribe( (response) => console.log(response) );
  }

}
