import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/response/user-dto';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { UserRequest } from 'src/app/requests/user-request';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  user: User;
  selectedUser : User;
  userControl: FormControl = new FormControl();
  userSearch: FormControl = new FormControl();
  userGroup: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadUsers();
    this.initForm();
  }

  initForm() {
    this.userGroup = new FormGroup({
      uName: new FormControl('', Validators.required),
      id: new FormControl(''),
      uEmail: new FormControl(''),
      uLevel: new FormControl(''),
      uPassword: new FormControl(''),
    });
  }
  selectUser(user: User) {
    if (!user) {
      return;
    }
    this.selectedUser = user;
    this.userGroup.get('uName').setValue(this.selectedUser.name);
    this.userGroup.get('id').setValue(this.selectedUser.id);
    this.userGroup.get('uEmail').setValue(this.selectedUser.email);
    this.userGroup.get('uPassword').setValue(this.selectedUser.password);
    this.userGroup.get('uLevel').setValue(this.selectedUser.level);
  }

  loadUsers() {
    this.userService.getAllUser().subscribe(
      (result: User[]) => {
        if (result) {
          this.users = result;
        } else {
          this.users = [];
        }
      }
    );
  }

  searchUser() {
    if (this.userSearch.value === '' || this.userSearch.value == null) {
      this.loadUsers();
    }
    else {
      this.userService.searchUser(this.userSearch.value).subscribe(
        result => {
          if (result) {
            this.users = result;
          } else {
            this.users = [];
          }
        }
      );
    }
  }

  updateUser() {
    const self = this.userGroup.value;
    const request = new UserRequest();
    request.id = self.id;
    request.name = self.uName;
    request.email = self.uEmail;
    request.password = self.uPassword;
    request.level = self.uLevel;
    this.userService.updateUser(request).subscribe(
      _result => {
        this.loadUsers();
        alert("Sửa thông tin thành công");
      },
      _error => {
        alert("Sửa thông tin không thành công");
      }
    )
  }

  createUser(){
    const self = this.userGroup.value;
    const request = new UserRequest();
    request.id = self.id;
    request.name = self.uName;
    request.email = self.uEmail;
    request.password = self.uPassword;
    this.userService.createUser(request).subscribe(
      _result => {
        this.loadUsers();
        alert("Thêm thông tin thành công");
      },
      error => {
        console.log("error " + error);
        alert("Thêm thông tin không thành công");
      }
    );
  }

  openCreateModal(){
    this.initForm();
  }

  deleteUser(){
    this.userService.deleteUser(this.selectedUser.id).subscribe(
      result => {
        this.initForm();
        this.loadUsers();
        alert("Xóa thành viên thành công");
      },
      error => {
        alert("Xóa thành viên không thành công");
      }
    );
  }

 

}
