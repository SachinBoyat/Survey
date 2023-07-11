import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';
import { Constant } from 'src/app/Constant';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'login',
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

  constructor(private authService: AuthService, private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  onLoginFormSubmit() {
    var loginobj = {
      "email": this.loginForm.value.email,
      "password": this.loginForm.value.password
    }
    this.authService.loginUser(loginobj).subscribe(data => {

      if (!data) {
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['dashboard']);
      }
    },
      catchError((error) => {
        this.toastr.error(Constant.shared.invalidPassword, Constant.shared.error);
        return throwError(() => error);
      })
    );
    // if (this.loginForm.value.email === 'admin@admin.com' && this.loginForm.value.password === 'admin') {
    //   this.router.navigate(['/', 'dashboard']);
    // }
  }
  onRegisterFormSubmit(val:any) {
    var registerobj = {
      "userName": this.registerForm.value.fullName,
      "organizationName": this.registerForm.value.companyName,
      "email": this.registerForm.value.registerEmail,
      "password": this.registerForm.value.registerPassword,
      "address": "",
      "phoneNumber": "",
      "status": 1
    }
    this.authService.registerUser(registerobj).subscribe((data: any) => {
      
        this.toastr.success(Constant.shared.successfullyRefistered, Constant.shared.sucess)
        this.router.navigate(['login']);
      
    },
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  ngOnInit() { }

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
