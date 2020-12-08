import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Apple2Component } from './apple2.component';

describe('Apple2Component', () => {
  let component: Apple2Component;
  let fixture: ComponentFixture<Apple2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Apple2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Apple2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
