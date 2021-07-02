import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDestaquesComponent } from './mostrar-destaques.component';

describe('MostrarDestaquesComponent', () => {
  let component: MostrarDestaquesComponent;
  let fixture: ComponentFixture<MostrarDestaquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarDestaquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarDestaquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
