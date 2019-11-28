import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formLogin= new FormGroup({
    userName: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    userPass: new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ]),
    userTipo: new FormControl('', [
      Validators.required,
      Validators.pattern('[1-9]+')
    ])
  });
  constructor() { }

  ngOnInit() {
  }

}
