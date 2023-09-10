import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MenuLogsComponent } from './menu-logs/menu-logs.component';
import { ActivityLogsComponent } from './activity-logs.component';
import { ActivityLogsRoutingModule } from './activity-logs-routing.module';

const components = [
  ActivityLogsComponent,
  MenuLogsComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    SharedModule,
    ActivityLogsRoutingModule
  ]
})
export class ActivityLogsModule { }
