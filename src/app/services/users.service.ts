import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../interfaces/user';

@Injectable()

export class UsersService {

  constructor(private http: HttpClient) { }

  urlUsers: string = 'https://0uumsbtgfd.execute-api.eu-central-1.amazonaws.com/Development/v0/users/all';

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.urlUsers);
  }
}
