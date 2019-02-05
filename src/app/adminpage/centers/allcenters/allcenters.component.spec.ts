import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcentersComponent } from './allcenters.component';

describe('AllcentersComponent', () => {
  let component: AllcentersComponent;
  let fixture: ComponentFixture<AllcentersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllcentersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
