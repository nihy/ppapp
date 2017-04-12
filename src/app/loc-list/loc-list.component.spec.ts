/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LocListComponent } from './loc-list.component';

describe('LocListComponent', () => {
  let component: LocListComponent;
  let fixture: ComponentFixture<LocListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
