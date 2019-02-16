import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  public showMenu: boolean = false

  constructor(
    private authService: AuthService
  ) {

  }

    ngOnInit() {
      this.authService.showMenuEmitter.subscribe((showMenu) => {
        this.showMenu = showMenu;
      });
    }


}
