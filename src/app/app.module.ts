import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './modules/authentication/login/sign-in/sign-in.component';
import { SignUpComponent } from './modules/authentication/registration/sign-up/sign-up.component';
import { HorizontalComponent } from './modules/layout/horizontal/horizontal.component';
import { NavBarComponent } from './modules/layout/nav-bar/nav-bar.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { UserProfileComponent } from './modules/user/user-profile/containers/user-profile/user-profile.component';
import { UserProfileFormComponent } from './modules/user/user-profile/components/user-profile-form/user-profile-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HorizontalComponent,
    NavBarComponent,
    WelcomeComponent,
    UserProfileComponent,
    UserProfileFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
