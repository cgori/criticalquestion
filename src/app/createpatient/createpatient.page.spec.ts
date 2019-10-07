import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepatientPage } from './createpatient.page';

describe('CreatepatientPage', () => {
  let component: CreatepatientPage;
  let fixture: ComponentFixture<CreatepatientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatepatientPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatepatientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
