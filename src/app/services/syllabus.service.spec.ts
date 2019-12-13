import { TestBed } from '@angular/core/testing';

import { SyllabusService } from './syllabus.service';

describe('SyllabusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SyllabusService = TestBed.get(SyllabusService);
    expect(service).toBeTruthy();
  });
});
