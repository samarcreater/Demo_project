import { Component } from '@angular/core';
import { TopStatsComponent } from './top-stats/top-stats.component';
import { ChartsComponent } from './charts/charts.component';
import { RecentActivitiesComponent } from './recent-activities/recent-activities.component';
@Component({
  selector: 'app-dashboard',
  imports: [TopStatsComponent,ChartsComponent,RecentActivitiesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
