import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent, ApexChart, ApexStroke, ApexXAxis, ApexFill, ApexDataLabels } from 'ng-apexcharts';

@Component({
  selector: 'app-top-stats',
  templateUrl: './top-stats.component.html',
  styleUrl: './top-stats.component.css',
  imports: [CommonModule, ChartComponent]
})
export class TopStatsComponent {
  stats = [
    { title: 'Total Users', value: '15,320', bgColor: this.getRandomGradient(), chartSeries: [{ data: [10, 30, 20, 50, 40] }], chartOptions: this.getChartOptions() },
    { title: 'Total Sales', value: '$92,580', bgColor: this.getRandomGradient(), chartSeries: [{ data: [25, 35, 45, 30, 20] }], chartOptions: this.getChartOptions() },
    { title: 'Revenue', value: '$126,450', bgColor: this.getRandomGradient(), chartSeries: [{ data: [15, 25, 35, 45, 55] }], chartOptions: this.getChartOptions() },
    { title: 'Orders', value: '3,200', bgColor: this.getRandomGradient(), chartSeries: [{ data: [5, 20, 30, 25, 40] }], chartOptions: this.getChartOptions() }
  ];

  getRandomGradient(): string {
    const colors = [
      'linear-gradient(135deg, #f6d365, #fda085)',
      'linear-gradient(135deg, #84fab0, #8fd3f4)',
      'linear-gradient(135deg, #d4fc79, #96e6a1)',
      'linear-gradient(135deg, #ff9a9e, #fad0c4)',
      'linear-gradient(135deg, #a1c4fd, #c2e9fb)',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  getChartOptions(): ApexChart {
    return {
      type: 'line' as ApexChart['type'],
      height: 60,
      sparkline: { enabled: true },
      
    };
  }

  getStrokeOptions(): ApexStroke {
    return {
      width: 3, // Increased width for more visibility
      curve: 'smooth', // ✅ More curved line
      colors: ['#ffffff'],
    };
  }

  getFillOptions(): ApexFill {
    return {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'vertical',
        shadeIntensity: 0.6,
        gradientToColors: ['#ffffff'],
        opacityFrom: 0.6,
        opacityTo: 0,
        stops: [0, 100],
      },
    };
  }

  getDataLabelsOptions(): ApexDataLabels {
    return {
      enabled: false, // Hides data labels to keep it clean
    };
  }
}
