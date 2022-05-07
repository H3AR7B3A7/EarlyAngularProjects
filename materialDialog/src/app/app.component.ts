import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog/dialog-config';
import { ExampleDialogComponent } from './example-dialog/example-dialog.component';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  animal: string;
  name: string;
  style: string;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const config: MatDialogConfig = {
      width: '16rem',
      height: '18rem',
      hasBackdrop: false, // Default = true
      data: {name: this.name, animal: this.animal},
    }
    let dialogRef = this.dialog.open(ExampleDialogComponent, config);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}