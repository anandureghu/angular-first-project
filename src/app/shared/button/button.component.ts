import { Component, EventEmitter, Input, input, Output } from '@angular/core';
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
  @Input() styles: object = {};
  @Input() type: string = 'button';
  @Output() click = new EventEmitter<void>();

  onClick() {
    this.click.emit(); // Emit the click event
  }
}
