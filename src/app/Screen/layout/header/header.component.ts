import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { trigger, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('dropdownAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  user: any = null;
  dropdownOpen = false;
  menuOpen = false;



  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.user$.subscribe(user => {
      this.user = user;
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  logout(event: Event) {
    event.stopPropagation();
    this.authService.logout();
    this.dropdownOpen = false;
    this.router.navigate(['']);
  }

  getUserInitials(): string {
    return this.user && this.user.name
      ? this.user.name.split(' ').map((word: any[]) => word[0]).slice(0, 2).join('').toUpperCase()
      : 'U';
  }

  getUserFirstnameInitials(): string {
    if (this.user && this.user.name) {
      const words = this.user.name.split(' ');
      const initials = words[0]?.toUpperCase();
      return initials;
    }
    return 'U';
  }

}
