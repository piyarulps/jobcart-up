import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementFullfillmentComponent } from './placement-fullfillment.component';

describe('PlacementFullfillmentComponent', () => {
  let component: PlacementFullfillmentComponent;
  let fixture: ComponentFixture<PlacementFullfillmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlacementFullfillmentComponent]
    });
    fixture = TestBed.createComponent(PlacementFullfillmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
