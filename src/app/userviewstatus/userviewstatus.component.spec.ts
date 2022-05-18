import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewstatusComponent } from './userviewstatus.component';

describe('UserviewstatusComponent', () => {
  let component: UserviewstatusComponent;
  let fixture: ComponentFixture<UserviewstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserviewstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserviewstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
