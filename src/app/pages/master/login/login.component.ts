import { HeaderComponent } from './../../../layouts/master/header/header.component';
import { ConfigDto } from './../../../response/config-dto';
import { LoginService } from './../../../services/login.service';
import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginRequest } from 'src/app/requests/login-request';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  grantType = "password";
  clientId = 2;
  clientSecret = "P0joSPVnswLhlxCT2VdPcvGyxD2YjiTR5sm6FqEw";
  isSubmitted = false;
  error = '';
  loading = false;
  constructor(private router: Router, private loginService: LoginService) {

  }

  LoginForm = new FormGroup({
    UserName: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required),
  });

  ngOnInit() {
    if (window.sessionStorage.getItem('userToken') != null) {
      this.router.navigate(['/login']);
    }
  }

  get formControls() { return this.LoginForm.controls; }

  OnGetToken() {
    this.isSubmitted = true;

    if (this.LoginForm.invalid) {
      return;
    }

    const request = new LoginRequest();
    const self = this.LoginForm.value;
    request.username = self.UserName;
    request.password = self.Password;
    request.client_id = this.clientId;
    request.client_secret = this.clientSecret;
    request.grant_type = this.grantType;
    this.loginService.UserAuthentication(request, this.error).subscribe(
      (data: any) => {
        window.sessionStorage.setItem('userToken', data.access_token);
        this.router.navigate(['']);
      },
      (response: any) => {
        this.error = "Đăng nhập không thành công";
      });
  }

}
