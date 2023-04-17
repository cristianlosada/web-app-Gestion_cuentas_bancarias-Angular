import { Injectable } from '@angular/core';
import { LoginI } from '../../modelos/login.interface';
import { ResponseI } from '../../modelos/response.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/enviroment';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  login_in(form:LoginI):Observable<ResponseI>{
    return this.http.post<ResponseI>(`${environment.API_CUENTAS}/sesion/`,form);
  }
  consultar_saldo(saldo:String){
    return this.http.get(`${environment.API_CUENTAS}/cuentas/${saldo}`);
  } 
  consignar_cuenta(cuenta:any, json:any){
    return this.http.put(`${environment.API_CUENTAS}/cuentas/consignar/${cuenta}`,json);
  } 
  retirar_cuenta(cuenta:any, json:any){
    return this.http.put(`${environment.API_CUENTAS}/cuentas/retirar/${cuenta}`,json);
  }
  crear_cuenta(json:any){
    return this.http.post(`${environment.API_CUENTAS}/cuentas/crear_cuenta`,json);
  } 
}
