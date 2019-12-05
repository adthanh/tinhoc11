import { Injectable } from '@angular/core';

import { CanActivate, Router } from '@angular/router';

@Injectable()
export class Guard implements CanActivate {

    constructor(protected router: Router) { }

    canActivate() {
        if (localStorage.getItem('access_token')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/home']);
        return false;
    }
}
