import { NgModule }             from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import {LayoutComponent} from './layout/layout/layout.component'
import {LoginComponent} from './layout/login/login.component';
import { AuthService } from './shared/services/auth.service';
import {CanDeactivateGuard} from './shared/can-deactivate/can-deactivate.guard';
import { DoashboardComponent } from './layout/doashboard/doashboard.component';
import { CommentComponent } from './layout/comment/comment.component';
import { SearchlivetimeComponent } from './layout/searchlivetime/searchlivetime.component';
import { MultiselectComponent } from './layout/multiselect/multiselect.component';
const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent}
    ,
    {   canActivate:[AuthService],
    path: 'doashboard', component: LayoutComponent, children: [
        { canDeactivate: [CanDeactivateGuard],path:'comment',component: CommentComponent},
        {path: 'search', component: SearchlivetimeComponent}
        ,{path: 'muitiselect',component: MultiselectComponent}
    ]},

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}