import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../models/user.model';
import {UserApiResponse} from '../models/user-api-response.interface';
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: User = new User(0, '', '', '', '');
  mail = faEnvelope;
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.userService.getUserById(id)
      .subscribe(
        (response: UserApiResponse<User>) => {
          this.user = response.data;
        }
      );
  }
  onBack() {
    this.router.navigate(['/home']);
  }
}
