import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css'],
})
export class SetupComponent {
  selectedTitle!: string;
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(StaticIconsDialog, {
      width: '470px',
      height: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

@Component({
  selector: 'static-icons-dialog',
  templateUrl: './static-icons-dialog.component.html',
  styleUrls: ['./setup.component.css'],
})
export class StaticIconsDialog {
  staticIcons: any[] = [
    {
      value: 1,
      icons: [
        { text: 'Dissatisfied', url: '../../../assets/images/survey-images/Dissatisfied.gif' },
        { text: 'Satisfied', url: '../../../assets/images/survey-images/Satisfied.gif' },
        { text: 'Exceeded Expectations', url: '../../../assets/images/survey-images/Exceeded Expectations.gif' },
      ],
    },
    {
      value: 1,
      icons: [
        { text: 'Dissatisfied', url: '../../../assets/images/survey-images/Dissatisfied.gif' },
        { text: 'Satisfied', url: '../../../assets/images/survey-images/Satisfied.gif' },
        { text: 'Exceeded Expectations', url: '../../../assets/images/survey-images/Exceeded Expectations.gif' },
      ],
    },
    {
      value: 1,
      icons: [
        { text: 'Dissatisfied', url: '../../../assets/images/survey-images/Dissatisfied.gif' },
        { text: 'Satisfied', url: '../../../assets/images/survey-images/Satisfied.gif' },
        { text: 'Exceeded Expectations', url: '../../../assets/images/survey-images/Exceeded Expectations.gif' },
      ],
    },
    {
      value: 1,
      icons: [
        { text: 'Dissatisfied', url: '../../../assets/images/survey-images/Dissatisfied.gif' },
        { text: 'Satisfied', url: '../../../assets/images/survey-images/Satisfied.gif' },
        { text: 'Exceeded Expectations', url: '../../../assets/images/survey-images/Exceeded Expectations.gif' },
      ],
    },
    {
      value: 1,
      icons: [
        { text: 'Dissatisfied', url: '../../../assets/images/survey-images/Dissatisfied.gif' },
        { text: 'Satisfied', url: '../../../assets/images/survey-images/Satisfied.gif' },
        { text: 'Exceeded Expectations', url: '../../../assets/images/survey-images/Exceeded Expectations.gif' },
      ],
    },
  ];

  constructor(public dialogRef: MatDialogRef<StaticIconsDialog>) {}
}
