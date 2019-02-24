import { Component, OnDestroy } from '@angular/core';
import * as Rx from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BookingsService } from '../../../../../services/bookings.service';

@Component({
  selector: 'app-common-bookings',
  templateUrl: './common-bookings.component.html',
  styleUrls: ['./common-bookings.component.scss']
})
export class CommonBookingsComponent implements OnDestroy {

  constructor(private server: BookingsService) { }

  private unsubscribe: Rx.Subject<void> = new Rx.Subject();
  bookings: Array<any>;

  getBookingByCity(city: string){
    this.server.getBookingByCity(city).pipe(takeUntil(this.unsubscribe))
      .subscribe( (response) => this.bookings = response );
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
