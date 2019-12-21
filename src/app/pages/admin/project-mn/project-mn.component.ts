import { ProjectRequest } from './../../../requests/project-request';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from './../../../services/project.service';
import { Component, OnInit } from '@angular/core';
import { Syllabus } from 'src/app/response/syllabus-dto';
import { SyllabusService } from 'src/app/services/syllabus.service';
import { Project } from 'src/app/response/project-dto';

@Component({
  selector: 'app-project-mn',
  templateUrl: './project-mn.component.html',
  styleUrls: ['./project-mn.component.css']
})
export class ProjectMnComponent implements OnInit {


  syllabuss: Syllabus[];
  projects: Project[];
  project: Project;
  selectedProject: Project;
  selectedSyllabus: Syllabus;
  projectControl: FormControl = new FormControl();
  projectSearch: FormControl = new FormControl();
  projectGroup: FormGroup;

  constructor
    (
      private projectService: ProjectService,
      private syllabusService: SyllabusService
    ) { }

  ngOnInit() {
    this.loadProject();
    this.initForm();
  }

  initForm() {
    this.projectGroup = new FormGroup({
      id: new FormControl(''),
      pName: new FormControl('', Validators.required),
      pIdSyllabus: new FormControl(''),
      pGroupName: new FormControl(''),
      pDescription: new FormControl(''),
      pType: new FormControl(''),
      pJsonData: new FormControl(''),
    });
  }

  selectProject(project: Project) {
    if (!project) {
      return;
    }
    this.loadProject();
    this.selectedProject = project;
    this.projectGroup.get('pName').setValue(this.selectedProject.name);
    this.projectGroup.get('id').setValue(this.selectedProject.id);
    this.projectGroup.get('pGroupName').setValue(this.selectedProject.syllabus_name);
    this.projectGroup.get('pIdSyllabus').setValue(this.selectedProject.id_syllabus);
    this.projectGroup.get('pDescription').setValue(this.selectedProject.description);
    this.projectGroup.get('pType').setValue(this.selectedProject.type);
    this.projectGroup.get('pJsonData').setValue(this.selectedProject.json_data);
  }

  loadsyllabus() {
    this.syllabusService.getAllSyllabus().subscribe(
      result => {
        if (result) {
          this.syllabuss = result;
        } else {
          this.syllabuss = [];
        }
      }
    );
  }

  loadProject() {
    return this.projectService.getAllProject().subscribe(
      result => {
        if (result) {
          this.projects = result;
        } else {
          this.projects = [];
        }
      }
    );
  }

  createProject() {
    const request = new ProjectRequest();
    const seft = this.projectGroup.value;
    request.name = seft.pName;
    request.id_syllabus = seft.pGroupName.id;
    request.description = seft.pDescription;
    request.type = seft.pType;
    request.json_data = seft.pJsonData;
    this.projectService.createProject(request).subscribe(
      _result => {
        this.loadProject();
        alert("Thêm thành công bài học");
      },
      error => {
        console.log("error " + error);
      }
    );
  }

  openCreateModal() {
    this.loadsyllabus();
    this.initForm();
  }

  deleteProject() {
    this.projectService.deleteProject(this.selectedProject.id).subscribe(
      result => {
        this.initForm();
        this.loadProject();
        alert("Xóa bài giảng thành công");
      },
      error => {
        alert("Lỗi hệ thống không xác định");
      }
    );
  }


}
