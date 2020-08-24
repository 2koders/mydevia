import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { GuiaUsoComponent } from './guia-uso/guia-uso.component';
import { MaquinaComponent } from './maquina/maquina.component';
// import { MaquinaComponent } from './maquina/maquina.component';
// import { MaquinaComponent } from './maquina/maquina.component';
// import { MaquinaComponent } from './maquina/maquina.component';
//404 Error Page
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'maquina', component: MaquinaComponent },
  { path: 'guia-uso', component: GuiaUsoComponent },
  // { path: 'maquina', component: MaquinaComponent },
  // { path: 'maquina', component: MaquinaComponent },
  { path: '',   redirectTo: '/main', pathMatch: 'full' }, // redirect to `first-component`
  //404 Error Page
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
