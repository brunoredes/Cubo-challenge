import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  public readonly images = [
    { source: '/assets/icons/coin.png' },
    { source: '/assets/icons/gift.png' },
    { source: '/assets/icons/badge.png' },
    { source: '/assets/icons/coin.png' },
  ]
}
