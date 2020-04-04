import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFormlyNgZorroAntdComponent } from './ngx-formly-ng-zorro-antd.component';

describe('NgxFormlyNgZorroAntdComponent', () => {
  let component: NgxFormlyNgZorroAntdComponent;
  let fixture: ComponentFixture<NgxFormlyNgZorroAntdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxFormlyNgZorroAntdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFormlyNgZorroAntdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
