import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor(private http: HttpClient) { }

  urlReservations: string = 'https://0uumsbtgfd.execute-api.eu-central-1.amazonaws.com/Development/v0//bookings/user/';

  getBooking(id, status): Observable<any>{
    return this.http.get<any>(this.urlReservations+`${id}`+'/status/'+`${status}`);
  }
}
