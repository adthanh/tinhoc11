import { SignUpService } from './../../../services/sign-up.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SignUpRequest } from 'src/app/requests/sign-up-request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  error = '';

  constructor( private router: Router ,private signUpService : SignUpService) {}

  signUpForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    cfPassword: new FormControl('', Validators.required),
  }); 

  ngOnInit() {
    if (window.sessionStorage.getItem('userToken') != null) {
      this.router.navigate(['/signup']);
    }
  }

  get formControls() { return this.signUpForm.controls; }

  OnGetToken(){
    if (this.signUpForm.invalid) {
      return;
    }

    const request = new SignUpRequest();
    const self = this.signUpForm.value;
    request.name = self.username;
    request.password = self.password;
    request.email = self.email;
    request.c_password = self.cfPassword;
    this.signUpService.getRegister(request, this.error).subscribe(
      (data: any) => {
        alert('Đăng kí thành công');
        window.sessionStorage.setItem('userToken', data.access_token);
        this.router.navigate(['/login']);
      },
      (response: any) => {
        this.error = "Đăng kí không thành công";
      });
  }
}
