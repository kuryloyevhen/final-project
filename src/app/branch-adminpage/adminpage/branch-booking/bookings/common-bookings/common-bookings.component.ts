import { Component } from '@angular/core';
import { BookingsService } from '../../../../../services/bookings.service';

@Component({
  selector: 'app-common-bookings',
  templateUrl: './common-bookings.component.html',
  styleUrls: ['./common-bookings.component.scss']
})
export class CommonBookingsComponent {

  constructor(private server: BookingsService) { }

  getBookingByCity(city: string){
    this.server.getBookingByCity(city)
      .subscribe( (response) => console.log(response) );
  }

}
