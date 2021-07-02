import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTicketsComponent } from './listar-tickets.component';

describe('ListarTicketsComponent', () => {
  let component: ListarTicketsComponent;
  let fixture: ComponentFixture<ListarTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
