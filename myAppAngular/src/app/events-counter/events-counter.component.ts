import { Component } from '@angular/core';

@Component({
  selector: 'app-events-counter',
  templateUrl: './events-counter.component.html',
  styleUrls: ['./events-counter.component.css']
})
export class EventsCounterComponent {
  title="COUNTER";
  val=0;
  increaseData()
  {
    console.warn("++")
    this.val++;
  }
  decreaseData()
  {
    this.val--;
  }
  countVal = 0;
  counter(val : any)
  {
    val==='add' ? this.countVal++ : this.countVal--;
  }
}
