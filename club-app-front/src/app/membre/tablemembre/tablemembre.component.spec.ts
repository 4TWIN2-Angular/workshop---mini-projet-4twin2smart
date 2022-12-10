import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablemembreComponent } from './tablemembre.component';

describe('TablemembreComponent', () => {
  let component: TablemembreComponent;
  let fixture: ComponentFixture<TablemembreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablemembreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablemembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
