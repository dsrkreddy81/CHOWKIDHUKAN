import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Apple5Component } from './apple5.component';

describe('Apple5Component', () => {
  let component: Apple5Component;
  let fixture: ComponentFixture<Apple5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Apple5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Apple5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
