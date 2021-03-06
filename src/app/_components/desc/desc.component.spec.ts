/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DescComponent } from './desc.component';

describe('DescComponent', () => {
  let component: DescComponent;
  let fixture: ComponentFixture<DescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
