import { Component } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-charts',
  standalone: true,
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css',
  imports:[NgApexchartsModule]
})
export class ChartsComponent {
  
  // ✅ Bar Chart Configuration
  public barChartOptions: ApexOptions = {
    chart: { type: 'bar' },
    title: { text: 'Sales Data' },
    tooltip: {
      intersect: false, // Fixes issue with touch events
    },
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] },
    series: [{ name: 'Sales', data: [10, 25, 40, 50, 65] }]
  };

  // ✅ Line Chart Configuration
  public lineChartOptions: ApexOptions = {
    chart: { type: 'line' },
    title: { text: 'Revenue Trend' }, tooltip: {
      intersect: false, // Fixes issue with touch events
    },
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] },
    series: [{ name: 'Revenue', data: [5, 15, 30, 45, 60] }]
  };



  
  public pieChartOptions: ApexOptions = {
    chart: { type: 'pie' },
    title: { text: 'Market Share' }, tooltip: {
      intersect: false, // Fixes issue with touch events
    },
    labels: ['Product A', 'Product B', 'Product C'],
    series: [40, 35, 25]
  };

  public splineChartOptions: ApexOptions = {
    chart: {
      type: 'area',
      height: 350,
    }, tooltip: {
      intersect: false, 
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    title: {
      text: 'Spline Area Chart',
      align: 'left',
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2024-02-01',
        '2024-02-02',
        '2024-02-03',
        '2024-02-04',
        '2024-02-05',
        '2024-02-06',
        '2024-02-07',
      ],
    },
    yaxis: {
      title: {
        text: 'Values',
      },
    },
    series: [
      {
        name: 'Series A',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'Series B',
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
  };
}
