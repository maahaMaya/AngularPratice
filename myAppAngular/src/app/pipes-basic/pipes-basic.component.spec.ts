import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesBasicComponent } from './pipes-basic.component';

describe('PipesBasicComponent', () => {
  let component: PipesBasicComponent;
  let fixture: ComponentFixture<PipesBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
