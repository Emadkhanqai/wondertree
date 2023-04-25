import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './containers/dashboard-layout/dashboard-layout.component';

const routes: Route[] = [
  {
    path: '',
    component: DashboardLayoutComponent,
  },
];
@NgModule({
  declarations: [DashboardLayoutComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [],
  providers: [],
})
export class DashboardModule {}
