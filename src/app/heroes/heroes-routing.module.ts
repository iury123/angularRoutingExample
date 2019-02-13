import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroNotFoundComponent } from './hero-not-found/hero-not-found.component';

const routes: Routes = [
  // blank because it is lazy loading.
  { path: '',  component: HeroListComponent },

  { path: 'hero_not_found', component: HeroNotFoundComponent},
  // rotas com parametros dinamicos devem vir por ultimo
  // para evitar colisões.

  // { path: 'hero/:id', component: HeroDetailComponent }, No lazy loading, URL nâo pode ter nomes diferentes. hero/ não pode.
  { path: ':id', component: HeroDetailComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
