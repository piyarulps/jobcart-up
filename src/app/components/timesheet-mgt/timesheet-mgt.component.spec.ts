import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetMgtComponent } from './timesheet-mgt.component';

describe('TimesheetMgtComponent', () => {
  let component: TimesheetMgtComponent;
  let fixture: ComponentFixture<TimesheetMgtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimesheetMgtComponent]
    });
    fixture = TestBed.createComponent(TimesheetMgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
