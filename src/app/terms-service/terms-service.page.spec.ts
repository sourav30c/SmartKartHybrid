import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsServicePage } from './terms-service.page';

describe('TermsServicePage', () => {
  let component: TermsServicePage;
  let fixture: ComponentFixture<TermsServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsServicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
