import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAddMnComponent } from './project-add-mn.component';

describe('ProjectAddMnComponent', () => {
  let component: ProjectAddMnComponent;
  let fixture: ComponentFixture<ProjectAddMnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectAddMnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectAddMnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
