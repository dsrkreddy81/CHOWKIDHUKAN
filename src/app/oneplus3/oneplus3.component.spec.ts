import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Oneplus3Component } from './oneplus3.component';

describe('Oneplus3Component', () => {
  let component: Oneplus3Component;
  let fixture: ComponentFixture<Oneplus3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Oneplus3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Oneplus3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
