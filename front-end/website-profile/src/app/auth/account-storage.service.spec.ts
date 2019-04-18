import { TestBed } from '@angular/core/testing';

import { AccountStorageService } from './account-storage.service';

describe('AccountStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountStorageService = TestBed.get(AccountStorageService);
    expect(service).toBeTruthy();
  });
});
