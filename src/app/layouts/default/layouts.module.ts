import { NgModule } from '@angular/core';
import { DefaultLayoutComponent } from './default-layout.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [DefaultLayoutComponent],
  imports: [MatToolbarModule, MatSidenavModule, AppRoutingModule],
  exports: [DefaultLayoutComponent],
})
export class LayoutsModule {}
