import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CrisisService } from '../crisis.service';
import { Subscription } from 'rxjs';
import { Crise } from '../crise';

@Component({
  selector: 'app-crisis-details',
  templateUrl: './crisis-details.component.html',
  styleUrls: ['./crisis-details.component.scss']
})
export class CrisisDetailsComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private crise: Crise;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService,
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: any) => {
      this.crise = this.service.getCrise(Number(params['id']));
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  editCrisis() {
    this.router.navigate(['/crisis', this.crise.id, 'edit']);
  }

}
