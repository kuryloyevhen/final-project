import { Injectable, Inject, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { HttpResponse, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()

export class Interceptor implements HttpInterceptor {

  constructor(private auth: AuthService,
              public inj: Injector,
              public loadInject: Injector) {}

  private applyCredentials = (req: HttpRequest<any>, token: string) => {
    return req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const auth = this.inj.get(AuthService);
    const authReq = this.applyCredentials(req, auth.getAccessToken());
    return next.handle(authReq).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse){
          return event;
        }
      }),
      catchError((error: any): Observable<any> => {
        if (error instanceof HttpErrorResponse){
          if (error.status === 403) {
            return auth.getNewAccessToken()
              .pipe(mergeMap((res) => {
                localStorage.setItem('access_token', (res as any).access_token);
                return next.handle(this.applyCredentials(req, auth.getAccessToken()))
              }));

            }

          }
        } )
    )
}






/* return auth.getNewAccessToken()
  .pipe(mergeMap((res) => {
    localStorage.setItem('access_token', (res as any).access_token);
    return next.handle(this.applyCredentials(req, auth.getAccessToken()))
  })); */
}
