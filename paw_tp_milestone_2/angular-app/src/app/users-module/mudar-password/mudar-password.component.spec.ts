import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MudarPasswordComponent } from './mudar-password.component';

describe('MudarPasswordComponent', () => {
  let component: MudarPasswordComponent;
  let fixture: ComponentFixture<MudarPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MudarPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MudarPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
