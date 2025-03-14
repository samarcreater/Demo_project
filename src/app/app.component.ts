import { Component } from '@angular/core';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Screen/layout/header/header.component';
import { FooterComponent } from './Screen/layout/footer/footer.component';
import { LayoutComponent } from './Screen/layout/layout.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgApexchartsModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'DummyProject';
  
}


