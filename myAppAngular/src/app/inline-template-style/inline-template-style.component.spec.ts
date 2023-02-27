import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineTemplateStyleComponent } from './inline-template-style.component';

describe('InlineTemplateStyleComponent', () => {
  let component: InlineTemplateStyleComponent;
  let fixture: ComponentFixture<InlineTemplateStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineTemplateStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineTemplateStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
