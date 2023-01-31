import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminsPageComponent } from './admins-page/admins-page.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserBodyComponent } from './user-body/user-body.component';
import { UsersComponent } from './users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './routing';

@NgModule({
  declarations: [
    AppComponent,
    AdminsPageComponent,
    LoginAdminComponent,
    NavbarComponent,
    UserBodyComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
