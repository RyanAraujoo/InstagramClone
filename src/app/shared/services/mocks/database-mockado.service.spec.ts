import { TestBed } from '@angular/core/testing';

import { DatabaseMockadoService } from './database-mockado.service';

describe('DatabaseMockadoService', () => {
  let service: DatabaseMockadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseMockadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
