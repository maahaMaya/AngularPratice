import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFormComponent } from './basic-form.component';

describe('BasicFormComponent', () => {
  let component: BasicFormComponent;
  let fixture: ComponentFixture<BasicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
