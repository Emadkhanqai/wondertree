import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: SignUpComponent,
  },
];
@NgModule({
  declarations: [SignUpComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [],
  providers: [],
})
export class SignUpModule {}
