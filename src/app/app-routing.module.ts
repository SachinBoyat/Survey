import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  
  { path: 'login', component:LoginComponent},  
  { path: 'dashboard', component: DashboardComponent ,canActivate : [AuthenticationGuard] },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
