import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { switchMap, catchError } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    private _toast: ToastrService
  ) {
    this.registrationForm = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.registrationForm.valid) {
      const { name, email, password } = this.registrationForm.value;
      this._authService
        .registerUser(name, email, password, 'user')
        .pipe(
          catchError((error) => {
            this._toast.error(error);
            console.error(error);
            return of(null);
          })
        )
        .subscribe((user) => {
          delete this.registrationForm.value.password;
          const userData = { ...this.registrationForm.value, role: 'user' };
          this._authService._userProfile = userData;
          this._authService.userProfile = JSON.stringify(userData);
          this._authService._authenticated = true;
          this._router.navigate(['/']);
          this._toast.success('Logged In Successfully');
        });
    } else {
      this._toast.error('Please fill in all the form fields correctly.');
    }
  }
}
