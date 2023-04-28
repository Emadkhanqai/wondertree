import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Api } from 'src/app/modules/shared/services/api';

@Component({
  selector: 'user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit, OnDestroy {
  userListing: any;
  dataSubscription: Subscription[] = [];
  constructor(private _api: Api) {}

  ngOnInit(): void {
    this.dataSubscription.push(
      this._api.get('users').subscribe((data) => (this.userListing = [...data]))
    );
  }

  ngOnDestroy(): void {
    if (this.dataSubscription) {
      this.dataSubscription.map((x) => x.unsubscribe());
    }
  }
}
