import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfElseComponent } from './if-else.component';

describe('IfElseComponent', () => {
  let component: IfElseComponent;
  let fixture: ComponentFixture<IfElseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfElseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
