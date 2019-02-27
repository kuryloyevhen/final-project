import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Authorization, UpdateToken } from '../interfaces/authorization';

@Injectable()

export class AuthService {

  constructor(private http: HttpClient) {}

  urlSignIn: string = 'https://0uumsbtgfd.execute-api.eu-central-1.amazonaws.com/Development/v0/auth/signin';
  urlRT: string = 'https://0uumsbtgfd.execute-api.eu-central-1.amazonaws.com/Development/v0/auth/refresh';

  signIn(data): Observable<Authorization> {
    return this.http.post<Authorization>(this.urlSignIn, data);
  }

  getAccessToken(): string {
    return localStorage.getItem("access_token");
  }

  getRefreshToken(): string {
    return localStorage.getItem("refresh_token");
  }

  getNewAccessToken(): Observable<UpdateToken> {
    return this.http.post<UpdateToken>(this.urlRT, { "refresh_token": this.getRefreshToken() });
  }


}
