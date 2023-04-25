import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HorizontalComponent } from './modules/portal/layout/horizontal/horizontal.component';
import { PortalModule } from './modules/portal/portal.module';
import { NavBarComponent } from './modules/portal/layout/nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './modules/shared/components/page-not-found/page-not-found.component';
import { AuthService } from './modules/shared/services/authentication.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HorizontalComponent,
    NavBarComponent,
    PageNotFoundComponent
  ],
  imports: [BrowserModule, AppRoutingModule, PortalModule, HttpClientModule],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
