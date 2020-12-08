import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Apple6Component } from './apple6.component';

describe('Apple6Component', () => {
  let component: Apple6Component;
  let fixture: ComponentFixture<Apple6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Apple6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Apple6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
