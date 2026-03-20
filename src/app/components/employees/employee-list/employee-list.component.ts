import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {

  searchText = '';

  employees = [
    { id: 1, name: 'Ramu', email: 'ramu@gmail.com', phone: '9999999999', position: 'Developer' },
    { id: 2, name: 'Kumar', email: 'kumar@gmail.com', phone: '8888888888', position: 'Manager' },
    { id: 3, name: 'Suresh', email: 'suresh@gmail.com', phone: '7777777777', position: 'HR' }
  ];

  edit(emp: any) {
    console.log('Edit:', emp);
  }

  delete(id: number) {
    this.employees = this.employees.filter(e => e.id !== id);
  }
  
}
