import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedloopComponent } from './nestedloop.component';

describe('NestedloopComponent', () => {
  let component: NestedloopComponent;
  let fixture: ComponentFixture<NestedloopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedloopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedloopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
