import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css']
})
export class BarraLateralComponent implements OnInit {
  postagem: Postagem = new Postagem()
  foto=environment.foto;
  constructor(
    private router: Router,
    private temaService: TemaService,
    public auth: AuthService,
    private postagemService: PostagemService,
    private alertas: AlertasService
  ) { }

  ngOnInit(){
  }

}
