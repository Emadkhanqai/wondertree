import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-cards',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss'],
})
export class UserListingComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit(): void {}
}
