import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarEventoComponent } from './mostrar-evento.component';

describe('MostrarEventoComponent', () => {
  let component: MostrarEventoComponent;
  let fixture: ComponentFixture<MostrarEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarEventoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
