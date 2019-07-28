import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { StudentPresenterComponent } from '../student-presenter/student-presenter.component';

@Component({
  selector: 'app-user-block',
  templateUrl: './student-block.component.html',
  styleUrls: ['./student-block.component.css']
})
export class StudentBlockComponent extends StudentPresenterComponent {

  constructor(public userService: StudentService) {
    super(userService);
  }

}
