import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from './user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private user: User = new User();

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  doLogin() {
    this.authService.doLogin(this.user)
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch(() => {

      });
  }


}
