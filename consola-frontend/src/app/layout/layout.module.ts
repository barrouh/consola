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
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LayoutRoutingModule } from './layout-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectComponent } from './project/project.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotificationComponent } from './notification/notification.component';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { ContactComponent } from './contact/contact.component';
@NgModule({
  declarations: [
    LayoutComponent,
    LandingPageComponent,
    ProjectComponent,
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
  ],
  providers: [],
  bootstrap: [LayoutComponent],
})
export class LayoutModule {}
