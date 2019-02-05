import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class CentersService {

  constructor(private http: HttpClient) { }


  getCenters(city): Observable<any>{
    return this.http.get<any> ( `https://0uumsbtgfd.execute-api.eu-central-1.amazonaws.com/Development/v0/centers/${city}`);
  }

  /*getCenter(city, centerId): Observable<any>{
    return this.http.get<any>(`https://0uumsbtgfd.execute-api.eu-central-1.amazonaws.com/Development/v0/centers/${city}/object/${centerId}`);
  }*/

  addCenter(data): Observable<any>{
    return this.http.post<any>('https://0uumsbtgfd.execute-api.eu-central-1.amazonaws.com/Development/v0/centers', data);
  }

  removeCenter(id): Observable<any>{
    return this.http.delete<any>(`https://0uumsbtgfd.execute-api.eu-central-1.amazonaws.com/Development/v0/centers/${id}`);
  }


}
