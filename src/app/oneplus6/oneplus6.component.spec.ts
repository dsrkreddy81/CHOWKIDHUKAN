import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Oneplus6Component } from './oneplus6.component';

describe('Oneplus6Component', () => {
  let component: Oneplus6Component;
  let fixture: ComponentFixture<Oneplus6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Oneplus6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Oneplus6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
