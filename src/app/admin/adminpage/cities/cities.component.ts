import { Component } from '@angular/core';
import { CitiesService } from '../../../services/cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent {

  constructor(private server: CitiesService) { }

  city: Object = {};

  getCity(id){
    this.server.getCity(id)
      .subscribe( (response) => {
        console.log(response);
      } );
  }





}
