import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Hero } from '../heroes/hero';
import { HeroService } from '../heroes/hero.service';

@Injectable()
export class HeroDetailResolveGuard implements Resolve<Hero> {
    
    constructor(private heroService: HeroService) {}
    
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        const id = route.params['id'];
        return this.heroService.getHero(Number(id));
    }
}
