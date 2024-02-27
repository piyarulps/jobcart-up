import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetingAndReportingComponent } from './budgeting-and-reporting.component';

describe('BudgetingAndReportingComponent', () => {
  let component: BudgetingAndReportingComponent;
  let fixture: ComponentFixture<BudgetingAndReportingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetingAndReportingComponent]
    });
    fixture = TestBed.createComponent(BudgetingAndReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
