import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffingSolutionsComponent } from './staffing-solutions.component';

describe('StaffingSolutionsComponent', () => {
  let component: StaffingSolutionsComponent;
  let fixture: ComponentFixture<StaffingSolutionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffingSolutionsComponent]
    });
    fixture = TestBed.createComponent(StaffingSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
