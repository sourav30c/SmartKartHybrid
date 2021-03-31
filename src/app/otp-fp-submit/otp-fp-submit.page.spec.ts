import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpFpSubmitPage } from './otp-fp-submit.page';

describe('OtpFpSubmitPage', () => {
  let component: OtpFpSubmitPage;
  let fixture: ComponentFixture<OtpFpSubmitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpFpSubmitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpFpSubmitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
