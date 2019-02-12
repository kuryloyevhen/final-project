import { Component } from '@angular/core';
import { ReservationsService } from '../../../../services/reservations.service';

@Component({
  selector: 'app-common-reservations',
  templateUrl: './common-reservations.component.html',
  styleUrls: ['./common-reservations.component.scss']
})
export class CommonReservationsComponent {

  constructor(private server: ReservationsService) { }

  getBookingByCity(city: string){
    this.server.getBookingByCity(city)
      .subscribe( (response) => console.log(response) );
  }

}
