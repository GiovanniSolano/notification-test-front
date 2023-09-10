import { Component } from '@angular/core';
import { CategoriesResponse } from '../../../shared/models/categories/categories-response.model';
import { CategoryService } from '../../../core/services/categories.service';
import { catchError, map, takeUntil } from 'rxjs/operators';
import { FormNotification } from '../../../shared/models/notifications/form-notification.model';
import { NotificationService } from '../../../core/services/notification.service';
import { AlertService } from '../../../core/services';
import { Subject } from 'rxjs';
import { MESSAGES } from '../../../shared/constants/';

@Component({
  selector: 'app-menu-notifications',
  templateUrl: './menu-notifications.component.html',
  styleUrls: ['./menu-notifications.component.css']
})
export class MenuNotificationsComponent {

  public categories?: CategoriesResponse[];
  private destroy$ = new Subject<void>();

  constructor(
    private categoryService: CategoryService,
    private notificationService: NotificationService,
    private alertService: AlertService,
    ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private async getCategories(): Promise<void> {

      this.categoryService.getAllCategories().pipe(
        map(response => response.data),
        takeUntil(this.destroy$),
        catchError(error => {
          this.categories = [];
          throw this.alertService.errorMessage(MESSAGES.SOMETHING_WENT_WRONG);
        })
      )
      .subscribe(data => {
        this.categories = data;
      });
  }

  public newNotification(newNotificationForm: FormNotification): void {

    this.notificationService.sendNotification(newNotificationForm)
      .pipe(
        map(response => response.data),
        takeUntil(this.destroy$),
        catchError(error => {
          throw this.alertService.errorMessage(MESSAGES.SOMETHING_WENT_WRONG);
        })
      ).subscribe(data => {
        this.alertService.successMessage(data.message);
      });

  }

}
