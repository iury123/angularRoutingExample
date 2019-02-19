import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth-guard';
import { CrisisGuard } from './guards/crisis.guard';

const routes: Routes = [
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  {
    path: 'heroes', loadChildren: './heroes/heroes.module#HeroesModule',
    canActivate: [AuthGuard]
  }, // lazy loading.
  {
    path: 'crisis', loadChildren: './crisis/crisis.module#CrisisModule',
    canActivate: [AuthGuard],
  }, // lazy loading.
  { path: '', redirectTo: '/heroes', canActivate: [AuthGuard], pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
