import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthorizationComponent } from './homepage/authorization/authorization.component';
import { RegistrationComponent } from './homepage/registration/registration.component';
import { HeaderComponent } from './header/header.component';

import { Interceptor } from './services/interceptor';
import { AuthService } from './services/auth.service';
import { RouterGuard } from './services/router-guard';




@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AuthorizationComponent,
    RegistrationComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    RouterGuard,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
