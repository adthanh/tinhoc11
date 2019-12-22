import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faSearch = faSearch;

  constructor(private router: Router, private loginService: LoginService) {
    
    if (window.sessionStorage.getItem('userToken') != null) {
      this.login = false;
    }
    else {
      this.login = true;
    }
  }

  login = false;

  ngOnInit() {
  }

  logout() {
    this.loginService.logout();
    this.login = true;
    this.router.navigate(['/login']);
  }

}
