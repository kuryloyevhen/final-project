import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  constructor(private fb: FormBuilder,
              private auth: AuthService) { }


  registrationFrom = this.fb.group({
    fullName: [''],
    email: [''],
    password: ['']
  })

  signUp(){
    this.auth.signUp(this.registrationFrom.value)
      .subscribe( (response) => console.log(response) );
  }

}
