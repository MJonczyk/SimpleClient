import { Component, OnInit } from '@angular/core';
import { Student } from '../../Student';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  student: Student = new Student();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  addStudent() {
    this.userService.students.push(this.student);
    this.userService.addStudent(this.student).subscribe();
    this.router.navigateByUrl('/studentslist');
  }

}
