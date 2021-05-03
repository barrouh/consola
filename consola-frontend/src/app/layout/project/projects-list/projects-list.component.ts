import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteDialogComponent } from 'src/app/shared/component/project/delete-dialog/delete-dialog.component';
import { Project } from 'src/app/shared/model/project';
import { ProjectService } from 'src/app/shared/service/project.service';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css'],
})
export class ProjectsListComponent implements OnInit {
  // declartion
  public projectsList: Project[] = [];

  displayedColumns = [
    'status',
    'name',
    'shortName',
    'startDate',
    'endDate',
    'action',
  ];

  constructor(
    private projectService: ProjectService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  // load methods
  loadProjects() {
    this.projectService.getAllProjects().subscribe((data: Project[]) => {
      this.projectsList = data;
    });
  }

  // change methods

  // actions methods
  addProject(): void {
    let dialogRef = this.dialog.open(ProjectComponent, {
      data: {
        action: 'Add',
        snackMessage: 'Project added successfully',
      },
      width: '600px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.loadProjects();
    });
  }

  editProject(id: number) {
    let dialogRef = this.dialog.open(ProjectComponent, {
      data: {
        id,
        action: 'Edit',
        snackMessage: 'Project updated successfully',
      },
      disableClose: true,
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.loadProjects();
    });
  }

  deleteProject(id: number) {
    let dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {
        id,
      },
      disableClose: true,
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.snackBar.open('Project deleted successfully', '', {
        duration: 3000,
      });
      this.loadProjects();
    });
  }
}
