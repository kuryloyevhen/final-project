import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Rx from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BookingsService } from '../../../../../services/bookings.service';
import { CentersService } from '../../../../../services/centers.service';
import { Booking } from '../../../../../interfaces/booking';

@Component({
  selector: 'app-center-bookings',
  templateUrl: './center-bookings.component.html',
  styleUrls: ['./center-bookings.component.scss']
})
export class CenterBookingsComponent implements OnInit, OnDestroy {

  constructor(private server: BookingsService,
              private centersService: CentersService) { }

  private unsubscribe: Rx.Subject<void> = new Rx.Subject();

  bookingArr: Array<Booking> = [];
  centerId: string;
  checked: string;
  bookingsAll: number;
  bookingsCompleted: number;
  bookingsActive: number;

  ngOnInit() {
  }

  getBookingByCenterAll(city, centerName) {
    this.centersService.getCenters(city).pipe(takeUntil(this.unsubscribe))
      .subscribe( (response) => {
        for(let center of response.Items) {
          if(center.name == centerName) this.centerId = center.id;
        }
        this.server.getBookingByCity(city).pipe(takeUntil(this.unsubscribe))
          .subscribe( (response) =>  {
            let active = [];
            let completed = [];
            for(let booking of response){
              if(booking.centerId == this.centerId) {
                this.bookingArr.push(booking);
                if(booking.status == 'active') active.push(booking);
                if(booking.status == 'completed') completed.push(booking);
              }
            }
            this.bookingsAll = this.bookingArr.length;
            this.bookingsActive = active.length;
            this.bookingsCompleted = completed.length;
            this.checked = 'all';
          })
      })
  }

  getBookingByCenterActive(city, centerName) {
    this.centersService.getCenters(city).pipe(takeUntil(this.unsubscribe))
      .subscribe( (response) => {
        for(let center of response.Items) {
          if(center.name == centerName) this.centerId = center.id;
        }
        this.server.getBookingByCity(city).pipe(takeUntil(this.unsubscribe))
          .subscribe( (response) =>  {
            this.bookingArr = [];
            for(let booking of response){
              if(booking.centerId == this.centerId) {
                if(booking.status == 'active') this.bookingArr.push(booking);
              }
            }
            this.checked = 'active';
          })
      })
  }

  getBookingByCenterCompleted(city, centerName) {
    this.centersService.getCenters(city).pipe(takeUntil(this.unsubscribe))
      .subscribe( (response) => {
        for(let center of response.Items) {
          if(center.name == centerName) this.centerId = center.id;
        }
        this.server.getBookingByCity(city).pipe(takeUntil(this.unsubscribe))
          .subscribe( (response) =>  {
            this.bookingArr = [];
            for(let booking of response){
              if(booking.centerId == this.centerId) {
                if(booking.status == 'completed') this.bookingArr.push(booking);
              }
            }
            this.checked = 'completed';
          })
      })
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
