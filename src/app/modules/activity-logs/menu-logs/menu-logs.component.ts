import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, catchError } from 'rxjs/operators';
import { AlertService } from '../../../core/services';
import { ActivityLogsService } from '../../../core/services';
import { ActivityLog, MetaResponse } from '../../../shared/models/activity-logs/activity-logs-response.model';
import { MESSAGES } from '../../../shared/constants';
import { ACTIVITY_LOG_COLUMS } from '../../../shared/constants';
import { ActivityLogParams } from '../../../shared/models/activity-logs/activity-logs-params.model';

@Component({
  selector: 'app-menu-logs',
  templateUrl: './menu-logs.component.html',
  styleUrls: ['./menu-logs.component.css']
})
export class MenuLogsComponent {

  private destroy$ = new Subject<void>();
  public activityLogs?: ActivityLog[];
  public paginatorData?: MetaResponse;
  public columns = ACTIVITY_LOG_COLUMS;

  constructor(
    private alertService: AlertService,
    private ctivityLogsService: ActivityLogsService
  ) {}

  ngOnInit(): void {
    this.getActivityLog();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private async getActivityLog(params: ActivityLogParams = {}) {

    this.ctivityLogsService.getAllLogs(params).pipe(
      takeUntil(this.destroy$),
      catchError(error => {
        this.activityLogs = [];
        throw this.alertService.errorMessage(MESSAGES.SOMETHING_WENT_WRONG);
      })
    )
    .subscribe(response => {
      this.activityLogs = response.data;
      this.paginatorData = response.meta;
    });
  }

  pageChanged(page: number) {
    this.getActivityLog({ page });
  }

}
