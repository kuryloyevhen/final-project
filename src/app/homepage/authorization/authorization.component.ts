import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { GatewayService } from '../../services/gateway.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})

export class AuthorizationComponent implements OnInit {

  constructor(private location: Location,
              private gateway: GatewayService,
              private auth: AuthService) { }

  ngOnInit() {

  }


  register(){
    this.location.go('homepage/registration');
  }

  signIn(email: string, password: string){
    let data = {
      "email": email,
      "password": password
    };
    this.auth.signIn(data)
      .subscribe( (response) => {
        console.log(response);
        localStorage.setItem("access_token", response.access_token);
        localStorage.setItem("refresh_token", response.Item.refresh_token);
      });
  }

  refreshToken(){
    let data = {
      "refresh_token": localStorage.getItem("refresh_token")
    };
    this.auth.refreshToken(data)
      .subscribe( (response) => localStorage.setItem("access_token", response.access_token) );
  }



}
