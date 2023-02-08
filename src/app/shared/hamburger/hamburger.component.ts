import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  standalone: true
})
export class HamburgerComponent {
  @Input() public isOpen: boolean = false;
  @Output() public handleClick = new EventEmitter();

  public handleIsOpen(): void {
    this.toggleIsOpen();
    this.handleClick.emit({ isOpen: this.isOpen });
  }

  private toggleIsOpen() {
    this.isOpen = !this.isOpen;
  }
}
