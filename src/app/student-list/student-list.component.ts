import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { StudentPresenterComponent } from '../student-presenter/student-presenter.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent extends StudentPresenterComponent {

  constructor(public userService: StudentService) {
    super(userService);
  }
}
