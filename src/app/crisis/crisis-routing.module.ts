import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisFormComponent } from './crisis-form/crisis-form.component';
import { CrisisDetailsComponent } from './crisis-details/crisis-details.component';
import { CrisisGuard } from '../guards/crisis.guard';
import { CrisisDeactivateGuard } from '../guards/crisis-deactivate.guard';

const routes: Routes = [
  {
    // lazy loading.
    path: '', component: CrisisListComponent,
    canActivateChild: [CrisisGuard],
    children: [
      { path: 'new', component: CrisisFormComponent },
      // rotas com parametros dinamicos devem vir por ultimo
      // para evitar colisões.
      { path: ':id', component: CrisisDetailsComponent },
      {
        path: ':id/edit', component: CrisisFormComponent,
        canDeactivate: [CrisisDeactivateGuard]
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisisRoutingModule { }
