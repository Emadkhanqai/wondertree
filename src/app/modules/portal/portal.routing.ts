import { Route, Routes } from '@angular/router';
import { HorizontalComponent } from './layout/horizontal/horizontal.component';
import { AuthGuard } from '../shared/guard/user-authenticated.guard';
import { RoleGuard } from '../shared/guard/role.guard';

export const portalRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: HorizontalComponent,
    children: [
      {
        path: 'welcome',
        loadChildren: () =>
          import('./welcome/welcome.module').then((m) => m.WelcomeModule),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'tasks',
        loadChildren: () =>
          import('./projects/projects.module').then((m) => m.ProjectsModule),
      },

      {
        path: 'user-profile',
        loadChildren: () =>
          import('./user/user-profile/user-profile.module').then(
            (m) => m.UserProfileModule
          ),
      },
      {
        path: 'user-management',
        canActivate: [RoleGuard],
        loadChildren: () =>
          import('./user/user-management/user-management.module').then(
            (m) => m.UserManagementModule
          ),
      },
    ],
  },
];
