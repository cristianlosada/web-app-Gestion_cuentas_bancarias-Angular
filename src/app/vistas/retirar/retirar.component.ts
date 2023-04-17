import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-retirar',
  templateUrl: './retirar.component.html',
  styleUrls: ['./retirar.component.css']
})
export class RetirarComponent {
  constructor(private apiService:ApiService) { }

  cuenta: String = '';

  retirar = new FormGroup({
    cuenta: new FormControl('', Validators.required),
    monto: new FormControl('', Validators.required)
  });

  onRetirar() {
    const obj = this.retirar.value
    if (obj.cuenta=='' || obj.monto=='')
      alert(`Debe ingresar los campos de la cuenta y el valor a retirar`);
    else{
      this.apiService.retirar_cuenta(obj.cuenta, obj).subscribe((response:any)=>{
        const data = response.data;
        if (data.filas == 0)
          alert(`La cuenta ${obj.cuenta}, No esta asociada a ningun cliente`);
        else if (data.filas == 3)
          alert(`La cuenta ${obj.cuenta}, No Cuenta con fondos suficientes para hacer el retiro`)
        else
          alert(`La cuenta con número ${obj.cuenta}, tiene un saldo actual en su cuenta de: $${data.saldo_actual}`);
      })
    }
  }
  
}
