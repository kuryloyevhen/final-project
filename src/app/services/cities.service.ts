import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cities, City } from '../interfaces/city';

@Injectable()

export class CitiesService {

  constructor(private http: HttpClient) { }


  urlCities: string = 'https://0uumsbtgfd.execute-api.eu-central-1.amazonaws.com/Development/v0/cities';
  urlCity: string = 'https://0uumsbtgfd.execute-api.eu-central-1.amazonaws.com/Development/v0/cities';


  getCities(): Observable<Cities>{
    return this.http.get<Cities>(this.urlCities);
  }

  addCity(data): Observable<Cities>{
    return this.http.post<any>(this.urlCity, data);
  }

  removeCity(id): Observable<any>{
    return this.http.delete<any>(`https://0uumsbtgfd.execute-api.eu-central-1.amazonaws.com/Development/v0/cities/${id}`);
  }


}
