import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-basic',
  templateUrl: './pipes-basic.component.html',
  styleUrls: ['./pipes-basic.component.css']
})
export class PipesBasicComponent {
  title="Hii everyone"
  today  = Date()

  capString(item : string){
    return item.toUpperCase()
  }

  user={
    name:'Sourav',
    country:'Bharat'
  }
}
