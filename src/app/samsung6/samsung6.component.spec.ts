import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Samsung6Component } from './samsung6.component';

describe('Samsung6Component', () => {
  let component: Samsung6Component;
  let fixture: ComponentFixture<Samsung6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Samsung6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Samsung6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
