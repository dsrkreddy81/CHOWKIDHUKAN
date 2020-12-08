import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Samsung3Component } from './samsung3.component';

describe('Samsung3Component', () => {
  let component: Samsung3Component;
  let fixture: ComponentFixture<Samsung3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Samsung3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Samsung3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
