import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalStaffingComponent } from './digital-staffing.component';

describe('DigitalStaffingComponent', () => {
  let component: DigitalStaffingComponent;
  let fixture: ComponentFixture<DigitalStaffingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitalStaffingComponent]
    });
    fixture = TestBed.createComponent(DigitalStaffingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
