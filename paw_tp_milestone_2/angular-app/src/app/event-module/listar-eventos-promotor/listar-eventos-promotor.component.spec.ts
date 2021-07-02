import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEventosPromotorComponent } from './listar-eventos-promotor.component';

describe('ListarEventosPromotorComponent', () => {
  let component: ListarEventosPromotorComponent;
  let fixture: ComponentFixture<ListarEventosPromotorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEventosPromotorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEventosPromotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
