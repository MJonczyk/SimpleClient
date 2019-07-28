import { Component, OnInit } from '@angular/core';
import { Student } from '../../Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-user-presenter',
  templateUrl: './student-presenter.component.html',
  styleUrls: ['./student-presenter.component.css']
})
export class StudentPresenterComponent implements OnInit {

  students: Student[];

  constructor(public userService: StudentService) { }

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
