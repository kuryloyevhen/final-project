import { Component, OnDestroy } from '@angular/core';
import * as Rx from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BookingsService } from '../../../../../services/bookings.service';
import { CentersService } from '../../../../../services/centers.service';

@Component({
  selector: 'app-city-bookings',
  templateUrl: './city-bookings.component.html',
  styleUrls: ['./city-bookings.component.scss']
})
export class CityBookingsComponent implements OnDestroy {

  constructor(private server: BookingsService,
              private centersService: CentersService) { }

  private unsubscribe: Rx.Subject<void> = new Rx.Subject();
  bookings: Array<any>;
  centers: Array<any>;
  checked: string;
  display: string = 'bookings';
  countCenters: number;
  bookingsAll: number;
  bookingsCompleted: number;
  bookingsActive: number;

  getBookingByCityAll(city: string){
    this.server.getBookingByCity(city).pipe(takeUntil(this.unsubscribe))
      .subscribe( (response) => {
        let completed = [];
        let active = [];
        this.bookings = response;
        console.log(this.bookings[0]);
        this.checked = 'all';
        this.display = 'bookings';
        this.bookingsAll = this.bookings.length;
        for(let booking of this.bookings){
          if(booking.status == 'active') active.push(booking);
          else if(booking.status == 'completed') completed.push(booking);
        }
        this.getCenters(city);
        this.bookingsActive = active.length;
        this.bookingsCompleted = completed.length;
    });
  }


  getBookingByCityActive(city: string) {
    console.log(city);
    this.server.getBookingByCity(city).pipe(takeUntil(this.unsubscribe))
      .subscribe( (response) => {
        this.bookings = [];
        for(let booking of response){
          if(booking.status == 'active') this.bookings.push(booking);
        }
        this.checked = 'active';
        this.display = 'bookings';
      });
  }

  getBookingByCityCompleted(city: string) {
    this.server.getBookingByCity(city).pipe(takeUntil(this.unsubscribe))
      .subscribe( (response) => {
        this.bookings = [];
        for(let booking of response){
          if(booking.status == 'completed') this.bookings.push(booking);
        }
        this.checked = 'completed';
        this.display = 'bookings';
      });
  }

  showCenters(){
    this.checked = 'centers';
    this.display = 'centers';
  }

  getCenters(city:string) {
    this.centersService.getCenters(city)
      .subscribe( (response) => {
        this.centers = response.Items;
        this.countCenters = this.centers.length;
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
