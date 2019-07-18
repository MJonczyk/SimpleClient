import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserBlockComponent } from './user-block/user-block.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
