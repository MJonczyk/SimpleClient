import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { UserPresenterComponent } from '../user-presenter/user-presenter.component';

@Component({
  selector: 'app-user-block',
  templateUrl: './user-block.component.html',
  styleUrls: ['./user-block.component.css']
})
export class UserBlockComponent extends UserPresenterComponent {

  constructor(public userService: UserService) {
    super(userService);
  }

}
