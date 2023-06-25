import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  get email(): any {
    return this.loginForm.get('email');
  }

  get password(): any {
    return this.loginForm.get('password');
  }

  constructor(private router: Router) {

  }

  onLoginFormSubmit() {
    if (this.loginForm.value.email === "admin@admin.com" && this.loginForm.value.password === "admin") {
      this.router.navigate(['/', 'setup'])
    }
  }

  ngOnInit() {}
}
