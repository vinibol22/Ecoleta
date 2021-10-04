
import { Usuario } from "./Usuario";

export class Postagem{ 
     public id:number;  
     public titulo:string; 
     public texto:string; 
     public localizacao:string;
      public data:Date;
      public tema:string;
     public usuario:Usuario;
   
  
  }