import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Postagem } from '../model/Postagem';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-barra-lateral-direita',
  templateUrl: './barra-lateral-direita.component.html',
  styleUrls: ['./barra-lateral-direita.component.css']
})
export class BarraLateralDireitaComponent implements OnInit {


  postagem: Postagem = new Postagem();
  listaPostagens: Postagem[];
  idPostagem : Postagem = new Postagem();

  tituloPost : string
  constructor(    private router: Router,
    private temaService: TemaService,
    public auth: AuthService,
    private postagemService: PostagemService,
    private alertas: AlertasService) { }

  ngOnInit(){
  }


  getAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp;
    });
  }

  findByTituloPostagem(){
    if(this.tituloPost == ''){
      this.getAllPostagens();
    }else{
       this.postagemService.getByTituloPostagem(this.tituloPost).subscribe((resp:Postagem[])=>{
      this.listaPostagens=resp
    })
    }
   
  }
}
