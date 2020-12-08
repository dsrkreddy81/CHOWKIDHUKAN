import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Apple3Component } from './apple3.component';

describe('Apple3Component', () => {
  let component: Apple3Component;
  let fixture: ComponentFixture<Apple3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Apple3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Apple3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
