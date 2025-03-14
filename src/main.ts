import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { provideRouter } from '@angular/router';
import { appConfig } from './app/app.config';
import { NgApexchartsModule } from 'ng-apexcharts';
import { routes } from './app/app.routes'; // Import the routes

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideHttpClient(),
    provideAnimations(),
    importProvidersFrom(MatSnackBarModule, NgApexchartsModule),
    provideRouter(routes), // Ensure routes are used here
  ],
});
