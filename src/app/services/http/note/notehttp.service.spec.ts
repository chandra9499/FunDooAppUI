import { TestBed } from '@angular/core/testing';

import { NotehttpService } from './notehttp.service';

describe('NoteService', () => {
  let service: NotehttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotehttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
