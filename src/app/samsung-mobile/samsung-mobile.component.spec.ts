import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamsungMobileComponent } from './samsung-mobile.component';

describe('SamsungMobileComponent', () => {
  let component: SamsungMobileComponent;
  let fixture: ComponentFixture<SamsungMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamsungMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamsungMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
