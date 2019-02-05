import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../../services/cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  constructor(private server: CitiesService) { }

  ngOnInit() {
  }


  cities: Array<any> = [];
  city: Object = {};


  getCities(){
    this.server.getCities()
      .subscribe( (response) => {
        this.cities = response.Items;
        console.log(response);
        console.log(this.cities);
      } );
  }

  getCity(id){
    this.server.getCity(id)
      .subscribe( (response) => {
        console.log(response);
      } );
  }

  addCity(city: string, lon: number, lat: number){
    let data = {
      "city": city,
      "location": {
        "lon": lon,
        "lat": lat
      }
    };
    this.server.addCity(data)
      .subscribe( (response) => {
        console.log(response);
      } );
  }

  removeCity(id: string){
    console.log(id);
    this.server.removeCity(id)
      .subscribe( (response) => {
        console.log(response);
      } );
  }

}
