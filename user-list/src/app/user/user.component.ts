import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() lastName: string;
  @Input() firstName: string;
  @Input() userId: number;
  @Input() userAvater: string;
  info = faInfoCircle;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onViewUser(id: number) {
    this.router.navigate(['/user-detail', id]);
  }
}
