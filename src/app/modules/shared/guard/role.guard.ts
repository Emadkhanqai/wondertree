import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(
    private _authService: AuthService,
    private _toast: ToastrService,
    private _router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const userProfile = JSON.parse(this._authService.userProfile);
    const isAdmin = userProfile.role === 'admin';

    if (!isAdmin) {
      this._toast.error('You do not have permission to access this page.');
      this._router.navigate(['/']);
      return false;
    }

    return true;
  }
}
