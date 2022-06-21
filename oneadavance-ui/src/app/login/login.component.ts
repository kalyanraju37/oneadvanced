import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Routes } from '../helpers/routes.enum';
import { AuthenticationService } from '../services/authentication.service';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.router.navigate([Routes.HOME]);
    }
    $(() => {
      $('body').addClass('login-bg');
    });

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // reset login status
    this.authenticationService.logout();
  }

  get username() { return this.loginForm.get('username'); }

  get password() { return this.loginForm.get('password'); }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  authenticate() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.loading = true;
      this.authenticationService.login(this.f.username.value, this.f.password.value)
        .subscribe(
          data => {
            if ('Authenticated' === data.message) {
              localStorage.setItem('userName',this.f.username.value);
              localStorage.setItem('token',data.jwtToken);
              this.router.navigate([Routes.HOME]);
            }
            else {
              this.loading = false;
              this.error = "Invalid login (or) password";
            }

          },
          error => {
            this.loading = false;
            this.error = "Invalid login (or) password";
          });

    }
    else {
      this.validateAllFormFields(this.loginForm);
    }
  }


  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
