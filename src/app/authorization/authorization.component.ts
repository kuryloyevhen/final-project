import { Component, OnDestroy } from '@angular/core';
import * as Rx from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})

export class AuthorizationComponent implements OnDestroy {

  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private router: Router) { }

  private unsubscribe: Rx.Subject<void> = new Rx.Subject();

  authorizationForm = this.fb.group({
    email: ['', Validators.compose([Validators.email, Validators.required])],
    password: ['', Validators.required]
  });

  signIn(){
    if(this.authorizationForm.valid){
      this.auth.signIn(this.authorizationForm.value).pipe(takeUntil(this.unsubscribe))
        .subscribe( (response) => {
          localStorage.setItem("access_token", response.access_token);
          localStorage.setItem("refresh_token", response.Item.refresh_token);
          this.router.navigate(['homepage']);
        });
    }

  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }


}
