import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Apple8Component } from './apple8.component';

describe('Apple8Component', () => {
  let component: Apple8Component;
  let fixture: ComponentFixture<Apple8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Apple8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Apple8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
