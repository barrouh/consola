import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EmployeeComponent } from './employee/employee.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LayoutComponent } from './layout.component';
import { NotificationComponent } from './notification/notification.component';
import { ProjectsListComponent } from './project/projects-list/projects-list.component';
import { SupervisorComponent } from './supervisor/supervisor.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'landing-page', component: LandingPageComponent },
      { path: 'project', component: ProjectsListComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'notification', component: NotificationComponent },
      { path: 'supervisor', component: SupervisorComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', redirectTo: 'landing-page', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
