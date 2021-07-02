import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalEventoComponent } from './local-evento.component';

describe('LocalEventoComponent', () => {
  let component: LocalEventoComponent;
  let fixture: ComponentFixture<LocalEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalEventoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
