import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Oneplus8Component } from './oneplus8.component';

describe('Oneplus8Component', () => {
  let component: Oneplus8Component;
  let fixture: ComponentFixture<Oneplus8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Oneplus8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Oneplus8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
