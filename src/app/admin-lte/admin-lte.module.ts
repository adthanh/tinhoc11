import { AppsettingComponent } from './../appsetting/appsetting.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminLTEComponent } from './admin-lte.component';
import { AppfooterComponent } from '../appfooter/appfooter.component';
import { AppheaderComponent } from '../appheader/appheader.component';
import { AppmenuComponent } from '../appmenu/appmenu.component';
import { AdminLteModulesRoutingModule } from './admin-lte-routing.module';
@NgModule({
    declarations: [
     AdminLTEComponent,
     AppfooterComponent,
     AppheaderComponent,
     AppmenuComponent,
     AppsettingComponent
    ],
    imports: [
      CommonModule,
      AdminLteModulesRoutingModule
    ]
  })
  export class AdminLteModulesModule { }
