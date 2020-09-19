import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { MainComponent } from './_pages/main/main.component';
import { MaquinaComponent } from './_pages/maquina/maquina.component';
import { PageNotFoundComponent } from './_pages/page-not-found/page-not-found.component';
import { GuiaUsoComponent } from './_pages/guia-uso/guia-uso.component';
import { LoginComponent } from './_pages/login/login.component';
import { FormLoginComponent } from './_components/form-login/form-login.component';
import { RegisterComponent } from './_pages/register/register.component';
import { FormregisterComponent } from './_components/formregister/formregister.component';
import { FooterComponent } from './_components/footer/footer.component';
import { TiendaComponent } from './_pages/tienda/tienda.component';
import { CarouselMainComponent } from './_components/carousel-main/carousel-main.component';
import { MainVentajasComponent } from './_components/main-ventajas/main-ventajas.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactosComponent } from './_pages/contactos/contactos.component';
import { ClientSideComponent } from './_components/client-side/client-side.component';
import { MainProductosComponent } from "./_components/main-productos/main-productos.component";
import { DescComponent } from "./_components/desc/desc.component";
import { NewsLetterComponent } from "./_components/news-letter/news-letter.component";
import { ContactosFomrComponent } from "./_components/contactos-fomr/contactos-fomr.component";

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
      CarouselMainComponent,
      MainVentajasComponent,
      ContactosComponent,
      ClientSideComponent,
      MainProductosComponent,
      DescComponent,
      NewsLetterComponent,
      ContactosFomrComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
