import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class CarouselComponent {
  public images = [
    { src: '/assets/images/image1.webp', alt: 'item 1' },
    { src: '/assets/images/image2.webp', alt: 'item 2' },
    { src: '/assets/images/image3.webp', alt: 'item 3' }
  ];
  public activeIndex: number = 0;

  public next() {
    this.activeIndex = (this.activeIndex + 1) % this.images.length;
  }

  public previous() {
    this.activeIndex = (this.activeIndex + this.images.length - 1) % this.images.length;
  }

}
