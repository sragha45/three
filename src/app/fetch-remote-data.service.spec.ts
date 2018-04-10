import { TestBed, inject } from '@angular/core/testing';

import { FetchRemoteDataService } from './fetch-remote-data.service';

describe('FetchRemoteDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchRemoteDataService]
    });
  });

  it('should be created', inject([FetchRemoteDataService], (service: FetchRemoteDataService) => {
    expect(service).toBeTruthy();
  }));
});
