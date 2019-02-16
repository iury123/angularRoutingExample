import { Injectable, EventEmitter } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticatedUser = false;
  public showMenuEmitter = new EventEmitter<boolean>();

  constructor(
  ) { }

  public doLogin(user: User): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      if (user.name === 'iury' && user.password === 'aaa111') {
        this.authenticatedUser = true;
        this.showMenuEmitter.emit(true);
        resolve();
      } else {
        this.authenticatedUser = false;
        this.showMenuEmitter.emit(false);
        reject();
      }
    });

  }

  public isUserAuthenticated() {
    return this.authenticatedUser;
  }

}
