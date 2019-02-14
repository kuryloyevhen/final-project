import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(private http: HttpClient) { }

  urlBookingByUser: string = 'https://0uumsbtgfd.execute-api.eu-central-1.amazonaws.com/Development/v0//bookings/user/';
  urlBookingByCity: string = 'https://0uumsbtgfd.execute-api.eu-central-1.amazonaws.com/Development/v0//bookings/city/';

  getBookingByUser(id, status): Observable<any> {
    return this.http.get<any>(this.urlBookingByUser+`${id}`+'/status/'+`${status}`);
  }

  getBookingByCity(city): Observable<any> {
    return this.http.get<any>(this.urlBookingByCity+`${city}`);
  }
}
