import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuNotificationsComponent } from './menu-notifications/menu-notifications.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'notifications',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuNotificationsComponent,
    children: [
      {
        path: 'notifications',
        component: MenuNotificationsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule { }
