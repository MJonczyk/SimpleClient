import {Component, OnInit} from '@angular/core';
import { MaterialModule } from '../material.module';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'StudentClient';
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Student List',
        path: './studentslist',
        index: 0,
      },
      {
        label: 'Student Blocks',
        path: './studentsblocks',
        index: 1,
      }
    ];
  }

  ngOnInit(): void {
    // this.router.events.subscribe((res) => {
    //   this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.path === '.' + this.router.url));
    // } );
  }
}
