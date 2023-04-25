import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';

import { Route, RouterModule } from '@angular/router';

 const routes: Route[] = [
  {
    path: '',
    component: SignInComponent,
  },
];


@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [],
  providers: [],
})
export class SignInModule {}
