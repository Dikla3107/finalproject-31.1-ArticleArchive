import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { RouterModule } from '@angular/router';
import { routes } from './routing';
import { ArticlesBodyComponent } from './articles-body/articles-body.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { CheckArticleComponent } from './check-article/check-article.component';
import { UsersComponent } from './users/users.component';
import { UtilityService } from './utility.service';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ArticlesComponent,
    ArticlesBodyComponent,
    RegisterComponent,
    SigninComponent,
    CheckArticleComponent,
    UsersComponent,
    PasswordResetComponent,
    PasswordRecoveryComponent,
    FooterComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    

    
  ],
  providers: [
    HttpService,
    DatePipe,
    UtilityService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
