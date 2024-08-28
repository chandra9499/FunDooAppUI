import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { CollaboratorsComponent } from './components/collaborators/collaborators.component';
import { authGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SignupComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'dashbord',
    component:DashboardComponent
  },
  {
     path: 'note/:id/trash',
     component: DashboardComponent 
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard] 
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
