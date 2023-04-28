import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  @Input() data: any;
  @Input() title: string = '';

  barChartLabels: any[] = [
    'Apple',
    'Banana',
    'Kiwifruit',
    'Blueberry',
    'Orange',
    'Grapes',
  ];

  constructor() {}

  ngOnInit(): void {}
}
