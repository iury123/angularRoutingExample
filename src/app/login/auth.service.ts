import { Injectable } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticatedUser = false;

  constructor(
    private router: Router,
  ) { }

  public doLogin(user: User) {
    if (user.name === 'iury' && user.password === 'aaa111') {
      this.authenticatedUser = true;
      this.router.navigate(['/']);
    } else {
      this.authenticatedUser = false;
    }
  }

  public isUserAuthenticated() {
    return this.authenticatedUser;
  }

}
