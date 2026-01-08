import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserManagementComponent } from "./user-management/user-management.component";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserManagementComponent ,   FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'user-management22';
}
