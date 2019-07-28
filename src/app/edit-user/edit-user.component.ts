import { Component, OnInit } from '@angular/core';
import { Student } from '../../Student';
import { UserService } from '../user.service';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  student$: Observable<Student>;
  student: Student;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.student$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.userService.getStudent(params.get('id')))
    );
    this.student$.subscribe(s => this.student = s);
  }

  editStudent(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const index = this.userService.students.findIndex( s => s.studentId === this.student.studentId);
    this.userService.students[index] = this.student;
    this.userService.editStudent(this.student).subscribe();
    this.router.navigateByUrl(this.userService.previousUrl);
  }

}
