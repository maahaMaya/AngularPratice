import { Component } from '@angular/core';

@Component({
  selector: 'app-nestedloop',
  templateUrl: './nestedloop.component.html',
  styleUrls: ['./nestedloop.component.css']
})
export class NestedloopComponent {
  usersDetails=[
    {name:'Anil', email:'Anil@gmail.com', phone:'1234567890', socialAccount:['faceBook', 'Insta']},
    {name:'Bhaker', email:'Bhaker@gmail.com', phone:'1233465890' , socialAccount:['Twitter', 'Insta']},
    {name:'Sam', email:'Sam@gmail.com', phone:'123237890' , socialAccount:['faceBook', 'LD']},
    {name:'Peter', email:'Peter@gmail.com', phone:'1233490', socialAccount:['Fb', 'Insta']},
    {name:'Burece', email:'Burece@gmail.com', phone:'1245678934', socialAccount:['faceBook', 'Insta']}
  ]
}
