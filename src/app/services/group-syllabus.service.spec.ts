import { TestBed } from '@angular/core/testing';

import { GroupSyllabusService } from './group-syllabus.service';

describe('GroupSyllabusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupSyllabusService = TestBed.get(GroupSyllabusService);
    expect(service).toBeTruthy();
  });
});
