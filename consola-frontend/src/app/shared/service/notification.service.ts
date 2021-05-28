import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification } from '../model/notification';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private url: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  getAllNotifications(pageIndex: number, pageSize: number): any {
    return this.http.get(
      this.url + 'api/notifications?pageIndex=' + pageIndex + '&pageSize=' + pageSize
    );
  }

  getNotificationByid(id: number): any {
    return this.http.get(this.url + 'api/notifications/' + id);
  }
}
