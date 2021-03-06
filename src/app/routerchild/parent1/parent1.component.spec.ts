/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Parent1Component } from './parent1.component';

describe('Parent1Component', () => {
  let component: Parent1Component;
  let fixture: ComponentFixture<Parent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
