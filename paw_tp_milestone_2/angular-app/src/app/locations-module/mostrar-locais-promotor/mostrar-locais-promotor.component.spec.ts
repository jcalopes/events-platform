import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarLocaisPromotorComponent } from './mostrar-locais-promotor.component';

describe('MostrarLocaisPromotorComponent', () => {
  let component: MostrarLocaisPromotorComponent;
  let fixture: ComponentFixture<MostrarLocaisPromotorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarLocaisPromotorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarLocaisPromotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
