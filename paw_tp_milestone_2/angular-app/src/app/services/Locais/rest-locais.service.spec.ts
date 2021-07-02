import { TestBed } from '@angular/core/testing';

import { RestLocaisService } from './rest-locais.service';

describe('RestLocaisService', () => {
  let service: RestLocaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestLocaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
