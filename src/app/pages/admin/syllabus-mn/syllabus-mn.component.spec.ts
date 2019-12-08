import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusMnComponent } from './syllabus-mn.component';

describe('SyllabusMnComponent', () => {
  let component: SyllabusMnComponent;
  let fixture: ComponentFixture<SyllabusMnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyllabusMnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyllabusMnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
