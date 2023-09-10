import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { FormNotification } from '../../shared/models/notifications/form-notification.model';
import { Observable } from 'rxjs';
import { ResponseApi } from 'src/app/shared/models/api/api-response.model';
import { SentNotificationResponse } from '../../shared/models/notifications/send-notification-response.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private apiService: ApiService) { }

  public sendNotification(newNotificationForm: FormNotification): Observable<ResponseApi<SentNotificationResponse>> {
    return this.apiService.post('notifications/send', newNotificationForm);
  }

}
