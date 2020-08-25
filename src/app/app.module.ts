import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { MaquinaComponent } from './maquina/maquina.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GuiaUsoComponent } from './guia-uso/guia-uso.component';
import { LoginComponent } from './login/login.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { RegisterComponent } from './register/register.component';
import { FormregisterComponent } from './formregister/formregister.component';
import { FooterComponent } from './footer/footer.component';
import { TiendaComponent } from './tienda/tienda.component';
import { CarouselMainComponent } from './carousel-main/carousel-main.component';

@NgModule({
  declarations: [													
    AppComponent,
      NavbarComponent,
      MainComponent,
      MaquinaComponent,
      PageNotFoundComponent,
      GuiaUsoComponent,
      LoginComponent,
      FormLoginComponent,
      RegisterComponent,
      FormregisterComponent,
      FooterComponent,
      TiendaComponent,
      CarouselMainComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
