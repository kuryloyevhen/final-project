import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterBookingsComponent } from './center-bookings.component';

describe('CenterBookingsComponent', () => {
  let component: CenterBookingsComponent;
  let fixture: ComponentFixture<CenterBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
