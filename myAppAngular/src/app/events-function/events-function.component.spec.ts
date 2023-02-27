import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsFunctionComponent } from './events-function.component';

describe('EventsFunctionComponent', () => {
  let component: EventsFunctionComponent;
  let fixture: ComponentFixture<EventsFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsFunctionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
