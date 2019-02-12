import { Component } from '@angular/core';
import { ReservationsService } from '../../../../services/reservations.service';


@Component({
  selector: 'app-user-reservations',
  templateUrl: './user-reservations.component.html',
  styleUrls: ['./user-reservations.component.scss']
})
export class UserReservationsComponent {

  constructor(private server: ReservationsService) { }

  getBookingAll(id: string, status: string = 'all'){
    this.server.getBookingByUser(id, status)
      .subscribe( (response) => console.log(response) );
  }

  getBookingCompleted(id: string, status: string = 'completed'){
    this.server.getBookingByUser(id, status)
      .subscribe( (response) => console.log(response) );
  }

  getBookingActive(id: string, status: string = 'active'){
    this.server.getBookingByUser(id, status)
      .subscribe( (response) => console.log(response) );
  }

}
