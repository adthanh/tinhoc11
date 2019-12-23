import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { GroupSyllabusService } from 'src/app/services/group-syllabus.service';
import { GroupSyllabus } from 'src/app/response/group-syllabus-dto';
import { GroupSyllabusRequest } from 'src/app/requests/group-syllabus-request';
import { FormGroup, Validators } from '@angular/forms';
import { empty, EMPTY } from 'rxjs';
@Component({
  selector: 'app-group-syllabus',
  templateUrl: './group-syllabus.component.html',
  styleUrls: ['./group-syllabus.component.css']
})
export class GroupSyllabusComponent implements OnInit {

  groupSyllabuss: GroupSyllabus[];
  groupSyllabus: GroupSyllabus;
  selectGrSyllabus: GroupSyllabus;
  groupSyllabusControl: FormControl = new FormControl();
  groupSyllabusSearch: FormControl = new FormControl();
  groupSyllabusGroup: FormGroup;

  constructor(private groupSyllabusService: GroupSyllabusService) { }

  ngOnInit() {
    this.loadGroupSyllabus();
    this.initForm();
  }

  initForm() {
    this.groupSyllabusGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      id: new FormControl(''),
      createdAt: new FormControl(''),
      updatedAt: new FormControl('')
    });
  }

  loadGroupSyllabus() {
    this.groupSyllabusService.getAllGroupSyllabus().subscribe(
      (result: GroupSyllabus[]) => {
        if (result) {
          this.groupSyllabuss = result;
        } else {
          this.groupSyllabuss = [];
        }
      }
    );
  }

  createGroupSyllabus() {
    const self = this.groupSyllabusGroup.value;
    const request = new GroupSyllabusRequest();
    request.name = self.name;
    this.groupSyllabusService.createGroupSyllabus(request).subscribe(
      _result => {
        this.loadGroupSyllabus();
        alert("Thêm thành công nhóm bài giảng");
      },
      _error => {
        alert("Lỗi hệ thống không xác định");
      }
    )
  }

  searchGroupSyllabus() {
    if (this.groupSyllabusSearch.value === '' || this.groupSyllabusSearch.value == null) {
      this.loadGroupSyllabus();
    }
    else {
      this.groupSyllabusService.searchGroupSyllabus(this.groupSyllabusSearch.value).subscribe(
        result => {
          if (result) {
            this.groupSyllabuss = result;
          } else {
            this.groupSyllabuss = [];
          }
        }
      );
    }
  }

  selectGroupSyllabus(grSyllabus: GroupSyllabus) {
    if (!grSyllabus) {
      return;
    }
    this.loadGroupSyllabus();
    this.selectGrSyllabus = grSyllabus;
    this.groupSyllabusGroup.get('id').setValue(this.selectGrSyllabus.id);
    this.groupSyllabusGroup.get('name').setValue(this.selectGrSyllabus.name);
    this.groupSyllabusGroup.get('createdAt').setValue(this.selectGrSyllabus.created_at);
    this.groupSyllabusGroup.get('updatedAt').setValue(this.selectGrSyllabus.updated_at);
  }

  updateGroupSyllabus() {
    const self = this.groupSyllabusGroup.value;
    const request = new GroupSyllabusRequest();
    request.id = self.id;
    request.name = self.name;
    this.groupSyllabusService.updateGroupSyllabus(request).subscribe(
      _result => {
        this.loadGroupSyllabus();
        alert("Sửa thành công nhóm bài giảng");
      },
      _error => {
        alert("Lỗi hệ thống không xác định");
      }
    )
  }

  deleteGroupSyllabus() {
    this.groupSyllabusService.deleteGroupSyllabus(this.selectGrSyllabus.id).subscribe(
      result => {
        this.initForm();
        this.loadGroupSyllabus();
        alert("Xóa nhóm bài giảng thành công");
      },
      error => {
        alert("Lỗi hệ thống không xác định");
      }
    );
  }

  // createGroupSyllabus() {
  //   const request = new GroupSyllabusRequest();
  //   this.groupSyllabusService.createGroupSyllabus( this.groupSyllabusControl.value, request).subscribe(
  //     _result => {
  //       console.log("success");
  //       this.loadGroupSyllabus();
  //     },
  //     error => {
  //       console.log("error " + error);
  //     }
  //   );
  // }

}
