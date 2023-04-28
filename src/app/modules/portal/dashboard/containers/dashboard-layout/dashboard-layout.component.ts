import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChartsService } from 'src/app/modules/shared/services/charts.service';

@Component({
  selector: 'dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
})
export class DashboardLayoutComponent implements OnInit {
  salesTraffic: any[] = [];
  userTraffic: any[] = [];
  dataSubscription: Subscription[] = [];

  constructor(private dataService: ChartsService) {}

  ngOnInit(): void {
    this.dataSubscription.push(
      this.dataService.fetchSales().subscribe((data) => {
        console.log('sales data', data);
        this.salesTraffic = data;
      })
    );

    this.dataSubscription.push(
      this.dataService.fetchUserTraffic().subscribe((data) => {
        console.log('traffic data', data);
        this.userTraffic = data;
      })
    );
  }

  ngOnDestroy(): void {
    if (this.dataSubscription) {
      this.dataSubscription.map((x) => x.unsubscribe());
    }
  }
}
