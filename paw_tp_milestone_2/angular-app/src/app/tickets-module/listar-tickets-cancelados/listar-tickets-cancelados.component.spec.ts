import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTicketsCanceladosComponent } from './listar-tickets-cancelados.component';

describe('ListarTicketsCanceladosComponent', () => {
  let component: ListarTicketsCanceladosComponent;
  let fixture: ComponentFixture<ListarTicketsCanceladosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTicketsCanceladosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTicketsCanceladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
