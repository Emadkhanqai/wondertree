import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthUtils } from './auth.util';
import { UserProfileService } from './user-profile.service';
import { Api } from './api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  _authenticated: boolean = false;

  constructor(
    private _userService: UserProfileService,
    private _api: Api // private _store: StarStore
  ) {}

  set accessToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  get accessToken(): string {
    return localStorage.getItem('accessToken') ?? '';
  }

  /**
   * Sign in using the access token
   */
  signInUsingToken(): Observable<any> {
    // Sign in using the token

    if (localStorage.getItem('userProfile')) {
      const userProfile = JSON.parse(localStorage.getItem('userProfile') ?? '');
      const accessToken = localStorage.getItem('accessToken');

      const response = {
        user: userProfile,
        accessToken: accessToken,
      };

      if (response.accessToken) {
        this.accessToken = response.accessToken;
      }

      // Set the authenticated flag to true
      this._authenticated = true;

      // Store the user on the user service
      this._userService.user = response.user;

      // Return true
      return of(true);
    }
    return of(false);
  }

  check(): Observable<boolean> {
    // Check if the user is logged in
    if (this._authenticated) {
      return of(true);
    }

    // Check the access token availability
    if (!this.accessToken) {
      return of(false);
    }

    // Check the access token expire date
    if (AuthUtils.isTokenExpired(this.accessToken)) {
      return of(false);
    }

    // If the access token exists and it didn't expire, sign in using it
    return this.signInUsingToken();
  }
}
