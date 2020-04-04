import { TestBed } from '@angular/core/testing';

import { NgxFormlyNgZorroAntdService } from './ngx-formly-ng-zorro-antd.service';

describe('NgxFormlyNgZorroAntdService', () => {
  let service: NgxFormlyNgZorroAntdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFormlyNgZorroAntdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
