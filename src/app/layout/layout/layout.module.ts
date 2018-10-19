import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginComponent } from '../../layout/login/login.component';
import { DoashboardComponent } from '../../layout/doashboard/doashboard.component';
import { LayoutComponent } from '../../layout/layout/layout.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from '../menu/menu.component';
import { CommentComponent } from '../../layout/comment/comment.component';
import { CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchlivetimeComponent } from '../../layout/searchlivetime/searchlivetime.component';
import { MultiselectComponent } from '../../layout/multiselect/multiselect.component';
import {MatSelectModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    LoginComponent,
    DoashboardComponent,
    LayoutComponent,
    MenuComponent,
    CommentComponent,
    SearchlivetimeComponent, MultiselectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    MatSelectModule,
    BrowserAnimationsModule,
  ],
  exports: [
    LoginComponent,
    DoashboardComponent,
    LayoutComponent,
    MenuComponent,
    CommentComponent,
    SearchlivetimeComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class LayoutModule { }
