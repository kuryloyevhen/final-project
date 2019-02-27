import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Center, Centers, RemoveCenter } from '../interfaces/center';

@Injectable()

export class CentersService {

  constructor(private http: HttpClient) { }

  centerId: string;

  urlCenters: string = 'https://0uumsbtgfd.execute-api.eu-central-1.amazonaws.com/Development/v0/centers/'

  getCenters(city): Observable<Centers>{
    return this.http.get<Centers> ( this.urlCenters + city);
  }

  getCenter(city, centerId): Observable<Center>{
    return this.http.get<Center>(this.urlCenters + city + '/object/' + centerId);
  }

  addCenter(data): Observable<Centers>{
    return this.http.post<Centers>( this.urlCenters, data);
  }

  removeCenter(id): Observable<RemoveCenter>{
    return this.http.delete<RemoveCenter>( this.urlCenters + id);
  }

  updateCenter(id, data): Observable<Center>{
    return this.http.post<Center>(this.urlCenters + 'object/' + id + '/update', data)
  }


}
