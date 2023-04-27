import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './containers/user-management/user-management.component';
import { Route, RouterModule } from '@angular/router';
import { UserListingComponent } from './components/user-listing/user-listing.component';

const routes: Route[] = [
  {
    path: '',
    component: UserManagementComponent,
  },
];
@NgModule({
  declarations: [UserManagementComponent, UserListingComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [],
  providers: [],
})
export class UserManagementModule {}
