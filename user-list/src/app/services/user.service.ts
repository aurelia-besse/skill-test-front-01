import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Subject} from 'rxjs';
import {User} from '../models/user.model';
import {UserApiResponse} from '../models/user-api-response.interface';

@Injectable()
export class UserService {
  users: any[] = [];
  usersSubject = new Subject<User[]>();
  constructor(private httpClient: HttpClient) {
    this.getUsers();
  }
  emitUsers() {
    this.usersSubject.next(this.users);
  }
  getUsers() {
    this.httpClient.get<any[]>('https://reqres.in/api/users')
      .subscribe(
        (response) => {
          this.users = response;
          this.emitUsers();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        });
  }
  getUserById(id: number) {
    return this.httpClient.get<UserApiResponse<User>>('https://reqres.in/api/users/' + id);
  }
  getUsersByPage(page: number) {
    const params = new HttpParams().set('page', String(page));
    this.httpClient.get<any[]>('https://reqres.in/api/users', {params})
      .subscribe(
        (response) => {
          this.users = response;
          this.emitUsers();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        });
  }
}
