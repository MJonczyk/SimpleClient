import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentBlockComponent } from './student-block/student-block.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

const paths: Routes = [
  {path: 'studentslist', component: StudentListComponent },
  {path: 'studentsblocks', component: StudentBlockComponent },
  {path: 'add', component: AddStudentComponent },
  {path: 'edit/:id', component: EditStudentComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(paths)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
