
import { NgModule } from '@angular/core';
import { LessonInforComponent } from './lesson-infor.component';
import { LessonInforRoutingModule } from './lesson-infor-routing.module';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule } from '@angular/forms';
@NgModule({
    declarations: [
        LessonInforComponent
    ],
    imports: [
        LessonInforRoutingModule,
        NgxEditorModule,
        FormsModule
    ]
})
export class LessonInfornModulesModule { }
