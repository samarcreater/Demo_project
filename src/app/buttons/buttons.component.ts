import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
  imports: [CommonModule]
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' = 'success';
  @Input() size: 'sm' | 'md' | 'lg' = 'sm';
  @Input() disabled: boolean = false;
  @Input() fullWidth: boolean = true;
  @Input() loading: boolean = false;
  @Input() icon?: string;
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() buttonType: 'button' | 'submit' | 'reset' = 'button';
  @Input() title: string = 'Button';
  @Input() outline: boolean = false;
}
