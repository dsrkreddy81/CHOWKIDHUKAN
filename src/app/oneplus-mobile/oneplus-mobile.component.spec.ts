import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneplusMobileComponent } from './oneplus-mobile.component';

describe('OneplusMobileComponent', () => {
  let component: OneplusMobileComponent;
  let fixture: ComponentFixture<OneplusMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneplusMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneplusMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
