import { Component } from '@angular/core';

@Component({
  selector: 'app-events-input',
  templateUrl: './events-input.component.html',
  styleUrls: ['./events-input.component.css']
})
export class EventsInputComponent {
  title: any = "Get the input box value";
  displayVal:any = '';
  getValue(val : any)
  {
    console.warn(val)
    this.displayVal=val;
  }
}
