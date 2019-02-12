import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisisRoutingModule } from './crisis-routing.module';
import { CrisisListComponent } from './crisis-list/crisis-list.component';

@NgModule({
  declarations: [
    CrisisListComponent
  ],
  imports: [
    CommonModule,
    CrisisRoutingModule
  ]
})
export class CrisisModule { }
