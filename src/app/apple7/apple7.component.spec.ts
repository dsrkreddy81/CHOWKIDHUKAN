import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Apple7Component } from './apple7.component';

describe('Apple7Component', () => {
  let component: Apple7Component;
  let fixture: ComponentFixture<Apple7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Apple7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Apple7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
