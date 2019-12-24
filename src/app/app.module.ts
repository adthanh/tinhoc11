import {Guard} from './core/guards/auth.guard';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MasterComponent} from './layouts/master/master.component';
import {AdminComponent} from './layouts/admin/admin.component';
import {MasterModule} from './layouts/master/master.module';
import {AdminModule} from './layouts/admin/admin.module';
import {HttpClientModule} from '@angular/common/http';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {ActionReducer} from './redux/store';
import {NgHttpLoaderModule} from 'ng-http-loader';

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
    ReactiveFormsModule,
    StoreModule.forRoot({ActionReducer}),
    StoreDevtoolsModule.instrument(),
    NgHttpLoaderModule.forRoot()
  ],
  providers: [Guard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
