import { Component, OnInit, HostBinding } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  [x: string]: any;
  faSearch = faSearch;

  constructor(private router: Router, private loginService: LoginService) {
    
    if (window.sessionStorage.getItem('userToken') != null) {
      this.isLogin = false;
    }
    else {
      this.isLogin = true;
    }
  }

  // @HostBinding('class.is-open')
  isLogin = false;

  // toggle() {
  //   this.isLogin = !this.isLogin;
  // }

  ngOnInit() {
  }

  logout() {
    this.loginService.logout();
    this.isLogin = true;
    this.router.navigate(['/login']);
  }

}
