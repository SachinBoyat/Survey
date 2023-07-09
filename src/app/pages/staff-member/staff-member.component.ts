import { Component, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

export interface PeriodicElement {
  fullName: string;
  id: number;
  email: string;
  isActive: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    fullName: 'Jonathan King',
    id: 1,
    email: 'abc@abc.com',
    isActive: true,
  },
  {
    fullName: 'Jonathan King',
    id: 1,
    email: 'abc@abc.com',
    isActive: true,
  },
  {
    fullName: 'Jonathan King',
    id: 1,
    email: 'abc@abc.com',
    isActive: true,
  },
  {
    fullName: 'Jonathan King',
    id: 1,
    email: 'abc@abc.com',
    isActive: true,
  },
  {
    fullName: 'Jonathan King',
    id: 1,
    email: 'abc@abc.com',
    isActive: true,
  },
  {
    fullName: 'Jonathan King',
    id: 1,
    email: 'abc@abc.com',
    isActive: true,
  },
];

export interface DialogData {
  memberName: string;
  memberEmail: string;
}
@Component({
  selector: 'app-staff-member',
  templateUrl: './staff-member.component.html',
  styleUrls: ['./staff-member.component.css'],
})
export class StaffMemberComponent {
  selectedAdminType!: string;
  selectedFile: any;
  memberName!: string;
  memberEmail!: string;

  globalAdmin: any[] = [
    { value: 1, viewValue: 'Yes' },
    { value: 2, viewValue: 'No' },
  ];

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddStaffMember, {
      data: { memberEmail: this.memberEmail, memberName: this.memberName },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.memberName = result;
    });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
  }

  // Mat table functions
  displayedColumns: string[] = ['fullName', 'id', 'email', 'isActive', 'select'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
}

@Component({
  selector: 'add-staff-member',
  templateUrl: 'add-staff-member.html',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
})
export class AddStaffMember {
  constructor(public dialogRef: MatDialogRef<AddStaffMember>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
