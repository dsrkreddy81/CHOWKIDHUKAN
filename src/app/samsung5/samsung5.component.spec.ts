import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Samsung5Component } from './samsung5.component';

describe('Samsung5Component', () => {
  let component: Samsung5Component;
  let fixture: ComponentFixture<Samsung5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Samsung5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Samsung5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
