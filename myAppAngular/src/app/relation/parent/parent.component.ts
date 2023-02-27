import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  data=10;
  randomNumber()
  {
    this.data = Math.floor(Math.random()*10)
  }
}
