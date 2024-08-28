import { TestBed } from '@angular/core/testing';

import { UserhttpService } from './userhttp.service';

describe('UserhttpService', () => {
  let service: UserhttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserhttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
