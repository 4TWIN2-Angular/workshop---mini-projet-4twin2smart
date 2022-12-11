import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsUniversityComponent } from './details-university.component';

describe('DetailsUniversityComponent', () => {
  let component: DetailsUniversityComponent;
  let fixture: ComponentFixture<DetailsUniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsUniversityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
