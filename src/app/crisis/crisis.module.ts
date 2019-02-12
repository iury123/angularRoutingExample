import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisisRoutingModule } from './crisis-routing.module';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisFormComponent } from './crisis-form/crisis-form.component';
import { CrisisDetailsComponent } from './crisis-details/crisis-details.component';
import { CrisisService } from './crisis.service';

@NgModule({
  declarations: [
    CrisisListComponent,
    CrisisFormComponent,
    CrisisDetailsComponent
  ],
  imports: [
    CommonModule,
    CrisisRoutingModule
  ],
  providers: [
    CrisisService
  ]
})
export class CrisisModule { }
