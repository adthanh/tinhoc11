import { LoginService } from './../../../services/login.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginRequest } from 'src/app/requests/login-request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService : LoginService) { }
  LoginForm = new FormGroup({
    UserName: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required),
  });
  ngOnInit() {
    if (window.sessionStorage.getItem('userToken') != null) {
      this.router.navigate(['/home']);
    }
  }

  OnGetToken(){
    // const request = new LoginRequest();
    // const self = this.LoginForm.value;
    // request.username = self.UserName;
    // request.password = self.Password;
    const user = this.LoginForm.controls.UserName.value;
    const pass = this.LoginForm.controls.Password.value;
    this.loginService.UserAuthentication(user,pass).subscribe(
      (data: any) => {
        window.sessionStorage.setItem('userToken', data.access_token);
        this.router.navigate(['/home']);
    }),
      (error: string) => {
      console.log("error " + error);
    }
  }

  // login(): void {
  //   if (this.username === 'admin' && this.password === 'admin') {
  //     this.router.navigate(['home']);
  //   } else {
  //     alert('Lỗi tài khoản mật khẩu');
  //   }
  // }
}
