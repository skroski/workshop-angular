import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/user.service';
import { getParamsId } from './get-params-id';
import { switchMap } from 'rxjs';

@Component({
  selector: 'lib-user-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (user$ | async; as user) {
    <div>
      <h2>{{ user.name }}</h2>
      <img [src]="user.avatar" [alt]="user.name" />
      <p>Email: {{ user.email }}</p>
      <p>Biography: {{ user.biography }}</p>
      <p>ID: {{ user.id }}</p>
    </div>
    }
  `,
  styleUrl: './user-detail.component.css',
})
export class UserDetailComponent {
  private userService = inject(UserService);
  user$ = getParamsId().pipe(
    switchMap((id) => this.userService.getUserById(id))
  );
}
