import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { FormsModule } from '@angular/forms';
import { HeroNotFoundComponent } from './hero-not-found/hero-not-found.component';
import { HeroService } from './hero.service';

@NgModule({
  declarations: [
    HeroListComponent,
    HeroDetailComponent,
    HeroNotFoundComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    HeroesRoutingModule,
  ],
  providers: [HeroService]
})
export class HeroesModule { }
