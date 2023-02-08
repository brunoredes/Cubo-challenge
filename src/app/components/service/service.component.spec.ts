import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ServiceComponent } from './service.component';

describe('ServiceComponent', () => {
  let component: ServiceComponent;
  let fixture: ComponentFixture<ServiceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceComponent]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have images', () => {
    expect(component.images).toEqual([
      { source: '/assets/icons/coin.png' },
      { source: '/assets/icons/gift.png' },
      { source: '/assets/icons/badge.png' },
      { source: '/assets/icons/coin.png' }
    ]);
  });
});
