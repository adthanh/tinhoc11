import { ExercisesComponent } from './pages/master/exercises/exercises.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './layouts/master/master.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { Guard } from './core/guards/auth.guard';
import { HomeComponent } from './pages/master/home/home.component';
import { PagesModule } from './pages/pages.module';
import { LoginComponent } from './pages/master/login/login.component';
import { SyllabusMnComponent } from './pages/admin/syllabus-mn/syllabus-mn.component';
import { ProjectAddMnComponent } from './pages/admin/project-add-mn/project-add-mn.component';
import { GroupSyllabusComponent } from './pages/admin/group-syllabus/group-syllabus.component';
import { SignUpComponent } from './pages/master/sign-up/sign-up.component';
import { ProjectMnComponent } from './pages/admin/project-mn/project-mn.component';
import { UserComponent } from './pages/admin/user/user.component';

const APP_ROUTES: Routes = [
  {
    path: '', component: MasterComponent, children: [
      // { path: '', redirectTo: '/home/false', pathMatch: 'full' },
      // {
      //   path: 'home/:isLogin', component: HomeComponent, data: {
      //     title: "Home",
      //     x : 123
      //   }
      // },
      {
        path: '', component: HomeComponent
      },
      { path: 'login', component: LoginComponent },
      { path: 'exercises', component: ExercisesComponent },
      { path: 'signup', component: SignUpComponent },
    ]
  },
  {
    path: 'admin', component: AdminComponent, data: { title: 'Secure Views' }, children: [
      { path: 'dashboard', component: SyllabusMnComponent },
      { path: 'group-syllabus', component: GroupSyllabusComponent },
      { path: 'project', component: ProjectAddMnComponent },
      { path: 'project-mn', component: ProjectMnComponent },
      { path: 'user', component: UserComponent },
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
