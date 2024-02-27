import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempEmploymentComponent } from './temp-employment.component';

describe('TempEmploymentComponent', () => {
  let component: TempEmploymentComponent;
  let fixture: ComponentFixture<TempEmploymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempEmploymentComponent]
    });
    fixture = TestBed.createComponent(TempEmploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
