import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  ngAfterViewInit() {
    $('[data-widget="pushmenu"]').PushMenu();
  }

  logout() {
    // clear session/local storage
    localStorage.clear();

    // redirect to login
    this.router.navigate(['/login']);
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }
}
