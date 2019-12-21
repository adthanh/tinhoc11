import { ExercisesComponent } from './pages/master/exercises/exercises.component';
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
import { GroupSyllabusComponent } from './pages/admin/group-syllabus/group-syllabus.component';
import { SignUpComponent } from './pages/master/sign-up/sign-up.component';

const APP_ROUTES: Routes = [
  {
    path: '', component: MasterComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'exercises', component: ExercisesComponent},
      {path: 'signup', component: SignUpComponent},
    ]
  },
  {
    path: 'admin', component: AdminComponent, data: {title: 'Secure Views'}, children: [
      {path: 'dashboard', component: SyllabusMnComponent},
      {path: 'group-syllabus', component: GroupSyllabusComponent},
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
