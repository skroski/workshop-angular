import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'https://65009f9718c34dee0cd53786.mockapi.io/users';

  http = inject(HttpClient)

  getUsers() {
    return this.http.get<IUser[]>(this.apiUrl);
  }

  getUserById(id: string) {
    return this.http.get<IUser>(`${this.apiUrl}/${id}`);
  }
}