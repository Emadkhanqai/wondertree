import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  showProfileListingMenu: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  showProfileMenu() {
    this.showProfileListingMenu = !this.showProfileListingMenu;
  }

}
