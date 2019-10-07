import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatequestionPage } from './createquestion.page';

describe('CreatequestionPage', () => {
  let component: CreatequestionPage;
  let fixture: ComponentFixture<CreatequestionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatequestionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatequestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
