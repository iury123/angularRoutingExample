import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  selectedHero: Hero;
  page: number
  heroes: Hero[];
  subscription: Subscription;


  constructor(
    private heroService: HeroService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit() {
    this.subscription = this.route.queryParams.subscribe((queryParams: any) => {
      this.page = queryParams['page'] || 1;
      console.log(queryParams);
      this.getHeroes();
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.router.navigate([`/hero`, this.selectedHero.id])
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  nextPage() {
    this.router.navigate(['/heroes'],{queryParams: {'page': ++this.page}});
  }

}
