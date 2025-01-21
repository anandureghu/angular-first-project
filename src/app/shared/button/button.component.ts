import { Component, Input, input } from '@angular/core';
import { ButtonClasses, ButtonVariants } from '../../../types/button.type';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() variant: ButtonVariants = 'primary';
  @Input() classList: ButtonClasses[] = [];
}
