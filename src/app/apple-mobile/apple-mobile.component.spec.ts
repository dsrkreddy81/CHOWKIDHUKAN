import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleMobileComponent } from './apple-mobile.component';

describe('AppleMobileComponent', () => {
  let component: AppleMobileComponent;
  let fixture: ComponentFixture<AppleMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppleMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppleMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
