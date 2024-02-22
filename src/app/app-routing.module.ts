import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default/default-layout.component';
import { BingDashboardComponent } from './modules/bingos/bingo-dashboard/bingo-dashboard.component';

const routes: Routes = [
  {
    component: DefaultLayoutComponent,
    path: '',
    children: [
      { path: '', redirectTo: '/bingo', pathMatch: 'full' }, //Empty route handler
      { path: 'bingo', component: BingDashboardComponent },
      {
        path: '**',
        redirectTo: '/bingo',
        pathMatch: 'full',
      }, //Undefined route handler
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
