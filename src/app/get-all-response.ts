import {Student} from '../Student';

export interface GetAllResponse {
  _embedded: Embedded;
}

export interface Embedded {
  studentList: Student[];
}
