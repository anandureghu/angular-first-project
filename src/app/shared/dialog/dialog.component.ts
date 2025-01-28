import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  imports: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  @Input() open: boolean = false;

  @Output() close = new EventEmitter<void>();

  closeDialog() {
    this.open = false;
    this.close.emit();
  }
}
