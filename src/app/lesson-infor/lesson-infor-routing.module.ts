import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LessonInforComponent } from './lesson-infor.component';

const routes: Routes = [
    {
        path: '',
        component: LessonInforComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LessonInforRoutingModule { }
