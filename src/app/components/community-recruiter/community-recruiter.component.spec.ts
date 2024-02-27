import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityRecruiterComponent } from './community-recruiter.component';

describe('CommunityRecruiterComponent', () => {
  let component: CommunityRecruiterComponent;
  let fixture: ComponentFixture<CommunityRecruiterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunityRecruiterComponent]
    });
    fixture = TestBed.createComponent(CommunityRecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
