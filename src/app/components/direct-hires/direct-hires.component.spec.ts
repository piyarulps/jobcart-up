import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectHiresComponent } from './direct-hires.component';

describe('DirectHiresComponent', () => {
  let component: DirectHiresComponent;
  let fixture: ComponentFixture<DirectHiresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectHiresComponent]
    });
    fixture = TestBed.createComponent(DirectHiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
