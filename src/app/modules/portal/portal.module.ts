import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { portalRoutes } from './portal.routing';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(portalRoutes)],
  exports: [],
  providers: [],
})
export class PortalModule {}
