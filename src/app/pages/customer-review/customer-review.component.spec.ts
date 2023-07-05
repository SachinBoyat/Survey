import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReviewComponent } from './customer-review.component';

describe('CustomerReviewComponent', () => {
  let component: CustomerReviewComponent;
  let fixture: ComponentFixture<CustomerReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerReviewComponent]
    });
    fixture = TestBed.createComponent(CustomerReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
