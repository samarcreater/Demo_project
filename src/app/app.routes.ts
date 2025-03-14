import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginSignupComponent } from './Screen/Auth/login-signup/login-signup.component';
import { LayoutComponent } from './Screen/layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ButtonShowcaseComponent } from './button-showcase/button-showcase.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'loginsignup', pathMatch: 'full' },
    { path: 'loginsignup', component: LoginSignupComponent },

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'home', component: HomeComponent, canActivate: [authGuard] },
            { path: 'about', component: AboutComponent, canActivate: [authGuard] },
            { path: 'contact', component: ContactComponent, canActivate: [authGuard] },
            { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
            { path: 'buttons', component: ButtonShowcaseComponent, canActivate: [authGuard] }
        ]
    }
];
