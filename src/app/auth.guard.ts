import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const router = inject(Router);
    const isAuthenticated = !!localStorage.getItem('user'); // Check authentication

    if (!isAuthenticated) {
        localStorage.setItem('redirectAfterLogin', state.url); // Store intended route
        router.navigate(['/loginsignup']);
        return false;
    }
    return true;
};
