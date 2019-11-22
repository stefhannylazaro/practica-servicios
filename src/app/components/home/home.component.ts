import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, DoCheck } from '@angular/core';
import { Servicio } from '../../models/Servicio';
import {FormServiceComponent} from '../form-service/form-service.component';
import {FirestoreService} from '../../services/firestore/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit,DoCheck {
  public titulo:string;
  public servicios:Array<Servicio>;
  public filServicios:Array<Servicio>;
  public mostrar:boolean;
  public tipos:Array<any>;
  public selected:number;
  public display:String;
  public subtitle:String;//para el form
  public subtitleEdit:String;
  public service:Servicio;//obj para crear serv
  public serviceEdit:Servicio;//obj a editar
  @ViewChild('nameTitle',{static:false}) nameTitleV:ElementRef;
  @ViewChild(FormServiceComponent,{static:false}) formC:FormServiceComponent;

  constructor(
    private _firestoreService:FirestoreService
  ) {
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
     if(localStorage.getItem('serviciosL')){
       console.log("una vez");
     } else {
      localStorage.setItem('serviciosL',JSON.stringify(this.servicios));
     }
     //localStorage.setItem('serviciosL',JSON.stringify(this.servicios));//crear - update
     //JSON.parse(localStorage.getItem('serviciosL'));
  }

  ngOnInit() {//inicializa el componente 
   //console.log(this.servicios);
   this.getServices(0);//todos
   this.getServiceFirebase();
  }
  ngAfterViewInit() {//despues que se inicializa el componente
    console.log("ngAfterViewInit");
    console.log(this.nameTitleV.nativeElement);
    console.log("form desde el padre");
    // console.log(this.formC.tipos);
  }
  ngDoCheck(){//escucha ante cualquier cambio(siempre trae la dta actualizada)
    console.log("ngDoCheck");
    // if(this.formC){
    //   console.log(this.formC);
    //   if(this.formC.typeNotificacion==="success"){
    //     this.getServices(this.selected);
    //     //this.getServices(this.formC.objService.tipo);
    //   }
    // }
  }
  getServices(tipo:number){
    this.selected=tipo;
    this.filServicios=[];
    this.servicios=JSON.parse(localStorage.getItem('serviciosL'));
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
  getServiceFirebase(){
    console.log("firebase");
    this._firestoreService.getServices().subscribe(
      (result)=>{
        let serviceFirebase=[];
        result.forEach((item)=>{
          console.log(item);
          serviceFirebase.push({
            id: item.payload.doc.id,
            tipo: item.payload.doc.data().tipo,
            descripcion: item.payload.doc.data().descripcion
          });  
        })
        console.log(serviceFirebase);//array service response firebase
      },
      (error)=>{}
    );
  }
  showService(objService){
    this.serviceEdit=objService;
    this.display="block";
  }
  deleteService(i:number){
    this.servicios=JSON.parse(localStorage.getItem('serviciosL'));
    this.servicios.splice(i,1);
    localStorage.setItem('serviciosL',JSON.stringify(this.servicios));
    this.getServices(this.selected);
  }
  closeModal(){
    this.display="none";
  }

}
