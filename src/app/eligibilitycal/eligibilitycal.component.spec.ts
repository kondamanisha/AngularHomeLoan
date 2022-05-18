import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibilitycalComponent } from './eligibilitycal.component';

describe('EligibilitycalComponent', () => {
  let component: EligibilitycalComponent;
  let fixture: ComponentFixture<EligibilitycalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibilitycalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EligibilitycalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
