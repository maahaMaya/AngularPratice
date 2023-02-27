import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlToggleComponent } from './html-toggle.component';

describe('HtmlToggleComponent', () => {
  let component: HtmlToggleComponent;
  let fixture: ComponentFixture<HtmlToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlToggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
