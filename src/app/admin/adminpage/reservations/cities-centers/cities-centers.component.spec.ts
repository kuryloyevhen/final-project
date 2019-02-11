import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesCentersComponent } from './cities-centers.component';

describe('CitiesCentersComponent', () => {
  let component: CitiesCentersComponent;
  let fixture: ComponentFixture<CitiesCentersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitiesCentersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
