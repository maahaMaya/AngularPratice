import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-input',
  templateUrl: './child-input.component.html',
  styleUrls: ['./child-input.component.css']
})
export class ChildInputComponent {
  @Input() userData : {name:string, email: string, phone:string} = {name:'', email:'', phone:''};
}
