import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CrisisFormComponent } from '../crisis/crisis-form/crisis-form.component';
import { IFormCanDeactivate } from './form-candeactivate';

@Injectable()
export class CrisisDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {
    canDeactivate(
        component: IFormCanDeactivate,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        console.log("Guarda de desativação da rota");
        return component.canDeactivateForm();
    }
}