/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DatabasePublicationsService } from './databasePublications.service';

describe('Service: DatabasePublications', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatabasePublicationsService]
    });
  });

  it('should ...', inject([DatabasePublicationsService], (service: DatabasePublicationsService) => {
    expect(service).toBeTruthy();
  }));
});
