import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  title = 'Angular Reactive Form';
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    //email: new FormControl('', [Validators.required, Validators.pattern('[azA-Z])]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  })

  loginUser(){
    console.warn(this.loginForm.value)
  }

  get user(){
    return this.loginForm.get("email")
  }
  get password(){
    return this.loginForm.get("password")
  }
}
