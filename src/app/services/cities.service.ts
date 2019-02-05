import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class CitiesService {

  constructor(private http: HttpClient) { }


  urlCities: string = 'https://0uumsbtgfd.execute-api.eu-central-1.amazonaws.com/Development/v0/cities';
  urlCity: string = 'https://0uumsbtgfd.execute-api.eu-central-1.amazonaws.com/Development/v0/cities';


  getCities(): Observable<any>{
    return this.http.get<any>(this.urlCities);
  }

  getCity(id): Observable<any>{
    return this.http.get<any>(this.urlCity);
  }

  addCity(data): Observable<any>{
    return this.http.post<any>(this.urlCity, data);
  }

  removeCity(id): Observable<any>{
    return this.http.delete<any>(`https://0uumsbtgfd.execute-api.eu-central-1.amazonaws.com/Development/v0/cities/${id}`);
  }


}
