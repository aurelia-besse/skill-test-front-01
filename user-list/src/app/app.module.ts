import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UserService} from './services/user.service';
import { UserListComponent } from './user-list/user-list.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { UserComponent } from './user/user.component';
import {NgxPaginationModule} from 'ngx-pagination';

const appRoutes: Routes = [
  { path: 'home', component: UserListComponent},
  { path: 'user-detail/:id', component: UserDetailComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home'}
];
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    NgxPaginationModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
