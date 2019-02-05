import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';

@Injectable()

export class Interceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const clone = req.clone({
      headers: req.headers.set('Authorization', `Basic ${localStorage.getItem("access_token")}`)}
      //setHeaders: {
        //Authorization: `Bearer ${localStorage.getItem("access_token")}`
      //}
    ); console.log(clone);
    return next.handle(clone)
      /*.pipe(tap((event: HttpEvent<any>) => {
        (err: any) => {
          if(err instanceof HttpErrorResponse){
            if(err.status === 401){
              console.log(err.status);
              this.auth.refreshToken();
            }
          }
        }
      }))*/;
    }
  }
