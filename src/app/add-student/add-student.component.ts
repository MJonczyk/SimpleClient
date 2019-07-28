import { Component, OnInit } from '@angular/core';
import { Student } from '../../Student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student: Student = new Student();

  constructor(private userService: StudentService, private router: Router) {
  }

  ngOnInit() {
  }

  addStudent(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.userService.students.push(this.student);
    this.userService.addStudent(this.student).subscribe();
    this.router.navigateByUrl(this.userService.previousUrl);
  }

}
