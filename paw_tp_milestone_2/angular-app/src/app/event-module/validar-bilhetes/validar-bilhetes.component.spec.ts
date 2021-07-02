import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarBilhetesComponent } from './validar-bilhetes.component';

describe('ValidarBilhetesComponent', () => {
  let component: ValidarBilhetesComponent;
  let fixture: ComponentFixture<ValidarBilhetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidarBilhetesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarBilhetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
