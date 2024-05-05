import { TestBed } from '@angular/core/testing';

import { NgUtilsService } from './ng-utils.service';

describe('NgUtilsService', () => {
  let service: NgUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
