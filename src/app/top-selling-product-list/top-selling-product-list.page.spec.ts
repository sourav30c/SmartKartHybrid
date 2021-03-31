import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSellingProductListPage } from './top-selling-product-list.page';

describe('TopSellingProductListPage', () => {
  let component: TopSellingProductListPage;
  let fixture: ComponentFixture<TopSellingProductListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSellingProductListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSellingProductListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
