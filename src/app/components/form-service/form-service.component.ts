import { Component, OnInit, Input } from '@angular/core';
import {Servicio} from '../../models/Servicio';
@Component({
  selector: 'app-form-service',
  templateUrl: './form-service.component.html',
  styleUrls: ['./form-service.component.css']
})
export class FormServiceComponent implements OnInit {
  @Input() public title:string;
  @Input() public objService:Servicio;
  @Input() public type:string;
  public tipos:Array<any>;
  public showNotification:boolean;
  public msjNotificacion:String;
  public typeNotificacion:String;
  //public service:Servicio;
  constructor() {
    //this.objService=new Servicio(0,"","",1);
    this.tipos=[
      {id:1,nombre:"Autos"},
      {id:2,nombre:"Salud"},
      {id:3,nombre:"Hogar"}
    ];
    this.showNotification=false;
    this.msjNotificacion="";
    this.typeNotificacion="";
  }

  ngOnInit() {
  }
  onSubmit(form:any) {
    console.log("enviar");
    this.showNotification=true;
    if(this.type=="create"){
      this.typeNotificacion="success";
      this.msjNotificacion="Registrado con exito";
      let servicios=JSON.parse(localStorage.getItem('serviciosL'));
      servicios.push(this.objService);
      localStorage.setItem('serviciosL',JSON.stringify(servicios));
      setTimeout(()=>{
        this.showNotification=false;
        form.reset();
        this.objService.tipo=0;//set select tipo 0
      },2000);
    } else {
      //editar servicio
    }
    
  }

}
