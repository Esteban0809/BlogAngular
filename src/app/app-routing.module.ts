import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { PaginaErrorComponent } from './components/pagina-error/pagina-error.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta para la página de inicio
  { path: 'blog', component: BlogComponent }, // Ruta para la página del blog
  { path: 'sobre-mi', component: SobreMiComponent }, // Ruta para la página "Sobre mí"
  { path: 'contacto', component: ContactoComponent }, // Ruta para la página de contacto
  { path: 'tienda', component: TiendaComponent }, // Ruta para la página de la tienda
  { path: '**', component: PaginaErrorComponent }, // Ruta para manejar páginas no encontradas (404)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
