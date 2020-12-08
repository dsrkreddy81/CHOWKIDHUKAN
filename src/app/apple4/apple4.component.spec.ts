import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Apple4Component } from './apple4.component';

describe('Apple4Component', () => {
  let component: Apple4Component;
  let fixture: ComponentFixture<Apple4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Apple4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Apple4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
