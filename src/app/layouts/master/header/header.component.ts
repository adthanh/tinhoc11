import { UserService } from 'src/app/services/user.service';
import { Component, OnInit, HostBinding } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/response/user-dto';

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
    private loginService: LoginService,
    private userService: UserService
  ) {}
  user : User;
  isLogin: boolean = true;
  isAdmin: boolean = false;
  ngOnInit() {
    if (window.sessionStorage.getItem('userToken') != null) {
      this.isLogin = true;
    }
    else {
      this.isLogin = false;
    }
    this.getProfile()

    // this.isLogin = this.route.snapshot.params['isLogin'];

  }
  
  getProfile() {
    this.userService.getProfile().subscribe(
      (result: User) => {
        if (result) {
          this.user = result;    
          if(this.user.level === 1) this.isAdmin = true;
        } else {
          this.user = undefined;
        }
      }
    );
  }

  logout() {
    this.loginService.logout();
    this.isLogin = false;
    this.router.navigate(['/login']);
  }

}
