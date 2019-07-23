import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserBlockComponent } from './user-block/user-block.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './user.service';
import {MatButtonModule} from '@angular/material';
import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserBlockComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatButtonModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
