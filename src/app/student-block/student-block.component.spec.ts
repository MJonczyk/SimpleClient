import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBlockComponent } from './student-block.component';

describe('StudentBlockComponent', () => {
  let component: StudentBlockComponent;
  let fixture: ComponentFixture<StudentBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
