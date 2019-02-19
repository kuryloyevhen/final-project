import { Injectable, Inject, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { HttpResponse, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()

export class Interceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  private applyCredentials = (req: HttpRequest<any>, token: string) => {
    return req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = this.applyCredentials(req, this.auth.getAccessToken());
    return next.handle(authReq).pipe(
      catchError( (error): Observable<any> => {
          if ( error.status === 403 ) {
            return this.auth.getNewAccessToken()
              .pipe(mergeMap((res: any): Observable<any> => {
                localStorage.setItem('access_token', (res).access_token)
                return next.handle(this.applyCredentials(req, this.auth.getAccessToken()));
              }))

            }

          }));
        }
}
