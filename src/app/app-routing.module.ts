import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Pagina de Inicio
import { MainComponent } from './_pages/main/main.component';
import { GuiaUsoComponent } from './_pages/guia-uso/guia-uso.component';
import { MaquinaComponent } from './_pages/maquina/maquina.component';
import { LoginComponent } from './_pages/login/login.component';
import { RegisterComponent } from './_pages/register/register.component';
import { TiendaComponent } from './_pages/tienda/tienda.component';
import { ContactosComponent } from './_pages/contactos/contactos.component';
// Pagina de Error 404
import { PageNotFoundComponent } from './_pages/page-not-found/page-not-found.component';

const routes: Routes = [
  // Pagina de Inicio
  { path: '', component: MainComponent},
  { path: 'maquina', component: MaquinaComponent },
  { path: 'guia-uso', component: GuiaUsoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'contactos', component: ContactosComponent },
  // Redireciona al Inicio
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  // Pagina de Error 404
  {path: '404error', component: PageNotFoundComponent },
  {path: '**', redirectTo: '404error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
