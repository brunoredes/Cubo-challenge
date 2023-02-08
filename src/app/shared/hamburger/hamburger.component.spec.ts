import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { HamburgerComponent } from './hamburger.component';

describe('HamburgerComponent', () => {
  let component: HamburgerComponent;
  let fixture: ComponentFixture<HamburgerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HamburgerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HamburgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle isOpen when handleIsOpen is called', () => {
    expect(component.isOpen).toBe(false);
    component.handleIsOpen();
    expect(component.isOpen).toBe(true);
    component.handleIsOpen();
    expect(component.isOpen).toBe(false);
  });

  it('should emit an event with the current isOpen state when handleIsOpen is called', () => {
    spyOn(component.handleClick, 'emit');
    component.handleIsOpen();
    expect(component.handleClick.emit).toHaveBeenCalledWith({ isOpen: true });
    component.handleIsOpen();
    expect(component.handleClick.emit).toHaveBeenCalledWith({ isOpen: false });
  });
});
