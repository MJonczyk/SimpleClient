import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StudentPresenterComponent } from './student-presenter/student-presenter.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentBlockComponent } from './student-block/student-block.component';
import { StudentService } from './student.service';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentBlockComponent,
    AddStudentComponent,
    EditStudentComponent,
    StudentPresenterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
