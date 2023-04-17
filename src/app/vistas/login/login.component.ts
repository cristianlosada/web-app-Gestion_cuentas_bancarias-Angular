import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { ApiService } from 'src/app/servicios/api/api.service';
import { LoginI } from 'src/app/modelos/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  loginForm = new FormGroup({
    usuario : new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private apiService:ApiService) { }

  onLogin(form:any){
    console.log(form);
  }
}

