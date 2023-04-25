import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';

const routes: Route[] = [
  {
    path: '',
    component: WelcomeComponent,
  },
];
@NgModule({
  declarations: [WelcomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [],
  providers: [],
})
export class WelcomeModule {}
