import { Component, OnInit } from '@angular/core';
import { CentersService } from '../../../services/centers.service';

@Component({
  selector: 'app-centers',
  templateUrl: './centers.component.html',
  styleUrls: ['./centers.component.scss']
})
export class CentersComponent implements OnInit {

  constructor(private server: CentersService) { }

  ngOnInit() {
  }


  center: Object = {};




  /*getCenter(id){
    this.server.getCenter(id)
      .subscribe( (response) => {
        console.log(response);
      } );
  }*/





}
