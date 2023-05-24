import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() label: string | undefined;
  @Input() color: ButtonColor = ButtonColor.PRIMARY;
  @Input() disabled = false;
  @Output() customClick = new EventEmitter<void>();

  call() {
    this.customClick.emit();
  }

  protected readonly ButtonColor = ButtonColor;
}

export enum ButtonColor {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}
