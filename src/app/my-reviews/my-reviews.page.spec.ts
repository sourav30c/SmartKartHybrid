import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReviewsPage } from './my-reviews.page';

describe('MyReviewsPage', () => {
  let component: MyReviewsPage;
  let fixture: ComponentFixture<MyReviewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyReviewsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyReviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
