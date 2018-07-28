/* JavaScript imports */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthService } from './_services/auth.service';

import { StudentServices } from './_services/student.services';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppMaterialModule } from './common/app.material.module';
import { AppComponent } from './app.component';
import { HomeLayoutComponent } from './layout/home.layout';

import { MembersComponent } from './members/members.component';
import { PageNotFountComponent } from './common/page-not-fount/page-not-fount.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './members/student/student.component';
import { TestComponent } from './members/test/test.component';

/* the AppModule class with the @NgModule decorator */
@NgModule({
  declarations: [
    HomeLayoutComponent,
    AppComponent,
    MembersComponent,
    PageNotFountComponent,
    LoginComponent,
    StudentComponent,
    TestComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserModule,
    AppMaterialModule,
    AppRoutingModule
  ],
  providers: [AuthService, StudentServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
