import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditEventComponent } from './dialog-edit-event.component';

describe('DialogEditEventComponent', () => {
  let component: DialogEditEventComponent;
  let fixture: ComponentFixture<DialogEditEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
