import { Routes } from '@angular/router';
import { AdminLTEComponent } from 'src/app/admin-lte/admin-lte.component';

export const SECURE_ROUTES: Routes = [
  { path: '', component: AdminLTEComponent }
];
export class AppRouter { }
