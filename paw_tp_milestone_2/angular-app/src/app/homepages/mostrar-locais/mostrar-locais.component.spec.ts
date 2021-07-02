import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarLocaisComponent } from './mostrar-locais.component';

describe('MostrarLocaisComponent', () => {
  let component: MostrarLocaisComponent;
  let fixture: ComponentFixture<MostrarLocaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarLocaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarLocaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
