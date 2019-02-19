import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Center, Centers } from '../interfaces/center';

@Injectable()

export class CentersService {

  constructor(private http: HttpClient) { }


  getCenters(city): Observable<Centers>{
    return this.http.get<Centers> ( `https://0uumsbtgfd.execute-api.eu-central-1.amazonaws.com/Development/v0/centers/${city}`);
  }

  getCenter(city, centerId): Observable<Center>{
    return this.http.get<Center>(`https://0uumsbtgfd.execute-api.eu-central-1.amazonaws.com/Development/v0/centers/${city}/object/${centerId}`);
  }

  addCenter(data): Observable<Centers>{
    return this.http.post<Centers>('https://0uumsbtgfd.execute-api.eu-central-1.amazonaws.com/Development/v0/centers', data);
  }

  removeCenter(id): Observable<any>{
    return this.http.delete<any>(`https://0uumsbtgfd.execute-api.eu-central-1.amazonaws.com/Development/v0/centers/${id}`);
  }

  updateCenter(id, data): Observable<Center>{
    return this.http.post<Center>(`https://0uumsbtgfd.execute-api.eu-central-1.amazonaws.com/Development/v0/centers/object/${id}/update`, data)
  }


}
