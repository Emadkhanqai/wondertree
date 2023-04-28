import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './containers/dashboard-layout/dashboard-layout.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { LineChartComponent } from './components/line-chart/line-chart.component';

const routes: Route[] = [
  {
    path: '',
    component: DashboardLayoutComponent,
  },
];
@NgModule({
  declarations: [DashboardLayoutComponent, BarChartComponent, LineChartComponent],
  imports: [CommonModule, RouterModule.forChild(routes), NgChartsModule],
  exports: [],
  providers: [],
})
export class DashboardModule {}
