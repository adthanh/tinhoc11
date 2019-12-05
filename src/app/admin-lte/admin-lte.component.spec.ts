import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLTEComponent } from './admin-lte.component';

describe('AdminLTEComponent', () => {
  let component: AdminLTEComponent;
  let fixture: ComponentFixture<AdminLTEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLTEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLTEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
