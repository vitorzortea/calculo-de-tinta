import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWallComponent } from './form-wall.component';

describe('FormWallComponent', () => {
  let component: FormWallComponent;
  let fixture: ComponentFixture<FormWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
