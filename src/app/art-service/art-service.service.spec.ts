import { TestBed } from '@angular/core/testing';

import { ArtServiceService } from './art-service.service';

describe('ArtServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtServiceService = TestBed.get(ArtServiceService);
    expect(service).toBeTruthy();
  });
});
