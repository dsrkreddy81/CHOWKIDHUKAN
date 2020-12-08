import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Samsung4Component } from './samsung4.component';

describe('Samsung4Component', () => {
  let component: Samsung4Component;
  let fixture: ComponentFixture<Samsung4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Samsung4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Samsung4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
