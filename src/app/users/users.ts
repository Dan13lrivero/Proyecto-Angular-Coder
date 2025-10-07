import { Component } from '@angular/core';
import { User } from './interface/User'; 

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.html',
  styleUrls: ['./users.css']
})
export class Users {
  nombre: string = "";
  apellido: string = "";
  edad: number = 30;

  h1Style = 'font-size: 25px; color: red;'

  users: User[] = [
    { nombre: 'Norka', apellido: 'Garcia' },
    { nombre: 'Juan', apellido: 'Perez' },
    { nombre: 'Maria', apellido: 'Lopez' }
  ];

  usersList: User[] = [];

  onAddUser(user: Users) {
    this.usersList.push(user)
  }
}
