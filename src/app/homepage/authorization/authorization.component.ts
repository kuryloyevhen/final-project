import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})

export class AuthorizationComponent {

  constructor(private fb: FormBuilder,
              private auth: AuthService) { }

  authorizationForm = this.fb.group({
    email: [''],
    password: ['']
  });

  signIn(){
    this.auth.signIn(this.authorizationForm.value)
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
