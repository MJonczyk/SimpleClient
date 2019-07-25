import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserBlockComponent } from './user-block/user-block.component';
import { AddUserComponent } from './add-user/add-user.component';

const paths: Routes = [
  {path: 'studentslist', component: UserListComponent },
  {path: 'studentsblocks', component: UserBlockComponent },
  {path: 'add', component: AddUserComponent },
  {path: 'edit', component: UserBlockComponent },
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
