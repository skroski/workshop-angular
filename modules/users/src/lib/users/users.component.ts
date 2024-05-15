import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './shared/user.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-users',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <router-outlet />
    <ul>
      @for(user of users$ | async; track user.id) {
      <li>
        <a [routerLink]="[user.id]">{{ user.name }}</a>
      </li>
      }
    </ul>
  `,
  styleUrl: './users.component.css',
})
export class UsersComponent {
  userService = inject(UserService);

  users$ = this.userService.getUsers();
}
