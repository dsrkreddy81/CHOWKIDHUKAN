import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Oneplus2Component } from './oneplus2.component';

describe('Oneplus2Component', () => {
  let component: Oneplus2Component;
  let fixture: ComponentFixture<Oneplus2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Oneplus2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Oneplus2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
