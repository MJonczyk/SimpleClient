import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Student } from '../Student';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, filter, map, pairwise } from 'rxjs/operators';
import { Router, RoutesRecognized } from '@angular/router';
import { GetAllResponse } from './get-all-response';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentUrl = 'http://localhost:8080/students';
  previousUrl: string;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  students: Student[];

  constructor(private http: HttpClient, private router: Router) {
    this.router.events.pipe(
      filter(e => e instanceof RoutesRecognized),
      pairwise())
      .subscribe((event: any[]) => {
        this.previousUrl = event[0].urlAfterRedirects;
      });
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<GetAllResponse>(this.studentUrl)
      .pipe(
        map(response => { console.log(response); return response._embedded.studentList; }),
        catchError(this.handleError<Student[]>('getStudents')),
    );
  }

  getStudent(studentId: string): Observable<Student> {
    const url = `${this.studentUrl}/${studentId}`;
    return this.http.get<Student>(url)
      .pipe(
        catchError(this.handleError<Student>('getStudent')),
      );
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.studentUrl, student, this.httpOptions)
      .pipe(
        catchError(this.handleError<Student>('addStudent'))
      );
  }

  editStudent(student: Student): Observable<any> {
    const url = `${this.studentUrl}/${student.studentId}`;
    return this.http.put(url, student, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('editStudent'))
      );
  }

  deleteStudent(student: Student | number): Observable<Student> {
    const id = typeof student === 'number' ? student : student.studentId;
    const url = `${this.studentUrl}/${id}`;

    return this.http.delete<Student>(url, this.httpOptions)
      .pipe(
        catchError(this.handleError<Student>('deleteStudent'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
