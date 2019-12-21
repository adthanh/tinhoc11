import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSyllabusComponent } from './group-syllabus.component';

describe('GroupSyllabusComponent', () => {
  let component: GroupSyllabusComponent;
  let fixture: ComponentFixture<GroupSyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupSyllabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
