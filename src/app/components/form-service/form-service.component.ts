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
  //public service:Servicio;
  constructor() {
    //this.objService=new Servicio(0,"","",1);
  }

  ngOnInit() {
  }
  onSubmit() {
    console.log("enviar");
    //console.log(this.service);
    
  }

}
