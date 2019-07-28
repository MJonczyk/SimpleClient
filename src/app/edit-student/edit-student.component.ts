import { Component, OnInit } from '@angular/core';
import { Student } from '../../Student';
import { StudentService } from '../student.service';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  student$: Observable<Student>;
  student: Student;

  constructor(private userService: StudentService, private router: Router, private route: ActivatedRoute) { }

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
