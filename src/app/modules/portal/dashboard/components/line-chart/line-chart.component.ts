import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  @Input() data: any;
  @Input() title: string = '';

  lineChartLabels: any = [
    'Google',
    'Facebook',
    'Twitter',
    'LinkedIn',
    'YouTube',
    'TikTok',
  ];

  constructor() {}

  ngOnInit(): void {}
}
