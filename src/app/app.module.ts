import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuporteComponent } from './suporte/suporte.component';
import { EventosComponent } from './eventos/eventos.component';


@NgModule({
  declarations: [
    AppComponent,
    SuporteComponent,
    EventosComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
