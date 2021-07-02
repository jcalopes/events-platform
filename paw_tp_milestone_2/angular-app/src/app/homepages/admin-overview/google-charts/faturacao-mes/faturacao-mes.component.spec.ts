import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturacaoMesComponent } from './faturacao-mes.component';

describe('FaturacaoMesComponent', () => {
  let component: FaturacaoMesComponent;
  let fixture: ComponentFixture<FaturacaoMesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaturacaoMesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaturacaoMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
