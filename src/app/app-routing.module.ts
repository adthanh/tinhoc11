import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { AdminLTEComponent } from './admin-lte/admin-lte.component';
import { PublicComponent } from './layouts/public/public.component';
import { SecureComponent } from './layouts/secure/secure.component';
import { PUBLIC_ROUTES } from './layouts/public/public.routes';
import { SECURE_ROUTES } from './layouts/secure/secure.routes';
import { Guard } from './guards/auth.guard';
// const routes: Routes = [
//   { path: 'home', component: HomeComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'admin', component: AdminLTEComponent },
//   { path: '', component: HomeComponent }
// ];
const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', },
  { path: 'home', component: PublicComponent, data: { title: 'Public Views' }, children: PUBLIC_ROUTES },
  { path: 'admin', component: SecureComponent, data: { title: 'Secure Views' }, children: SECURE_ROUTES, canActivate: [Guard] }
];
@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
