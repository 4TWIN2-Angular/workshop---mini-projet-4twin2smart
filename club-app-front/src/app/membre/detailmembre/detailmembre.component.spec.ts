import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailmembreComponent } from './detailmembre.component';

describe('DetailmembreComponent', () => {
  let component: DetailmembreComponent;
  let fixture: ComponentFixture<DetailmembreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailmembreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailmembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
