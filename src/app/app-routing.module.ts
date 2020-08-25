import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Pagina de Inicio
import { MainComponent } from './main/main.component';
import { GuiaUsoComponent } from './guia-uso/guia-uso.component';
import { MaquinaComponent } from './maquina/maquina.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TiendaComponent } from './tienda/tienda.component';
//Pagina de Error 404
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  //Pagina de Inicio
  { path: '', component: MainComponent},
  { path: 'maquina', component: MaquinaComponent },
  { path: 'guia-uso', component: GuiaUsoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'tienda', component: TiendaComponent },
  //Redireciona al Inicio
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  //Pagina de Error 404
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
