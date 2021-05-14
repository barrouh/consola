import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LayoutRoutingModule } from './layout-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsListComponent } from './project/projects-list/projects-list.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProjectComponent } from './project/project/project.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { StatusListComponent } from './status/status-list/status-list.component';
import { StatusComponent } from './status/status/status.component';
import { RoleComponent } from './role/role/role.component';
import { RoleListComponent } from './role/role-list/role-list.component';
import { VacationStatusComponent } from './vacation-status/vacation-status/vacation-status.component';
import { VacationStatusListComponent } from './vacation-status/vacation-status-list/vacation-status-list.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { NotificationListComponent } from './notification/notification-list/notification-list.component';
import { VacationListComponent } from './vacation/vacation-list/vacation-list.component';
import { VacationComponent } from './vacation/vacation/vacation.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    ProjectsListComponent,
    ProjectComponent,
    SupervisorComponent,
    ContactComponent,
    StatusComponent,
    StatusListComponent,
    RoleComponent,
    RoleListComponent,
    VacationStatusComponent,
    VacationStatusListComponent,
    EmployeeListComponent,
    EmployeeComponent,
    NotificationListComponent,
    VacationListComponent,
    VacationComponent,
  ],
  imports: [
    LayoutRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [LayoutComponent],
})
export class LayoutModule {}
