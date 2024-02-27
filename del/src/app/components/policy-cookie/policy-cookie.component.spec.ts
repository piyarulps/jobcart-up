import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyCookieComponent } from './policy-cookie.component';

describe('PolicyCookieComponent', () => {
  let component: PolicyCookieComponent;
  let fixture: ComponentFixture<PolicyCookieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolicyCookieComponent]
    });
    fixture = TestBed.createComponent(PolicyCookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
