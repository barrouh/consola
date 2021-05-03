import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProjectService } from '../../../service/project.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css'],
})
export class DeleteDialogComponent implements OnInit {
  constructor(
    private projectService: ProjectService,
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  cancel(): void {
    this.dialogRef.close();
  }

  deleteProject() {
    this.projectService
      .deleteProjectByid(this.data.id)
      .subscribe((data: any) => {
        this.snackBar.open(this.data.snackMessage, '', {
          duration: 3000,
        });
        this.dialogRef.close();
      });
  }
}