import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopComponent } from './loop.component';

describe('LoopComponent', () => {
  let component: LoopComponent;
  let fixture: ComponentFixture<LoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
