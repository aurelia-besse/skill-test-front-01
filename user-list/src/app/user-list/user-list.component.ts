import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {Subscription} from 'rxjs';
import {User} from '../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  users: Array<User>;
  usersSubscription: Subscription;
  perPage: number;
  total: number;
  p: number;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.usersSubscription = this.userService.usersSubject.subscribe(
      (resp: any[]) => {
        this.users = resp['data'];
        this.total = +resp['total'];
        this.perPage = +resp['per_page'];
        this.p = +resp['page'];
      }
    );
    this.userService.emitUsers();
  }
  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
  }
  getPage(page: number) {
    this.userService.getUsersByPage(page);
  }
}
