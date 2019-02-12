import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisFormComponent } from './crisis-form/crisis-form.component';
import { CrisisDetailsComponent } from './crisis-details/crisis-details.component';

const routes: Routes = [
  {
    path: 'crisis', component: CrisisListComponent, children: [
      { path: 'new', component: CrisisFormComponent },
      // rotas com parametros dinamicos devem vir por ultimo
      // para evitar colisões.
      { path: ':id', component: CrisisDetailsComponent },
      { path: ':id/edit', component: CrisisFormComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisisRoutingModule { }
