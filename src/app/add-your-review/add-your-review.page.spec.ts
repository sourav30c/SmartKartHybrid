import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddYourReviewPage } from './add-your-review.page';

describe('AddYourReviewPage', () => {
  let component: AddYourReviewPage;
  let fixture: ComponentFixture<AddYourReviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddYourReviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddYourReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
