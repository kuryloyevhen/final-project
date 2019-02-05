import { Component, OnInit } from '@angular/core';
import { CentersService } from '../../../services/centers.service';

@Component({
  selector: 'app-addcenter',
  templateUrl: './addcenter.component.html',
  styleUrls: ['./addcenter.component.scss']
})
export class AddcenterComponent implements OnInit {

  constructor(private server: CentersService) { }

  ngOnInit() {
  }

  addCenter(city: string, lon: number, lat: number, cost: number, refundDep: number, name: string){
    let data = {
      "id": 3,
      "city": "London",
      "location": {
        "lon": "25.342",
        "lat": "11.193"
      },
      "availableTime": {
        "sunday": {
            "isOpen": false
        },
        "saturday": {
            "closeTime": "15.00",
            "openTime": "10.00",
            "isOpen": true
        },
        "tuesday": {
            "closeTime": "17.00",
            "openTime": "9.00",
            "isOpen": true
        },
        "wednesday": {
            "closeTime": "17.00",
            "openTime": "9.00",
            "isOpen": true
        },
        "thursday": {
            "closeTime": "17.00",
            "openTime": "9.00",
            "isOpen": true
        },
        "friday": {
            "closeTime": "17.00",
            "openTime": "9.00",
            "isOpen": true
        },
        "monday": {
            "closeTime": "17.00",
            "openTime": "9.00",
            "isOpen": true
        }
    },
      "cost": 20,
      "refundDeposit": 100,
      "name": "Place 2"
    };
    this.server.addCenter(data)
      .subscribe( (response) => {
        console.log(response);
      } );
  }

}
