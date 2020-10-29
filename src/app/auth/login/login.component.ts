import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm= this.fb.group({
    username: [''],
    password: ['']
  })

  constructor(
    private fb: FormBuilder,
    private auth: AuthService
  ) { }

    login() {
      this.auth.login(this.loginForm.value)
    }

  ngOnInit(): void {}

}
