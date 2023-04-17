import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';
import { ConsignarComponent } from './vistas/consignar/consignar.component';
import { RetirarComponent } from './vistas/retirar/retirar.component';
import { ConsultarComponent } from './vistas/consultar/consultar.component';
import { CrearComponent } from './vistas/crear/crear.component';
import { GestorComponent } from './vistas/gestor/gestor.component';

const routes: Routes = [
  {path: '', redirectTo:'gestor', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'consignar', component:ConsignarComponent},
  {path:'retirar', component:RetirarComponent},
  {path:'consultar', component:ConsultarComponent},
  {path:'crear', component:CrearComponent},
  {path:'gestor', component:GestorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [LoginComponent,ConsignarComponent,RetirarComponent,ConsultarComponent,CrearComponent,GestorComponent]
