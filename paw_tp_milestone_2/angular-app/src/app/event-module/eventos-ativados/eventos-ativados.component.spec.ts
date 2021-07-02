import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosAtivadosComponent } from './eventos-ativados.component';

describe('EventosAtivadosComponent', () => {
  let component: EventosAtivadosComponent;
  let fixture: ComponentFixture<EventosAtivadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosAtivadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosAtivadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
