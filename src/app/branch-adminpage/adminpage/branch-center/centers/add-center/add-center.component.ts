import { Component, OnDestroy } from '@angular/core';
import * as Rx from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';
import { CentersService } from '../../../../../services/centers.service';

@Component({
  selector: 'app-add-center',
  templateUrl: './add-center.component.html',
  styleUrls: ['./add-center.component.scss'],
})

export class AddCenterComponent implements OnDestroy {

  constructor(private fb: FormBuilder,
              private server: CentersService) { }

  private unsubscribe: Rx.Subject<void> = new Rx.Subject();

  patternCity = /[a-z\s]/i;
  patternAddr = /[a-z0-9,-\.\s]/i;
  patternCoords = /^(\-?\d+(\.\d+)?)/;
  patternTime = /^([0-9]|0[0-9]|1[0-9]|2[0-3])\.[0-5][0-9]$/;

  addCenterForm = this.fb.group({
    "city": ["Berlin", Validators.compose([Validators.required, Validators.pattern(this.patternCity)])],
    "location": this.fb.group({
      "lon": ['', Validators.compose([Validators.required, Validators.min(-180), Validators.max(180), Validators.pattern(this.patternCoords)])],
      "lat": ['', Validators.compose([Validators.required, Validators.min(-90), Validators.max(90), Validators.pattern(this.patternCoords)])],
      "address": ['', Validators.compose([Validators.required, Validators.pattern(this.patternAddr)])]
    }),
    "availableTime": this.fb.group({
      "monday": this.fb.group({
        "openTime": ['7.00', Validators.compose([Validators.required, Validators.pattern(this.patternTime)])],
        "closeTime": ['20.00', Validators.compose([Validators.required, Validators.pattern(this.patternTime)])],
        "isOpen": [true]
      }),
      "tuesday": this.fb.group({
        "openTime": ['7.00', Validators.compose([Validators.required, Validators.pattern(this.patternTime)])],
        "closeTime": ['20.00', Validators.compose([Validators.required, Validators.pattern(this.patternTime)])],
        "isOpen": [true]
      }),
      "wednesday": this.fb.group({
        "openTime": ['7.00', Validators.compose([Validators.required, Validators.pattern(this.patternTime)])],
        "closeTime": ['20.00', Validators.compose([Validators.required, Validators.pattern(this.patternTime)])],
        "isOpen": [true]
      }),
      "thursday": this.fb.group({
        "openTime": ['7.00', Validators.compose([Validators.required, Validators.pattern(this.patternTime)])],
        "closeTime": ['20.00', Validators.compose([Validators.required, Validators.pattern(this.patternTime)])],
        "isOpen": [true]
      }),
      "friday": this.fb.group({
        "openTime": ['7.00', Validators.compose([Validators.required, Validators.pattern(this.patternTime)])],
        "closeTime": ['20.00', Validators.compose([Validators.required, Validators.pattern(this.patternTime)])],
        "isOpen": [true]
      }),
      "saturday": this.fb.group({
        "openTime": ['7.00', Validators.compose([Validators.required, Validators.pattern(this.patternTime)])],
        "closeTime": ['20.00', Validators.compose([Validators.required, Validators.pattern(this.patternTime)])],
        "isOpen": [true]
      }),
      "sunday": this.fb.group({
        "openTime": ['7.00', Validators.compose([Validators.required, Validators.pattern(this.patternTime)])],
        "closeTime": ['20.00', Validators.compose([Validators.required, Validators.pattern(this.patternTime)])],
        "isOpen": [true]
      })
    }),
    "cost": [10, Validators.compose([Validators.required, Validators.pattern(/[0-9]/)])],
    "refundDeposit": [100, Validators.compose([Validators.required, Validators.pattern(/[0-9]/)])],
    "name": ['', Validators.required],
    "bikesCount": [0, Validators.compose([Validators.required, Validators.pattern(/[0-9]/)])]
  });

  addCenter(){
    this.server.addCenter(this.addCenterForm.value).pipe(takeUntil(this.unsubscribe))
      .subscribe();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
