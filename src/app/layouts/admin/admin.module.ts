import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [AdminFooterComponent, AdminHeaderComponent, AdminNavComponent],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports: [
    AdminFooterComponent,
    AdminHeaderComponent,
    AdminNavComponent
  ]
})
export class AdminModule {
}
