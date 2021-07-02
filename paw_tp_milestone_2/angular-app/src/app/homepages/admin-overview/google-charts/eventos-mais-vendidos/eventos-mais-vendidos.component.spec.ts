import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosMaisVendidosComponent } from './eventos-mais-vendidos.component';

describe('EventosMaisVendidosComponent', () => {
  let component: EventosMaisVendidosComponent;
  let fixture: ComponentFixture<EventosMaisVendidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosMaisVendidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosMaisVendidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
