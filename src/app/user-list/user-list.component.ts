import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { UserPresenterComponent } from '../user-presenter/user-presenter.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent extends UserPresenterComponent {

  constructor(public userService: UserService) {
    super(userService);
  }
}
