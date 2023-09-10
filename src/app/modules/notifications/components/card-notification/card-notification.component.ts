import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesResponse } from '../../../../shared/models/categories/categories-response.model';
import { FormNotification } from '../../../../shared/models/notifications/form-notification.model';

@Component({
  selector: 'app-card-notification',
  templateUrl: './card-notification.component.html',
  styleUrls: ['./card-notification.component.css']
})
export class CardNotificationComponent {

  public notificationForm: FormGroup;
  @Input('categories') categories?: CategoriesResponse[];
  @Output() newNotification = new EventEmitter<FormNotification>();

  constructor(private fb: FormBuilder) {
    this.notificationForm = this.fb.group({
      message: ['', Validators.required],
      category_id: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  sendNotification(): void {
    const notificationForm: FormNotification = this.notificationForm.value;

    this.newNotification.emit(notificationForm);

    this.notificationForm.reset();
  }
}
