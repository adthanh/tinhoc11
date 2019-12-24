import { User } from './../../../response/user-dto';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { UserRequest } from 'src/app/requests/user-request';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
  ) { }
  users: User[];
  user: User;
  selectedUser: User;
  userControl: FormControl = new FormControl();
  userSearch: FormControl = new FormControl();
  userGroup: FormGroup;
  error = '';
  id = '';
  ngOnInit() {
    this.initForm();
    this.getProfile();
    
  }

  initForm() {
    this.userGroup = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      cfPassword: new FormControl('', Validators.required),
    });
  }


  selectUser() {    
    this.userGroup.get('username').setValue(this.user.name);
    this.userGroup.get('password').setValue(this.user.password);
    this.userGroup.get('cfPassword').setValue(this.user.c_password);
  }

  updateProfile() {
    const self = this.userGroup.value;
    const request = new UserRequest();
    request.id = self.id;
    request.name = self.username;
    request.password = self.password;
    request.c_password = self.cfPassword;
    this.userService.updateProfile(request).subscribe(
      _result => {
        this.getProfile();
        alert("Sửa thông tin thành công");
      },
      _error => {
        this.error = _error = "Sửa thông tin không thành công";
      }
    )
  }
  
  getProfile() {
    this.userService.getProfile().subscribe(
      (result: User) => {
        if (result) {
          console.log(result);
          this.user = result;
          this.selectUser();          
        } else {
          this.user = undefined;
        }
      }
    );
  }
}
