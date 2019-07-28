import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPresenterComponent } from './user-presenter.component';

describe('UserPresenterComponent', () => {
  let component: UserPresenterComponent;
  let fixture: ComponentFixture<UserPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
