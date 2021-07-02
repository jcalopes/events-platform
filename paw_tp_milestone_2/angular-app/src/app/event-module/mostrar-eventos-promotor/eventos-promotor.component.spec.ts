import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosPromotorComponent } from './eventos-promotor.component';

describe('EventosPromotorComponent', () => {
  let component: EventosPromotorComponent;
  let fixture: ComponentFixture<EventosPromotorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosPromotorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosPromotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
