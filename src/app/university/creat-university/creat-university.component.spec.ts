import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatUniversityComponent } from './creat-university.component';

describe('CreatUniversityComponent', () => {
  let component: CreatUniversityComponent;
  let fixture: ComponentFixture<CreatUniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatUniversityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
