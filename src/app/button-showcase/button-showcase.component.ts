import { Component } from '@angular/core';
import { ButtonComponent } from '../buttons/buttons.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-showcase',
  imports: [ButtonComponent, FormsModule, CommonModule],
  templateUrl: './button-showcase.component.html',
  styleUrl: './button-showcase.component.css'
})
export class ButtonShowcaseComponent {
  bootstrapIcons = [
    'cart', 'trash', 'check', 'plus', 'pencil', 'heart',
    'star', 'bell', 'camera', 'cloud', 'download', 'upload'
  ];

  selectedIcon: string = 'cart';
  variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' = 'primary';
  size: 'sm' | 'md' | 'lg' = 'md';
  iconPosition: 'left' | 'right' = 'left';
  disabled: boolean = false;
  loading: boolean = false;
  outline: boolean = false;
}

