import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-consignar',
  templateUrl: './consignar.component.html',
  styleUrls: ['./consignar.component.css']
})
export class ConsignarComponent {

  constructor(private apiService:ApiService) { }

  cuenta: String = '';

  consignar = new FormGroup({
    cuenta: new FormControl('', Validators.required),
    saldo: new FormControl('', Validators.required)
  });

  onConsignar() {
    const obj = this.consignar.value
    if (obj.cuenta=='' || obj.saldo=='')
      alert(`Debe ingresar los campos de la cuenta y el valor a consignar`);
    else{
      this.apiService.consignar_cuenta(obj.cuenta, obj).subscribe((response:any)=>{
        const data = response.data;
        if (data.filas == 0)
          alert(`La cuenta ${obj.cuenta}, No esta asociada a ningun cliente`);
        else
          alert(`La cuenta con número ${obj.cuenta}, tiene un saldo actual en su cuenta de: $${data.saldo_actual}`);
      })
    }
  }
}
