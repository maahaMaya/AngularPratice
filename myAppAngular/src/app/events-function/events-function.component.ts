import { Component } from '@angular/core';

@Component({
  selector: 'app-events-function',
  templateUrl: './events-function.component.html',
  styleUrls: ['./events-function.component.css']
})
export class EventsFunctionComponent {
  getData(val : any)
  {
    console.warn(val)
  }
}
