import { TestBed } from '@angular/core/testing';

import { RestBilheteServiceService } from './rest-bilhete-service.service';

describe('RestBilheteServiceService', () => {
  let service: RestBilheteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestBilheteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
