import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditLocalComponent } from './dialog-edit-local.component';

describe('DialogEditLocalComponent', () => {
  let component: DialogEditLocalComponent;
  let fixture: ComponentFixture<DialogEditLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditLocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
