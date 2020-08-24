import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { MaquinaComponent } from './maquina/maquina.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GuiaUsoComponent } from './guia-uso/guia-uso.component';

@NgModule({
  declarations: [					
    AppComponent,
      NavbarComponent,
      MainComponent,
      MaquinaComponent,
      PageNotFoundComponent,
      GuiaUsoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
