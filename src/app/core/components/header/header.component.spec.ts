import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, TestHostComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the isMenuOpen property when showHeaderNavigation is called', () => {
    expect(component.header.isMenuOpen).toBe(false);
    component.header.showHeaderNavigation({ isOpen: true });
    expect(component.header.isMenuOpen).toBe(true);
    component.header.showHeaderNavigation({ isOpen: false });
    expect(component.header.isMenuOpen).toBe(false);
  });

  it('should set the screenWidth property on init', () => {
    expect(component.header.screenWidth).toEqual(jasmine.any(Number));
  });

  it('should update the screenWidth property when the window is resized', () => {
    const initialWidth = component.header.screenWidth - 1;
    // simulate window resize event
    window.dispatchEvent(new Event('resize'));
    fixture.detectChanges();
    expect(component.header.screenWidth).not.toEqual(initialWidth);
  });
});

@Component({
  template: `<app-header #header></app-header>`
})
class TestHostComponent {
  @ViewChild('header') header!: HeaderComponent;
}
