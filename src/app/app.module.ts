import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SetupComponent, StaticIconsDialog } from './pages/setup/setup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CustomerFeedbackComponent } from './pages/customer-feedback/customer-feedback.component';
import { StaffMemberComponent } from './pages/staff-member/staff-member.component';
import { OverviewComponent } from './pages/overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SetupComponent,
    StaticIconsDialog,
    DashboardComponent,
    CustomerFeedbackComponent,
    StaffMemberComponent,
    OverviewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
