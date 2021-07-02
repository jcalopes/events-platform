import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarLocalComponent } from './adicionar-local.component';

describe('AdicionarLocalComponent', () => {
  let component: AdicionarLocalComponent;
  let fixture: ComponentFixture<AdicionarLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarLocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
