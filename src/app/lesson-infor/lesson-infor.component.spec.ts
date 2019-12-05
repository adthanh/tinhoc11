import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonInforComponent } from './lesson-infor.component';

describe('LessonInforComponent', () => {
  let component: LessonInforComponent;
  let fixture: ComponentFixture<LessonInforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonInforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
