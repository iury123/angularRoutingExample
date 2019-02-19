import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrisisService } from '../crisis.service';
import { Subscription } from 'rxjs';
import { Crise } from '../crise';
import { IFormCanDeactivate } from 'src/app/guards/form-candeactivate';

@Component({
  selector: 'app-crisis-form',
  templateUrl: './crisis-form.component.html',
  styleUrls: ['./crisis-form.component.scss']
})
export class CrisisFormComponent implements OnInit, OnDestroy, IFormCanDeactivate {

  private subscription: Subscription;
  private crise: Crise;

  constructor(
    private route: ActivatedRoute,
    private service: CrisisService,
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: any) => {
      this.crise = this.service.getCrise(Number(params['id']));
      if (!this.crise) {
        this.crise = new Crise();
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  canChangeRoute() {

  }

  canDeactivateForm() {
    console.log("dddd")
    return true;
  }
}
