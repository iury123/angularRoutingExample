import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth-guard';
import { CrisisGuard } from './guards/crisis.guard';
// import { HeroesModule } from './heroes/heroes.module';
// import { CrisisModule } from './crisis/crisis.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // os módulos especificos vem primeiro.
    // CrisisModule,
    // HeroesModule, in order to lazy module.
    AppRoutingModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    CrisisGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
