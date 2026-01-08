import { Component } from '@angular/core';
import { User } from '../user';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [ FormsModule , CommonModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent {
 users: User[] = [];

  name: string = '';
  role: string = 'Admin';
  selectedRole: string = 'All';

  addUser() {
    if (this.name.trim()) {
      this.users.push({ name: this.name, role: this.role });
      this.name = '';
    }
  }

  removeUser(index: number) {
    this.users.splice(index, 1);
  }

  filteredUsers() {
    if (this.selectedRole === 'All') {
      return this.users;
    }
    return this.users.filter(user => user.role === this.selectedRole);
  }
}
