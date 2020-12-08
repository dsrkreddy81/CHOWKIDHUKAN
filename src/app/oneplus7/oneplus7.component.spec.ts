import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Oneplus7Component } from './oneplus7.component';

describe('Oneplus7Component', () => {
  let component: Oneplus7Component;
  let fixture: ComponentFixture<Oneplus7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Oneplus7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Oneplus7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
