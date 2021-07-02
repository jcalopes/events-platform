import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBuyTicketComponent } from './dialog-buy-ticket.component';

describe('DialogBuyTicketComponent', () => {
  let component: DialogBuyTicketComponent;
  let fixture: ComponentFixture<DialogBuyTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBuyTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBuyTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
