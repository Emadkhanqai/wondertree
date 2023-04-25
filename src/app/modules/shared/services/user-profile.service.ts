import { Injectable } from '@angular/core';
import { ReplaySubject, Observable, of, tap } from 'rxjs';
import { User } from './interface/user.interface';
import { Api } from './api';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  private _user: ReplaySubject<User> = new ReplaySubject<User>(1);
  _userProfile: any;

  /**
   * Constructor
   */
  constructor(private _api: Api) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Setter & getter for user
   *
   * @param value
   */
  set user(value: User) {
    // Store the value

    this._user.next(value);
  }

  get user$(): Observable<User> {
    return this._user.asObservable();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  get(): Observable<User> {
    return of(this._userProfile).pipe(
      tap((user) => {
        if (user === undefined || null) {
          const data = JSON.parse(localStorage.getItem('userProfile') ?? '');
          this._user.next(data);
        } else {
          this._user.next(user);
        }
      })
    );
  }
}
