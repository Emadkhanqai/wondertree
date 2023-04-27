import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  showProfileListingMenu: boolean = false;
  constructor(private _router: Router) {}

  ngOnInit(): void {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showProfileListingMenu = false;
      }
    });
  }

  isActive(path: string): boolean {
    console.log(path);
    console.log(
      'this._router.isActive(path, true)',
      this._router.isActive(path, true)
    );
    return this._router.isActive(path, true);
  }

  showProfileMenu() {
    this.showProfileListingMenu = !this.showProfileListingMenu;
  }

  signOut() {
    localStorage.clear();
    window.location.reload();
  }
}
