/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DatabaseFirebaseService } from './database-firebase.service';

describe('Service: DatabaseFirebase', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatabaseFirebaseService]
    });
  });

  it('should ...', inject([DatabaseFirebaseService], (service: DatabaseFirebaseService) => {
    expect(service).toBeTruthy();
  }));
});
