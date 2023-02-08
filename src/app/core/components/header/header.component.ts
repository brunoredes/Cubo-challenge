import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isMenuOpen = false;
  public screenWidth!: number;

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event?.target?.innerWidth;
  }

  public showHeaderNavigation(event: { isOpen: boolean }) {
    this.isMenuOpen = event.isOpen;
  }
}
