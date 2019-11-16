import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { C404Component } from './components/c404/c404.component';
import { FormServiceComponent } from './components/form-service/form-service.component';
import { NotificacionComponent } from './components/notificacion/notificacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    C404Component,
    FormServiceComponent,
    NotificacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
