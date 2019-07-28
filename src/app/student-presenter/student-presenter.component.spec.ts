import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPresenterComponent } from './student-presenter.component';

describe('StudentPresenterComponent', () => {
  let component: StudentPresenterComponent;
  let fixture: ComponentFixture<StudentPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
