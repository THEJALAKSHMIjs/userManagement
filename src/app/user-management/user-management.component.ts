import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../user';
import { HoverHighlightDirective } from '../directives/hover-highlight.directive';
import { IfAdminDirective } from '../directives/if-admin.directive';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HoverHighlightDirective,
    IfAdminDirective
  ],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent {

  users: User[] = [];

  name = '';
  role = 'Admin';
  selectedRole = 'All';

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
    return this.selectedRole === 'All'
      ? this.users
      : this.users.filter(u => u.role === this.selectedRole);
  }

  getTextColor(role: string) {
    return role === 'Admin'
      ? 'red'
      : role === 'User'
      ? 'blue'
      : 'gray';
  }
}
