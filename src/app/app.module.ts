import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { NavigationComponent } from './navigation/navigation.component';

import { Interceptor } from './services/interceptor';
import { AuthService } from './services/auth.service';
import { RouterGuard } from './services/router-guard';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule
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
