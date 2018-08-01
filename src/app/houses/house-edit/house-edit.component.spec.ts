/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HouseEditComponent } from './house-edit.component';

describe('HouseEditComponent', () => {
  let component: HouseEditComponent;
  let fixture: ComponentFixture<HouseEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
