import { Component } from '@angular/core';
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
  selector: 'app-staff-member',
  templateUrl: './staff-member.component.html',
  styleUrls: ['./staff-member.component.css'],
})
export class StaffMemberComponent {
  selectedAdminType!: string;
  selectedFile: any;
  globalAdmin: any[] = [
    { value: 1, viewValue: 'Yes' },
    { value: 2, viewValue: 'No' },
  ];

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
