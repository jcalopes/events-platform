import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCategoriasComponent } from './show-categorias.component';

describe('ShowCategoriasComponent', () => {
  let component: ShowCategoriasComponent;
  let fixture: ComponentFixture<ShowCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCategoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
