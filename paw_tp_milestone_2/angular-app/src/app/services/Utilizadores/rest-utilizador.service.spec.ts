import { TestBed } from '@angular/core/testing';

import { RestUtilizadorService } from './rest-utilizador.service';

describe('RestUtilizadorService', () => {
  let service: RestUtilizadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestUtilizadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
