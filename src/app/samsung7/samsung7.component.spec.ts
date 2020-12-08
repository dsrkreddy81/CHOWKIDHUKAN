import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Samsung7Component } from './samsung7.component';

describe('Samsung7Component', () => {
  let component: Samsung7Component;
  let fixture: ComponentFixture<Samsung7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Samsung7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Samsung7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
