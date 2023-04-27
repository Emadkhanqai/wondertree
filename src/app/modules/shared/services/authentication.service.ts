import { Injectable } from '@angular/core';
import { Observable, map, of, switchMap, throwError } from 'rxjs';
import { Api } from './api';
import { User } from './interface/user.interface';
import * as CryptoJS from 'crypto-js';

const secretEncryptionKey = '!(0asdoiu@!$0979021OAISU0980123';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  _authenticated: boolean = false;
  _userProfile!: User;

  constructor(private _api: Api) {}

  set userProfile(token: string) {
    localStorage.setItem('userProfile', token);
  }

  get userProfile(): string {
    return localStorage.getItem('userProfile') ?? '';
  }

  encrypt(text: string): string {
    const encrypted = CryptoJS.AES.encrypt(
      text,
      secretEncryptionKey
    ).toString();
    return encrypted;
  }

  decrypt(encryptedText: string): string {
    const decrypted = CryptoJS.AES.decrypt(
      encryptedText,
      secretEncryptionKey
    ).toString(CryptoJS.enc.Utf8);
    return decrypted;
  }

  registerUser(
    name: string,
    email: string,
    password: string,
    role: string
  ): Observable<any> {
    return this._api.get('users').pipe(
      switchMap((users: any[]) => {
        const userExists = users && users.some((user) => user.email === email);
        if (userExists) {
          return throwError('User already exists');
        } else {
          const user = { name, email, password: this.encrypt(password), role };
          return this._api.post('users', user);
        }
      })
    );
  }

  loginUser(email: string, password: string) {
    return this._api.get('users').pipe(
      switchMap((users: any[]) => {
        const user = users.filter((user) => user.email === email);
        if (user.length > 0) {
          const decrypt = this.decrypt(user[0].password);
          if (password.trim() === decrypt.trim()) {
            delete user[0].password;
            return of(user[0]);
          } else {
            return throwError('You have entered wrong credentials');
          }
        } else {
          return throwError(
            'There was some error logging in, Please try again.'
          );
        }
      })
    );
  }

  check(): Observable<boolean> {
    if (this.userProfile && this.userProfile !== '') {
      this._userProfile = JSON.parse(this.userProfile);
      this._authenticated = true;
    }
    return of(this._authenticated);
  }
}
