import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Oneplus1Component } from './oneplus1.component';

describe('Oneplus1Component', () => {
  let component: Oneplus1Component;
  let fixture: ComponentFixture<Oneplus1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Oneplus1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Oneplus1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
