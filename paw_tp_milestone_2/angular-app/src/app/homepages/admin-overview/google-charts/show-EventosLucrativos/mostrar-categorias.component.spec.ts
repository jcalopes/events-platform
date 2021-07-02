import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarCategoriasComponent } from './mostrar-categorias.component';

describe('MostrarCategoriasComponent', () => {
  let component: MostrarCategoriasComponent;
  let fixture: ComponentFixture<MostrarCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarCategoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
