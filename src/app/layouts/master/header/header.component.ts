import {Component, OnInit, HostBinding} from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {Router, ActivatedRoute} from '@angular/router';
import {LoginService} from 'src/app/services/login.service';
import {IAppState} from '../../../redux/store';
import {LOGIN, LOGOUT} from '../../../redux/action';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  [x: string]: any;

  faSearch = faSearch;
  isLogin = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService) {
  }


  ngOnInit() {
    if (window.sessionStorage.getItem('userToken') != null) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }

  }

  logout() {
    this.loginService.logout();
    this.isLogin  = false;
    this.router.navigate(['/login']);
  }

}
