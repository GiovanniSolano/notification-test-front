import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/notifications/notifications.module').then(m => m.NotificationsModule),
  },
  {
    path: 'activity-logs',
    loadChildren: () => import('./modules/activity-logs/activity-logs.module').then(m => m.ActivityLogsModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
