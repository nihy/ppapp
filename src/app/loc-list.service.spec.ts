/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LocListService } from './loc-list.service';

describe('LocListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocListService]
    });
  });

  it('should ...', inject([LocListService], (service: LocListService) => {
    expect(service).toBeTruthy();
  }));
});
