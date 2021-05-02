import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/shared/model/project';
import { ProjectService } from 'src/app/shared/service/project.service';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css'],
})
export class ProjectsListComponent implements OnInit {
  displayedColumns = [
    'status',
    'name',
    'shortName',
    'startDate',
    'endDate',
    'action',
  ];
  dataSource = [
    {
      status: 'test1',
      name: 'test2',
      shortName: 'test3',
      startDate: 'test4',
      endDate: 'test5',
    },
    {
      status: 'test1',
      name: 'test2',
      shortName: 'test3',
      startDate: 'test4',
      endDate: 'test5',
    },
    {
      status: 'test1',
      name: 'test2',
      shortName: 'test3',
      startDate: 'test4',
      endDate: 'test5',
    },
    {
      status: 'test1',
      name: 'test2',
      shortName: 'test3',
      startDate: 'test4',
      endDate: 'test5',
    },
  ];

  // declartion
  public projectsList: Project[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
    public dialog: MatDialog
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
  editProject() {}
  deleteProject() {}

  openProjectDialog(): void {
    this.dialog.open(ProjectComponent, {
      width: '600px',
    });
  }
}
