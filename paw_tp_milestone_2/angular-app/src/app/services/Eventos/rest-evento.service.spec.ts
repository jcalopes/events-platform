import { TestBed } from '@angular/core/testing';

import { RestEventoService } from './rest-evento.service';

describe('RestEventoService', () => {
  let service: RestEventoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestEventoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
