import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarTicketsClientComponent } from './mostrar-tickets-client.component';

describe('MostrarTicketsClientComponent', () => {
  let component: MostrarTicketsClientComponent;
  let fixture: ComponentFixture<MostrarTicketsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarTicketsClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarTicketsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
