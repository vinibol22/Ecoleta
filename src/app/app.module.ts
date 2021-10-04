import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RodapeComponent } from './rodape/rodape.component';

import { MenuComponent } from './menu/menu.component';

import { InicioComponent } from './inicio/inicio.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { TemaComponent } from './tema/tema.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    MenuComponent,
    InicioComponent,
    EntrarComponent,
    CadastrarComponent,
    MenuComponent,
    BarraLateralComponent,
    TemaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide : LocationStrategy, 
    useClass : HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
