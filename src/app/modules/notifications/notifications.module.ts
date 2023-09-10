import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardNotificationComponent } from './components/card-notification/card-notification.component';
import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from './notifications.component';
import { MenuNotificationsComponent } from './menu-notifications/menu-notifications.component';
import { SharedModule } from '../../shared/shared.module';

const components = [
  CardNotificationComponent,
  NotificationsComponent,
  MenuNotificationsComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    SharedModule,
    NotificationsRoutingModule
  ]
})
export class NotificationsModule { }
