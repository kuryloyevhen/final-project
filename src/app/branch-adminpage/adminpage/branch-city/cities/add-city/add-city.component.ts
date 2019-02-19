import { Component } from '@angular/core';
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

  addCityForm = this.fb.group({
    city: ['', Validators.required],
    location: this.fb.group({
      lon: ['', Validators.required],
      lat: ['', Validators.required]
    })
  });



  addCity() {
    this.server.addCity(this.addCityForm.value)
      .subscribe( (response) => {
        console.log(response);
      } );
  }

}
