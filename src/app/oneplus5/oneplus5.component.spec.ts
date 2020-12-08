import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Oneplus5Component } from './oneplus5.component';

describe('Oneplus5Component', () => {
  let component: Oneplus5Component;
  let fixture: ComponentFixture<Oneplus5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Oneplus5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Oneplus5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
