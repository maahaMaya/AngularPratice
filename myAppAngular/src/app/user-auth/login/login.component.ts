import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  getName()
  {
    alert("Sourav Kumar")
  }
  PassValue(name:any)
  {
    alert(name)
  }
}
