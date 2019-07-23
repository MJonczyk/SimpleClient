import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Student } from '../Student';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new Headers({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private studentUrl = 'http://localhost:8080/students';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentUrl)
      .pipe(
        catchError(this.handleError<Student[]>('getStudents')),
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
