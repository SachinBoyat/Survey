import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css'],
})
export class SetupComponent {
  selectedTitle!: string;
  selectedFontSize!: number;
  selectedFontType!: string;

  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  fontSizes: any[] = [
    { value: 1, viewValue: 8 },
    { value: 2, viewValue: 9 },
    { value: 3, viewValue: 10 },
    { value: 4, viewValue: 11 },
    { value: 5, viewValue: 12 },
    { value: 6, viewValue: 13 },
    { value: 7, viewValue: 14 },
    { value: 8, viewValue: 15 },
    { value: 9, viewValue: 16 },
    { value: 10, viewValue: 17 },
    { value: 11, viewValue: 18 },
    { value: 12, viewValue: 24 },
  ];

  fontTypes: any[] = [
    { value: 1, viewValue: 'Arial' },
    { value: 2, viewValue: 'Calibri' },
    { value: 3, viewValue: 'Courier New' },
    { value: 4, viewValue: 'Georgia' },
  ];

  fontColors: any[] = [
    { value: 1, viewValue: '#000000' },
    { value: 2, viewValue: '#434343' },
    { value: 3, viewValue: '#999999' },
    { value: 4, viewValue: '#980000' },
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
