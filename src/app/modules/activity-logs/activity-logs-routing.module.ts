import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuLogsComponent } from './menu-logs/menu-logs.component';
import { ActivityLogsComponent } from './activity-logs.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ActivityLogsComponent,
    children: [
      {
        path: 'list',
        component: MenuLogsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityLogsRoutingModule { }
