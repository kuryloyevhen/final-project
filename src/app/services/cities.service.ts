import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cities, City, RemoveCity } from '../interfaces/city';

@Injectable()

export class CitiesService {

  constructor(private http: HttpClient) { }


  urlCities: string = 'https://0uumsbtgfd.execute-api.eu-central-1.amazonaws.com/Development/v0/cities/';


  getCities(): Observable<Cities>{
    return this.http.get<Cities>(this.urlCities);
  }

  addCity(data): Observable<Cities>{
    return this.http.post<any>(this.urlCities, data);
  }

  removeCity(id): Observable<RemoveCity>{
    return this.http.delete<RemoveCity>(this.urlCities + id );
  }


}
