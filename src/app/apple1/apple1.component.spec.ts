import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Apple1Component } from './apple1.component';

describe('Apple1Component', () => {
  let component: Apple1Component;
  let fixture: ComponentFixture<Apple1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Apple1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Apple1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
