import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './master/home/home.component';
import {LoginComponent} from './master/login/login.component';
import {FormsModule} from '@angular/forms';
import { SyllabusMnComponent } from './admin/syllabus-mn/syllabus-mn.component';
import { ProjectAddMnComponent } from './admin/project-add-mn/project-add-mn.component';


@NgModule({
  declarations: [HomeComponent, LoginComponent, SyllabusMnComponent, ProjectAddMnComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    SyllabusMnComponent,
    ProjectAddMnComponent
  ]
})
export class PagesModule {
}
