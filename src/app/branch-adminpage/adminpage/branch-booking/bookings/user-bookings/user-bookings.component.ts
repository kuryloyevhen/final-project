import { Component } from '@angular/core';
import { BookingsService } from '../../../../../services/bookings.service';


@Component({
  selector: 'app-user-bookings',
  templateUrl: './user-bookings.component.html',
  styleUrls: ['./user-bookings.component.scss']
})
export class UserBookingsComponent {

  constructor(private server: BookingsService) { }

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
