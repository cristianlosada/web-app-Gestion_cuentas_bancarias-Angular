import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {
  constructor(private apiService:ApiService) { }

  cuenta: String = '';

  crear_cuenta = new FormGroup({
    cuenta: new FormControl('', Validators.required),
    saldo: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required)
  });

  onCrearCuenta() {
    const obj = this.crear_cuenta.value
    if (obj.cuenta=='' || obj.saldo=='' || obj.telefono=='' || obj.nombre=='')
      alert(`Debe ingresar los campos de la cuenta y el valor a consignar`);
    else{
      this.apiService.crear_cuenta(obj).subscribe((response:any)=>{
        const data = response.data;
        if (data == 1062)
          alert(`La cuenta ${obj.cuenta} ya Existe, por lo tanto no se puede crear una nueva cuenta`);
        else
          alert(`La cuenta ${obj.cuenta} ha sido creada!`);
      })
    }
  }
}
