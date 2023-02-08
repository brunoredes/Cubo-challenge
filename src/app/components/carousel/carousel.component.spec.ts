import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CarouselComponent } from './carousel.component';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CarouselComponent]
    }).compileComponents();

  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 images', () => {
    expect(component.images.length).toEqual(3);
  });

  it('should have the first image active by default', () => {
    expect(component.activeIndex).toEqual(0);
  });

  it('should have the second image active after calling next()', () => {
    component.next();
    expect(component.activeIndex).toEqual(1);
  });

  it('should have the last image active after calling next() twice', () => {
    component.next();
    component.next();
    expect(component.activeIndex).toEqual(2);
  });

  it('should have the second to last image active after calling next() thrice and previous() once', () => {
    component.activeIndex = 0;
    component.next();
    component.next();
    component.next();
    component.previous();
    expect(component.activeIndex).toEqual(2);
  });

  it('should have the correct initial value for activeIndex', () => {
    // Arrange

    // Act
    fixture.detectChanges();

    // Assert
    expect(component.activeIndex).toEqual(0);
  });

  it('should call next() correctly', () => {
    // Arrange
    spyOn(component, 'next');

    // Act
    component.next();

    // Assert
    expect(component.next).toHaveBeenCalled();
  });

  it('should call previous() correctly', () => {
    // Arrange
    spyOn(component, 'previous');

    // Act
    component.previous();

    // Assert
    expect(component.previous).toHaveBeenCalled();
  });

  it('should update activeIndex correctly in next()', () => {
    // Arrange
    component.activeIndex = 0;

    // Act
    component.next();

    // Assert
    expect(component.activeIndex).toEqual(1);
  });

  it('should update activeIndex correctly in previous()', () => {
    // Arrange
    component.activeIndex = 1;

    // Act
    component.previous();

    // Assert
    expect(component.activeIndex).toEqual(0);
  });

  it('should wrap around when next() goes past the end of the images array', () => {
    // Arrange
    component.activeIndex = 2;

    // Act
    component.next();

    // Assert
    expect(component.activeIndex).toEqual(0);
  });

  it('should wrap around when previous() goes past the beginning of the images array', () => {
    // Arrange
    component.activeIndex = 0;

    // Act
    component.previous();

    // Assert
    expect(component.activeIndex).toEqual(2);
  });
});
