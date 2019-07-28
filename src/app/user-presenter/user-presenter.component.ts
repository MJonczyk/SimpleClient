import { Component, OnInit } from '@angular/core';
import { Student } from '../../Student';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-presenter',
  templateUrl: './user-presenter.component.html',
  styleUrls: ['./user-presenter.component.css']
})
export class UserPresenterComponent implements OnInit {

  students: Student[];

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.accessStudents();
  }

  accessStudents(): void {
    this.userService.getStudents()
      .subscribe(students => this.userService.students = students);
  }

  getStudents(): Student[] {
    return this.userService.students;
  }

  delete(student: Student): void {
    this.userService.students = this.userService.students.filter(s => s.universityIndex !== student.universityIndex);
    this.userService.deleteStudent(student).subscribe();
  }

}
