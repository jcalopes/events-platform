import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarTopEventosComponent } from './mostrar-top-eventos.component';

describe('MostrarTopEventosComponent', () => {
  let component: MostrarTopEventosComponent;
  let fixture: ComponentFixture<MostrarTopEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarTopEventosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarTopEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
