import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recent-activities',
  templateUrl: './recent-activities.component.html',
  styleUrl: './recent-activities.component.css',
  imports:[CommonModule]
})
export class RecentActivitiesComponent {
  activities = [
    { date: '2024-02-25', description: 'User signed up', status: 'Success' },
    { date: '2024-02-24', description: 'Order placed', status: 'Completed' },
    { date: '2024-02-23', description: 'Payment received', status: 'Success' }
  ];
}
