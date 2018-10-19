import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout/layout.module';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './shared/services/user.service';
import { HttpModule } from '@angular/http';
import {LocalStorageModule} from 'angular-2-local-storage'
import { AuthService } from './shared/services/auth.service';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import {CanDeactivateGuard} from './shared/can-deactivate/can-deactivate.guard';
import { ToastrModule } from 'ngx-toastr';
import {  CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { RouterModule } from '../../node_modules/@angular/router';
import {MatSelectModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpModule,
    MatSelectModule,
    LocalStorageModule.withConfig({
      prefix: 'user',
      storageType: 'localStorage'
  }),
  CommonModule,
  BrowserAnimationsModule, // required animations module
  ToastrModule.forRoot(),
   // ToastrModule added
    
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' },UserService, AuthService,CanDeactivateGuard ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
