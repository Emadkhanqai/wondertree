import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorizontalComponent } from './modules/portal/layout/horizontal/horizontal.component';
import { NoAuthGuard } from './modules/shared/guard/no-auth.guard';
import { AuthGuard } from './modules/shared/guard/user-authenticated.guard';
import { PageNotFoundComponent } from './modules/shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'portal' },
  {
    path: '',
    canActivate: [NoAuthGuard],
    canActivateChild: [NoAuthGuard],
    children: [
      {
        path: 'sign-in',
        loadChildren: () =>
          import('./modules/authentication/sign-in/sign-in.module').then(
            (m) => m.SignInModule
          ),
      },
      {
        path: 'sign-up',
        loadChildren: () =>
          import('./modules/authentication/sign-up/sign-up.module').then(
            (m) => m.SignUpModule
          ),
      },
    ],
  },
  {
    path: '',
    // canActivateChild: [AuthGuard],
    children: [
      {
        path: 'portal',
        loadChildren: () =>
          import('./modules/portal/portal.module').then(
            (m) => m.PortalModule
          ),
      },
    ],
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
