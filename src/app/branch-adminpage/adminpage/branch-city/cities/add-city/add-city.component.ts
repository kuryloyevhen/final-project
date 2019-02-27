import { Component, OnDestroy  } from '@angular/core';
import * as Rx from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';
import { CitiesService } from '../../../../../services/cities.service';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.scss']
})
export class AddCityComponent {

  constructor(private fb: FormBuilder,
              private server: CitiesService) { }

  private unsubscribe: Rx.Subject<void> = new Rx.Subject();
  patternCity = /[a-z\s]/i;
  patternCoord = /^(\-?\d+(\.\d+)?)/;
  isVisible: boolean = false;

  addCityForm = this.fb.group({
    city: ['', Validators.compose([Validators.required, Validators.pattern(this.patternCity)])],
    location: this.fb.group({
      lon: ['', Validators.compose([Validators.required, Validators.min(-180), Validators.max(180), Validators.pattern(this.patternCoord) ])],
      lat: ['', Validators.compose([Validators.required, Validators.min(-90), Validators.max(90), Validators.pattern(this.patternCoord)  ])]
    })
  });



  addCity() {
    if(this.addCityForm.valid){
      this.server.addCity(this.addCityForm.value).pipe(takeUntil(this.unsubscribe))
        .subscribe( () => {
          this.isVisible = true;
          setTimeout( () => this.isVisible = false, 5000)
        });
    }
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
