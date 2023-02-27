import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsInputComponent } from './events-input.component';

describe('EventsInputComponent', () => {
  let component: EventsInputComponent;
  let fixture: ComponentFixture<EventsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
