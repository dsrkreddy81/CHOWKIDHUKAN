import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Samsung8Component } from './samsung8.component';

describe('Samsung8Component', () => {
  let component: Samsung8Component;
  let fixture: ComponentFixture<Samsung8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Samsung8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Samsung8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
