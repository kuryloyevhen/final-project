import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()

export class Interceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const clone = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${localStorage.getItem("access_token")}`)}
    );
    return next.handle(clone)
      /*.pipe(tap((event: HttpEvent<any>) => {
        (err: any) => {
          if(err instanceof HttpErrorResponse){
            if(err.status === 403){
              let data = {
                "refresh_token": localStorage.getItem("refresh_token")
              };
              this.auth.refreshToken(data)
                .subscribe( (response) => console.log(response) );
            }
          }
        }
      }))*/;
    }
  }
