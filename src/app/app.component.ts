import { Component, ViewEncapsulation, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'customer360core';
  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar) {
    this.openSnackBar();
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SetupTopSnackbar, {
      duration: this.durationInSeconds * 100000,
      verticalPosition: 'top',
    });
  }
}

@Component({
  selector: 'setup-top-snackbar',
  template: `<span matSnackBarLabel> Your 30 Day Trial is expiring in 24 Days. CLICK-HERE to upgrade now! </span>
    <span matSnackBarActions>
      <button mat-button matSnackBarAction (click)="snackBarRef.dismissWithAction()"></button>
    </span>`,
  styles: [
    `
      :host {
        display: flex;
      }

      .example-pizza-party {
        color: hotpink;
      }
    `,
  ],
})
export class SetupTopSnackbar {
  snackBarRef = inject(MatSnackBarRef);
}
