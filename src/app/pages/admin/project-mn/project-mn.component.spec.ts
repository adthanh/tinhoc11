import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMnComponent } from './project-mn.component';

describe('ProjectMnComponent', () => {
  let component: ProjectMnComponent;
  let fixture: ComponentFixture<ProjectMnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectMnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
