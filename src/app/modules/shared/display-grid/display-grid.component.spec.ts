import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayGridComponent } from './display-grid.component';

describe('DisplayGridComponent', () => {
  let component: DisplayGridComponent;
  let fixture: ComponentFixture<DisplayGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayGridComponent]
    });
    fixture = TestBed.createComponent(DisplayGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
