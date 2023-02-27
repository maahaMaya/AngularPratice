import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOutputComponent } from './parent-output.component';

describe('ParentOutputComponent', () => {
  let component: ParentOutputComponent;
  let fixture: ComponentFixture<ParentOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
