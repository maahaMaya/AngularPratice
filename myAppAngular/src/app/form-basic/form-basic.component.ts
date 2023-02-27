import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-form-basic',
  templateUrl: './form-basic.component.html',
  styleUrls: ['./form-basic.component.css']
})
export class FormBasicComponent {
  data:any={};
  getData(data : NgForm)
  {
    this.data=data;
  }
}
