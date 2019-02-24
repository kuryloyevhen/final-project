import { Component, OnDestroy } from '@angular/core';
import * as Rx from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BookingsService } from '../../../../../services/bookings.service';


@Component({
  selector: 'app-user-bookings',
  templateUrl: './user-bookings.component.html',
  styleUrls: ['./user-bookings.component.scss']
})
export class UserBookingsComponent implements OnDestroy {

  constructor(private server: BookingsService) { }

  private unsubscribe: Rx.Subject<void> = new Rx.Subject();
  bookings: Array<any>;
  checked: string;


  getBookingAll(id: string, status: string = 'all'){
    this.server.getBookingByUser(id, status).pipe(takeUntil(this.unsubscribe))
      .subscribe( (response) => {
        this.bookings = response;
        this.checked = status;
      });
  }

  getBookingCompleted(id: string, status: string = 'completed'){
    this.server.getBookingByUser(id, status).pipe(takeUntil(this.unsubscribe))
      .subscribe( (response) => {
        this.bookings = response;
        this.checked = status;
      });
  }

  getBookingActive(id: string, status: string = 'active'){
    this.server.getBookingByUser(id, status).pipe(takeUntil(this.unsubscribe))
      .subscribe( (response) => {
        this.bookings = response;
        this.checked = status
      });
  }



  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
