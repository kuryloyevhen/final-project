import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../../../../../services/cities.service';

@Component({
  selector: 'app-all-cities',
  templateUrl: './all-cities.component.html',
  styleUrls: ['./all-cities.component.scss']
})
export class AllCitiesComponent implements OnInit {

  constructor(private server: CitiesService) { }

  ngOnInit() {
      this.server.getCities()
        .subscribe( (response) => this.cities = response.Items );
  }

    cities: Array<any> = [];



    removeCity(id: string){
      this.server.removeCity(id)
        .subscribe( (response) => console.log(response) );
    }

}
