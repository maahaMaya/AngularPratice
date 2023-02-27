import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-output',
  templateUrl: './parent-output.component.html',
  styleUrls: ['./parent-output.component.css']
})
export class ParentOutputComponent {
  intputVal : string = 'X';
  updateData(item : string){
    console.warn(item)
    this.intputVal = item;
  }
}
