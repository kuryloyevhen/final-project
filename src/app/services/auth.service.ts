import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class AuthService {

  constructor(private http: HttpClient) {}

  urlSignUp: string = 'https://0uumsbtgfd.execute-api.eu-central-1.amazonaws.com/Development/v0/auth/signup';
  urlSignIn: string = 'https://0uumsbtgfd.execute-api.eu-central-1.amazonaws.com/Development/v0/auth/signin';
  urlRT: string = 'https://0uumsbtgfd.execute-api.eu-central-1.amazonaws.com/Development/v0/auth/refresh';


  signUp(data): Observable<any> {
    return this.http.post<any>(this.urlSignUp, data)
  }

  signIn(data): Observable<any> {
    return this.http.post<any>(this.urlSignIn, data);
  }

  getAccessToken(): string {
    return localStorage.getItem("access_token");
  }

  getRefreshToken(): string {
    return localStorage.getItem("refresh_token");
  }

  getNewAccessToken(): Observable<any> {
    return this.http.post<any>(this.urlRT, { "refresh_token": this.getRefreshToken() });
  }


}
