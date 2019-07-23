import { Component, OnInit } from '@angular/core';
import { Student } from '../../Student';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  students: Student[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void {
    this.userService.getStudents()
      .subscribe(students => this.students = students);
  }

  add(): void {}

  edit(student: Student): void {}

  delete(student: Student): void {
    this.students.filter(s => s.studentId !== student.studentId);
    this.userService.deleteStudent(student).subscribe();
  }
}
