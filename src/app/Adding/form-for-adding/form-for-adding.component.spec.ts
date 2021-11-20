import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormForAddingComponent } from './form-for-adding.component';

describe('FormForAddingComponent', () => {
  let component: FormForAddingComponent;
  let fixture: ComponentFixture<FormForAddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormForAddingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormForAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
