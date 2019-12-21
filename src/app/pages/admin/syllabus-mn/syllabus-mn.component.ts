import { Syllabus } from './../../../response/syllabus-dto';
import { Component, OnInit } from '@angular/core';
import { SyllabusService } from 'src/app/services/syllabus.service';
import { enableProdMode } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SyllabusRequest } from 'src/app/requests/syllabus-request';
import { GroupSyllabusService } from 'src/app/services/group-syllabus.service';
import { GroupSyllabus } from 'src/app/response/group-syllabus-dto';

enableProdMode();
@Component({
  selector: 'app-syllabus-mn',
  templateUrl: './syllabus-mn.component.html',
  styleUrls: ['./syllabus-mn.component.css']
})
export class SyllabusMnComponent implements OnInit {

  groupSyllabuss: GroupSyllabus[];
  syllabuss: Syllabus[];
  syllabus: Syllabus;
  selectedSyllabus: Syllabus;
  selectedGrSyllabus: GroupSyllabus;
  syllabusControl: FormControl = new FormControl();
  syllabusSearch: FormControl = new FormControl();
  syllabusGroup: FormGroup;
  syllabusType: FormControl = new FormControl(false);

  constructor(
    private syllabusService: SyllabusService,
    private groupSyllabusService: GroupSyllabusService
  ) { }

  ngOnInit() {
    this.loadsyllabus();
    this.initForm();
  }

  initForm() {
    this.syllabusGroup = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      idGroup: new FormControl(''),
      group_name:new FormControl('')
    });
  }

  selectSyllabus(syllabus : Syllabus){
    if (!syllabus) {
      return;
    }
    this.loadGroupSyllabus();
    this.selectedSyllabus = syllabus;
    this.syllabusGroup.get('name').setValue(this.selectedSyllabus.name);
    this.syllabusGroup.get('id').setValue(this.selectedSyllabus.id);
    this.syllabusGroup.get('group_name').setValue(this.selectedSyllabus.group_name);
    this.syllabusGroup.get('idGroup').setValue(this.selectedSyllabus.id_group);
  }

  loadGroupSyllabus() {
    this.groupSyllabusService.getAllGroupSyllabus().subscribe(
      (result: GroupSyllabus[]) => {
        if (result) {
          this.groupSyllabuss = result;
        }
      }
    );
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

  searchSyllabus() {
    if (this.syllabusSearch.value === '' || this.syllabusSearch.value == null) {
      this.loadsyllabus();
    }
    else {
      this.syllabusService.searchSyllabus(this.syllabusSearch.value).subscribe(
        result => {
          if (result) {
            this.syllabuss = result;
          } else {
            this.syllabuss = [];
          }
        }
      );
    }
  }

  createSyllabus() {
    const request = new SyllabusRequest();
    const seft = this.syllabusGroup.value;
    request.name = seft.name;
    request.id_group = seft.idGroup.id;
    console.log(request);
    this.syllabusService.createSyllabus(request).subscribe(
      _result => {
        this.loadsyllabus();
        alert("Thêm thành công bài giảng");
      },
      error => {
        console.log("error " + error);
      }
    );
  }
  
  updateSyllabus(){
    const request = new SyllabusRequest();
    const self = this.syllabusGroup.value;
    request.id = self.id;
    request.name = self.name;
    request.id_group = self.idGroup;
    console.log(request);
    this.syllabusService.updateSyllabus(request).subscribe(
      _result => {
        this.loadsyllabus();
        this.initForm();
        alert("Sửa thành công bài giảng");
      },
      error => {
        console.log("error " + error);
      }
    );
  }

  deleteSyllabus(){
    this.syllabusService.deleteSyllabus(this.selectedSyllabus.id).subscribe(
      result => {
        this.initForm();
        this.loadsyllabus();
        alert("Xóa bài giảng thành công");
      },
      error => {
        alert("Lỗi hệ thống không xác định");
      }
    );
  }

  openCreateModal() {
    this.loadGroupSyllabus();
    this.initForm();
  }
 
}
