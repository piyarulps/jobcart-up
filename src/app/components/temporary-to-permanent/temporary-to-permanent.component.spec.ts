import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporaryToPermanentComponent } from './temporary-to-permanent.component';

describe('TemporaryToPermanentComponent', () => {
  let component: TemporaryToPermanentComponent;
  let fixture: ComponentFixture<TemporaryToPermanentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemporaryToPermanentComponent]
    });
    fixture = TestBed.createComponent(TemporaryToPermanentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
