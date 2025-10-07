import { Component, Input } from '@angular/core';
import { User } from '../../interface/User'
 
@Component({
  selector: 'user-list',
  standalone: false,
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.css']
})
export class UserList {
  @Input() users: User[] = [];
}
