import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSearchPage } from './auto-search.page';

describe('AutoSearchPage', () => {
  let component: AutoSearchPage;
  let fixture: ComponentFixture<AutoSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoSearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
