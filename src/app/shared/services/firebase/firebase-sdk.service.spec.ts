import { TestBed } from '@angular/core/testing';

import { FirebaseSDKService } from './firebase-sdk.service';

describe('FirebaseSDKService', () => {
  let service: FirebaseSDKService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseSDKService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
