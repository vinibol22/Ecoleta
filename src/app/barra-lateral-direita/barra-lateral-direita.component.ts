import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-lateral-direita',
  templateUrl: './barra-lateral-direita.component.html',
  styleUrls: ['./barra-lateral-direita.component.css']
})
export class BarraLateralDireitaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(){
  }

}
