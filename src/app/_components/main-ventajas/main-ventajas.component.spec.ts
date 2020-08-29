/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainVentajasComponent } from './main-ventajas.component';

describe('MainVentajasComponent', () => {
  let component: MainVentajasComponent;
  let fixture: ComponentFixture<MainVentajasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainVentajasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainVentajasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
