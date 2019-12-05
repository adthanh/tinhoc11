import { AdminLTEComponent } from './admin-lte.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdminLTEComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'prefix'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModulesModule),
        canActivate: []
      },
      {
        path: 'lesson',
        loadChildren: () => import('../lesson-infor/lesson-infor.module').then(m => m.LessonInfornModulesModule),
        canActivate: []
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLteModulesRoutingModule { }
