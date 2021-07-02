import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarAllEventsComponent } from './mostrar-all-events.component';

describe('MostrarAllEventsComponent', () => {
  let component: MostrarAllEventsComponent;
  let fixture: ComponentFixture<MostrarAllEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarAllEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarAllEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
