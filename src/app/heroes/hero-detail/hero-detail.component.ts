import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  // private heroObservable: Observable<Hero>
  private heroSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService,
  ) { }

  ngOnInit() {
    // this.heroObservable = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.service.getHero(Number(params.get('id'))))
    // );
    // this.heroObservable.subscribe((hero) => {
    //   this.hero = hero;
    //   if (!this.hero) {
    //     this.router.navigate(['/hero_not_found'])
    //   }
    // })
    this.heroSubscription = this.route.data.subscribe((info) => {
      this.hero = info.hero; //hero nome setado no resolve no routing module.
      console.log(this.hero);
    });
  }

}
