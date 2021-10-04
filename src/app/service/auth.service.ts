import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http : HttpClient
  ) { }

  entrar(usuarioLogin:UsuarioLogin):Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>('https://ecoletagen.herokuapp.com/usuarios/logar',usuarioLogin)
  }
  cadastrar(usuario:Usuario):Observable<Usuario> {
    return this.http.post<Usuario>('https://ecoletagen.herokuapp.com/usuarios/cadastrar',usuario)
  }

  logado(){
    let ok:boolean = false;
    if(environment.token != ''){
      ok=true
    }
    return ok;
  }

}
