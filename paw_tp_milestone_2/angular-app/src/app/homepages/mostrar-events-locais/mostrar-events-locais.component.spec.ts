import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarEventsLocaisComponent } from './mostrar-events-locais.component';

describe('MostrarEventsLocaisComponent', () => {
  let component: MostrarEventsLocaisComponent;
  let fixture: ComponentFixture<MostrarEventsLocaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarEventsLocaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarEventsLocaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
