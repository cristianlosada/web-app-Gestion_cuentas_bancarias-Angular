import { Component } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent {

  constructor(private apiService:ApiService) { }

  cuenta: String = '';
  saldo: String = '';
  cuenta_nueva: String = '';
  nombre: String = '';

  consultar_saldo() {
    if (this.cuenta == '')
      alert(`Debe ingresar un numero de cuenta valido`)
    else{
      this.apiService.consultar_saldo(this.cuenta).subscribe((response:any)=>{
        const obj = response.data; // Parsea la respuesta JSON a un objeto
        const keys = Object.keys(obj);
        this.saldo = '';
        this.cuenta_nueva = '';
        this.nombre = '';
        if (keys.length === 0)
          alert(`La cuenta ${this.cuenta}, No esta asociada a ningun cliente`);
        else{
          this.saldo = obj.saldo;
          this.cuenta_nueva = obj.cuenta;
          this.nombre = obj.nombre;
        }
      })
    }
  }
}
