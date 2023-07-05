import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
export interface PeriodicElement {
  customerName: string;
  rating: string;
  message: string;
  id: number;
  date: string;
  staffMember: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    customerName: 'Jonathan King',
    rating: 'Normal',
    message: 'In publishing and graphic design, Lorem ipsum is a placeholder text',
    id: 1,
    date: '5/7/2023',
    staffMember: 'Mike Weiss',
  },
  {
    customerName: 'Jonathan King',
    rating: 'Normal',
    message: 'In publishing and graphic design, Lorem ipsum is a placeholder text',
    id: 1,
    date: '5/7/2023',
    staffMember: 'Mike Weiss',
  },
  {
    customerName: 'Jonathan King',
    rating: 'Normal',
    message: 'In publishing and graphic design, Lorem ipsum is a placeholder text',
    id: 1,
    date: '5/7/2023',
    staffMember: 'Mike Weiss',
  },
  {
    customerName: 'Jonathan King',
    rating: 'Normal',
    message: 'In publishing and graphic design, Lorem ipsum is a placeholder text',
    id: 1,
    date: '5/7/2023',
    staffMember: 'Mike Weiss',
  },
  {
    customerName: 'Jonathan King',
    rating: 'Normal',
    message: 'In publishing and graphic design, Lorem ipsum is a placeholder text',
    id: 1,
    date: '5/7/2023',
    staffMember: 'Mike Weiss',
  },
  {
    customerName: 'Jonathan King',
    rating: 'Normal',
    message: 'In publishing and graphic design, Lorem ipsum is a placeholder text',
    id: 1,
    date: '5/7/2023',
    staffMember: 'Mike Weiss',
  },
  {
    customerName: 'Jonathan King',
    rating: 'Normal',
    message: 'In publishing and graphic design, Lorem ipsum is a placeholder text',
    id: 1,
    date: '5/7/2023',
    staffMember: 'Mike Weiss',
  },
  {
    customerName: 'Jonathan King',
    rating: 'Normal',
    message: 'In publishing and graphic design, Lorem ipsum is a placeholder text',
    id: 1,
    date: '5/7/2023',
    staffMember: 'Mike Weiss',
  },
  {
    customerName: 'Jonathan King',
    rating: 'Normal',
    message: 'In publishing and graphic design, Lorem ipsum is a placeholder text',
    id: 1,
    date: '5/7/2023',
    staffMember: 'Mike Weiss',
  },
  {
    customerName: 'Jonathan King',
    rating: 'Normal',
    message: 'In publishing and graphic design, Lorem ipsum is a placeholder text',
    id: 1,
    date: '5/7/2023',
    staffMember: 'Mike Weiss',
  },
];

@Component({
  selector: 'app-customer-review',
  templateUrl: './customer-review.component.html',
  styleUrls: ['./customer-review.component.css'],
})
export class CustomerReviewComponent {
  selectedTitle!: string;

  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  // Mat table functions
  displayedColumns: string[] = ['customerName', 'rating', 'message', 'id', 'date', 'staffMember'];
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
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.customerName + 1}`;
  }
}
