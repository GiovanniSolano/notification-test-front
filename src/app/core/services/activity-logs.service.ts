import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { ActivityLogsResponse } from '../../shared/models/activity-logs/activity-logs-response.model';
import { ActivityLogParams } from '../../shared/models/activity-logs/activity-logs-params.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityLogsService {

  constructor(private apiService: ApiService) { }

  public getAllLogs(params: ActivityLogParams): Observable<ActivityLogsResponse> {
    return this.apiService.get(`activity-logs`, { params });
  }

}
