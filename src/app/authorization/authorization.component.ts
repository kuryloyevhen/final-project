import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})

export class AuthorizationComponent {

  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private router: Router) { }

  authorizationForm = this.fb.group({
    email: ['cms_edu_admin@gmail.com'],
    password: ['cms_edu_admin']
  });

  signIn(){
    this.auth.signIn(this.authorizationForm.value)
      .subscribe( (response) => {
        console.log(response);
        localStorage.setItem("access_token", response.access_token);
        localStorage.setItem("refresh_token", response.Item.refresh_token);
        this.router.navigate(['homepage']);
      });
  }


}
