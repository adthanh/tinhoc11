import { Component, OnInit, HostBinding } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  [x: string]: any;
  faSearch = faSearch;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) {}

  isLogin: boolean = true;

  ngOnInit() {
    if (window.sessionStorage.getItem('userToken') != null) {
      this.isLogin = true;
    }
    else {
      this.isLogin = false;
    }

    // this.isLogin = this.route.snapshot.params['isLogin'];

  }

  logout() {
    this.loginService.logout();
    this.isLogin = false;
    this.router.navigate(['/login']);
  }

}
