import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { switchMap, catchError, of, throwError } from 'rxjs';
@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    private _toast: ToastrService
  ) {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this._authService
        .loginUser(email, password)
        .pipe(
          catchError((error) => {
            this._toast.error('You have entered wrong credentials.');
            console.error(error);
            return of(null);
          })
        )
        .subscribe((user: any) => {
          if (user) {
            console.log('user', user);
            this._authService._userProfile = user;
            this._authService.userProfile = JSON.stringify(user);
            this._authService._authenticated = true;
            this._router.navigate(['/']);
            this._toast.success('Logged In Successfully');
          }
        });
    } else {
      this._toast.error('Please fill in all the form fields correctly.');
    }
  }
}
