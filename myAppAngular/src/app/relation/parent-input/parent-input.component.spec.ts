import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentInputComponent } from './parent-input.component';

describe('ParentInputComponent', () => {
  let component: ParentInputComponent;
  let fixture: ComponentFixture<ParentInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
