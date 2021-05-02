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
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LayoutRoutingModule } from './layout-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotificationComponent } from './notification/notification.component';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsListComponent } from './project/projects-list/projects-list.component';
@NgModule({
  declarations: [
    LayoutComponent,
    LandingPageComponent,
    ProjectsListComponent,
    EmployeeComponent,
    NotificationComponent,
    SupervisorComponent,
    ContactComponent,
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
  ],
  providers: [],
  bootstrap: [LayoutComponent],
})
export class LayoutModule {}
