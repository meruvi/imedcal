import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GCarouselComponent } from './g-carousel.component';

describe('GCarouselComponent', () => {
  let component: GCarouselComponent;
  let fixture: ComponentFixture<GCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
