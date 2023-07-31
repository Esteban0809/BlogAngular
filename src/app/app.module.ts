import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginaErrorComponent } from './components/pagina-error/pagina-error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    SobreMiComponent,
    ContactoComponent,
    TiendaComponent,
    SidebarComponent,
    SliderComponent,
    FooterComponent,
    PaginaErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
