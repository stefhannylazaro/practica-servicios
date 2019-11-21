import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.css']
})
export class NotificacionComponent implements OnInit {
  @Input() public msg:string;
  @Input() public type:string;
  @Output() public getInfo= new EventEmitter;//getInfo (instancia de EventEmitter)
  public show:boolean;
  constructor() {
    this.show=false;
  }

  ngOnInit() {
  }

  emitir(){
    this.show=false;
    console.log("emitir");
    this.getInfo.emit(this.show);//lo que enviare
  }

}
