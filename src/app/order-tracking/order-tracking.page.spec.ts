import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTrackingPage } from './order-tracking.page';

describe('OrderTrackingPage', () => {
  let component: OrderTrackingPage;
  let fixture: ComponentFixture<OrderTrackingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderTrackingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderTrackingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
