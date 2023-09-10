import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public get(pathname: string, options?: { params?: any; }): Observable<any> {
    return this.http.get(`${environment.NOTIFICATION_TEST_BACK_URL}${pathname}`, options);
  }

  public post(pathname: string, body: any): Observable<any> {
    return this.http.post(`${environment.NOTIFICATION_TEST_BACK_URL}${pathname}`, body)
  }

}
