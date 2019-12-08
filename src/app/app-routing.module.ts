import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MasterComponent} from './layouts/master/master.component';
import {AdminComponent} from './layouts/admin/admin.component';
import {Guard} from './core/guards/auth.guard';
import {HomeComponent} from './pages/master/home/home.component';
import {PagesModule} from './pages/pages.module';
import {LoginComponent} from './pages/master/login/login.component';
import {SyllabusMnComponent} from './pages/admin/syllabus-mn/syllabus-mn.component';
import {ProjectAddMnComponent} from './pages/admin/project-add-mn/project-add-mn.component';

const APP_ROUTES: Routes = [
  {
    path: '', component: MasterComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'login', component: LoginComponent},
    ]
  },
  {
    path: 'admin', component: AdminComponent, data: {title: 'Secure Views'}, children: [
      {path: '', component: SyllabusMnComponent},
      {path: 'lesson', component: ProjectAddMnComponent},
    ], canActivate: [Guard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES),
    PagesModule
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AppRoutingModule {
}
