import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { MESSAGES } from '../../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
  ) { }

  public successMessage(message: string) {

    Swal.fire({
      title: MESSAGES.SUCCESS_TITLE,
      text: message,
      icon: 'success',
      confirmButtonText: MESSAGES.SUCCESS_BUTTON_TITLE
    });

  }

  public errorMessage(message: string) {

    Swal.fire({
      title: MESSAGES.FAIL_TITLE,
      text: message,
      icon: 'error',
      confirmButtonText: MESSAGES.FAIL_BUTTON_TITLE
    });

  }

}
