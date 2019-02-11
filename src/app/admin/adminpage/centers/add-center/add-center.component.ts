import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CentersService } from '../../../../services/centers.service';

@Component({
  selector: 'app-add-center',
  templateUrl: './add-center.component.html',
  styleUrls: ['./add-center.component.scss']
})

export class AddCenterComponent {

  constructor(private fb: FormBuilder,
              private server: CentersService) { }

  addCenterForm = this.fb.group({
    "city": ["Berlin"],
    "location": this.fb.group({
      "lon": [''],
      "lat": [''],
      "address": ['']
    }),
    "availableTime": this.fb.group({
      "monday": this.fb.group({
        "openTime": ['7.00'],
        "closeTime": ['20.00'],
        "isOpen": [true]
      }),
      "tuesday": this.fb.group({
        "openTime": ['7.00'],
        "closeTime": ['20.00'],
        "isOpen": [true]
      }),
      "wednesday": this.fb.group({
        "openTime": ['7.00'],
        "closeTime": ['20.00'],
        "isOpen": [true]
      }),
      "thuesday": this.fb.group({
        "openTime": ['7.00'],
        "closeTime": ['20.00'],
        "isOpen": [true]
      }),
      "friday": this.fb.group({
        "openTime": ['7.00'],
        "closeTime": ['20.00'],
        "isOpen": [true]
      }),
      "saturday": this.fb.group({
        "openTime": ['7.00'],
        "closeTime": ['20.00'],
        "isOpen": [true]
      }),
      "sunday": this.fb.group({
        "openTime": ['7.00'],
        "closeTime": ['20.00'],
        "isOpen": [true]
      })
    }),
    "cost": [10],
    "refundDeposit": [100],
    "name": ['']
  });

  addCenter(){
    this.server.addCenter(this.addCenterForm.value)
      .subscribe( (response) => {
        console.log(response);
      } );
  }

}
