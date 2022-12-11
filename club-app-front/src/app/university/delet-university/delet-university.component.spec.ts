import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletUniversityComponent } from './delet-university.component';

describe('DeletUniversityComponent', () => {
  let component: DeletUniversityComponent;
  let fixture: ComponentFixture<DeletUniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletUniversityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
