import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.scss']
})
export class AdminpageComponent implements OnInit {

  constructor(private server: HttpService) { }

  ngOnInit() {}

  options: number = 0;
  option: number = 0;
  selectedA = '';
  selectedO = '';
  cities = [];


  selectArticle(article: string){
    this.selectedA = article;
  }

  selectOption(option: string){
    this.selectedO = option;
  }

  showOptions(options: number){    //Can't get string value
    this.options = options;
  }

  showOption(option: number){    //Can't get string value
    this.option = option;
  }


  getCities(){
    this.server.getCityList()
      .subscribe( (response) => {
        for(let city of response){
          this.cities.push(city.city);
        }
      });
  }

  addCity(name: string){
    let data = {
      "city": name
    };
    this.server.addCity(data)
      .subscribe( (response) => console.log(response) );
  }

  deleteCity(id){
    this.server.deleteCity(id)
      .subscribe( (response) => console.log(response) );
  }


}
