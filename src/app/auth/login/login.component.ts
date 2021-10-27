import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor() {
    this.loginForm = new FormGroup({
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ),
      password: new FormControl(
        '',
        Validators.required
      ),
    })
  }

  ngOnInit(): void {
  }

  login() {
    if(this.loginForm.valid) {
      let userLogin = this.loginForm.value;
      console.log('Login info', userLogin);
    }
  }

  get username() {return this.loginForm.get('username')}
  get password() {return this.loginForm.get('password')}
}
