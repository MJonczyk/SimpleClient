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
    this.accessStudents();
  }

  accessStudents(): void {
    this.userService.getStudents()
      .subscribe(students => { this.userService.students = students; });
  }

  getStudents(): Student[] {
    return this.userService.students;
  }

  edit(student: Student): void {}

  delete(student: Student): void {
    this.userService.students = this.userService.students.filter(s => s.universityIndex !== student.universityIndex);
    this.userService.deleteStudent(student).subscribe();
  }
}
