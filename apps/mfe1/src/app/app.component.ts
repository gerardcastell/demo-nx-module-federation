import { Component, OnInit } from '@angular/core';
import { AuthFacade } from '@demo-nx-module-federation/core/data-access-auth';

@Component({
  selector: 'demo-nx-module-federation-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mfe1';
  isLogged = false;
  constructor(private authFacade: AuthFacade) {}

  ngOnInit(): void {
    this.authFacade.init();
    this.authFacade.isLogged$.subscribe((val) => (this.isLogged = val));
  }

  onClickLogin(): void {
    this.authFacade.setAuth(!this.isLogged);
  }
}
