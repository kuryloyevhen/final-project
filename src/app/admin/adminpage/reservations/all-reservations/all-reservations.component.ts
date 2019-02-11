import { Component } from '@angular/core';
import { ReservationsService } from '../../../../services/reservations.service';


@Component({
  selector: 'app-all-reservations',
  templateUrl: './all-reservations.component.html',
  styleUrls: ['./all-reservations.component.scss']
})
export class AllReservationsComponent {

  constructor(private server: ReservationsService) { }

  getBookingAll(id: string, status: string = 'all'){
    this.server.getBooking(id, status)
      .subscribe( (response) => console.log(response) );
  }

  getBookingCompleted(id: string, status: string = 'completed'){
    this.server.getBooking(id, status)
      .subscribe( (response) => console.log(response) );
  }

  getBookingActive(id: string, status: string = 'active'){
    this.server.getBooking(id, status)
      .subscribe( (response) => console.log(response) );
  }

}
