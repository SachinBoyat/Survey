import { Component, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar,private surveyService:SurveyService) {
    // this.openSnackBar();
  }

  // openSnackBar() {
  //   this._snackBar.openFromComponent(SetupTopSnackbar, {
  //     duration: this.durationInSeconds * 100000,
  //     verticalPosition: 'top',
  //   });
  // }
}

// @Component({
//   selector: 'setup-top-snackbar',
//   template: `<span matSnackBarLabel> Your 30 Day Trial is expiring in 24 Days. CLICK-HERE to upgrade now! </span>
//     <span matSnackBarActions>
//       <button mat-button matSnackBarAction (click)="snackBarRef.dismissWithAction()"></button>
//     </span>`,
//   styles: [
//     `
//       :host {
//         display: flex;
//       }

//       .example-pizza-party {
//         color: hotpink;
//       }
//     `,
//   ],
// })
// export class SetupTopSnackbar {
//   snackBarRef = inject(MatSnackBarRef);
// }
