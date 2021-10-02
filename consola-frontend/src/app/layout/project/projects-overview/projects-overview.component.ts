import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Project } from 'src/app/shared/model/project';
import { ProjectService } from 'src/app/shared/service/project.service';
import { ProjectComponent } from '../project/project.component';
@Component({
  selector: 'app-projects-overview',
  templateUrl: './projects-overview.component.html',
  styleUrls: ['./projects-overview.component.css']
})
export class ProjectsOverviewComponent implements OnInit {

  projects: Array<Project> = [];

 constructor(
   private projectService: ProjectService,
   public dialog: MatDialog
 ) {}

 ngOnInit(): void {
   this.loadProjects();
 }
 
 ngAfterViewInit() {
  this.projectService.getAllProjects2().subscribe((data: any) => {
    this.projects = data;
   });
}

 // load methods
 loadProjects() {
   this.projectService.getAllProjects2().subscribe((data: any) => {
      this.projects = data;
     });
 }

 // actions methods
 addEmployee(projectId: number): void {
   let dialogRef = this.dialog.open(ProjectComponent, {
     data: {
       action: 'Add',
       snackMessage: 'Employee added successfully',
     },
     width: '600px',
     disableClose: true,
   });

   dialogRef.afterClosed().subscribe(() => {
     this.loadProjects();
   });
 }
}
