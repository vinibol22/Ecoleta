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
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { EventosComponent } from './eventos/eventos.component';
import { SuporteComponent } from './suporte/suporte.component';



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
    TemaDeleteComponent,
    TemaEditComponent,
    PostagemDeleteComponent,
    PostagemEditComponent,
    EventosComponent,
    SuporteComponent,
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
