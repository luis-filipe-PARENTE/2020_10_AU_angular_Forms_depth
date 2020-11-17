import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  val = {
    secureCode: 'securecodexxx',
    email: 'hello@gmail.com',
    password: 'password123'
  };

  constructor() {}

  ngOnInit() {}

  login(loginForm: NgForm, event: Event) {
    console.log(loginForm.value, loginForm.valid, event);
  }

  onEmailChange(event: Event) {
    console.log(event);
    console.log({val: this.val});
  }

}
