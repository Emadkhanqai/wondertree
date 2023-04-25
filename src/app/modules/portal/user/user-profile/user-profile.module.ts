import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
import { Route, RouterModule } from '@angular/router';
import { UserProfileFormComponent } from './components/user-profile-form/user-profile-form.component';

const routes: Route[] = [
  {
    path: '',
    component: UserProfileComponent,
  },
];
@NgModule({
  declarations: [UserProfileComponent,UserProfileFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [],
  providers: [],
})
export class UserProfileModule {}
