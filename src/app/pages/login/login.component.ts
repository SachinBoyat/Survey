import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  agreementChecked = false;
  enableForms: any = {
    isLoginForm: true,
    isForgotPasswordForm: false,
    isRegisterForm: false,
  };

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  forgetPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  registerForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    companyName: new FormControl('', [Validators.required]),
    registerEmail: new FormControl('', [Validators.required, Validators.email]),
    registerPassword: new FormControl('', [Validators.required]),
    registerRepeatPassword: new FormControl('', [Validators.required]),
  });

  get email(): any {
    return this.loginForm.get('email');
  }

  get password(): any {
    return this.loginForm.get('password');
  }

  get forgotPasswordEmail(): any {
    return this.forgetPasswordForm.get('email');
  }

  get fullName(): any {
    return this.registerForm.get('fullName');
  }

  get companyName(): any {
    return this.registerForm.get('companyName');
  }

  get registerEmail(): any {
    return this.registerForm.get('registerEmail');
  }

  get registerPassword(): any {
    return this.registerForm.get('registerPassword');
  }

  get registerRepeatPassword(): any {
    return this.registerForm.get('registerRepeatPassword');
  }

  constructor(private router: Router) {}

  onLoginFormSubmit() {
    if (this.loginForm.value.email === 'admin@admin.com' && this.loginForm.value.password === 'admin') {
      this.router.navigate(['/', 'dashboard']);
    }
  }

  ngOnInit() {}

  enableFormHandler(formType: string): void {
    for (let cForm in this.enableForms) {
      if (cForm === formType) {
        this.enableForms[formType] = true;
      } else {
        this.enableForms[cForm] = false;
      }
    }
  }
}
