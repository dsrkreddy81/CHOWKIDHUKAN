import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Oneplus4Component } from './oneplus4.component';

describe('Oneplus4Component', () => {
  let component: Oneplus4Component;
  let fixture: ComponentFixture<Oneplus4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Oneplus4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Oneplus4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
