import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

export interface PeriodicElement {
  agentId: number;
  fullName: string;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { agentId: 1, fullName: 'Hydrogen', email: 'H@gmail.com' },
  { agentId: 2, fullName: 'Helium', email: 'He@gmail.com' },
  { agentId: 3, fullName: 'Lithium', email: 'Li@gmail.com' },
  { agentId: 4, fullName: 'Beryllium', email: 'Be@gmail.com' },
  { agentId: 5, fullName: 'Boron', email: 'B@gmail.com' },
  { agentId: 6, fullName: 'Carbon', email: 'C@gmail.com' },
  { agentId: 7, fullName: 'Nitrogen', email: 'N@gmail.com' },
  { agentId: 8, fullName: 'Oxygen', email: 'O@gmail.com' },
  { agentId: 9, fullName: 'Fluorine', email: 'F@gmail.com' },
  { agentId: 10, fullName: 'Neon', email: 'Ne@gmail.com' },
];
@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css'],
})
export class SetupComponent {
  selectedTitle!: string;
  selectedFontSize!: number;
  selectedFontType!: string;
  selectedAdminType!: string;
  selectedFile: any;

  // demo count for next button
  count = 0;

  countPlus() {
    if (this.count >= 2) {
      this.count = 0;
    } else {
      this.count = this.count + 1;
    }

    console.log('count: ', this.count);
  }

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

  globalAdmin: any[] = [
    { value: 1, viewValue: 'Yes' },
    { value: 2, viewValue: 'No' },
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

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
  }

  // Mat table functions
  displayedColumns: string[] = ['agentId', 'fullName', 'email', 'select'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.agentId + 1}`;
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
