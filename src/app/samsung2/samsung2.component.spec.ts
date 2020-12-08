import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Samsung2Component } from './samsung2.component';

describe('Samsung2Component', () => {
  let component: Samsung2Component;
  let fixture: ComponentFixture<Samsung2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Samsung2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Samsung2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
