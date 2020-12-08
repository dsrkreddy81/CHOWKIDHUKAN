import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Samsung1Component } from './samsung1.component';

describe('Samsung1Component', () => {
  let component: Samsung1Component;
  let fixture: ComponentFixture<Samsung1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Samsung1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Samsung1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
