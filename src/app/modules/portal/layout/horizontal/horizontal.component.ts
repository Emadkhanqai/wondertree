import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'horizontal-layout',
  templateUrl: './horizontal.component.html',
  styleUrls: ['./horizontal.component.scss'],
})
export class HorizontalComponent implements OnInit {
  showProfileListingMenu: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  showProfileMenu() {
    this.showProfileListingMenu = !this.showProfileListingMenu;
  }
}
