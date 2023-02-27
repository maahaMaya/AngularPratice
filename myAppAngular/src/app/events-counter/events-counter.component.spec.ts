import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCounterComponent } from './events-counter.component';

describe('EventsCounterComponent', () => {
  let component: EventsCounterComponent;
  let fixture: ComponentFixture<EventsCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
