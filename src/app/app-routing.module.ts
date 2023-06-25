import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SetupComponent } from './pages/setup/setup.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'setup', component: SetupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
