import { Component } from '@angular/core';

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
}
