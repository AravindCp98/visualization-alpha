import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
    this.currentRoute();
  }
  routerLink: string = ""

  currentRoute() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.routerLink = event.url;
      }
    });
  }
}
