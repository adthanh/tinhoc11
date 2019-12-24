import { Guard } from './core/guards/auth.guard';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MasterComponent } from './layouts/master/master.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { MasterModule } from './layouts/master/master.module';
import { AdminModule } from './layouts/admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    AdminComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FontAwesomeModule,
    MasterModule,
    AdminModule,
    ReactiveFormsModule
    // StoreModule.provideStore({ }),
    // StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [Guard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
