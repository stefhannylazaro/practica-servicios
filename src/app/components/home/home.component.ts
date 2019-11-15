import { Component, OnInit } from '@angular/core';
import { Servicio } from '../../models/Servicio';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public titulo:string;
  public servicios:Array<Servicio>;
  public filServicios:Array<Servicio>;
  public mostrar:boolean;
  public tipos:Array<any>;
  public selected:Number;
  public display:String;
  public subtitle:String;//para el form
  public subtitleEdit:String;
  public service:Servicio;//obj para crear serv
  public serviceEdit:Servicio;//obj a editar
  constructor() {
    this.titulo="Servicios";
    this.servicios=[
      new Servicio(1,'Auto','abc',1),
      new Servicio(2,'Salud','abcd',2),
      new Servicio(3,'Salud','axy',2),
      new Servicio(4,'Hogar','axy',3),
      new Servicio(5,'Hogar','axy',3)
     ];
     this.filServicios=[];
     this.mostrar=true;
     this.tipos=[
       {id:0,nombre:"Todos"},
       {id:1,nombre:"Autos"},
       {id:2,nombre:"Salud"},
       {id:3,nombre:"Hogar"}
     ];
     this.selected=0;
     this.display="none";
     this.subtitle="Crear";
     this.subtitleEdit="Editar";
     this.service=new Servicio(0,"","",0);
  }

  ngOnInit() {//inicializa el componente 
   //console.log(this.servicios);
   this.getServices(0);//todos
  }
  
  getServices(tipo:number){
    this.selected=tipo;
    this.filServicios=[];
    if(tipo){//1,2,3
    this.servicios.forEach((item,index)=>{
      if(tipo==item.tipo){
        this.filServicios.push(item);
      }
    });
    } else {//tipo=0 (todos)
      this.filServicios=this.servicios;
      console.log(this.filServicios);
    }
  }
  showService(objService){
    this.serviceEdit=objService;
    this.display="block";
  }
  closeModal(){
    this.display="none";
  }

}
