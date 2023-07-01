import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFeedbackComponent } from './customer-feedback.component';

describe('CustomerFeedbackComponent', () => {
  let component: CustomerFeedbackComponent;
  let fixture: ComponentFixture<CustomerFeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerFeedbackComponent]
    });
    fixture = TestBed.createComponent(CustomerFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
