import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoandetComponent } from './loandet.component';

describe('LoandetComponent', () => {
  let component: LoandetComponent;
  let fixture: ComponentFixture<LoandetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoandetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoandetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
