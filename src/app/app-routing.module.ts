import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_services/auth.guard';
import { LoginComponent } from './login/login.component'
import { HomeLayoutComponent } from './layout/home.layout';
import { MembersComponent } from './members/members.component';
import { StudentComponent } from './members/student/student.component';
import { TestComponent } from './members/test/test.component';
import { PageNotFountComponent } from './common/page-not-fount/page-not-fount.component';

const routes: Routes = [
  { path: '', redirectTo: '/members', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'members',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: MembersComponent
      },
      {
        path: 'student',
        component: StudentComponent
      },
      {
        path: 'student/:id',
        component: StudentComponent
      },
      {
        path: 'tests',
        component: TestComponent
      },
      {
        path: 'tests/:id',
        component: TestComponent
      },
      {
        path: '**',
        component: PageNotFountComponent
      }
    ]
  },
  { path: '**', component: PageNotFountComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule],
  providers: [AuthGuard],
  declarations: []
})
export class AppRoutingModule { }