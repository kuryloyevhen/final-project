import { Component, OnInit } from '@angular/core';
import { CentersService } from '../../../services/centers.service';

@Component({
  selector: 'app-allcenters',
  templateUrl: './allcenters.component.html',
  styleUrls: ['./allcenters.component.scss']
})
export class AllcentersComponent implements OnInit {

  constructor(private server: CentersService) { }

  ngOnInit() {
  }

  centers: Array<any> = [];


  getCenters(city: string){
    this.server.getCenters(city)
      .subscribe( (response) => {
        this.centers = response.Items;
        console.log(this.centers);
      } );
  }

  removeCenter(id: string){
    console.log(id);
    this.server.removeCenter(id)
      .subscribe( (response) => {
        console.log(response);
      } );
  }

}
