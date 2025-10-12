import { Component, Input, ViewChild  } from '@angular/core';
import { User } from '../../interface/User'
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
 
@Component({
  selector: 'user-list',
  standalone: false,
  templateUrl: './users-list.html',
  styleUrls: ['./user-list.css']
})
export class UsersList {
  @Input() users: User[] = [];

  displayedColumns: string[] = ['nombreCompleto', 'email']
  dataSource = new MatTableDataSource<User>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = this.users;

  }

}
